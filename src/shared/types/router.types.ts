import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { IVolunteerAction } from './aidProject.types';

export enum ERouterFlows {
  AuthFlow = 'AuthFlow',
  HomeDrawer = 'HomeDrawer',
  HomeFlow = 'HomeFlow',
  HomeActionsFlow = 'HomeActionsFlow'
}

export enum ERouterScreens {
  ActionsScreen = 'ActionsScreen',
  ActionDetailsScreen = 'ActionDetailsScreen',
  LoginScreen = 'LoginScreen',
  RegisterScreen = 'RegisterScreen',
  TasksScreen = 'TasksScreen',
  WalletScreen = 'WalletScreen',
  VerifyAccountScreen = 'VerifyAccountScreen'
}

export type RouteName = ERouterFlows | ERouterScreens;

type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
    ? { screen: K; params?: ParamList[K] }
    : { screen: K; params: ParamList[K] }
}[keyof ParamList]

export type IRouteParams = {
  [ERouterFlows.AuthFlow]: NestedNavigatorParams<{
    [ERouterScreens.LoginScreen]: undefined;
    [ERouterScreens.RegisterScreen]: undefined;
  }>;
  [ERouterFlows.HomeDrawer]: NestedNavigatorParams<{
    [ERouterFlows.HomeFlow]: NestedNavigatorParams<{
      [ERouterFlows.HomeActionsFlow]: NestedNavigatorParams<{
        [ERouterScreens.ActionsScreen]: undefined;
        [ERouterScreens.ActionDetailsScreen]: {
          volunteerAction: IVolunteerAction;
        };
      }>;
      [ERouterScreens.TasksScreen]: undefined;
      [ERouterScreens.WalletScreen]: undefined;
    }>;
  }>;
  [ERouterScreens.VerifyAccountScreen]: {
    onFinishRoute: {
      routeName: keyof IRouteParams;
      params?: any;
    }
  }
}

export declare namespace RouterScreenProps {
  // Auth flow
  interface ILoginScreenProps extends StackScreenProps<IRouteParams, ERouterFlows.AuthFlow> {}
  interface IRegisterScreenProps extends StackScreenProps<IRouteParams, ERouterFlows.AuthFlow> {}

  // Home actions flow
  interface IActionsScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}
  interface IActionDetailsScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}

  interface ITasksScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}
  interface IWalletScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}

  // Verify flow
  interface IVerifyAccountScreenProps extends StackScreenProps<IRouteParams, ERouterScreens.VerifyAccountScreen> {}
}
