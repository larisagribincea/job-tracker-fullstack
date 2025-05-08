import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../store/job.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:9090/jobs'; 

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }
}
