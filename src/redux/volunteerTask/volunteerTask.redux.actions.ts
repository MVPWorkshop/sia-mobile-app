import { IVolunteerTask } from '../../shared/types/aidProject.types';
import { AddVolunteerTask, EVolunteerTaskActions, UpdateVolunteerTask } from './volunteerTask.redux.types';
import { Thunk } from '../redux.types';
import { updateVolunteerAction } from '../volunteerAction/volunteerAction.redux.actions';

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

export function createNewTask(task: IVolunteerTask): Thunk<void> {
  return (dispatch, getState) => {
    dispatch(addVolunteerTask(task));

    const action = getState().volunteerAction.actions.filter(action => action.id === task.actionId)[0];

    dispatch(updateVolunteerAction(task.actionId, {
      tasks: [
        ...action.tasks,
        task.id
      ]
    }))
  }
}
