import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo:string="";
  isLoading:boolean=false;
  formData: any = {};
  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        content:"Todo list from Angular",
        completed:false,
      },
      {
        content:"task example",
        completed:false,
      }
    ]
  }
  toggleDone(id: number){
  this.todos.map((v,i)=>{
    if (i==id) v.completed=!v.completed
    return v
  })
  }
deleteTodo(id:number){
  this.todos=this.todos.filter((v,i)=>i!==id)
  console.log("removed :",id);
}
addTodo () {
  this.isLoading=true
  this.todos.push({
    content: this.inputTodo,
    completed: false
  });
  this.inputTodo = "";
  this.isLoading=false
}

}


