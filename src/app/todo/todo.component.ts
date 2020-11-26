import { Component, OnInit } from '@angular/core'; 
import { ToDoService, ToDo } from '../shared/todos.service';
import {delay} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-to-do',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class ToDoComponent implements OnInit {
  todos: ToDo ;
  title = '';
  loading = true;
  searchString = '';
  selectedToDo: ToDo;
  constructor(public todoService: ToDoService, private http: HttpClient) { } 

  onSelect(todos: ToDo): void {
    this.selectedToDo = todos;
  }
  ngOnInit(): void {
    this.todoService.fetchTodos()
    .pipe(delay(500))
    .subscribe ( () => {
       this.loading = false;
    });
    
    this.http.get('./assets/data.json').subscribe((data:ToDo) =>
       this.todos = data);
  } 

  OnChange(id: number){
    //this.onToggle.emit(id);
    this.todoService.onToggle(id);
  }
  removeToDo(id: number){
    this.todoService.removeToDos(id);
  } 
}
