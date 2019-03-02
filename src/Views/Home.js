import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
let { height, width } = Dimensions.get('window');
import Swiper from 'react-native-swiper';

class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
            data: [
                {
                    img: require('../img/img5.jpg'),
                    text1: 'Digital',
                    text2: 'Marketing',
                    subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
                },
                {
                    img: require('../img/img6.jpg'),
                    text1: 'Digital',
                    text2: 'Marketing',
                    subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
                },
                {
                    img: require('../img/img8.jpg'),
                    text1: 'Digital',
                    text2: 'Marketing',
                    subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
                },
                {
                    img: require('../img/img9.jpg'),
                    text1: 'Digital',
                    text2: 'Marketing',
                    subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
                }
            ]
        }
    }
    render() {
        console.log(this.props,"props")
        let { data } = this.state
        return (
            <View style={{ flex: 1, position: 'relative' }}>
                <Swiper style={styles.wrapper}
                    loop={false}
                    showsButtons={true}
                    dotStyle={{ borderColor: '#fff', borderWidth: 1 }}
                    dotColor='#bbb'
                    activeDotColor='black'
                    nextButton={
                     <View style={{height:height,paddingBottom:35, justifyContent:'flex-end',marginRight: 10}}>
                        <Text style={{color:'#fff'}}>NEXT</Text>
                    </View>
                    }
                    prevButton={<View style={styles.buttonTextOut}>
                        <Text style={styles.buttonText}>SKIP</Text>
                    </View>}>
                    {data.map((item, key) => {
                        return(
                            <View style={styles.slide1} key={key}>
                                <Image style={{height: '60%',width: '100%'}} source={item.img} />
                                <View style={{position: 'absolute',top: '60%',width: '100%'}}>
                                    <Text style={styles.textHeading}>{item.text1}</Text>
                                    <Text style={styles.textHeading}>{item.text2}</Text>
                                    <Text style={styles.textsubheading}>{item.subHeading}</Text>
                                </View>
                            </View>
                        )
                    })}
                </Swiper>
            </View>
        )
    }
}
export default Home;

const styles = StyleSheet.create({

    skipBtn:{
        position:'absolute',
        bottom:22,
        left:18
    },
    skipText:{
        color:'#fff',
        fontSize:14,
        fontWeight: "400"

    },
    buttonTextOut: {
        // position: 'relative',
        // height: height,
    },
    buttonText: {
        borderWidth:2,
        fontSize: 11,
        zIndex:999999,
        position: 'absolute',
        bottom: 60,
        right: 30,
        color: '#fff',
        backgroundColor: 'red'
    },
    slide1: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    textHeading: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#000'
    },
    textsubheading: {
        fontSize: 12,
        padding: 40,
        paddingTop: 30,
        textAlign: 'center'
    }
});
