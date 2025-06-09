import { Component, OnInit } from '@angular/core';
import { Jobmodel } from '../../models/job.model';
import { JobService } from '../../services/jobservice';

@Component({
  selector: 'app-job-list',
  standalone: false,
  templateUrl: './job-list.html',
  styleUrl: './job-list.css'
})
export class JobList implements OnInit{
jobs: Jobmodel[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobService.getAllJobs().subscribe((data) => {
      this.jobs = data;
    });
  }

  deleteJob(id: number): void {
    this.jobService.deleteJob(id).subscribe(() => {
      this.loadJobs();
    });
  }
}
