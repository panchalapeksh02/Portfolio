import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, SelectModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedFeature?: {
    name: string;
    businessValue: string;
    technicalValue: string;
  };

  features: {
    name: string;
    businessValue: string;
    technicalValue: string;
  }[] = [
    {
      name: 'Route Close V2 Details',
      businessValue: 'Ensures accurate tracking of pickups, time-inputs, and reduces operational errors.',
      technicalValue:
        'Validated and managed delivery data efficiently to maintain operational accuracy.',
    },
    {
      name: 'HOS Email Notifications',
      businessValue:
        'Improves fleet safety by alerting supervisors when drivers reach work-hour limits.',
      technicalValue:
        'Automated backend notifications with email templates aligned to the organizational hierarchy, and scheduled checks to proactively manage driver hours.',
    },
    {
      name: 'Sequence Adherence Calculation',
      businessValue: 'Optimizes routes and improves operational efficiency.',
      technicalValue:
        'Developed calculation logic to monitor route adherence and provide actionable insights.',
    },
    {
      name: 'Angular Filtering & Legends',
      businessValue: 'Enhances the user interface by making complex data easier to interpret.',
      technicalValue:
        'Implemented consistent filtering and visual indicators for improved usability.',
    },
  ];

  linkedInUrl = 'https://www.linkedin.com/in/apeksha-panchal-303aa1230/';
  contactEmail = 'panchalapeksha93@gmail.com';
}
