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
  HomeWalletFlow = 'HomeWalletFlow',
  HomeCreateActionFlow = 'HomeCreateActionFlow'
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
  CouponsScreen = 'CouponsScreen',
  RoleSelectScreen = 'RoleSelectScreen',
  CreateActionScreen = 'CreateActionScreen',
  CreateTaskScreen = 'CreateTaskScreen'
}

export type RouteName = ERouterFlows | ERouterScreens;

type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
    ? { screen: K; params?: ParamList[K] }
    : { screen: K; params: ParamList[K] }
}[keyof ParamList]

export interface IActionDetailsScreenParams {
  volunteerActionId: string;
}
export interface ITaskDetailsScreenParams {
  volunteerTaskId: string;
  volunteerAction: IVolunteerAction;
  taskName: string;
}
export interface IFinishTaskScreenParams {
  volunteerTask: IVolunteerTask;
  taskName: string;
}
export interface ICreateTaskScreenParams {
  actionId: string;
}

export interface NextRoute {
  routeName: keyof IRouteParams;
  params?: any;
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
        [ERouterScreens.CreateTaskScreen]: ICreateTaskScreenParams;
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
      [ERouterFlows.HomeCreateActionFlow]: NestedNavigatorParams<{
        [ERouterScreens.CreateActionScreen]: undefined;
      }>
    }>;
  }>;
  [ERouterScreens.VerifyAccountScreen]: {
    onFinishRoute: NextRoute;
  }
  [ERouterScreens.AccountDetailsScreen]: undefined;
  [ERouterScreens.RoleSelectScreen]: NextRoute;
}

export declare namespace RouterScreenProps {
  // Auth
  interface ISelectRoleScreenProps extends StackScreenProps<IRouteParams, ERouterScreens.RoleSelectScreen> {}
  interface ILoginScreenProps extends StackScreenProps<IRouteParams, ERouterFlows.AuthFlow> {}
  interface IRegisterScreenProps extends StackScreenProps<IRouteParams, ERouterFlows.AuthFlow> {}

  // Actions
  interface IActionsScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}
  interface IActionDetailsScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}
  interface ICreateActionScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}

  // Tasks
  interface ITaskDetailsScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}
  interface IFinishTaskScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}
  interface ITasksScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}
  interface ICreateTaskScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}

  // Wallet
  interface IWalletScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}
  interface ICouponsScreenProps extends DrawerScreenProps<IRouteParams, ERouterFlows.HomeDrawer> {}

  // Account
  interface IVerifyAccountScreenProps extends StackScreenProps<IRouteParams, ERouterScreens.VerifyAccountScreen> {}
  interface IAccountDetailsScreenProps extends StackScreenProps<IRouteParams, ERouterScreens.AccountDetailsScreen> {}
}
