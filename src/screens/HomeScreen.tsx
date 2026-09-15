
import { View, Text, StyleSheet, Pressable,ScrollView } from 'react-native';
import StatCard from '../components/StatCard'
import {useState}  from 'react';
import {Job} from '../types/Job';
import { useNavigation } from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator.tsx';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function HomeScreen() {
  // const[applications, setApplications] = useState(11);
  // const[interviews, setInterviews] = useState(5);
  // const[rejections, setRejections] = useState(6);
  // const[offers, setOffers] = useState(3);
  // const navigation = useNavigation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [jobs, setJobs] = useState<Job[]>([
    {
      id: '1',
      company: 'IBM',
      position: 'Backend Developer Intern',
      status: 'Applied',
      applicationDate: '2026-09-14T00:00:00.000Z',
      location: 'Remote',
      jobUrl: '',
      jobDescription: 'Backend software engineering internship.',
      notes: 'Applied through IBM careers.',
    },
    {
      id: '2',
      company: 'Tesla',
      position: 'Software Engineer Intern',
      status: 'Interview',
      applicationDate: '2026-09-10T00:00:00.000Z',
      location: 'Austin, TX',
      jobUrl: '',
      jobDescription: 'Software engineering internship opportunity.',
      notes: 'Interview stage.',
    },
  ]);

  const stats = [
    {
      title: 'Applied',
      count: jobs.filter(job => job.status === 'Applied').length,
    },
    {
      title: 'Interview',
      count: jobs.filter(job => job.status === 'Interview').length,
    },
    {
      title: 'Rejection',
      count: jobs.filter(job => job.status === 'Rejected').length,
    },
    {
      title: 'Offers',
      count: jobs.filter(job => job.status === 'Offer').length,
    }
    // { title: 'Interview', count: interviews },
    // { title: 'Rejected', count: rejections },
    // { title: 'Offer', count: offers },
  ];


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>JobTrack</Text>

      <Text style={styles.subtitle}>Your Job Application Dashboard</Text>
      <View style={styles.stateContainer}>
        {/*<StatCard title="Applications" count={11} />*/}
        {/*<StatCard title="Interview" count={5} />*/}
        {/*<StatCard title="Rejected" count={6} />*/}
        {/*<StatCard title="Offer" count={3} />*/}
        {stats.map(stat => (
          <StatCard key={stat.title} title={stat.title} count={stat.count} />
        ))}
      </View>
      {jobs.map(job => (
        <Pressable
          key={job.id}
          style={styles.jobCard}
          onPress={() => {
            navigation.navigate('JobDetails', {
              job: job,

              onSave: updatedJob => {
                setJobs(currentJobs =>
                  currentJobs.map(currentJob =>
                    currentJob.id === updatedJob.id ? updatedJob : currentJob,
                  ),
                );
              },

              onDelete: jobId => {
                setJobs(currentJobs =>
                  currentJobs.filter(currentJob => currentJob.id !== jobId),
                );
              },
            });
          }}
        >
          <Text style={styles.company}>{job.company}</Text>
          <Text style={styles.position}>{job.position}</Text>
          <View
            style={[
              styles.statusBadge,
              job.status === 'Applied' && styles.appliedBadge,
              job.status === 'Interview' && styles.interviewBadge,
              job.status === 'Rejected' && styles.rejectedBadge,
              job.status === 'Offer' && styles.offerBadge,
            ]}
          >
            <Text style={styles.status}>{job.status}</Text>
          </View>
        </Pressable>
      ))}

      {/*<Pressable onPress={() => navigation.navigate('AddJob')}>*/}
      {/*  <Text>Add Job</Text>*/}
      {/*</Pressable>*/}
      <Pressable
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('AddJob', {
            onSave: job => {
              setJobs([...jobs, job]);
            },
          })
        }
      >
        <Text style={styles.addButtonText}>+ Add Application</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  stateContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtitle: {
    marginTop: 6,
    fontSize: 16,
  },

  card: {
    marginTop: 30,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
  },

  cardTitle: {
    fontSize: 16,
  },

  cardNumber: {
    marginTop: 8,
    fontSize: 32,
    fontWeight: 'bold',
  },
  jobCard: {
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    borderColor: '#ddd',
  },

  company: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  position: {
    marginTop: 5,
    fontSize: 16,
  },
  statusBadge: {
    marginTop: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    height: 30,
    borderRadius: 5,
    // backgroundColor: '#ff8500',
    justifyContent: 'center',
    alignItems: 'center',
  },

  status: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  appliedBadge: {
    backgroundColor: '#ff8500',
  },

  interviewBadge: {
    backgroundColor: '#2196F3',
  },

  rejectedBadge: {
    backgroundColor: '#F44336',
  },

  offerBadge: {
    backgroundColor: '#4CAF50',
  },
  addButton: {
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: '#222020',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  addButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
