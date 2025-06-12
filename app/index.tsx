import ParallaxScrollView from '@/components/templates/ParallaxScrollView';
import { ThemedText } from '@/components/templates/ThemedText';
import { APP_CONSTANT } from '@/constants/AppConstants';

import Purchase from './screens/Purchase/Purchase';

export default function HomeScreen() {

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: APP_CONSTANT.LIGHT_COLOR, dark: APP_CONSTANT.DARK_COLOR }}
      headerView={
        <ThemedText type="subtitle">
          {APP_CONSTANT.YOUR_NUMBERS}
        </ThemedText>
      }
    >
      {/* Main content of the screen */}
      <Purchase />

    </ParallaxScrollView>
  );

}
