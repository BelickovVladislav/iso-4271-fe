import { Currency } from '@models/interfaces';

export namespace ExternalCurrencyAPI {
  export async function getCurrencies(): Promise<Currency[]> {
    const currencies = await fetch(`${process.env.API_URL}/api/currency`);

    return currencies.json();
  }
}

export namespace InternalCurrencyAPI {
  export async function getCurrencies() {
    const currencies = await fetch('/api/currency');

    return currencies.json();
  }
}
