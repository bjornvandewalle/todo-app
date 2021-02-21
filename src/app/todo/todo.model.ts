export interface Todo {
  id: string;
  name: string;
  description: string;
  creationTime: Date;
  dueDate: Date;
  finishedOn: Date;
  finished: boolean;
  PriorityLevel: Priority;
}

export enum Priority {
  high,
  medium,
  low,
}
