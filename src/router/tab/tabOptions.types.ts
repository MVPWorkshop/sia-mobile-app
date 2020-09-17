import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import React from 'react';
import { DynamicObject } from '../../shared/types/util.types';
import { ERouterFlows, ERouterScreens } from '../../shared/types/router.types';

export type TabScreenOptions = (data: {
  route: {
    name: string;
  }
}) => BottomTabNavigationOptions;

export type GetTabBarIcon = (data: {
  focused: boolean;
  color: string;
  size: number;
}) => React.ReactNode | undefined;

export type GetTabBarLabel = (data: {
  focused: boolean;
  color: string;
}) => React.ReactNode | undefined;

interface ITabIconName {
  idle: {
    iconName: string;
    iconType: string;
  };
  focused: {
    iconName: string;
    iconType: string;
  };
}

export type TabIconNameMap = DynamicObject<ITabIconName, ERouterScreens | ERouterFlows>;
export type TabLabelMap = DynamicObject<string, ERouterScreens | ERouterFlows>;
