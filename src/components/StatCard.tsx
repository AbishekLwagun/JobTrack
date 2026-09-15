import { View, StyleSheet, Text } from 'react-native';

function StatCard({title,count}: {title: string, count: number}) {
  return (
    <View style={styles.card}>
      <View style={styles.eachCards}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardCount}>{count}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width:'48%',
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 15,
    borderRadius: 5,
    padding: 20,
  },

  eachCards: {
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#3da8a8',
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardCount: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default StatCard;