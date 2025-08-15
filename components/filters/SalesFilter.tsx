'use client';
import { useState } from 'react';

export default function SalesFilter({ onChange }: { onChange: (minSales: number) => void }) {
  const [min, setMin] = useState<number>(0);

  return (
    <div className="flex items-center gap-2">
      <label className="font-medium">Min Sales</label>
      <input
        type="number"
        value={min}
        onChange={(e) => {
          const v = Number(e.target.value || 0);
          setMin(v);
          onChange(v);
        }}
        className="border rounded-lg px-3 py-2 w-40"
        placeholder="0"
      />
    </div>
  );
}