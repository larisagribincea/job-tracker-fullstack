import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { JobService } from '../services/job.service';
import { loadJobs, loadJobsSuccess, loadJobsFailure } from './job.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class JobEffects {
  constructor(
    private actions$: Actions,
    private jobService: JobService
  ) {}

  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadJobs),
      mergeMap(() =>
        this.jobService.getJobs().pipe(
          map((jobs) => loadJobsSuccess({ jobs })),
          catchError((error) => of(loadJobsFailure({ error: error.message })))
        )
      )
    )
  );
}
