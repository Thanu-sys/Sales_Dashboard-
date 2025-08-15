import Link from 'next/link';

export default function Home() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Sales Dashboard</h1>
      <p>Create a simple application showing sales for 2022, 2023, 2024.</p>
      <Link
        href="/dashboard"
        className="inline-block rounded-2xl bg-black text-white px-4 py-2"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}