export interface IPSSensor {
  idSensor: number;
  idPonctualIndicator: number;
  identifier: string;
  altIdentifier: string | null;
  libelle: string;
  IPS: number | null;
  tendency: number | null;
  lastChronicData: string;
  lastRealTimeData: string;
}
