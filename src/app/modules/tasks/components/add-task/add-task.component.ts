import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '@core/Models';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() public onNewTask: EventEmitter<Task> = new EventEmitter();

  public task: Task = new Task({ id: null });

  public taskForm: FormGroup = this.fb.group({
    priority: new FormControl(0, [Validators.required, Validators.min(1)]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit() {

    this.task.description = this.taskForm.value.description;
    this.task.priority = this.taskForm.value.priority;
    this.task.done = false;

    this.emitCharacter();
  }

  public emitCharacter() {

    this.onNewTask.emit(this.task);

  }

}
