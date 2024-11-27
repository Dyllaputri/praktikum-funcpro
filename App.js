import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import addTodoScreen from './src/screen/addTodoScreen';
import viewTodosscreen from './src/screen/viewTodosscreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "ViewTodos">
          <Stack.Screen
            name = "AddTodo"
            component = {addTodoScreen}
            options = {{title: 'Tambah To-Do'}}
          />
          <Stack.Screen
            name = "ViewTodos"
            component = {viewTodosscreen}
            options = {{title: 'Daftar To-Do'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;