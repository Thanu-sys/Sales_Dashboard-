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
  console.log('Fetched data:', data);
  console.log('Min Sales:', minSales);

  useEffect(() => {
    // API Integration: fetch from our API route
    fetch('/api/sales')
      .then(r => r.json())
      .then(({ data }) => setData(data))
      .catch(() => setData([]));
  }, []);

  const filtered = useMemo(
    () => {
      const result = data.filter(d => d.sales >= minSales);
      console.log('Filtered data:', result);
      return result;
    },
    [data, minSales]
  );

  return (
    <main className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          {(['bar','line','pie'] as ChartType[]).map((t) => (
            <button
              key={t}
              onClick={() => setChart(t)}
              className={`px-3 py-2 rounded-2xl border ${chart===t ? 'bg-black text-white' : 'bg-white'}`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <section className="flex items-center">
        <SalesFilter onChange={setMinSales} />
      </section>

      <section className="rounded-2xl bg-white shadow p-4">
        {chart === 'bar' && <SalesBarChart data={filtered} />}
        {chart === 'line' && <SalesLineChart data={filtered} />}
        {chart === 'pie' && <SalesPieChart data={filtered} />}
      </section>

      <footer className="text-sm text-gray-600">
        <p>
          Data is mocked in <code>data/mockSales.ts</code> and served via <code>/api/sales</code>.
          Replace it with a real API or Kaggle dataset to advance the project.
        </p>
      </footer>
    </main>
  );
}