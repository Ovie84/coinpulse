import DataTable from "@/components/DataTable";

export const CoinOverviewFallback = () => {
  return (
    <section id="coin-overview-fallback" className="w-full">
      <div className="header pt-2">
        <div className="h-14 w-14 animate-pulse rounded-full bg-slate-200" />
        <div className="info">
          <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
          <div className="mt-2 h-7 w-32 animate-pulse rounded bg-slate-200" />
        </div>
      </div>
    </section>
  );
};

export const TrendingCoinsFallback = () => {
  const rows = Array.from({ length: 6 }, (_, index) => ({ id: index }));

  const columns = [
    {
      header: "Name",
      cell: () => (
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 animate-pulse rounded-full bg-slate-200" />
          <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
        </div>
      ),
    },
    {
      header: "24h Change",
      cell: () => (
        <div className="h-4 w-16 animate-pulse rounded bg-slate-200" />
      ),
    },
    {
      header: "Price",
      cell: () => (
        <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />
      ),
    },
  ];

  return (
    <section id="trending-coin-fallback">
      <h4 className="mb-3">Trending Coins</h4>
      <DataTable
        data={rows}
        columns={columns}
        rowKey={(row) => row.id}
        tableClassName="trending-coins-table"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </section>
  );
};

// import DataTable from "@/components/DataTable";
// // ...existing code...

// export const TrendingCoinsFallback = () => {
//   // ...existing code...
// };

// // ...existing code...

export const CategoriesFallback = () => {
  const rows = Array.from({ length: 8 }, (_, i) => ({ id: i }));

  const columns = [
    {
      header: "Category",
      cell: () => <div className="h-4 w-36 rounded bg-slate-200 animate-pulse" />,
    },
    {
      header: "Top Coins",
      cell: () => (
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-slate-200 animate-pulse" />
          <div className="h-8 w-8 rounded-full bg-slate-200 animate-pulse" />
          <div className="h-8 w-8 rounded-full bg-slate-200 animate-pulse" />
        </div>
      ),
    },
    {
      header: "24h Change",
      cell: () => <div className="h-4 w-20 rounded bg-slate-200 animate-pulse" />,
    },
    {
      header: "Market Cap",
      cell: () => <div className="h-4 w-24 rounded bg-slate-200 animate-pulse" />,
    },
    {
      header: "24h Volume",
      cell: () => <div className="h-4 w-24 rounded bg-slate-200 animate-pulse" />,
    },
  ];

  return (
    <section id="categories-fallback">
      <h4 className="mb-3">Top Categories</h4>
      <DataTable
        data={rows}
        columns={columns}
        rowKey={(r) => r.id}
        tableClassName="mt-3"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </section>
  );
};