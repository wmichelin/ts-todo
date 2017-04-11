export class TodoListJsonRepository {
    getTodoJson() : Array<object> {
        return [{
            'description': 'do laundry',
            'done': false
        }, {
            'description': 'make dinner',
            'done': false
        }];
    }
}