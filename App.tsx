import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Stories from './components/Stories';
import Header from './components/Header';
import Feed from './components/Feed';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.outterContainer}>
      <Header/>
      <Stories/>
      <Feed/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default App;
