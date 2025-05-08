import { createReducer, on } from '@ngrx/store';
import { loadJobs, loadJobsSuccess, loadJobsFailure } from './job.actions';
import { JobsState, initialJobsState } from './job.state';

export const jobsReducer = createReducer(
  initialJobsState,
  on(loadJobs, (state) => ({ ...state, loading: true })),
  on(loadJobsSuccess, (state, { jobs }) => ({ ...state, jobs, loading: false })),
  on(loadJobsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
