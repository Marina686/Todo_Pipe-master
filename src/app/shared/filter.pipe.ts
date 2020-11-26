import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './todos.service';

@Pipe({
    name: 'todosFilter'
})
export class FilterPipe implements PipeTransform    {
    transform(todos: ToDo[], search : string='') : ToDo[] {
        if(!search.trim()){
            return todos;
        }
        return todos.filter(todo => {
            return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        } )
        throw new Error("Method not implemented.");
    }

}