import { createReducer, on } from "@ngrx/store";
import { loadJobs, loadJobsSuccess, loadJobsFailure, deleteJob, deleteJobSuccess, deleteJobFailure } from "./job.actions";
import { JobsState, initialJobsState } from "./job.state";

export const jobsReducer = createReducer(
  initialJobsState,
  on(loadJobs, (state) => ({ ...state, loading: true })),
  on(loadJobsSuccess, (state, { jobs }) => ({ ...state, jobs, loading: false })),
  on(loadJobsFailure, (state, { error }) => ({ ...state, error, loading: false })),
    on(deleteJob, (state) => ({
    ...state,
    loading: true,
  })),
  on(deleteJobSuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(deleteJobFailure, (state, ) => ({
    ...state,
    loading: false,
  })),
);
