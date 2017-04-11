import { TodoListFactory } from './Todo/Factory/TodoListFactory';
import { TodoList } from './Todo/TodoList';
import { TodoListJsonRepository } from './Todo/Repository/TodoListJsonRepository';


let todos = (new TodoListJsonRepository()).getTodoJson();
let todoList : TodoList = (new TodoListFactory()).createTodoList(todos);
todoList.print();