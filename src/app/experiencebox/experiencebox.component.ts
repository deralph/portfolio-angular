import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Skill } from '../skill';

@Component({
  selector: 'app-experiencebox',
  standalone: true,
  imports: [],
  templateUrl: './experiencebox.component.html',
  styleUrl: './experiencebox.component.css',
})
export class ExperienceboxComponent {
  @Input() skill!: Skill;

  @Output() outputEvent: EventEmitter<string> = new EventEmitter();

  emitEvent() {
    this.outputEvent.emit('Event emitted from child component');
  }
}
