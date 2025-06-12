import type { PropsWithChildren, ReactElement } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/templates/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import commonStyle from '@/styles/common.style';

const HEADER_HEIGHT = 125;

type Props = PropsWithChildren<{
  headerView: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({children, headerView, headerBackgroundColor }: Props) {

  const colorScheme = useColorScheme() ?? 'light';

  // To reference and scroll offset for animated scroll view
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollOffset.value,
          [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
          [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
        ),
      },
      {
        scale: interpolate(
          scrollOffset.value,
          [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
          [2, 1, 1]
        ),
      },
    ],
  }));

  return (
    <SafeAreaView style={[commonStyle.bgWhite, commonStyle.flexContainer]}>
      <Animated.ScrollView
        ref={scrollRef}
        contentContainerStyle={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Animated parallax header */}
        <Animated.View
          style={[
            styles.header,
            commonStyle.dFlex,
            commonStyle.alignItemsCenter,
            commonStyle.justifyContentCenter,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          <View>{headerView}</View>
        </Animated.View>

        {/* Scrollable content */}
        <ThemedView
          style={[
            styles.content,
            commonStyle.flexContainer,
            commonStyle.bgWhite,
          ]}
        >
          {children}
        </ThemedView>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  content: {
    padding: 24,
    overflow: 'hidden',
  },
});
