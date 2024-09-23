import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet], // Import the ResumeSummaryComponent
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  activeTab: string = 'resume-summary';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}