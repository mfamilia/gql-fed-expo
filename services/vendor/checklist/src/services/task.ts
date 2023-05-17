import { Injectable } from '@nestjs/common';
import { Task } from 'src/models/task';

const tasks = {
  1: {
    id: 1,
    name: 'Complete your profile',
    description: 'By completing your profile you can jump into the market'
  },
  2: {
    id: 2,
    name: 'Add payment information',
    description: 'Payment information is important...for us'
  },
  3: {
    id: 3,
    name: 'Schedule your onboarding interview',
    description: 'Just do it'
  },
  4: {
    id: 4,
    name: 'Setup your storefront',
    description: 'Just do it now!'
  },
}

const userTasks = {
  1: [[tasks[1], tasks[2]], [tasks[3], tasks[4]]],
  2: [[], [tasks[1], tasks[2], tasks[3], tasks[4]]],
  3: [[tasks[1]], [tasks[2], tasks[3], tasks[4]]],
  4: [[tasks[1], tasks[2], tasks[3], tasks[4]], []]
}

@Injectable()
export class TaskService {
  async findCompleted(userId: number): Promise<Task[]> {
    return userTasks[userId] && userTasks[userId][0] || []
  }

  async findTodo(userId: number): Promise<Task[]> {
    return userTasks[userId] && userTasks[userId][1] || []
  }
}
