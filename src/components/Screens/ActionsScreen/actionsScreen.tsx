import React from 'react'
import { ERouterScreens, RouterScreenProps } from '../../../shared/types/router.types';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import { IVolunteerAction } from '../../../shared/types/aidProject.types';
import VolunteerActionPreview from '../../organisms/VolunteerActionPreview/volunteerActionPreview';
import styles from './actionsScreen.styles';
import { mb } from '../../../shared/styles/util.styles';

const ActionsScreen: React.FC<RouterScreenProps.IActionsScreenProps> = (props) => {

  const volunteerActions = useSelector<RootState, IVolunteerAction[]>(state => state.volunteerAction.actions);

  const openActionDetails = (volunteerAction: IVolunteerAction) => () => {
    // @ts-ignore
    props.navigation.navigate(ERouterScreens.ActionDetailsScreen, {
      volunteerAction
    })
  }

  const renderActionList = () => {
    return volunteerActions.map(action => (
      <VolunteerActionPreview
        onClick={openActionDetails(action)}
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
