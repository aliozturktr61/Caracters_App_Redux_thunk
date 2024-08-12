import {Provider} from 'react-redux';
import RootNavigator from './src/router/rootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/store/index';

const App = () => {
  return (
    <Provider store={store}>
    
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
);
};
export default App;
