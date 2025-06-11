import { createAction, props } from "@ngrx/store";
import { Job } from "./job.model";

export const loadJobs = createAction("[Jobs] Load Jobs");
export const loadJobsSuccess = createAction(
  "[Jobs] Load Jobs Success",
  props<{ jobs: Job[] }>(),
);
export const loadJobsFailure = createAction(
  "[Jobs] Load Jobs Failure",
  props<{ error: string }>(),
);

//Action to delete a job
export const deleteJob = createAction(
  "[Jobs] Delete Job",
  props<{ jobId: number }>(),
);
export const deleteJobSuccess = createAction(
  "[Jobs] Delete Job Success",
);
export const deleteJobFailure = createAction(
  "[Jobs] Delete Job Failure"
);
