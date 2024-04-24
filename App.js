import React,{useContext} from 'react'
import {Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import { BlogWrapper } from './src/context/BlogContext'
import BlogContext from './src/context/BlogContext'
import { IconButton, Colors } from 'react-native-paper'


const Stack = createNativeStackNavigator()

{/* <Button
// onPress={() => alert('This is a button!')}
 onPress={() => addBlogPost()}
 title="Add"
/> */}
function App() {
  const {data,addBlogPost} = useContext(BlogContext)
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen name = 'Home'
          component = {Home} 
          options={{
            headerTitle: 'Blog List',
            headerRight: () => (
              <IconButton
                  icon="note-plus"
                  iconColor= '#B233FF'
                  size={20}
                  onPress={() => addBlogPost()}
              />
            ),
          }}
        />
      </Stack.Navigator> 
    </NavigationContainer>
  )
}

export default ()=>{
  return <BlogWrapper>
       <App/>
    </BlogWrapper>
}

