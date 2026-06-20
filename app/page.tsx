import React, { Suspense } from "react";
import CoinOverview from "@/components/home/CoinOverview";
import TrendingCoins from "@/components/home/TrendingCoins";
import {
  CoinOverviewFallback,
  TrendingCoinsFallback,
} from "@/components/home/HomeFallbacks";

const trendingCoins = [
  {
    item: {
      id: 'bitcoin',
      name: 'Bitcoin',
      large: '/images/bitcoin-large.png',
      thumb: '/images/bitcoin-thumb.png',
      data: {
        price_change_percentage_24h: { usd: 2.8 },
        price: 89113,
      },
    },
  },
  {
    item: {
      id: 'ethereum',
      name: 'Ethereum',
      large: '/images/ethereum-large.png',
      thumb: '/images/ethereum-thumb.png',
      data: {
        price_change_percentage_24h: { usd: -1.4 },
        price: 3341,
      },
    },
  },
  {
    item: {
      id: 'litecoin',
      name: 'Litecoin',
      large: '/images/litecoin-large.png',
      thumb: '/images/litecoin-thumb.png',
      data: {
        price_change_percentage_24h: { usd: 0.7 },
        price: 148.5,
      },
    },
  },
];

const page = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>
        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>
      </section>
      <section className="w-full mt-7 space-y-4">
        {/* <Suspense fallback={<CategoriesFallback />}>
          <Categories />
        </Suspense> */}
      </section>
    </main>
  );
};

export default page;