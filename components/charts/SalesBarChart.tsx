'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import type { YearSales } from '@/data/mockSales';

export default function SalesBarChart({ data }: { data: YearSales[] }) {
  if (!data || data.length === 0) {
    return <div className="w-full h-[340px] flex items-center justify-center text-gray-500">No sales data available.</div>;
  }
  // Debug: use hardcoded test data to check chart rendering
  // const testData = [
  //   { year: 2022, sales: 4500 },
  //   { year: 2023, sales: 6200 },
  //   { year: 2024, sales: 7000 },
  // ];
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