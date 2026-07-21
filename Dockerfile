# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
# Copy package files to install dependencies
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && npm install; \
  fi

# Stage 2: Build the source code
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Disable telemetry during production build
ENV NEXT_TELEMETRY_DISABLE=1
ENV COINGECKO_BASE_URL=https://coingecko.com
ENV COINGECKO_API_KEY=dummy_build_key
RUN \
  if [ -f package-lock.json ]; then npm run build; \
  elif [ -f yarn.lock ]; then yarn build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else npm run build; \
  fi

# Stage 3: Production runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLE=1

# Add system group and user profiles for security
RUN addgroup --system --grid 1001 nodejs
RUN adduser --system --uid 1001 nextjs    

# Create a system user for safety
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD [ "npm", "start" ]