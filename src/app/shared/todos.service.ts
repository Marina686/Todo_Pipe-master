import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

export interface ToDo{
    id: number;
    title: string;
    author: string; 
    catalogID?:string;
    publishDate: string,
    coverURL?:string,
    imageLink?:string,
    completed: boolean;
    date?: any; 
}
@Injectable({providedIn: 'root'})

export class ToDoService{ 
    public todos: ToDo[] = [] 

    constructor(private http: HttpClient){}

    fetchTodos() : Observable<ToDo[]>   {
       return this.http.get<ToDo[]>('./assets/data.json') 
       .pipe(tap(todos => this.todos = todos))
    }

      onToggle(id:number){
        const idx = this.todos.findIndex(t=> t.id === id);
        this.todos[idx].completed = !this.todos[idx].completed;
      }
      removeToDos(id:number){
          this.todos = this.todos.filter(t=> t.id != id);
      }
      addTodo(todo:ToDo){
          this.todos.push(todo)
      }
}