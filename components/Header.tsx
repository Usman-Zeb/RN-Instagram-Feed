import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.outterContainer}>
      <TouchableOpacity>
        <Image
          source={require('../assets/instagram.png')}
          style={styles.fontStyle}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={require('../assets/add-item.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/heart.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unReadBadgeText}>12</Text>
          </View>
          <Image
            source={require('../assets/messenger.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  outterContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  fontStyle: {
    color: 'white',
    tintColor: 'white',
    width: 110,
    height: 50,
    resizeMode: 'contain',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 24,
    width: 24,
    color: 'white',
    tintColor: 'white',
    margin: 4,
  },
  unreadBadge: {
    position: 'absolute',
    backgroundColor: 'red',
    left: 10,
    bottom: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    width: 25,
    height: 18,
  },
  unReadBadgeText: {
    color: 'white',
  },
});
