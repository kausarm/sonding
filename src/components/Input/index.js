import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function Input({
  placeholder,
  password,
  label,
  height,
  labelOn,
  satuan,
  onChange,
  val,
}) {
  return (
    <>
      <Text style={styles.label(labelOn)}>{label}</Text>
      <View style={styles.input(height)}>
        <TextInput
          onChangeText={onChange}
          style={styles.inputStyle}
          autoCorrect={false}
          secureTextEntry={password}
          placeholder={placeholder}
          defaultValue={val}
        />
        <Text style={styles.text}>{satuan}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: height => ({
    height: height,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 11,
  }),
  inputStyle: {
    paddingVertical: 2,
    color: 'black',
    flex: 1,
    fontSize: 10,
  },
  image: {
    width: 13,
    height: 9,
  },
  label: labelOn => ({
    display: labelOn ? 'flex' : 'none',
    marginBottom: 5,
    fontSize: 12,
    lineHeight: 18,
    color: 'black',
    fontWeight: 'bold',
  }),
  text: {
    color: '#000000',
    fontWeight: '700',
  },
});
