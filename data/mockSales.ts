export type YearSales = { year: number; sales: number };

// Simple mock data for 2022-2024 (totals).
// Replace by fetching a real dataset (Kaggle, etc.).
export const salesData: YearSales[] = [
  { year: 2022, sales: 4500 },
  { year: 2023, sales: 6200 },
  { year: 2024, sales: 7000 },
];