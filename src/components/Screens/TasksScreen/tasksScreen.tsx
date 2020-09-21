import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import { ERouterFlows, ERouterScreens, RouterScreenProps } from '../../../shared/types/router.types';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import { EVolunteerTaskStatus, IVolunteerTask } from '../../../shared/types/aidProject.types';
import { arrayToObjectsByKey, keys } from '../../../shared/utils/common.util';
import Tabs from '../../organisms/Tabs/tabs';
import Tab from '../../molecules/Tab/tab';
import TabPanel from '../../molecules/TabPanel/tabPanel';
import VolunteerTaskPreview from '../../organisms/VolunteerTaskPreview/volunteerTaskPreview';
import { mb } from '../../../shared/styles/util.styles';

enum ETaskTabs {
  ACTIVE = 'ACTIVE',
  PAST = 'PAST'
}

const TasksScreen: React.FC<RouterScreenProps.ITasksScreenProps> = (props) => {

  const tasks = useSelector<RootState, RootState['volunteerTask']['tasks']>(
    state => state.volunteerTask.tasks
  )
  const actionsArray = useSelector<RootState, RootState['volunteerAction']['actions']>(
    state => state.volunteerAction.actions
  )
  const actions = arrayToObjectsByKey(actionsArray, 'id');

  const [activeTasks, setActiveTasks] = useState<IVolunteerTask[]>([]);
  const [pastTasks, setPastTasks] = useState<IVolunteerTask[]>([]);

  useEffect(() => {
    let active: IVolunteerTask[] = [];
    let past: IVolunteerTask[] = [];

    keys(tasks).map(taskId => {
      const task = tasks[taskId];

      if (task.status !== EVolunteerTaskStatus.NEUTRAL) {
        if (task.status === EVolunteerTaskStatus.APPLIED) {
          active.push(task);
        } else {
          past.push(task);
        }
      }
    })

    setActiveTasks(active);
    setPastTasks(past);
  }, [tasks]);

  const navigateToTaskDetails = (task: IVolunteerTask, taskName: string) => () => {
    // @ts-ignore
    props.navigation.navigate(ERouterFlows.HomeTasksFlow, {
      screen: ERouterScreens.TaskDetailsScreen,
      params: {
        volunteerTaskId: task.id,
        volunteerAction: actions[task.actionId],
        taskName
      }
    })
  }

  const mapTasks = (tasks: IVolunteerTask[]) => {
    return tasks.map((task, index) => (
      <VolunteerTaskPreview
        action={actions[task.actionId]}
        showProjectLabel={true}
        key={task.id}
        cardTitle={`Task ${index}`}
        task={task}
        onClick={navigateToTaskDetails(task, `Task ${index}`)}
        style={mb(4)}
      />
    ))
  }

  return (
    <ScreenLayout
      scroll={true}
      safeArea={false}
    >
      <View style={{alignSelf: 'stretch', flex: 1}}>
        <Tabs defaultSelectedTab={ETaskTabs.ACTIVE}>
          <Tab
            name={ETaskTabs.ACTIVE}
            label={'Active Tasks'}
          />
          <Tab
            name={ETaskTabs.PAST}
            label={'Past Tasks'}
          />

          <TabPanel name={ETaskTabs.ACTIVE}>
            {mapTasks(activeTasks)}
          </TabPanel>

          <TabPanel name={ETaskTabs.PAST}>
            {mapTasks(pastTasks)}
          </TabPanel>
        </Tabs>
      </View>
    </ScreenLayout>
  )
}

export default TasksScreen;
