import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //API Data Request
  baseDataUrl = 'http://www.omdbapi.com?apikey=65433ac&'

  //API Movie Poster Request
  basePosterUrl = 'http://img.omdbapi.com?apikey=65433ac&'

  constructor(private http: HttpClient) { }


  getMovie(movie: string):Observable<any>{
      return this.http.get<any>(`${this.baseDataUrl}t=${movie}&type=movie`)
  }

}
