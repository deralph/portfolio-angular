import { Component } from '@angular/core';
import { Skill } from '../skill';
import { ExperienceboxComponent } from '../experiencebox/experiencebox.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ExperienceboxComponent, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  handleEmittedEvent(eventData: string) {
    console.log(eventData);
  }

  skills1: Skill[] = [
    {
      name: 'HTML',
      level: 'experienced',
    },
    {
      name: 'CSS',
      level: 'experienced',
    },
    {
      name: 'JavaScript',
      level: 'experienced',
    },
    {
      name: 'TypeScript',
      level: 'experienced',
    },
    {
      name: 'Material UI',
      level: 'experienced',
    },
    {
      name: 'Other Frameworks',
      level: 'intermediate',
    },
  ];
  skills2: Skill[] = [
    {
      name: 'MongoDB',
      level: 'experienced',
    },
    {
      name: 'React',
      level: 'experienced',
    },
    {
      name: 'Node',
      level: 'experienced',
    },
    {
      name: 'Express',
      level: 'experienced',
    },
    {
      name: 'Angular',
      level: 'experienced',
    },
    {
      name: 'Node JS',
      level: 'experienced',
    },
    {
      name: 'Express JS',
      level: 'experienced',
    },
    {
      name: 'Git',
      level: 'experienced',
    },
  ];
}
