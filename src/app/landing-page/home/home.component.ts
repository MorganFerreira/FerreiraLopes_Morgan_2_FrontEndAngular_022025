import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { olympic } from 'src/app/core/models/Olympic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$!: Observable<olympic[]>;
  public olympic$!: Observable<olympic>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.olympics$ = this.route.data.pipe(map(data => data['olympics']));
    this.olympic$ = this.route.data.pipe(map(data => data['olympics'][0]));
  }

}