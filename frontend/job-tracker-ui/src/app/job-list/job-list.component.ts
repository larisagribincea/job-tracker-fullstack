import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from '../store/job.model';
import { loadJobs } from '../store/job.actions';
import { selectAllJobs, selectLoading } from '../store/job.selectors';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
    dataJobs: Job[] = [];
    displayedColumns: string[] = [
      'title',
      'company',
      'applicationDate',
      'status',
      'salaryRequested',
      'workMode',
      'feedback',
      'jobLink',
      'notes'
  ];
  
  jobs$!: Observable<Job[]>;
  loading$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadJobs());
    this.jobs$ = this.store.select(selectAllJobs);
    this.jobs$
      .subscribe((jobs) => {
        this.dataJobs = jobs;
      });
    this.loading$ = this.store.select(selectLoading);
  }
}
