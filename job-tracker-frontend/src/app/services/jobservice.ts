
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jobmodel } from '../models/job.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'https://localhost:7280/api/Jobs'; // Change this to your real API

  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<Jobmodel[]> {
    return this.http.get<Jobmodel[]>(this.apiUrl);
  }

  getJobById(id: number): Observable<Jobmodel> {
    return this.http.get<Jobmodel>(`${this.apiUrl}/${id}`);
  }

  addJob(job: Jobmodel): Observable<Jobmodel> {
    return this.http.post<Jobmodel>(this.apiUrl, job);
  }

  updateJob(id: number, job: Jobmodel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, job);
  }

  deleteJob(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

