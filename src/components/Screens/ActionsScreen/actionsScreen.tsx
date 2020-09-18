import React from 'react'
import { RouterScreenProps } from '../../../shared/types/router.types';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import { IVolunteerAction } from '../../../shared/types/aidProject.types';
import VolunteerActionPreview from '../../molecules/VolunteerActionPreview/volunteerActionPreview';
import styles from './actionsScreen.styles';
import { mb } from '../../../shared/styles/util.styles';

const ActionsScreen: React.FC<RouterScreenProps.IActionsScreenProps> = () => {

  const volunteerActions = useSelector<RootState, IVolunteerAction[]>(state => state.volunteerAction.actions);

  const renderActionList = () => {
    return volunteerActions.map(action => (
      <VolunteerActionPreview
        action={action}
        key={action.name}
        style={mb(4)}
      />
    ))
  }

  return (
    <ScreenLayout
      style={styles.actionsScreen}
      safeArea={false}
      keyboardAvoiding={true}
    >
      {renderActionList()}
    </ScreenLayout>
  )
}

export default ActionsScreen;
