import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Gap from '../components/Gap';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../src/assets/images/logo.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Input placeholder="Masukkan user ID" height={40} />
        <Gap height={27} />
        <Input placeholder="Password" height={40} password />
      </View>
      <Gap height={34} />
      <Button label="Masuk" onPress={() => navigation.replace('Beranda')} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>*Apabila anda bermasalah saat prosess </Text>
        <Text style={styles.text}>log in, harap menghubungi Administrator</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    justifyContent: 'center',
  },
  image: {
    width: 149,
    height: 150,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 37,
  },
  textWrapper: {
    marginTop: 103,
  },
});
