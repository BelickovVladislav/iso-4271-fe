import { Country } from '@models/interfaces';

export namespace ExternalCountryAPI {
  export const getCountries = async (): Promise<Country[]> => {
    const countries = await fetch(`${process.env.API_URL}/api/country`);

    return countries.json();
  };

  export const updateCountry = async (
    id: string,
    isActive: boolean,
  ): Promise<Response> => {
    return await fetch(`${process.env.API_URL}/api/country/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isActive,
      }),
    });
  };
}

export namespace InternalCountryAPI {
  export const getCountries = async (): Promise<Country[]> => {
    const countries = await fetch('/api/country');

    return countries.json();
  };

  export const updateCountry = async (
    id: string,
    isActive: boolean,
  ): Promise<void> => {
    await fetch(`/api/country`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        isActive,
      }),
    });
  };
}
