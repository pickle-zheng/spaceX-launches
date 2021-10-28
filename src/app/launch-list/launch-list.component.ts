import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PastLaunchesListGQL } from '../services/spacexGraphql.services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchListComponent implements OnInit {
  constructor(private readonly pastLaunchesService: PastLaunchesListGQL) {}
  pastLaunches$ = this.pastLaunchesService.fetch({ limit: 30 }).pipe(
    map((res) => {
      console.log(res);
      return res.data.launchesPast;
    })
  );

  ngOnInit(): void {}
}
