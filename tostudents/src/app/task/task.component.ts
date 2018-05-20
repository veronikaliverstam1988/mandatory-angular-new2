import { Input, Component } from '@angular/core';
import { Task, StatusType } from '../constants';
import { TaskService } from '../task.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task;
  private statusList = [StatusType.NotStarted, StatusType.InProgress, StatusType.Completed];
  constructor(private taskService: TaskService) {}
  updateTask(newStatus) {
    this.taskService.updateTask(this.task.id, newStatus);
  }
}
