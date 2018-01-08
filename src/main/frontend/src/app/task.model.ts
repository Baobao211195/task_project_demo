
export class Task {
  public id: number;
  public name: string;
  public dueDate: string;
  public completed: boolean;

  constructor (name: string, completed: boolean, dueDate: string) {
    this.name = name;
    this.completed = completed;
    this.dueDate = dueDate;
  }
}
