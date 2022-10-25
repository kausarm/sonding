import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Gap from '../components/Gap';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../components/Button';
// import SelectDropdown from 'react-native-select-dropdown';

export default function Beranda({navigation}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Tangki CPO 1', value: 'Tangki CPO 1'},
    {label: 'Tangki CPO 2', value: 'Tangki CPO 2'},
    {label: 'Tangki CPO 3', value: 'Tangki CPO 3'},
    {label: 'Tangki PKO 1', value: 'Tangki PKO 1'},
    {label: 'Tangki PKO 2', value: 'Tangki PKO 2'},
    {label: 'Tangki PKO 3', value: 'Tangki PKO 3'},
  ]);
  return (
    <>
      <Header />
      <Text style={styles.text}>Pemasukan Nilai Pengukuran</Text>
      <View style={styles.wrapper}>
        <Input label="Tinggi :" height={50} labelOn satuan="Cm" />
        <Gap height={17} />
        <Input label="Suhu :" height={50} labelOn satuan="°C" />
        <Gap height={17} />
        <Input label="Beda :" height={50} labelOn satuan="ℓ" />
        <Gap height={17} />
        <Text style={styles.label}>Tangki :</Text>
        <DropDownPicker
          style={styles.picker}
          placeholder="Pilih Tangki"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <Gap height={55} />
        <Button label="Hitung" onPress={() => navigation.navigate('Output')} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 30,
  },
  text: {
    padding: 30,
    marginTop: 23,
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
  },
  picker: {
    backgroundColor: '#E5E5E5',
    borderColor: '#E5E5E5',
    borderRadius: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 12,
    lineHeight: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});
