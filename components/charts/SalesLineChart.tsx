'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import type { YearSales } from '@/data/mockSales';

export default function SalesLineChart({ data }: { data: YearSales[] }) {
  if (!data || data.length === 0) {
    return <div className="w-full h-[340px] flex items-center justify-center text-gray-500">No sales data available.</div>;
  }
  return (
    <div className="w-full h-[340px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line dataKey="sales" type="monotone" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}