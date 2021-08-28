import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

const App = () => {
  const animScrollingVal = useRef(new Animated.Value(0)).current;

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 100,
          backgroundColor: 'tomato',
          opacity: animScrollingVal.interpolate({
            inputRange: [100, 130],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
          transform: [
            {
              translateY: animScrollingVal.interpolate({
                inputRange: [100, 130],
                outputRange: [-100, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      />
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: animScrollingVal,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
        style={styles.container}>
        <Text style={styles.title}>Hello AnimatedWithScrollViews App</Text>
      </Animated.ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    backgroundColor: 'gray',
    color: 'white',
  },
});
