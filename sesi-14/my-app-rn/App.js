import { useEffect, useState } from 'react';
import { Button, Image, Platform, Text, View } from 'react-native';

export default function App() {
  console.log(Platform.OS, '<==== OS')
  
  const [update,setUpdate] = useState(true)
  
  return (
    <View style={styles.container}>
      <Image 
        source={{
          uri: 'https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png'
        }}
        style={{ height: 200, width: 200 }}
      />
      <Text style={styles.myText}>Hallo </Text>
      <Button onPress={() => setUpdate(!update)} color='white'  title='Ini Text Bttona'/>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myText: {
    color: 'white'
  }
};
