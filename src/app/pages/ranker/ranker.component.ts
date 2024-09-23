import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ranker',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ranker.component.html',
  styleUrls: ['./ranker.component.css']  // Fixed the syntax for 'styleUrls'
})
export class RankerComponent {
  // Initialize the results array
  results = [
    {
      name: 'John Doe',
      role: 'Spring Developer',
      experience: 4.5,
      matchPercentage: 80
    },
    {
      name: 'Jane Smith',
      role: 'Spring Developer',
      experience: 3.5,
      matchPercentage: 75
    },
    {
      name: 'Alice Johnson',
      role: 'Spring Developer',
      experience: 5,
      matchPercentage: 90
    },
    {
      name: 'Michael Brown',
      role: 'Spring Developer',
      experience: 2.5,
      matchPercentage: 70
    },
    {
      name: 'Robert Davis',
      role: 'Spring Developer',
      experience: 3.5,
      matchPercentage: 85
    }
  ];
}
