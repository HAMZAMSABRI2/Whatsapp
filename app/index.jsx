import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const imgBackground = {
  uri:
    'https://theabbie.github.io/blog/assets/official-whatsapp-background-image.jpg',
}
const App = () => {
  return (
    <>
      <ImageBackground
        source={imgBackground}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <SafeAreaView>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png',
              }}
              width={250}
              height={250}
            />
          </View>
          <View style={{ marginTop: 200 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#25d366',
                width: 150,
                height: 50,
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 18,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{ fontSize: 17, fontWeight: '600' }}
                onPress={() => router.push('/home')}
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  )
}

export default App
