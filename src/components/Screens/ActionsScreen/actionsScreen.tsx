import React from 'react'
import { ERouterScreens, RouterScreenProps } from '../../../shared/types/router.types';
import ScreenLayout from '../../layouts/ScreenLayout/screenLayout';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import { EVolunteerActionStatus, IVolunteerAction } from '../../../shared/types/aidProject.types';
import VolunteerActionPreview from '../../organisms/VolunteerActionPreview/volunteerActionPreview';
import styles from './actionsScreen.styles';
import { mb } from '../../../shared/styles/util.styles';
import Tabs from '../../organisms/Tabs/tabs';
import Tab from '../../molecules/Tab/tab';
import TabPanel from '../../molecules/TabPanel/tabPanel';
import ProtectedComponent from '../../atoms/ProtectedComponent/protectedComponent';
import { EUserRoles } from '../../../shared/types/user.types';

enum ENgoActionsScreenTabs {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

const ActionsScreen: React.FC<RouterScreenProps.IActionsScreenProps> = (props) => {

  const volunteerActions = useSelector<RootState, IVolunteerAction[]>(state => state.volunteerAction.actions);

  const openActionDetails = (volunteerAction: IVolunteerAction) => () => {
    // @ts-ignore
    props.navigation.navigate(ERouterScreens.ActionDetailsScreen, {
      volunteerActionId: volunteerAction.id
    })
  }

  const renderActionList = (actionList: IVolunteerAction[]) => {
    return actionList.map(action => (
      <VolunteerActionPreview
        onClick={openActionDetails(action)}
        action={action}
        key={action.name}
        style={mb(4)}
      />
    ))
  }

  const renderActiveActions = () => {
    const activeActions = volunteerActions.filter(action => (
      action.status === EVolunteerActionStatus.ACTIVE
    ));

    return renderActionList(activeActions);
  }

  const renderInactiveActions = () => {
    const inactiveActions = volunteerActions.filter(action => (
      action.status === EVolunteerActionStatus.CANCELLED
    ));

    return renderActionList(inactiveActions);
  }

  return (
    <ScreenLayout
      style={styles.actionsScreen}
      safeArea={false}
      scroll={true}
    >
      <ProtectedComponent allowedRoles={[EUserRoles.VOLUNTEER]}>
        {renderActiveActions()}
      </ProtectedComponent>
      <ProtectedComponent allowedRoles={[EUserRoles.NGO]}>
        <Tabs defaultSelectedTab={ENgoActionsScreenTabs.ACTIVE}>
          <Tab
            name={ENgoActionsScreenTabs.ACTIVE}
            label={'My Active Actions'}
          />
          <Tab
            name={ENgoActionsScreenTabs.INACTIVE}
            label={'My Inactive Actions'}
          />

          <TabPanel name={ENgoActionsScreenTabs.ACTIVE}>
            {renderActiveActions()}
          </TabPanel>
          <TabPanel name={ENgoActionsScreenTabs.INACTIVE}>
            {renderInactiveActions()}
          </TabPanel>
        </Tabs>
      </ProtectedComponent>
    </ScreenLayout>
  )
}

export default ActionsScreen;
