import { Employee, Task } from './task_1-2/team';
import { Directions, Status } from './task_1-2/team';

const frontendDev = new Employee('John', 19, Directions.dev);
const backendDev = new Employee('Robert', 22, Directions.dev);
const qualityAssurance = new Employee('Jessica', 22, Directions.qa);
const businessAnalyst = new Employee('Ross', 22, Directions.ba);

const newService = new Task(
  'new service',
  frontendDev.name,
  'Some description',
);

newService.assignToTask(backendDev.name);
newService.changeStatus(qualityAssurance.name, Status.qa);
console.log(newService);

newService.changeStatus(backendDev.name, Status.qa);
console.log(newService);

newService.assignToTask(qualityAssurance.name);
newService.changeStatus(qualityAssurance.name, Status.done);

console.log(newService);
