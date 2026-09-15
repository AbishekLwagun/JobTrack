import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import AddJobScreen from '../screens/AddJobScreen.tsx';
import JobDetailsScreen from '../screens/JobDetailsScreen';
import EditJobScreen from '../screens/EditJobScreen';

import { Job } from '../types/Job.ts';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  AddJob: {
    onSave: (job: Job) => void;
  };
  JobDetails: {
    job: Job;
    onSave: (job: Job) => void;
    onDelete: (jobId: string) => void;
  };
  EditJob: {
    job: Job;
    onSave: (job: Job) => void;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddJob" component={AddJobScreen} />
        <Stack.Screen name="JobDetails" component={JobDetailsScreen}/>
        <Stack.Screen name="EditJob" component={EditJobScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
