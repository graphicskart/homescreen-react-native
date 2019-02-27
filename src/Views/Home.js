import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity} from 'react-native';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import Icons from 'react-native-vector-icons/AntDesign'

export default class Home extends Component {
static navigationOptions = {
    header: null
}
state = {
    successModal: false,
    errorModal: false
}
onPress = () => {
    this.props.navigation.navigate('Register')
}
  render() {
    const slideAnimation = new SlideAnimation({
        slideFrom: 'bottom',
    });
    return (
        <View style={[styles.container]}>
            <TouchableOpacity style={{height: 40,borderRadius: 20,backgroundColor: '#6fb141',justifyContent: 'center',alignItems: 'center',marginBottom: 20}} onPress={() => this.setState({successModal: true})}>
                <Text style={{color: '#fff'}}>Success</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: 40,borderRadius: 20,backgroundColor: '#d05e53',justifyContent: 'center',alignItems: 'center',marginBottom: 20}} onPress={() => this.setState({errorModal: true})}>
                <Text style={{color: '#fff'}}>Error</Text>
            </TouchableOpacity>
            <Dialog
                    visible={this.state.successModal}
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    dialogAnimation={slideAnimation}
                    dialogStyle={{borderRadius: 4,width: '100%',maxHeight: '95%'}}
                    containerStyle={{justifyContent: 'center',padding: 10}}
                    onTouchOutside={() => {
                        this.setState({successModal: false})
                      }}
                >
                    <DialogContent>
                        <View style={{position: 'relative',paddingTop: 40}}>
                            <TouchableOpacity
                                style={{position: 'absolute',right: -10,top:10,paddingLeft: 10, paddingRight: 10,zIndex: 10}}
                                onPress={() => {
                                    this.setState({successModal: false})
                                }}>
                                <Icons name='close' size={30} color ='#6fb141' />
                            </TouchableOpacity>
                            <View>
                                <Text style={{textAlign: 'center',fontSize: 24,color: '#000',marginBottom: 10}}>Success!</Text>
                                <Text style={{textAlign: 'center',fontSize: 18,paddingLeft: 30,paddingRight: 30}}>Your account has been created.</Text>
                                <View style={{height: 100,width: 100,borderWidth: 2,borderColor: '#6fb141',borderRadius: 50,marginTop: 50,marginBottom: 60,alignSelf: 'center',alignItems: 'center',justifyContent: 'center'}}>
                                    <Icons name='check' size={30} color ='#6fb141' />
                                </View>
                                <TouchableOpacity style={{height: 40,borderRadius: 20,backgroundColor: '#6fb141',justifyContent: 'center',alignItems: 'center',marginBottom: 20}} onPress={() => this.setState({successModal: false})}>
                                    <Text style={{color: '#fff'}}>Continue</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </DialogContent>
                </Dialog>
                <Dialog
                    visible={this.state.errorModal}
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    dialogAnimation={slideAnimation}
                    dialogStyle={{borderRadius: 4,width: '100%',maxHeight: '95%',backgroundColor: '#d05e53'}}
                    containerStyle={{justifyContent: 'center',padding: 10}}
                    onTouchOutside={() => {
                        this.setState({errorModal: false})
                      }}
                >
                    <DialogContent>
                        <View style={{position: 'relative',paddingTop: 40}}>
                            <TouchableOpacity
                                style={{position: 'absolute',right: -10,top:10,paddingLeft: 10, paddingRight: 10,zIndex: 10}}
                                onPress={() => {
                                    this.setState({errorModal: false})
                                }}>
                                <Icons name='close' size={30} color ='#fff' />
                            </TouchableOpacity>
                            <View>
                                <Text style={{textAlign: 'center',fontSize: 24,color: '#fff',marginBottom: 10}}>Face-Plant!</Text>
                                <Text style={{textAlign: 'center',fontSize: 18,paddingLeft: 30,paddingRight: 30,color: '#fff'}}>Ooops, something went wrong.</Text>
                                <View style={{height: 100,width: 100,borderWidth: 2,borderColor: '#fff',borderRadius: 50,marginTop: 50,marginBottom: 60,alignSelf: 'center',alignItems: 'center',justifyContent: 'center'}}>
                                    <Icons name='close' size={30} color ='#fff' />
                                </View>
                                <TouchableOpacity style={{height: 40,borderRadius: 20,backgroundColor: '#933b33',justifyContent: 'center',alignItems: 'center',marginBottom: 20}} onPress={() => this.setState({errorModal: false})}>
                                    <Text style={{color: '#fff'}}>Try Again</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </DialogContent>
                </Dialog>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
