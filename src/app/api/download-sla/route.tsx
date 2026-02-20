export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export async function GET(_req: NextRequest): Promise<NextResponse> {
  // File now lives in this folder
  const filePath = path.join(process.cwd(), 'src', 'app', 'api', 'download-sla', 'sla-preview.pdf');

  try {
    const fileBuffer = await readFile(filePath);

    // Brutal verification hash
    const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Length': fileBuffer.length.toString(),
        'Content-Disposition': 'attachment; filename="TrustMonitor-Service-Level-Agreement.pdf"',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
        'Accept-Ranges': 'none',
        'TrustMonitor-Document-SHA256': hash, // For client verification
      },
    });
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      return new NextResponse(
        JSON.stringify({ error: 'Document not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.error('SLA PDF serve error:', err);

    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

