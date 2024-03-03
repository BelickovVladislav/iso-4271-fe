import { ExternalCurrencyAPI } from '@api/currency';

export async function GET() {
  const data = await ExternalCurrencyAPI.getCurrencies();

  return new Response(JSON.stringify(data));
}

export const dynamic = 'force-dynamic'
