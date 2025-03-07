import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  calculateTotalMedals(olympic: olympic): number {
    return olympic.participations.reduce((acc, participation) => acc + participation.medalsCount, 0);
  }

  getOlympicByCountry(olympicCountry: string): Observable<olympic> {
    return this.getOlympics().pipe(
      map(olympics => olympics.find(olympic => olympic.country === olympicCountry)!))
  }

  getTotalUniqueYears(olympics: olympic[]): number {
    const yearsSet = new Set<number>();
    olympics.forEach(olympic => {
      olympic.participations.forEach(participation => {
        yearsSet.add(participation.year);
      });
    });
    return yearsSet.size;
  }
}
