import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmsServiceService {
  key = '7afae70f';

  constructor(private http: HttpClient) {}

  getFilms(first: string, second: string) {
    return this.http.get<any>(
      `http://www.omdbapi.com/?apikey=${this.key}&s=${first}%20${second}`
    );
  }
}
