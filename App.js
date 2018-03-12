import React from 'react';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from './components/Profile';
import MyCallendar from './components/MyCallendar';
import Main from './components/Main';

export default App = TabNavigator (
  {
    Main: {screen: Main},
    MyCallendar: {screen: MyCallendar},
    Profile: {screen: Profile}
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if(routeName === 'Profile'){
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }else if(routeName === 'MyCallendar'){
          iconName = `ios-calendar${focused ? '' : '-outline'}`;
        }else if(routeName === 'Main'){
          iconName = `ios-people${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray'
    }
  }
);




