import React, { Suspense } from "react";
import CoinOverview from "@/components/home/CoinOverview";
import TrendingCoins from "@/components/home/TrendingCoins";
import {
  CoinOverviewFallback,
  TrendingCoinsFallback,
} from "@/components/home/HomeFallbacks";

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





// import React from 'react'
// import Image from "next/image"
// import DataTable from '@/components/DataTable'
// import Link from 'next/link'
// import { TrendingDown, TrendingUp } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import CoinOverview from '@/components/home/CoinOverview';
// import TrendingCoins from '@/components/home/TrendingCoins';

// const trendingCoins = [
//   {
//     item: {
//       id: 'bitcoin',
//       name: 'Bitcoin',
//       large: '/images/bitcoin-large.png',
//       thumb: '/images/bitcoin-thumb.png',
//       data: {
//         price_change_percentage_24h: { usd: 2.8 },
//         price: 89113,
//       },
//     },
//   },
//   {
//     item: {
//       id: 'ethereum',
//       name: 'Ethereum',
//       large: '/images/ethereum-large.png',
//       thumb: '/images/ethereum-thumb.png',
//       data: {
//         price_change_percentage_24h: { usd: -1.4 },
//         price: 3341,
//       },
//     },
//   },
//   {
//     item: {
//       id: 'litecoin',
//       name: 'Litecoin',
//       large: '/images/litecoin-large.png',
//       thumb: '/images/litecoin-thumb.png',
//       data: {
//         price_change_percentage_24h: { usd: 0.7 },
//         price: 148.5,
//       },
//     },
//   },
// ];

// const columns: DataTableColumn<typeof trendingCoins[number]>[] = [
//   {
//     header: 'Name',
//     cellClassName: 'name-cell',
//     cell: (coin) => {
//       const item = coin.item;

//       return (
//         <Link href={`/coins/${item.id}`} className="coin-link">
//           <Image src={item.large} alt={item.name} width={36} height={36} />
//           <p>{item.name}</p>
//         </Link>
//       )
//     }
//   },
//   {
//     header: '24h Change',
//     cellClassName: 'name-cell',
//     cell: (coin) => {
//       const item = coin.item;
//       const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;

//       return (
//         <div className={cn('price-change', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
//           {isTrendingUp ? (
//             <TrendingUp width={16} height={16} />
//           ) : (
//             <TrendingDown width={16} height={16} />
//           )}
//           <span>{item.data.price_change_percentage_24h.usd.toFixed(2)}%</span>
//         </div>
//       )
//     }
//   },
//   {
//     header: 'Price',
//     cellClassName: 'price-cell',
//     cell: (coin) => <span>${coin.item.data.price.toLocaleString()}</span>,
//   },
// ]

// const Page = () => {
//   return <main className="main-container">
//     <section className="home-grid">
//       <div id="coin-overview">
//         <div className="header pt-2">
//           <Image src="/images/bitcoin-large.png" alt="Bitcoin" width={56} height={56} />
//           <div className='info'>
//             <p>BitCoin / BTC</p>
//             <h1>$89,113.00</h1>
//           </div>
//         </div>
//       </div>
//       {/* <CoinOverview /> */}

//       <p>Trending Coins</p>
//       <DataTable
//         data={trendingCoins}
//         columns={columns}
//         rowKey={(coin) => coin.item.id}
//       />
//       {/* <TrendingCoins /> */}
//     </section>

//     <section>
//       <p>Categories</p>
//     </section>
//   </main>
// }

// export default Page
