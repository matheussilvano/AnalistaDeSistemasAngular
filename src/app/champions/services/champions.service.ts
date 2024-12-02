import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Champion {
  id: number;
  name: string;
  title: string;
  lore: string;
  skins: Skin[];
}

export interface Skin {
  id: number;
  name: string;
  splashUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private apiUrl = 'https://lol2-4vk5.onrender.com/champions';

  constructor(private http: HttpClient) {}

  getChampions(page: number = 0, size: number = 10, filter: string = ''): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&size=${size}&name=${filter}`);
  }

  getChampionById(id: number): Observable<Champion> {
    return this.http.get<Champion>(`${this.apiUrl}/${id}`);
  }
}