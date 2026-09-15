import { View, Text, StyleSheet, Linking, Pressable,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useState } from 'react';

function JobDetailsScreen({ route }: any) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { job, onSave, onDelete } = route.params;
  const [currentJob, setCurrentJob] = useState(job);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Details</Text>

      <View style={styles.card}>
        <Text style={styles.company}>{currentJob.company}</Text>

        <Text style={styles.position}>{currentJob.position}</Text>

        <Text style={styles.label}>Status</Text>

        <View style={styles.statusBadge}>
          <Text style={styles.status}>{currentJob.status}</Text>
        </View>

        <Text style={styles.label}>Application Date</Text>

        <Text style={styles.date}>
          {new Date(currentJob.applicationDate).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </Text>

        <Text style={styles.label}>Location</Text>

        <Text style={styles.detail}>{currentJob.location}</Text>

        <Text style={styles.label}>Job Description</Text>

        <Text style={styles.detail}>
          {currentJob.jobDescription || 'No job description added.'}
        </Text>

        <Text style={styles.label}>Notes</Text>

        <Text style={styles.detail}>
          {currentJob.notes || 'No notes added.'}
        </Text>

        {currentJob.followUpDate ? (
          <>
            <Text style={styles.label}>Follow-up Date</Text>

            <Text style={styles.detail}>{currentJob.followUpDate}</Text>
          </>
        ) : null}

        {currentJob.interviewDate ? (
          <>
            <Text style={styles.label}>Interview Date</Text>

            <Text style={styles.detail}>{currentJob.interviewDate}</Text>
          </>
        ) : null}

        <Text style={styles.label}>Job Posting</Text>

        <Pressable onPress={() => Linking.openURL(currentJob.jobUrl)}>
          <Text style={styles.link}>{currentJob.jobUrl}</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.editButton}
        onPress={() => {
          navigation.navigate('EditJob', {
            job: currentJob,
            onSave: updatedJob => {
              setCurrentJob(updatedJob);
              onSave(updatedJob);
            },
          });
        }}
      >
        <Text style={styles.editButtonText}>Edit Application</Text>
      </Pressable>
      <Pressable
        style={styles.deleteButton}
        onPress={() => {
          Alert.alert(
            'Delete Application',
            `Are you sure you want to delete your application for ${currentJob.position} at ${currentJob.company}?`,
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {
                  onDelete(currentJob.id);
                  navigation.goBack();
                },
              },
            ],
          );
        }}
      >
        <Text style={styles.deleteButtonText}>Delete Application</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    marginTop: 25,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    borderColor: '#ddd',
  },

  company: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  position: {
    fontSize: 18,
    marginTop: 8,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
  },

  statusBadge: {
    marginTop: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ff8500',
    justifyContent: 'center',
    alignItems: 'center',
  },

  status: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  date: {
    fontSize: 16,
    marginTop: 8,
  },

  detail: {
    fontSize: 16,
    marginTop: 8,
  },

  link: {
    fontSize: 16,
    marginTop: 8,
    textDecorationLine: 'underline',
    color: '#2196F3',
  },

  editButton: {
    marginTop: 20,
    backgroundColor: '#222020',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    marginTop: 12,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d32f2f',
  },

  deleteButtonText: {
    color: '#d32f2f',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default JobDetailsScreen;
