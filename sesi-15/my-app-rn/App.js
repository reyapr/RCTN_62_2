import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>10%</Text>
      </View>
      <View style={styles.box2}>
        <Text>40%</Text>
      </View>
      <View style={styles.box3}>
        <Text>50%</Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 45,
    flexDirection: 'column-reverse'
  },
  box1: {
    flex: 10, // 1/6
    backgroundColor: 'red'
  },
  box2: {
    flex: 40, // 2/6
    backgroundColor: 'green'
  },
  box3: {
    flex: 50, // 1/2
    backgroundColor: 'cyan'
  }
  // total flex 
});
