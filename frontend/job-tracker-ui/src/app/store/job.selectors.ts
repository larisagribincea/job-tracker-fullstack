
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JobsState } from './job.state';

export const selectJobsState = createFeatureSelector<JobsState>('jobsState');

export const selectAllJobs = createSelector(
  selectJobsState,
  (state: JobsState) => state.jobs
);

export const selectLoading = createSelector(
  selectJobsState,
  (state: JobsState) => state.loading
);
