interface Currency {
  id: string;
  name: string;
  code: string;
}
export interface Country {
  id: string;
  name: string;
  isActive: boolean;
  currencies: Currency[];
}
