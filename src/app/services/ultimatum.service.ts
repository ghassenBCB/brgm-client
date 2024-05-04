import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ultimatum } from '../interfaces/ultimatum';


@Injectable({
  providedIn: 'root'
})
export class UltimatumService {

  baseUrl: string = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  // Exemple d'une méthode pour obtenir des données depuis une API REST
  getData(): Observable<any> {
    return this.http.get<any>('url_de_votre_api');
  }

  // Exemple d'une méthode pour envoyer des données à une API REST
  sendData(data: any): Observable<any> {
    return this.http.post<any>('url_de_votre_api', data);
  }


  /***********************************SERVICES**************************************************** */
  addUltimatum(ultimatumData: ultimatum){
    return this.http.post(`${this.baseUrl}/ultimatum`, ultimatumData);
  }



}
