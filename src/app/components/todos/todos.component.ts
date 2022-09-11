import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';
  isLoading: boolean = false;
  formData: any = {};
  submitted = false;
  todoLength!:number;
  // toDoForm: FormGroup = new FormGroup<Todo>;
  constructor() {}

  toDoForm = new FormGroup({
    toDoInput: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    //todo list items
    this.todos = [
      {
        content: 'Todo list from Angular',
        completed: false,
      },
      {
        content: 'task example',
        completed: false,
      },
    ];
    this.todoLength=this.todos.length;
    console.log( "this.todoLength>>>>",this.todoLength);
    
  }
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }
  // function to delete item from the list
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    console.log('removed :', id);
  }
  addTodo() {
    this.isLoading = true;
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
    this.isLoading = false;
  }

  get formControls() {
    return this.toDoForm.controls;
  }
  // function to add item from the list
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.toDoForm.value);
    if (this.toDoForm.invalid) {
      this.submitted = true;
      this.isLoading = true;
      return;
    }
    this.todos.push({
      content: this.toDoForm.controls.toDoInput.value,
      completed: false,
    });
    this.toDoForm.reset();
    this.submitted = false;
    this.isLoading = false;
    this.todoLength=this.todos.length;
 
}
}
