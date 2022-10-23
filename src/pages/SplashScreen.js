import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Image,
} from 'react-native';
import React from 'react';
import image from '../assets/images/ui.png';
import bumn from '../assets/images/bumn.png';
import ptpn from '../assets/images/ptpn.png';
import ptpn4 from '../assets/images/logo.png';
import Gap from '../components/Gap';
import akhlak from '../assets/images/akhlak.png';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('Login');
  }, 3000);
  return (
    <SafeAreaView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.upper}>
        <Image source={bumn} style={{width: 102, height: 20}} />
        <Gap width={20} />
        <Image source={ptpn} style={{width: 100, height: 50}} />
        <Gap width={20} />
        <Image source={ptpn4} style={{width: 55, height: 56}} />
      </View>
      <View style={styles.bottomView}>
        <Image source={akhlak} style={{width: 114, height: 112}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  upper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    height: 90,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    height: 168,
    bottom: -1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
