import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { Ionicons } from '@expo/vector-icons';
const Start = ({ navigation, router }) => {
  const [isBiometricSupported, setIsBiometricSupported] =
    React.useState(false);
  const [fingerprint, setFingerprint] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
      const enroll = await LocalAuthentication.isEnrolledAsync();
      if (enroll) {
        setFingerprint(true);
      }
    })();
  }, []);

  const handle = async () => {
    try {
      const biometricAuth =
        await LocalAuthentication.authenticateAsync({
          promptMessage: 'Login with Biometrics',
          disableDeviceFallback: true,
          cancelLabel: 'Cancel',
        });
      if (biometricAuth.success) {
        navigation.navigate('Kategoriyalar');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Xoliqov F.</Text>
      <View
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 50,
        }}
      >
        <TouchableOpacity style={styles.biometricLogin}>
          {isBiometricSupported && fingerprint ? (
            <TouchableOpacity onPress={handle} width={'50%'}>
              <Text style={styles.button}>
                <Ionicons
                  name="md-finger-print-outline"
                  size={120}
                  color="white"
                />
              </Text>
            </TouchableOpacity>
          ) : (
            <View>
              <Text>fingerprint not supported/ allocated</Text>
            </View>
          )}
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 32 }}>
          Biomertik kirish
        </Text>
      </View>
      <View
        style={{
          width: 250,
          height: 1,
          backgroundColor: 'gray',
          marginBottom: 50,
        }}
      ></View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => this.setState({ email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Parol..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => this.setState({ password: text })}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Parolni unutdingizmi?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={styles.loginText}
          onPress={() => {
            navigation.navigate('Kategoriyalar');
          }}
        >
          KIRISH
        </Text>
      </TouchableOpacity>
      <View style={{ marginTop: 130, fontSize: 24 }}>
        <Text style={{ fontSize: 24, color: '#fb5b5a' }}>
          &copy; Created by{' '}
          <Text
            style={{ textDecorationLine: 'underline' }}
            onPress={() => Linking.openURL('http://google.com')}
          >
            Xoliqov Fazliddin
          </Text>{' '}
          712-19
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    paddingTop: 200,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    fontSize: 20,
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 14,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  biometricLogin: {
    width: '50%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 24,
  },
  button: {
    borderWidth: 1,
    padding: 40,
    fontSize: 100,
    borderColor: '#fb5b5a',
  },
});

export default Start;
