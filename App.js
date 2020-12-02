import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  return (
    <>
      <ScrollView backgroundColor={'#1b262c '}>
        <SafeAreaView style={styles.container}>
          <View style={styles.resultCon}>
            <Text style={styles.resultValue}>12.23</Text>
          </View>
          <View style={styles.inputCon}>
            <TextInput
              keyboardType="numeric"
              placeholder={'Enter Value'}
              placeholderTextColor={'#c1c1c1'}
              style={styles.inputValue}></TextInput>
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
});
export default App;
