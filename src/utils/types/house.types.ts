export interface IHouseForm {
  type: string;
  localisation: string;
  coordinates: [number, number];
  superficie: number;
  chambres: number;
  lits: number;
  sdb: number;
  cuisine: number;
  options: string[];
  photos: any[];
  titre: string;
  desc: string;
  price: number;
}

export interface IHouse {
  agencyId: string;
  details: {
    ID: number;
    PropertyType: string;
    Price: number;
    Area: number;
    Rooms: number;
    Latitude: number;
    Longitude: number;
  };
  nombreLits: number;
  nombreSallesDeBain: number;
  nombreCuisine: number;
  wifi: boolean;
  television: boolean;
  laveLinge: boolean;
  parking: boolean;
  climatisation: boolean;
  chauffage: boolean;
  images: string[];
  titre: string;
  description: string;
  region: string;
}
