import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native'
import React from 'react'

const messages = [
  {
    name: 'Natalie',
    time: '10:30 AM',
    message: 'Salut, comment ça va ?',
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqUM3AT_nR6irkNCsYr1L-qKDAknY_KPsYBOYIMyHFw&s',
  },
  {
    name: 'Hamza',
    time: '10:30 AM',
    message: 'Salut, comment ça va ?',
    imageUri:
      'https://img.freepik.com/photos-premium/beau-portrait-fille-anime-ia-generative_170984-5416.jpg',
  },
  {
    name: 'Hind',
    time: '10:23 PM',
    message: 'Salut, comment ça va ?',
    imageUri:
      'https://img.freepik.com/photos-premium/concept-intelligence-artificielle-cyber-fille-humanoide-generative-ai_791958-420.jpg',
  },
]

const HomePage = () => {
  return (
    <>
      <ImageBackground
        style={{flex:1}}
        resizeMode="cover"
      >
        <View style={{ flex: 1 }}>
          <ScrollView>
            {messages.map((message, index) => (
              <View style={styles.messageContainer} key={index}>
                <Image
                  source={{ uri: message.imageUri }}
                  style={styles.image}
                />
                <View style={styles.content}>
                  <Text style={styles.name}>{message.name}</Text>
                  <Text style={styles.message}>{message.message}</Text>
                  <Text style={styles.time}>{message.time}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor:'#bdbcbd',
    height: 90
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    marginBottom: 5,
  },
  time: {
    color: '#FFF',
    fontSize: 12,
    textAlign: 'right',
  },
})

export default HomePage
