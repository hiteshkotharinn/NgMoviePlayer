import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../../shared';
import {Observable} from 'rxjs/Observable';

const API_URL: string = "https://valuefy-assignment-x.herokuapp.com/api/getVideos/";

@Injectable()
export class MoviePlayerService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    let httpHeaders = new HttpHeaders().set('source', 'https://www.youtube.com');
    return this.http.get<Movie[]>(API_URL,{ headers: httpHeaders });
  }
}
