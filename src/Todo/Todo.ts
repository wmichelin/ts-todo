export class Todo {
    description : string

    done : boolean

    constructor(description : string, done : boolean) {
        this.done = done;
        this.description = description;
    }

    setStatus(done : boolean) {
        this.done = done;
    }

    toggleStatus() {
        this.done = !this.done;
    }
}