import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ChapterItem = ({navigation, item, bookName}) => {
    console.log(item);
    return (
        <View>
            <TouchableOpacity style={styles.bookIndexOne} onPress={()=>{navigation.navigate('readArticle', {chapter: item, bookName: bookName})}}>
                <Text style={styles.bookIndexOneTitle}>{item.title}</Text>  
                <Text style={styles.bookIndexOnePunchLine}>"먼 훗날 나를 읽게 된다면 너는 잠시 울어줄까"</Text>  
                <Text style={styles.bookIndexText}>{item.content}</Text>
            </TouchableOpacity>
            <View style={{borderBottomColor: "gray" ,borderBottomWidth: 1,}}/>
        </View>
    )
}

const readBook = ({navigation, route}) => {
    const { item } = route.params;

    const aboutImage = "http://ojsfile.ohmynews.com/STD_IMG_FILE/2018/0309/IE002297749_STD.jpg"

    function renderChapterList() {
        if(item.chapter == undefined) {
            return null
        }
        else {
            const list = item.chapter.map(chapter => (
                <ChapterItem 
                    navigation={navigation}
                    item={chapter}
                    bookName={item.title}
                />
            ))
            return list
        }
    }

    return (
    <ScrollView style={styles.container}>
        <View  style={styles.bookCoverContainer}>
            <StatusBar style="white" />
            <Image style={styles.bookCoverImage} source={{uri:aboutImage}}></Image>
        </View>
        <View  style={styles.bookInfoContainer}>
            <Text style={styles.bookTitle}>{item.title}</Text>  
            <Text style={styles.bookDesc}>{item.description}</Text>  
            <TouchableOpacity style={styles.subButton}>        
                <Text style={styles.subButtonText}>구독하기</Text>
            </TouchableOpacity>   
        </View>
        <View style={styles.bookIndexContainer}>
            { renderChapterList() }
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({ 

    container: {
        //앱의 배경 색
        backgroundColor:"#F5F4F4",
                flex:1
      },


    bookCoverContainer: {

        width:'90%',
        //컨텐츠의 높이 값
        height:220,
        //컨텐츠의 모서리 구부리기
        marginTop:"%",
        //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
        //각 속성의 값들은 공식문서에 고대로~ 나와 있음
        alignSelf:"center"
    },
    bookCoverImage: {
        marginTop:"7%",
        height:"100%",
        width: "40%",
        alignSelf:"center"


    },
   
    bookInfoContainer: {
        backgroundColor:"#F5F4F4",
        width:'90%',
        //컨텐츠의 높이 값
        height:130,
        //컨텐츠의 모서리 구부리기
        //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
        //각 속성의 값들은 공식문서에 고대로~ 나와 있음
        alignSelf:"center",

    },
    bookTitle: {
        fontSize: 15,
        marginTop: "7%",
        marginLeft:"5%",
        fontSize: 15,
        
    },
    bookDesc: {
        marginTop: "4%",
        marginLeft:"5%",
    },

    subButton:{
        width:"50%",
            height:27,
            padding:"2%",
            backgroundColor:"#fe8d6f",
            borderRadius:15,
            margin:"2%",
            marginLeft: "0%",
            marginTop: "5%",
            alignSelf:"center",    

    },

    subButtonText: {
        color:"white",
        fontWeight:"200",
        //텍스트의 현재 위치에서의 정렬 
        textAlign:"center"
    },


    bookIndexContainer:{
        backgroundColor: '#fff',

    },
    bookIndexOne: {
        marginTop:"5%",
      marginLeft:"5%",
      marginRight:"3%",
      marginBottom:"5%",
    },

    bookIndexOneTitle: {
        fontSize: 15,


    },
    bookIndexOnePunchLine:{
        fontWeight: '700',
        marginLeft:"5%",
        marginTop:"2%",


    },
    bookIndexText :{
        marginLeft:"5%",
        marginTop:"2%",


    },
  





})

export default readBook;
