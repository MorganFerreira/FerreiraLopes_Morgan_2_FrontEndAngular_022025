import { Component, OnInit } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { olympic } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$!: Observable<olympic[]>;
  public olympic$!: Observable<olympic>;

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    this.olympic$ = this.olympicService.getOlympicById(1);
  }
}