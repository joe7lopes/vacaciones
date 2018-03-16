import React from 'react';
import SignIn from './components/auth/SignIn';

// import { TabNavigator, StackNavigator } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Profile from './components/profile/Profile';
// import MyCallendar from './components/MyCallendar';
// import Events from './components/events/Events';
// import NewEvent from './components/events/NewEvent';
// import SearchContact from './components/events/searchContact/SearchContact';
// import Settings from './components/Settings';

// const EventsStack = StackNavigator({
//   Events: { screen: Events },
//   NewEvent: { screen: NewEvent },
//   SearchContact: { screen: SearchContact }
// });


// const App = TabNavigator(
//   {
//     Events: { screen: EventsStack },
//     MyCallendar: { screen: MyCallendar },
//     Profile: { screen: Profile },
//     Settings: { screen: Settings }
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Profile') {
//           iconName = `ios-contact${focused ? '' : '-outline'}`;
//         } else if (routeName === 'MyCallendar') {
//           iconName = `ios-calendar${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Events') {
//           iconName = `ios-clipboard${focused ? '' : '-outline'}`;
//         }

//         return <Ionicons name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'gray',
//       inactiveTintColor: 'gray'
//     }
//   }
// );

// export default App;

export default App = SignIn;
