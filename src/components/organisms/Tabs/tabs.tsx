import React, { isValidElement, useState } from 'react';
import { ITabsProps } from './tabs.types';
import { ITabProps } from '../../molecules/Tab/tab.types';
import Tab from '../../molecules/Tab/tab';
import TabPanel from '../../molecules/TabPanel/tabPanel';
import { ITabPanelProps } from '../../molecules/TabPanel/tabPanel.types';
import { View } from 'react-native';

const Tabs: React.FC<ITabsProps> = (props) =>{

  const [selectedTab, setSelectedTab] = useState(props.defaultSelectedTab);

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        {React.Children.map(props.children, child => {
          if (isValidElement(child) && child.type === Tab) {
            return React.cloneElement<ITabProps>(child, {
              ...child.props,
              style: {
                flexGrow: 1
              },
              selectedName: selectedTab,
              onClick: setSelectedTab
            });
          }

          return null;
        })}
      </View>
      <View style={{flexGrow: 1}}>
        {React.Children.map(props.children, child => {
          if (isValidElement(child) && child.type === TabPanel) {
            return React.cloneElement<ITabPanelProps>(child, {
              ...child.props,
              selectedName: selectedTab
            });
          }

          return null;
        })}
      </View>
    </View>
  )
}

export default Tabs;
