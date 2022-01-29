/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
});

const StatusBarColor = ({ backgroundColor, ...rest }) => {
  return (
    <SafeAreaView style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={'auto'}
        {...rest}
      />
    </SafeAreaView>
  );
};

export default StatusBarColor;
