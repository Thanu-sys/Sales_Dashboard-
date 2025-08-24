'use client';
import { useEffect, useMemo, useState } from 'react';
import SalesFilter from '@/components/filters/SalesFilter';
import SalesBarChart from '@/components/charts/SalesBarChart';
import SalesLineChart from '@/components/charts/SalesLineChart';
import SalesPieChart from '@/components/charts/SalesPieChart';
import type { YearSales } from '@/data/mockSales';

type ChartType = 'bar' | 'line' | 'pie';

export default function DashboardPage() {
  const [data, setData] = useState<YearSales[]>([]);
  const [minSales, setMinSales] = useState(0);
  const [chart, setChart] = useState<ChartType>('bar');

  useEffect(() => {
    fetch('/api/sales')
      .then((r) => r.json())
      .then(({ data }) => setData(data))
      .catch(() => setData([]));
  }, []);

  const filtered = useMemo(
    () => data.filter((d) => d.sales >= minSales),
    [data, minSales]
  );

  // Example KPIs (replace with real logic if needed)
  const totalSales = filtered.reduce((sum, d) => sum + d.sales, 0);
  const avgSales =
    filtered.length > 0 ? (totalSales / filtered.length).toFixed(0) : 0;
  const growth = data.length > 1 ? '+18%' : '+0%';
  const customers = 120; // Mock value

  return (
    <main className="space-y-8">
      {/* Navbar */}
      <header className="flex items-center justify-between bg-black text-white px-6 py-4 rounded-2xl shadow">
        <h1 className="text-xl font-bold">📊 Sales Dashboard</h1>
        <nav className="space-x-4 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/dashboard" className="hover:underline font-semibold">Dashboard</a>
          <a href="/reports" className="hover:underline">Reports</a>
        </nav>
      </header>

      {/* KPI Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">
          <p className="text-sm text-gray-500">Total Sales</p>
          <h2 className="text-2xl font-bold">${totalSales}</h2>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <p className="text-sm text-gray-500">Average Sales</p>
          <h2 className="text-2xl font-bold">${avgSales}</h2>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <p className="text-sm text-gray-500">Growth</p>
          <h2 className="text-2xl font-bold text-green-600">{growth}</h2>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <p className="text-sm text-gray-500">Customers</p>
          <h2 className="text-2xl font-bold">{customers}</h2>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white p-4 rounded-2xl shadow">
        <h3 className="font-semibold mb-2">Filters</h3>
        <SalesFilter onChange={setMinSales} />
      </section>

      {/* Charts */}
      <section className="bg-white p-4 rounded-2xl shadow space-y-4">
        <div className="flex gap-2">
          {(['bar', 'line', 'pie'] as ChartType[]).map((t) => (
            <button
              key={t}
              onClick={() => setChart(t)}
              className={`px-4 py-2 rounded-2xl text-sm border transition ${
                chart === t ? 'bg-black text-white' : 'bg-gray-100'
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-4">
          {chart === 'bar' && <SalesBarChart data={filtered} />}
          {chart === 'line' && <SalesLineChart data={filtered} />}
          {chart === 'pie' && <SalesPieChart data={filtered} />}
          {filtered.length === 0 && (
            <p className="text-center text-gray-500 mt-8">
              No sales data available.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
