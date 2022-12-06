abstract class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract showInfo(): void;
}

export enum Directions {
  pm = 'Project Manager',
  dev = 'Developer',
  qa = 'Quality Assurance',
  ba = 'Business Analyst',
}

export class Employee extends Person {
  direction: Directions;
  constructor(name: string, age: number, direction: Directions) {
    super(name, age);
    this.direction = direction;
  }
  public showInfo() {
    console.log(
      `Employee Info: \nName: ${this.name}\nAge: ${this.age}\nDirection: ${this.direction}`,
    );
  }
}

export enum Status {
  todo = 'Todo',
  inProgress = 'In progress',
  qa = 'QA',
  done = 'Done',
}

export class Task {
  name: string;
  status: Status = Status.todo;
  createdBy: string;
  description: string;
  takeBy: string = '';

  constructor(name: string, createdBy: string, description: string) {
    this.name = name;
    this.createdBy = createdBy;
    this.description = description;
  }

  assignToTask(employeeName: string): void {
    this.takeBy = employeeName;
    this.status = Status.inProgress;
  }

  changeStatus(empName: string, status: Status): void {
    if (this.takeBy === empName) {
      this.status = status;
    } else {
      console.log('Ops, you can`t change status of this task');
    }
  }
}
