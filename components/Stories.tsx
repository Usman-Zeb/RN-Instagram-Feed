import React from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import {USERS} from '../data/user';

const Stories: React.FC = () => {
  return (
    <View>
      <FlatList
        style={styles.storiesContainer}
        data={USERS}
        horizontal={true}
        renderItem={({item}) => {
          //let url = item.url;
          return (
            <View style={styles.story}>
              <Image style={styles.storyimage} source={item.url} />
            </View>
          );
        }}
        keyExtractor={item => {
          return item.name;
        }}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    borderRadius: 60,
    width: 60,
    height: 60,
    margin: 8,

  },
  textColor: {},
  storiesContainer: {
    flexDirection: 'row',
  },
  storyimage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor:'#ff8501',
    borderWidth:3,
  },
});
