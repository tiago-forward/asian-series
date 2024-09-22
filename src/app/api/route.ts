import { NextResponse, NextRequest } from 'next/server'

export default function GET() {
  return NextResponse.json({
    hello: 'world',
  })
}
