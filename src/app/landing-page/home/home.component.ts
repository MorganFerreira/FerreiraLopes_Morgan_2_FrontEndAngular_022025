import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { olympic } from 'src/app/core/models/Olympic';
import { MatCardModule } from '@angular/material/card';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [BaseChartDirective, MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$!: Observable<olympic[]>;
  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [],
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private olympicService: OlympicService
  ) {}

  ngOnInit(): void {
    this.olympics$ = this.route.data.pipe(
      map(data => data['olympics'])
    );
    this.olympics$.subscribe(olympics => {
      this.pieChartData.labels = olympics.map(olympic => olympic.country);
      this.pieChartData.datasets = [
        { data: olympics.map(olympic => this.olympicService.calculateTotalMedals(olympic)) },
      ];
    });
  }  


  // this.olympicService.getOlympics().pipe(
  //   map((olympics: Olympic[] | null) => {
  //     if (!olympics) return 0;
  //     return olympics[0].participations.length;
  //   }),
  //   catchError((error: string) => {
  //     return EMPTY;
  //   })
  // )

  public onChartClick(event: { event?: ChartEvent; active?: object[] }): void {
    if (event.active && event.active.length > 0) {
      const activeElement = event.active?.[0] as { index: number };
      const country = this.pieChartData.labels![activeElement.index!] as string;
      this.router.navigate(['detail', country]);
    }
  }

}