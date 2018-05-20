import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
  @Input() showTaskForm;
  oneTask = {title: '', description: ''};
  @Output() saveInput: EventEmitter<any> = new EventEmitter();
  constructor() {}


  getValue() {
    this.saveInput.emit(this.oneTask);
    this.resetForm();
  }
  resetForm() {
    this.oneTask = {title: '', description: ''};
  }
}
