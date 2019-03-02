import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Container, Content } from 'native-base';
import StarRating from 'react-native-star-rating';
import Icons from 'react-native-vector-icons/FontAwesome'
let { height, width } = Dimensions.get('window');

class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
            popularData: [
                {
                    img: require('../img/img3.jpg'),
                    heading: 'CULTURE IN JAPAN'
                },
                {
                    img: require('../img/image.jpeg'),
                    heading: 'CULTURE IN JAPAN'
                },
                {
                    img: require('../img/background.jpg'),
                    heading: 'CULTURE IN JAPAN'
                },
                {
                    img: require('../img/img3.jpg'),
                    heading: 'CULTURE IN JAPAN'
                }
            ],
            starCount: 3.5
        }
    }
    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }
    render() {
        console.log(this.props,"props")
        let { popularData } = this.state
        return (
            <Container>
                <Content style={{paddingTop: 24,backgroundColor: '#eee'}}>
                    <View style={styles.searchBox}>
                        <View style={styles.search}>
                            <Image source={require('../img/search.jpg')} />
                        </View>
                        <TextInput placeholder="Search your journey" placeholderTextColor="#bbb" style={styles.textInput}/>
                        <View style={styles.filterIcon}>
                            <TouchableOpacity>
                                <Icons name="sort-amount-asc" color ='#bbb' size={20}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.headingView}>
                        <Text style={styles.heading}>Popular</Text>
                        <TouchableOpacity style={styles.rightMore}><Text style={styles.rightMoreText}>More</Text></TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.mainCon}>
                            {popularData.map((item,key) => {
                                return(
                                    <View style={styles.mainView} key={key}>
                                        <Image source={item.img} style={styles.imageStyle}/>
                                        <Text style={styles.texthead}>{item.heading}</Text>
                                        <View style={styles.textUsdCon}>
                                            <Text style={styles.textUsd}>USD 5300.00</Text>
                                            <Text style={[styles.textUsd,{marginLeft: 10}]}>10DAYS</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                    <View style={styles.headingView}>
                        <Text style={styles.heading}>Activity</Text>
                        <TouchableOpacity style={styles.rightMore}><Text style={styles.rightMoreText}>More</Text></TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.mainCon}>
                            {
                                popularData.map((item, key) => {
                                    return(
                                        <View style={[styles.mainView,{width: 200,height: 120}]} key={key}>
                                            <Image source={item.img} style={styles.imageStyle}/>
                                            <Text style={styles.activityHead}>AURORA</Text>
                                            <View style={[styles.textActivityCon]}>
                                                <Text style={styles.textUsd}>USD 5300.00</Text>
                                                <Text style={[styles.textUsd,{marginLeft: 10}]}>10DAYS</Text>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                    <View style={{marginBottom: 25}}>
                        <View style={styles.headingView}>
                            <Text style={styles.heading}>Recommended</Text>
                        </View>
                        {
                            popularData.map((item, key) => {
                                return(
                                    <View style={styles.mainList} key={key}>
                                        <View style={styles.imageOuter}>
                                            <Image source={item.img} style={styles.imageStyle}/>
                                        </View>
                                        <View style={styles.rightList}>
                                            <Text style={styles.tripFrance}>Romantic trip to France</Text>
                                            <View style={styles.usdTextActivity}>
                                                <Text style={styles.usdTextAct}>USD 5300.00</Text>
                                                <Text style={styles.usdTextActText}>10DAYS</Text>
                                            </View>
                                            <StarRating
                                                maxStars={5}
                                                rating={this.state.starCount}
                                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                fullStarColor={'orange'}
                                                starSize={12}
                                                containerStyle={{width: 70}}
                                                disabled={true}
                                            />
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </Content>
            </Container>
        )
    }
}
export default Home;

const styles = StyleSheet.create({
    searchBox: {
        paddingLeft: 20,
        paddingRight: 60
    },
    search: {
        position: 'absolute',
        left: 30,
        top: 11,
        zIndex: 10
    },
    textInput: {
        height: 40,
        fontSize: 14,
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 4,
        paddingLeft: 40,
        borderWidth: 1,
        borderColor: '#eee'
    },
    filterIcon: {
        position: 'absolute',
        right: 20,
        top: 10
    },
    headingView: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
        marginBottom: 20
    },
    heading: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    rightMore: {
        position: 'absolute',
        right: 20,
        top: 10
    },
    rightMoreText: {
        fontSize: 12,
        color: '#bbb'
    },
    mainView: {
        width: 150,
        height: 150,
        borderRadius: 4,
        backgroundColor: '#eee',
        overflow: 'hidden',
        marginRight: 15
    },
    mainCon: {
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        marginBottom: 10
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    texthead: {
        position: 'absolute',
        left: 10,
        bottom: 30,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textUsdCon: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    textUsd: {
        fontSize: 10,
        color: '#fff'
    },
    activityHead: {
        position: 'absolute',
        right: 10,
        bottom: 25,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textActivityCon: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    mainList: {
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 15,
        borderRadius: 5
    },
    imageOuter: {
        width: 80,
        height: 80,
        overflow: 'hidden',
        backgroundColor: '#eee',
        borderRadius: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 4
    },
    rightList: {
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    tripFrance: {
        fontSize: 16,
        color: '#000',
        marginBottom: 3
    },
    usdTextActivity: {
        flexDirection: 'row',
        marginBottom: 3
    },
    usdTextAct: {
        fontSize: 10,
        color: '#bbb'
    },
    usdTextActText: {
        marginLeft:10,
        color: '#bbb',
        fontSize: 10,
    }
});
