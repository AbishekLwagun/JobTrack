import {StyleSheet, View, Text, TextInput, Pressable, Animated, ScrollView} from 'react-native';
import { useRef,useState } from 'react';
import { Job } from '../types/Job';

function AddJobScreen({ route }: any) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState<Job['status']>('Applied');
  const successOpacity = useRef(new Animated.Value(0)).current;
  const [location, setLocation] = useState('');
  const [jobUrl, setJobUrl] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [notes, setNotes] = useState('');
  const [followUpDate, setFollowUpDate] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const saveJob = () => {
    if (!company.trim()) {
      setErrorMessage('Company is required.');
      return;
    }

    if (!position.trim()) {
      setErrorMessage('Position is required.');
      return;
    }

    if (!jobUrl.trim()) {
      setErrorMessage('Job URL is required.');
      return;
    }
    if (!jobUrl.startsWith('http://') && !jobUrl.startsWith('https://')) {
      setErrorMessage('Please enter a valid Job URL.');
      return;
    }
    setErrorMessage('');

    const newJob: Job = {
      id: String(Date.now()),
      company,
      position,
      status,
      applicationDate: new Date().toISOString(),
      location,
      jobUrl,
      jobDescription,
      notes,
      followUpDate: followUpDate || undefined,
      interviewDate: interviewDate || undefined,
    };

    console.log('Saving job:', newJob);

    route.params?.onSave(newJob);

    Animated.sequence([
      Animated.timing(successOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),

      Animated.delay(1000),

      Animated.timing(successOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCompany('');
      setPosition('');
      setStatus('Applied');
      setLocation('');
      setJobUrl('');
      setJobDescription('');
      setNotes('');
      setFollowUpDate('');
      setInterviewDate('');
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <Text style={styles.title}>Add Job Application</Text>

      <Text style={styles.label}>Company</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Company"
        value={company}
        onChangeText={text => {
          setCompany(text);
          setErrorMessage('');
        }}
      />

      <Text style={styles.label}>Position</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Position"
        value={position}
        onChangeText={text => {
          setPosition(text);
          setErrorMessage('');
        }}
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Remote, New York, NY"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.label}>Job Posting URL</Text>
      <TextInput
        style={styles.input}
        placeholder="https://..."
        value={jobUrl}
        onChangeText={text => {
          setJobUrl(text);
          setErrorMessage('');
        }}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Job Description</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Enter the job description..."
        value={jobDescription}
        onChangeText={setJobDescription}
        multiline
      />

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Add notes..."
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <Text style={styles.label}>Follow-up Date</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. September 20, 2026"
        value={followUpDate}
        onChangeText={setFollowUpDate}
      />

      <Text style={styles.label}>Interview Date</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. September 25, 2026"
        value={interviewDate}
        onChangeText={setInterviewDate}
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

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <Pressable style={styles.saveButton} onPress={saveJob}>
        <Text style={styles.saveButtonText}>Save Application</Text>
      </Pressable>

      <Animated.View
        style={[
          styles.successMessage,
          {
            opacity: successOpacity,
          },
        ]}
      >
        <Text style={styles.successText}>✓ Application saved!</Text>
      </Animated.View>
    </ScrollView>
  );
}

export default AddJobScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginTop: 6,
  },
  statusContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },

  statusButton: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  selectedStatus: {
    borderWidth: 2,
    backgroundColor: '#ff8500',
  },

  saveButton: {
    marginTop: 30,
    marginBottom: 10,
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
    marginBottom: 100,
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
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
    textAlign: 'center',
  },
});