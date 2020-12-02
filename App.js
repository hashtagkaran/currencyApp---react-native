import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const buttonPress = (currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please Enter a value!',
        backgroundColor: 'green',
      });
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    setResultValue(result.toFixed(2));
  };
  return (
    <>
      <ScrollView
        backgroundColor={'#1b262c'}
        keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultCon}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputCon}>
            <TextInput
              keyboardType="numeric"
              placeholder={'Enter Value'}
              placeholderTextColor={'#c1c1c1'}
              style={styles.inputValue}
              value={inputValue}
              onChangeText={(e) => {
                setInputValue(e);
              }}
            />
          </View>
          <View style={styles.convertButtonCon}>
            {Object.keys(currencyPerRupee).map((currency) => (
              <TouchableOpacity
                key={currency}
                style={styles.converterButton}
                onPress={() => buttonPress(currency)}>
                <Text style={{color: 'white', fontSize: 15}}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setInputValue(0);
                setResultValue(0);
              }}
              style={{
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                margin: 10,
              }}>
              <Text style={{color: 'white'}}>Clear</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  resultCon: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
  },
  resultValue: {fontSize: 30, color: '#fff', fontWeight: 'bold'},
  inputCon: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
  },
  inputValue: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
  convertButtonCon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.33%',
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 10,
    backgroundColor: '#0f4c75',
  },
});
export default App;
