import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Job } from "../store/job.model";
import { loadJobs, deleteJob} from "../store/job.actions";
import { selectAllJobs, selectLoading } from "../store/job.selectors";

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ["./job-list.component.scss"],
})
export class JobListComponent implements OnInit {
  searchTerm: string = "";
  dataJobs: Job[] = [];
  displayedColumns: string[] = [
    "actions",
    "title",
    "company",
    "applicationDate",
    "status",
    "salaryRequested",
    "workMode",
    "feedback",
    "jobLink",
    "notes",
  ];

  jobs$!: Observable<Job[]>;
  loading$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadJobs());
    this.jobs$ = this.store.select(selectAllJobs);
    this.jobs$.subscribe((jobs) => {
      console.log('Joburi în store:', jobs)
      this.dataJobs = jobs;
    });
    this.loading$ = this.store.select(selectLoading);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case "REJECTED":
        return "status status-rejected";
      case "APPLIED":
        return "status status-applied";
      case "INTERVIEW":
        return "status status-interview";
      case "OFFER":
        return "status status-offer";
      case "HIRED":
        return "status status-hired";
        case "PENDING":
        return "status status-pending";
      case "NO_RESPONSE":
        return "status status-noresponse";
      default:
        return "status";
    }
  }

  deleteJobId(jobId: number): void {
    console.log(`Delete job with ID: ${jobId}`);
    this.store.dispatch(deleteJob({ jobId }));
  }
}


