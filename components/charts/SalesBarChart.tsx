'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import type { YearSales } from '@/types/sales';   // ✅ now only imports type

export default function SalesBarChart({ data }: { data: YearSales[] }) {
  if (!data || data.length === 0) {
    return <div className="w-full h-[340px] flex items-center justify-center text-gray-500">
      No sales data available.
    </div>;
  }

  return (
    <div className="w-full h-[340px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
