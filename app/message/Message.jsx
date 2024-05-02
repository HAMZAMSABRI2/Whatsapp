import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Message = ({ isLeft, name, time, message, image }) => {
  return (
    <View style={[styles.container, isLeft ? styles.leftContainer : styles.rightContainer]}>
      {isLeft && <Image source={image} style={styles.image} />}
      <View style={styles.messageContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      {!isLeft && <Image source={image} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  leftContainer: {
    justifyContent: 'flex-start',
  },
  rightContainer: {
    justifyContent: 'flex-end',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginLeft: 10,
  },
  messageContainer: {
    maxWidth: '70%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    marginBottom: 5,
  },
  time: {
    color: '#999',
    fontSize: 12,
  },
});

export default Message;
