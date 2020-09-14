import React from 'react'
import { Text } from 'react-native';
import { RouterScreenProps } from '../../../shared/types/router.types';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';

const TasksScreen: React.FC<RouterScreenProps.ITasksScreenProps> = () => {
  return (
    <ScreenLayout>
      <Text>Tasks screen</Text>
    </ScreenLayout>
  )
}

export default TasksScreen;
