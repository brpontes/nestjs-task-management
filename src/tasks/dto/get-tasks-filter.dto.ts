import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
  status?: string;
  search?: TaskStatus;
}
