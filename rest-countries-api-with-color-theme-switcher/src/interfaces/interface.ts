export interface Theme {
  toggleTheme: boolean;
}

export interface countriesInterface {
  name: string;
  topLevelDomain: string[];
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  currencies: { code: string; name: string; symbol: string };
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  borders: string[];
}
