import {coord} from "./coord";

export interface sensor {
  id: number | null;
  identifier: string;
  libelle: string;
  Coord: coord;
}
