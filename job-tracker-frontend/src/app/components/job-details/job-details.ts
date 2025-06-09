import { Component,OnInit } from '@angular/core';
import { Jobmodel } from '../../models/job.model';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/jobservice';

@Component({
  selector: 'app-job-details',
  standalone: false,
  templateUrl: './job-details.html',
  styleUrl: './job-details.css'
})

export class JobDetails implements OnInit {
  job: Jobmodel | undefined;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getJobById(id).subscribe(data => {
      this.job = data;
    });
  }

}
