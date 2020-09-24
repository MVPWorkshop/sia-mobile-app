import { BottomTabBarOptions } from '@react-navigation/bottom-tabs';
import { accentColor } from '../../../shared/styles/variables.styles';
import { TabIconNameMap, TabLabelMap, TabScreenOptions } from '../tabOptions.types';
import { ERouterFlows, ERouterScreens } from '../../../shared/types/router.types';
import { getTabBarIcon, getTabBarLabel } from '../tabOptions.util';

class HomeTabOptions {
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
    [ERouterFlows.HomeTasksFlow]: {
      focused: {
        iconType: 'font-awesome',
        iconName: 'file'
      },
      idle: {
        iconType: 'font-awesome',
        iconName: 'file-o'
      }
    },
    [ERouterFlows.HomeWalletFlow]: {
      focused: {
        iconType: 'material-community',
        iconName: 'wallet'
      },
      idle: {
        iconType: 'material-community',
        iconName: 'wallet-outline'
      }
    },
    [ERouterFlows.HomeCreateActionFlow]: {
      focused: {
        iconType: 'antdesign',
        iconName: 'pluscircle'
      },
      idle: {
        iconType: 'antdesign',
        iconName: 'pluscircleo'
      }
    }
  }

  private static _tabLabels: TabLabelMap = {
    [ERouterFlows.HomeActionsFlow]: 'Actions',
    [ERouterFlows.HomeTasksFlow]: 'Tasks',
    [ERouterFlows.HomeWalletFlow]: 'Wallet',
    [ERouterFlows.HomeCreateActionFlow]: 'Create',
  }

  public static screenOptions: TabScreenOptions = ({route}) => {
    const routeName = route.name as ERouterScreens;

    return {
      tabBarIcon: getTabBarIcon(HomeTabOptions._tabIcons, routeName),
      tabBarLabel: getTabBarLabel(HomeTabOptions._tabLabels, routeName),

    }
  }

  public static tabBarOptions: BottomTabBarOptions = {
    activeTintColor: accentColor.PRIMARY,
    style: {
      height: 60,
      paddingTop: 10,
      paddingBottom: 4,
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18
    }
  }
}

export default HomeTabOptions;
