import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { olympic } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';

  constructor(private http: HttpClient) {}

  getOlympics(): Observable<olympic[]> {
    return this.http.get<olympic[]>(this.olympicUrl);
  }

  // getOlympicById(olympicId: number): Observable<olympic> {
  //   return this.olympics$.pipe(
  //     map(tabOl => tabOl.find((ol: olympic) => ol.id === olympicId)),
  //     filter((olympic): olympic is olympic => olympic !== undefined)
  //   );
  // }
}
