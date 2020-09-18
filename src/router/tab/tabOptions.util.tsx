import React from 'react';
import { GetTabBarIcon, GetTabBarLabel, TabIconNameMap, TabLabelMap } from './tabOptions.types';
import { RouteName } from '../../shared/types/router.types';
import { Icon } from 'react-native-elements';
import Typography from '../../components/atoms/Typography/typography';
import { mt } from '../../shared/styles/util.styles';

export const getTabBarIcon = (iconMap: TabIconNameMap, routeName: RouteName): GetTabBarIcon => (props) => {
  if (!routeName || !props || !iconMap[routeName]) {
    return null
  }

  const tabIconName = iconMap[routeName]!;
  const {
    color,
    focused
  } = props;

  return (
    <Icon
      name={focused ? tabIconName.focused.iconName : tabIconName.idle.iconName}
      type={focused ? tabIconName.focused.iconType : tabIconName.idle.iconType}
      color={color}
      size={18}
    />
  )
}

export const getTabBarLabel = (labelMap: TabLabelMap, routeName: RouteName): GetTabBarLabel => (props) => {
  if (!routeName || !props || !labelMap[routeName]) {
    return null
  }

  const label = labelMap[routeName]!;

  return (
    <Typography fontSize={12} color={props.color} style={mt(1)}>
      {label}
    </Typography>
  )
}
