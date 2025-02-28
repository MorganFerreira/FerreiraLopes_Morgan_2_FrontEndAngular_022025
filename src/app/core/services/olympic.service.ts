import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { olympic } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService implements OnInit{
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<any>(undefined);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData() {
    return this.http.get<olympic[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
        // TODO: improve error handling
        console.error(error);
        // can be useful to end loading state and let the user know something went wrong
        this.olympics$.next(null);
        return caught;
      })
    );
  }

  getOlympics() {
    return this.olympics$.asObservable();
  }

  getOlympicById(olympicId: number): Observable<olympic> {
    return this.olympics$.asObservable().pipe(
      map(tabOl => tabOl.find(((ol: olympic) => ol.id === olympicId)
    )))
  }
}
