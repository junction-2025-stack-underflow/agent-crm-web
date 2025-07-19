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
  photos: string[];
  titre: string;
  desc: string;
  price: number;
}
