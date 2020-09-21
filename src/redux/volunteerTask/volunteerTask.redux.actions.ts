import { IVolunteerTask } from '../../shared/types/aidProject.types';
import { AddVolunteerTask, EVolunteerTaskActions, UpdateVolunteerTask } from './volunteerTask.redux.types';

export function addVolunteerTask(task: IVolunteerTask): AddVolunteerTask {
  return {
    type: EVolunteerTaskActions.ADD_VOLUNTEER_TASK,
    payload: {
      task
    }
  }
}

export function updateVolunteerTask(id: string, task: Partial<IVolunteerTask>): UpdateVolunteerTask {
  return {
    type: EVolunteerTaskActions.UPDATE_VOLUNTEER_TASK,
    payload: {
      id,
      task
    }
  }
}
