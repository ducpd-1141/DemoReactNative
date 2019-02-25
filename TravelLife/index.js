/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './HomeScreen';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);


// import {createStackNavigator, createAppContainer} from 'react-navigation';

// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Edit: {screen: EditScreen},
// });

// const App1 = createAppContainer(MainNavigator);

// export default App1;