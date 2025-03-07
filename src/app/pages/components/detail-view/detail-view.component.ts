import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { map, Observable } from 'rxjs';
import { olympic } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-detail-view',
  standalone: true, 
  imports: [BaseChartDirective, MatCardModule],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss'
})
export class DetailViewComponent {
  public country!: string;
  public olympic$!: Observable<olympic>;
  public participationNumber!: number;
  public totalMedalsCount!: number;
  public totalAthleteCount!: number;
  public lineChartType: 'line' = 'line';
  public lineChartData: ChartData<'line', number[], string | string[]> = {
    labels: [],
    datasets: [],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {title: {display: true, text: 'Année'}},
      y: {title: {display: true, text: 'Nombre de médailles'}}
    },
    plugins: {legend: {display: false}}
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private olympicService: OlympicService) {}
  
  ngOnInit(): void {
    this.country = this.route.snapshot.paramMap.get('country')!;
    this.olympic$ = this.olympicService.getOlympicByCountry(this.country);
    this.olympic$.subscribe(olympic => {
      this.participationNumber = olympic.participations.length;
      this.totalMedalsCount = this.olympicService.calculateTotalMedals(olympic);
      this.totalAthleteCount = olympic.participations.reduce((acc, participation) => acc + participation.athleteCount, 0);
      this.lineChartData.labels = olympic.participations.map(participation => participation.year.toString());
      this.lineChartData.datasets = [
        { data: olympic.participations.map(participation => participation.medalsCount) },
      ];
    });
  }
  
  goBack(): void {
    this.router.navigate(['/']);
  }
}
