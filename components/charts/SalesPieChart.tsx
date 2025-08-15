'use client';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import type { YearSales } from '@/data/mockSales';

export default function SalesPieChart({ data }: { data: YearSales[] }) {
  if (!data || data.length === 0) {
    return <div className="w-full h-[340px] flex items-center justify-center text-gray-500">No sales data available.</div>;
  }
  const sum = data.reduce((acc, d) => acc + d.sales, 0);
  const pctData = data.map(d => ({ name: d.year.toString(), value: d.sales }));

  return (
    <div className="w-full h-[340px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />
          <Pie data={pctData} dataKey="value" nameKey="name" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}