import { Injectable } from '@angular/core';
import {Pet} from '../models/pet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService } from './authentication.service';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {
petsCollection: Pet[];
// apiUrl:  'https://localhost:24885/api/pets';
// tried apiUrl = , private
// apiUrl = 'https://localhost:24885/api/pets';
// apiUrl: 'http://localhost:4200/pets';
 apiUrl: 'https://petshopapp-anni.azurewebsites.net/api/pets';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {}


  getPets(): Observable<Pet[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Pet[]>(this.apiUrl, httpOptions); // method, url, options?
  }

  addPet(pet: { name: any }): Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl, pet);
  }

  updatePet(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(this.apiUrl + '/' + pet.id, pet);
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/' + id);
  }

  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.apiUrl + '/' + id);
  }
}
