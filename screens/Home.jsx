import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AlarmClock from '../components/Clock';
import { styles, textStyles } from '../styles/styles'; // Adjust the path as needed

export default function Home({ isDarkMode }) {
  // Accept isDarkMode as a prop

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Define dynamic styles based on isDarkMode
  const dynamicStyles = {
    backgroundColor: isDarkMode ? 'darkgrey' : 'white',
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: dynamicStyles.backgroundColor }]}>
      <Text style={{ ...textStyles.titleText, padding: 20, color: dynamicStyles.color }}>
        Alarm Clock
      </Text>

      <View style={[styles.box, { backgroundColor: dynamicStyles.backgroundColor }]}>
        <Text style={{ ...styles.time, color: dynamicStyles.color }}>
          {currentTime.toLocaleTimeString()}
        </Text>
      </View>

      <AlarmClock style={{ marginTop: 100, padding: 100, paddingTop: 100 }} />
      <View style={{ height: 200 }} />

      <StatusBar style={{ marginTop: 500 }} />
    </ScrollView>
  );
}
