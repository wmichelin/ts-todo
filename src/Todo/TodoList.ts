import { Todo } from './Todo';

export class TodoList {
    todos : Array<Todo>

    constructor(todos : Array<Todo>) {
        this.todos = todos;
    }

    print() {
        this.todos.forEach(function(todo) {
            console.log(todo); 
        });
    }
}
