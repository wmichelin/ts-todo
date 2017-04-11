import { Todo } from '../Todo'; 
import { TodoList } from '../TodoList';

export class TodoListFactory {
    createTodoList(todos : Array<object>) : TodoList {
        let todoObjectArray = Array<Todo>();

        todos.forEach(function(todo) {
            todoObjectArray.push(new Todo(todo['description'], todo['done']));
        });

        return new TodoList(todoObjectArray);
    }
}