import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {POSTS} from '../data/user';
import {Divider} from 'react-native-elements';

const Feed: React.FC = () => {
  return (
    <View style={styles.outterContainer}>
      <FlatList
        data={POSTS}
        renderItem={({item}) => {
          return (
            <>
              <View style={styles.Container}>
                <Divider width={1} orientation="horizontal" />
                <View style={styles.postHeader}>
                  <View style={styles.headerLeft}>
                    <Image
                      source={item.user.url}
                      style={styles.userImageContainer}
                    />
                    <Text style={styles.postUserName}>{item.user.name}</Text>
                  </View>
                  <TouchableOpacity>
                    <Text style={styles.ellipses}>...</Text>
                  </TouchableOpacity>
                </View>
                <Image style={styles.imageContainer} source={item.imageUrl} />
                <View style={styles.footerIcons}>
                <Image source={require('../assets/heart.png')} style={styles.footerIcon}/>
                <Image source={require('../assets/comment.png')} style={styles.footerIcon}/>
                <Image source={require('../assets/share.png')} style={styles.footerIcon}/>
                <Image source={require('../assets/save.png')} style={styles.footerIcon}/>
                </View>
              </View>
            </>
          );
        }}
        keyExtractor={item => {
          return item.postID.toString();
        }}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  Container: {
    marginBottom: 30,
    marginTop:30,
    marginHorizontal:10,
    height: 350,
    borderRadius: 5,
  },
  outterContainer: {
    marginTop: 10,
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
  userImageContainer: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderColor: '#ff8501',
    borderWidth: 3,
  },
  postHeader: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  postUserName: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 5,
  },
  headerLeft: {
    flexDirection: 'row',
  },
  ellipses: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:18,
  },

  footerIcon: {
    height: 24,
    width: 24,
    color: 'white',
    tintColor: 'white',
    margin: 4,
  },
  footerIcons: {
    flexDirection:'row',
    margin:10,
  },
});
