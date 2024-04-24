import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import { BlogWrapper } from './src/context/BlogContext';


const Stack = createNativeStackNavigator()

function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen name = 'Home' component = {Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ()=>{
  return <BlogWrapper>
       <App/>
    </BlogWrapper>
}

