interface Country {
  id: string;
  name: string;
  isActive: boolean;
}
export interface Currency {
  id: string;
  name: string;
  code: string;
  countries: Country[];
}
