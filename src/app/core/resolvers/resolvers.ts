import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { olympic } from "../models/Olympic";
import { OlympicService } from "../services/olympic.service";

@Injectable()
export class Resolvers implements Resolve<olympic[]> {
  
  constructor(private olympicService: OlympicService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<olympic[]> {
    return this.olympicService.getOlympics();
  }
}