import { Link, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/templates/ThemedText';
import { ThemedView } from '@/components/templates/ThemedView';
import commonStyle from '@/styles/common.style';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />

      <ThemedView
        style={[
          styles.container,
          commonStyle.flexContainer,
          commonStyle.dFlex,
          commonStyle.alignItemsCenter,
          commonStyle.justifyContentCenter,
        ]}
      >
        <ThemedText type="title">This screen does not exist.</ThemedText>

        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
