import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity} from 'react-native';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import Icons from 'react-native-vector-icons/AntDesign'

export default class Home extends Component {
static navigationOptions = {
    header: null
}
state = {
    toggles: [
        {
            id: 1,
            title: 'Create new project'
        },
        {
            id: 2,
            title: 'Create new project'
        },
        {
            id: 3,
            title: 'Create new project'
        },
        {
            id: 4,
            title: 'Create new project'
        },
        {
            id: 5,
            title: 'Create new project'
        },
        {
            id: 6,
            title: 'Create new project'
        },
        {
            id: 7,
            title: 'Create new project'
        }
    ],
    toggle: []
}
handleClickCheck(val) {
    console.log(val,"value")
    let { toggle } = this.state;
    let index = toggle.indexOf(val)
    console.log(index,"index")
    if (index == -1) {
        toggle.push(val)
    }
    else{
        toggle.splice(index, 1)
    }
    this.setState({ toggle })
}
  render() {
      let { toggles, toggle } = this.state
    return (
        <View style={[styles.container]}>
            <Text style={{fontSize: 20,textAlign: 'center'}}>All Tasks</Text>
            <View style={{marginTop: 20}}>
                {toggles.map((itm,key) => {
                    let activeImage = toggle.includes(itm.id)
                    return <TouchableOpacity style={{height: 50,borderRadius: 25,justifyContent: 'center',paddingLeft: 20,paddingRight: 20,elevation: 2,marginBottom: 20,shadowColor:'#000',shadowOffset: {width: 0, height: 2},shadowOpacity: 0.8,shadowRadius: 2,backgroundColor: '#fff'}} onPress={this.handleClickCheck.bind(this, itm.id)} key={key} activeOpacity={0.1}>
                                <Text style={{fontSize: 15}}>{itm.title}</Text>
                                <View style={{position: 'absolute',height: 35,width: 35,right: 20,top: 10}}>
                                    {activeImage && <Image source={require('../img/steps-checked.png')} style={{width: '100%',height: '100%'}} />}
                                </View>
                            </TouchableOpacity>
                })}
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  }
});
