import {StyleSheet, View} from 'react-native';
import React from 'react';
import MainHeader from '../components/MainHeader';
import CardRiwayat from '../components/CardRiwayat';
import {useNavigation} from '@react-navigation/native';

const Riwayat = () => {
  const navigation = useNavigation();

  return (
    <>
      <MainHeader label="Riwayat" onPress={() => navigation.goBack()} />
      <View style={styles.wrapper}>
        <CardRiwayat
          detail="Senin, 4 Juli 2022"
          name="419336 Kg - Rahmat Dany Rizki"
          time="08.00 WIB"
        />
        <CardRiwayat
          detail="Senin, 4 Juli 2022"
          name="419336 Kg - Hafidh Asyi"
          time="08.00 WIB"
        />
        <CardRiwayat
          detail="Senin, 4 Juli 2022"
          name="419336 Kg - Maulida Syadzwina"
          time="08.00 WIB"
        />
      </View>
    </>
  );
};

export default Riwayat;

const styles = StyleSheet.create({});
