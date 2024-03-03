import { ExternalCountryAPI } from '@api/country';

export async function GET() {
  const data = await ExternalCountryAPI.getCountries();

  return new Response(JSON.stringify(data));
}
export async function PATCH(request: Request) {
  const { id, isActive } = await request.json();

  return ExternalCountryAPI.updateCountry(id, isActive);
}

export const dynamic = 'force-dynamic'
