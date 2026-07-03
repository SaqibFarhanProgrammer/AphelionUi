import { NextResponse } from 'next/server';
import data from '@/registry/components/button/registry.json';

export function GET() {
  return NextResponse.json(data);
}
