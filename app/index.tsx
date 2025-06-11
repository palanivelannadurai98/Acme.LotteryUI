
import ParallaxScrollView from '@/components/templates/ParallaxScrollView';
import { ThemedText } from '@/components/templates/ThemedText';
import { APP_CONSTANT } from '@/constants/AppConstants';
import Purchase from './screens/Purchase/Purchase';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1E90FF', dark: '#1E90FF' }}
      headerView={
        <ThemedText type="subtitle">{APP_CONSTANT.YOUR_NUMBERS}</ThemedText>
      }>
        <Purchase/>
    </ParallaxScrollView>
  );
}
