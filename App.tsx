import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  return (
    <View style={styles.container}>

      <FlatList 
        data={days}
        contentContainerStyle = {styles.content}
        columnWrapperStyle = {styles.columns}
        numColumns={2}
        renderItem={({item}) => <DayListItem day={item}/>}
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  columns: {
    gap: 10
  },
  content: {
    gap: 10,
    padding: 10
  },
});
