import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { JobService } from "../services/job.service";
import { loadJobs, loadJobsSuccess, loadJobsFailure, deleteJobFailure } from "./job.actions";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import * as actions from "./job.actions";
import { Store } from "@ngrx/store";

@Injectable()
export class JobEffects {
  constructor(
    private actions$: Actions,
    private jobService: JobService,
    private store: Store, 
  ) {}

  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadJobs),
      mergeMap(() =>
        this.jobService.getJobs().pipe(
          map((jobs) => loadJobsSuccess({ jobs })),
          catchError((error) => of(loadJobsFailure({ error: error.message }))),
        ),
      ),
    ),
  );

   deleteJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteJob),
      switchMap(({ jobId }) =>
        this.jobService.deleteJob(jobId).pipe(
          map(id=> {
            this.store.dispatch(actions.loadJobs());
           return actions.deleteJobSuccess()}),
          catchError((error) => of(deleteJobFailure())),
        ),
      ),
    ),
  );
}
