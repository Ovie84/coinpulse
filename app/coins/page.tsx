import { fetcher } from "@/lib/coingecko.actions";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { cn, formatCurrency, formatPercentage } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import DataTable from "@/components/DataTable";
import { Span } from "next/dist/trace";
import CoinsPagination from "@/components/CoinsPagination";

const Markets = async ({ searchParams }: NextPageProps) => {
  const { page } = await searchParams;

  const currentPage = Number(page) || 1;
  const perPage = 10;

  let coinsData;

  try {
    coinsData = await fetcher<CoinMarketData[]>("coins/markets", {
      vs_currency: "usd",
      order: "market_cap_desc",
      page: currentPage,
      per_page: perPage,
      price_change_percentage: "24h",
      sparkline: "false",
    });
  } catch (error) {
    console.error("Error fetching Market Coin Data: ", error);
    return (
      <p className="flex items-center">Error not able to get Market data</p>
    );
  }

  const columns: DataTableColumn<CoinMarketData>[] = [
    {
      header: "Ranke",
      cellClassName: "rank-cell",
      cell: (coin) => {
        <>
          #[coin.market_cap_rank]
          <Link href={`/coins/${coin.id}`} aria-label="View coin" />
        </>;
      },
    },
    {
      header: "Token",
      cellClassName: "token-cell",
      cell: (coin) => (
        <div>
          <Image src={coin.image} alt={coin.name} width={36} height={36} />
          <p>
            {coin.name} ({coin.symbol.toUpperCase()})
          </p>
        </div>
      ),
    },
    {
      header: "Price",
      cellClassName: "price-cell",
      cell: (coin) => formatCurrency(coin.current_price),
    },
    {
      header: "24h Change",
      cellClassName: "change-cell",
      cell: (coin) => {
        const isTrendingUp = coin.price_change_percentage_24h > 0;

        return (
          <span
            className={cn(
              "change-value",
              isTrendingUp ? "text-green-500" : "text-red-500",
            )}
          >
            <p className="flex items-center">
              {isTrendingUp && "+"}
              {formatPercentage(coin.price_change_percentage_24h)}
              {isTrendingUp ? (
                <TrendingUp width={16} height={16} />
              ) : (
                <TrendingDown width={16} height={16} />
              )}
            </p>
          </span>
        );
      },
    },
  ];

  const hasMorePages = coinsData.length === perPage;

  const estimatedTotalPages =
    currentPage > 100 ? Math.ceil(currentPage / 100) * 100 + 100 : 100;

  return (
    <main id="coins-page">
      <div className="content">
        <h4>All Coins</h4>
        <DataTable
          data={coinsData}
          columns={columns}
          rowKey={(coin) => coin.id}
        />

        <CoinsPagination
          currentPage={currentPage}
          totalPages={estimatedTotalPages}
          hasMorePages={hasMorePages}
        />
      </div>
    </main>
  );
};

export default Markets;
