import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { IVolunteerAction, IVolunteerTask } from './aidProject.types';
import { DrawerScreenProps } from '@react-navigation/drawer';

export enum ERouterFlows {
  AuthFlow = 'AuthFlow',
  HomeDrawer = 'HomeDrawer',
  HomeFlow = 'HomeFlow',
  HomeActionsFlow = 'HomeActionsFlow',
  HomeTasksFlow = 'HomeTasksFlow',
  HomeWalletFlow = 'HomeWalletFlow'
}

export enum ERouterScreens {
  ActionsScreen = 'ActionsScreen',
  ActionDetailsScreen = 'ActionDetailsScreen',
  TaskDetailsScreen = 'TaskDetailsScreen',
  FinishTaskScreen = 'FinishTaskScreen',
  LoginScreen = 'LoginScreen',
  RegisterScreen = 'RegisterScreen',
  TasksScreen = 'TasksScreen',
  WalletScreen = 'WalletScreen',
  VerifyAccountScreen = 'VerifyAccountScreen',
  AccountDetailsScreen = 'AccountDetailsScreen',
  CouponsScreen = 'CouponsScreen'
}

export type RouteName = ERouterFlows | ERouterScreens;

type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
    ? { screen: K; params?: ParamList[K] }
    : { screen: K; params: ParamList[K] }
}[keyof ParamList]

interface IActionDetailsScreenParams {
  volunteerAction: IVolunteerAction;
}
interface ITaskDetailsScreenParams {
  volunteerTaskId: string;
  volunteerAction: IVolunteerAction;
  taskName: string;
}
interface IFinishTaskScreenParams {
  volunteerTask: IVolunteerTask;
  taskName: string;
}

export type IRouteParams = {
  [ERouterFlows.AuthFlow]: NestedNavigatorParams<{
    [ERouterScreens.LoginScreen]: undefined;
    [ERouterScreens.RegisterScreen]: undefined;
  }>;
  [ERouterFlows.HomeDrawer]: NestedNavigatorParams<{
    [ERouterFlows.HomeFlow]: NestedNavigatorParams<{
      [ERouterFlows.HomeActionsFlow]: NestedNavigatorParams<{
        [ERouterScreens.ActionsScreen]: undefined;
        [ERouterScreens.ActionDetailsScreen]: IActionDetailsScreenParams;
        [ERouterScreens.TaskDetailsScreen]: ITaskDetailsScreenParams;
        [ERouterScreens.FinishTaskScreen]: IFinishTaskScreenParams;
      }>;
      [ERouterFlows.HomeTasksFlow]: NestedNavigatorParams<{
        [ERouterScreens.TasksScreen]: undefined;
        [ERouterScreens.TaskDetailsScreen]: ITaskDetailsScreenParams;
        [ERouterScreens.FinishTaskScreen]: IFinishTaskScreenParams;
      }>;
      [ERouterFlows.HomeWalletFlow]: NestedNavigatorParams<{
        [ERouterScreens.WalletScreen]: undefined;
        [ERouterScreens.CouponsScreen]: undefined;
      }>;
    }>;
  }>;
  [ERouterScreens.VerifyAccountScreen]: {
    onFinishRoute: {
      routeName: keyof IRouteParams;
      params?: any;
    }
  }
  [ERouterScreens.AccountDetailsScreen]: undefined;
}

export declare namespace RouterScreenProps {
  // Auth
  interface ILoginScreenProps extends StackScreenProps<IRouteParams, ERouterFlows.AuthFlow> {}
  interface IRegisterScreenProps extends StackScreenProps<IRouteParams, ERouterFlows.AuthFlow> {}

  // Actions
  interface IActionsScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}
  interface IActionDetailsScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}

  // Tasks
  interface ITaskDetailsScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}
  interface IFinishTaskScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}
  interface ITasksScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}

  // Wallet
  interface IWalletScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}
  interface ICouponsScreenProps extends DrawerScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}

  // Account
  interface IVerifyAccountScreenProps extends StackScreenProps<IRouteParams, ERouterScreens.VerifyAccountScreen> {}
  interface IAccountDetailsScreenProps extends StackScreenProps<IRouteParams, ERouterScreens.AccountDetailsScreen> {}
}
