import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import { Job } from '../types/Job';

function EditJobScreen({ route }: any) {
  const job: Job = route.params.job;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [company, setCompany] = useState(job.company);
  const [position, setPosition] = useState(job.position);
  const [location, setLocation] = useState(job.location);
  const [jobUrl, setJobUrl] = useState(job.jobUrl);
  const [jobDescription, setJobDescription] = useState(job.jobDescription);
  const [notes, setNotes] = useState(job.notes);
  const [followUpDate, setFollowUpDate] = useState(job.followUpDate ?? '');
  const [interviewDate, setInterviewDate] = useState(job.interviewDate ?? '');
  const [status, setStatus] = useState<Job['status']>(job.status);
  const [successMessage, setSuccessMessage] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <Text style={styles.title}>Edit Application</Text>

      <Text style={styles.label}>Company</Text>
      <TextInput
        style={styles.input}
        value={company}
        onChangeText={setCompany}
        placeholder="Enter Company"
      />

      <Text style={styles.label}>Position</Text>
      <TextInput
        style={styles.input}
        value={position}
        onChangeText={setPosition}
        placeholder="Enter Position"
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="e.g. Remote, New York, NY"
      />

      <Text style={styles.label}>Job Posting URL</Text>
      <TextInput
        style={styles.input}
        value={jobUrl}
        onChangeText={setJobUrl}
        placeholder="https://..."
        autoCapitalize="none"
      />

      <Text style={styles.label}>Job Description</Text>
      <TextInput
        style={styles.textArea}
        value={jobDescription}
        onChangeText={setJobDescription}
        placeholder="Enter the job description..."
        multiline
      />

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={styles.textArea}
        value={notes}
        onChangeText={setNotes}
        placeholder="Add notes..."
        multiline
      />

      <Text style={styles.label}>Follow-up Date</Text>
      <TextInput
        style={styles.input}
        value={followUpDate}
        onChangeText={setFollowUpDate}
        placeholder="e.g. September 20, 2026"
      />

      <Text style={styles.label}>Interview Date</Text>
      <TextInput
        style={styles.input}
        value={interviewDate}
        onChangeText={setInterviewDate}
        placeholder="e.g. September 25, 2026"
      />

      <Text style={styles.label}>Status</Text>

      <View style={styles.statusContainer}>
        <Pressable
          style={[
            styles.statusButton,
            status === 'Applied' && styles.selectedStatus,
          ]}
          onPress={() => setStatus('Applied')}
        >
          <Text>Applied</Text>
        </Pressable>

        <Pressable
          style={[
            styles.statusButton,
            status === 'Interview' && styles.selectedStatus,
          ]}
          onPress={() => setStatus('Interview')}
        >
          <Text>Interview</Text>
        </Pressable>

        <Pressable
          style={[
            styles.statusButton,
            status === 'Rejected' && styles.selectedStatus,
          ]}
          onPress={() => setStatus('Rejected')}
        >
          <Text>Rejected</Text>
        </Pressable>

        <Pressable
          style={[
            styles.statusButton,
            status === 'Offer' && styles.selectedStatus,
          ]}
          onPress={() => setStatus('Offer')}
        >
          <Text>Offer</Text>
        </Pressable>
      </View>
      {successMessage ? (
        <View style={styles.successMessage}>
          <Text style={styles.successText}>✓ Application updated!</Text>
        </View>
      ) : null}
      <Pressable
        style={styles.saveButton}
        onPress={() => {
          const updatedJob: Job = {
            ...job,
            company,
            position,
            location,
            jobUrl,
            jobDescription,
            notes,
            followUpDate: followUpDate || undefined,
            interviewDate: interviewDate || undefined,
            status,
          };

          route.params.onSave(updatedJob);
          setSuccessMessage(true);

          setTimeout(() => {
            navigation.goBack();
          }, 1500);
        }}
      >
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </Pressable>
    </ScrollView>
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
    marginBottom: 10,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginTop: 8,
  },

  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginTop: 8,
    minHeight: 100,
    textAlignVertical: 'top',
  },

  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
    justifyContent: 'space-evenly',
  },

  statusButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#eee',
  },

  selectedStatus: {
    backgroundColor: '#ff8500',
  },

  saveButton: {
    marginTop: 20,
    marginBottom: 100,
    backgroundColor: '#222020',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successMessage: {
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },

  successText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditJobScreen;
