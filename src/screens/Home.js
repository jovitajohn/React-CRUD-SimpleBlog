import React,{useContext} from 'react'
import {Text,View,StyleSheet} from 'react-native'
import BlogContext from '../context/BlogContext'

const Home = () => {
    const value = useContext(BlogContext)
    return <View>
            <Text> Home screen</Text>
            <Text> {value} </Text>
        </View>

}

const styles = StyleSheet.create({

})

export default Home