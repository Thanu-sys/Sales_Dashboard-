'use client';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';  // Optional: for tables
import { useEffect, useState } from 'react';

export default function ReportsPage() {
  const [salesData, setSalesData] = useState<any[]>([]);

  // Fetch data from your API
  useEffect(() => {
    fetch('/api/sales')
      .then(res => res.json())
      .then(data => setSalesData(data.data || []));
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Sales Report', 14, 20);

    if (salesData.length > 0) {
      // Create a table with Year & Sales
      const tableData = salesData.map(item => [item.year, item.sales]);
      (autoTable as any)(doc, {
        head: [['Year', 'Sales']],
        body: tableData,
        startY: 30,
      });
    } else {
      doc.text('No sales data available.', 14, 30);
    }

    doc.save('sales_report.pdf');
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">📑 Reports</h1>
      <p className="text-gray-600 mb-4">
        Generate and download sales reports.
      </p>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Available Reports</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
          <li>Yearly Sales Report</li>
          <li>Performance Analysis</li>
        </ul>

        <button
          onClick={generatePDF}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition"
        >
          Download PDF
        </button>
      </div>
    </main>
  );
}
