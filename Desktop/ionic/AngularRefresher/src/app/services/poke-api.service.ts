import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(private http: HttpClient) { }
  getPokemons(){
    return this.http.get(`${environment.urlApi}pokemon`);
  }
  getPokemon(id){
    return this.http.get(`${environment.urlApi}pokemon/${id}`);
  }
}
