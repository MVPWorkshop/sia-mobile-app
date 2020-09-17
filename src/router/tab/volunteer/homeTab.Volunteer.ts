import { ERouterFlows, ERouterScreens } from '../../../shared/types/router.types';
import { TabIconNameMap, TabLabelMap, TabScreenOptions } from '../tabOptions.types';
import { getTabBarIcon, getTabBarLabel } from '../tabOptions.util';
import { BottomTabBarOptions } from '@react-navigation/bottom-tabs';
import { accentColor, colors } from '../../../shared/styles/variables.styles';

class HomeTabVolunteerOptions {

  private static _tabIcons: TabIconNameMap = {
    [ERouterFlows.HomeActionsFlow]: {
      focused: {
        iconType: 'material-community',
        iconName: 'flash'
      },
      idle: {
        iconType: 'material-community',
        iconName: 'flash-outline'
      }
    },
    [ERouterScreens.TasksScreen]: {
      focused: {
        iconType: 'font-awesome',
        iconName: 'file'
      },
      idle: {
        iconType: 'font-awesome',
        iconName: 'file-o'
      }
    },
    [ERouterScreens.WalletScreen]: {
      focused: {
        iconType: 'material-community',
        iconName: 'wallet'
      },
      idle: {
        iconType: 'material-community',
        iconName: 'wallet-outline'
      }
    }
  }

  private static _tabLabels: TabLabelMap = {
    [ERouterFlows.HomeActionsFlow]: 'Actions',
    [ERouterScreens.TasksScreen]: 'Tasks',
    [ERouterScreens.WalletScreen]: 'Wallet'

  }

  public static screenOptions: TabScreenOptions = ({route}) => {
    const routeName = route.name as ERouterScreens;

    return {
      tabBarIcon: getTabBarIcon(HomeTabVolunteerOptions._tabIcons, routeName),
      tabBarLabel: getTabBarLabel(HomeTabVolunteerOptions._tabLabels, routeName),

    }
  }

  public static tabBarOptions: BottomTabBarOptions = {
    activeTintColor: accentColor.PRIMARY,
    style: {
      height: 70,
      paddingTop: 10,
      paddingBottom: 4,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50
    }
  }
}

export default HomeTabVolunteerOptions;
