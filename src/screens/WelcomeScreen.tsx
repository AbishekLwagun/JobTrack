import { View, Text, StyleSheet, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator.tsx';

function WelcomeScreen() {
  // const navigation = useNavigation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();


  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, JobTrack!</Text>

      <Text style={styles.subtitle}>
        Track Your Job Applications In One Place
      </Text>

      <Pressable style={styles.button}  onPress={() => navigation.navigate('Home')  }>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff8500',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitle: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
  },

  button: {
    marginTop: 24,
    backgroundColor: '#222020',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WelcomeScreen;
