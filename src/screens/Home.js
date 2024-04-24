import React,{useContext} from 'react'
import {Text,View,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native'
import BlogContext from '../context/BlogContext'

const Home = () => {
    const {data,addBlogPost} = useContext(BlogContext)
    return <View >
            <Text> Home screen</Text>
            {/* <View style = {styles.button}>
                <Button
                title='Add Post'
                onPress={()=>addBlogPost()}
                />
            </View> */}
            <FlatList 
            data = {data}
            keyExtractor={val =>{val.title}}
            renderItem={({item})=>{
                return <Text>{item.title}</Text>
            }}
            />
        </View>

}

const styles = StyleSheet.create({

    button:{
        alignSelf: 'flex-end',
        position: 'absolute',
    },

})

export default Home