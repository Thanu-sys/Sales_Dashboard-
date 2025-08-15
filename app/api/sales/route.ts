import { NextResponse } from 'next/server';
import { salesData } from '@/data/mockSales';

export async function GET() {
  return NextResponse.json({ data: salesData });
}