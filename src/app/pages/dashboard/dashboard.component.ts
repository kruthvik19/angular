import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // Sample data for recent job descriptions (JDs)
  recentJds = [
    {
      company: 'ABC Corp',
      role: 'Software Engineer',
      description: 'Responsible for developing and maintaining web applications.',
      time: '5min Ago'
    },
    {
      company: 'XYZ Inc.',
      role: 'UI/UX Designer',
      description: 'Designing user interfaces for web and mobile platforms.',
      time: '10min Ago'
    },
    {
      company: 'Tech Solutions',
      role: 'Backend Developer',
      description: 'Building RESTful APIs and database management.',
      time: '15min Ago'
    },
    {
      company: 'Innovatech',
      role: 'DevOps Engineer',
      description: 'Automating cloud infrastructure and managing CI/CD pipelines.',
      time: '30min Ago'
    },
    {
      company: 'Bright Minds',
      role: 'Data Scientist',
      description: 'Analyzing large datasets to derive actionable insights.',
      time: '45min Ago'
    }
  ];

}
