import type { PropsWithChildren, ReactElement } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import commonStyle from '@/app/styles/common.style';
import { ThemedView } from '@/components/templates/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';

const HEADER_HEIGHT = 125;

const { height } = Dimensions.get('window');

type Props = PropsWithChildren<{
  headerView: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerView,
  headerBackgroundColor,
}: Props) {

  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <SafeAreaView style={[commonStyle.bgWhite, commonStyle.flexContainer]}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom, flex: 1 }}>
        <Animated.View
          style={[
            styles.header, commonStyle.dFlex, commonStyle.alignItemsCenter, commonStyle.justifyContentCenter,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}>
            <View>
              {headerView}
            </View>
        </Animated.View>
        <ThemedView style={[styles.content, commonStyle.flexContainer, commonStyle.bgWhite]}>{children}</ThemedView>
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
