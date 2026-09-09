import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// Màn hình 1
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Màn hình Home</Text>
    </View>
  );
}

// Màn hình 2
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Màn hình Profile</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 60, paddingBottom: 8 },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Trang chủ' }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Cá nhân' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontFamily: 'ScoutieSans-Italic',
  },
});

export default App;