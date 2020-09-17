import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

export enum ERouterFlows {
  AuthFlow = 'AuthFlow',
  HomeFlow = 'HomeFlow'
}

export enum ERouterScreens {
  ActionsScreen = 'ActionsScreen',
  LoginScreen = 'LoginScreen',
  RegisterScreen = 'RegisterScreen',
  TasksScreen = 'TasksScreen',
  WalletScreen = 'WalletScreen',
  VerifyAccountScreen = 'VerifyAccountScreen'
}

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
  [ERouterFlows.HomeFlow]: NestedNavigatorParams<{
    [ERouterScreens.ActionsScreen]: undefined;
    [ERouterScreens.TasksScreen]: undefined;
    [ERouterScreens.WalletScreen]: undefined;
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

  // Home flow
  interface IActionsScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeFlow> {}
  interface ITasksScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeFlow> {}
  interface IWalletScreenProps extends BottomTabScreenProps<IRouteParams, ERouterFlows.HomeFlow> {}

  // Verify flow
  interface IVerifyAccountScreenProps extends StackScreenProps<IRouteParams, ERouterScreens.VerifyAccountScreen> {}
}
