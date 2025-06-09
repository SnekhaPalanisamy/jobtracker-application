import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobmodel } from '../../models/job.model';
import { JobService } from '../../services/jobservice';

@Component({
  selector: 'app-job-form',
  standalone: false,
  templateUrl: './job-form.html',
  styleUrl: './job-form.css'
})

export class JobForm implements OnInit {
  job: Jobmodel = {
    id: 0,
    companyName: '',
    position: '',
    status: 'Applied',
    appliedDate: new Date().toISOString().split('T')[0] // format for input[type="date"]
  };

  isEditMode = false;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.isEditMode = true;
      this.jobService.getJobById(id).subscribe(data => {
        this.job = data;
        this.job.appliedDate = data.appliedDate.split('T')[0]; // convert to input date format
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.jobService.updateJob(this.job.id, this.job).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.jobService.addJob(this.job).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

}
