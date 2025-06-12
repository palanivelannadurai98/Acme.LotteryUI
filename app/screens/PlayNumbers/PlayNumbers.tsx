import { useNavigation, useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton';
import NumberPicker from '@/components/molecules/NumberPicker/NumberPicker';
import ParallaxScrollView from '@/components/templates/ParallaxScrollView';
import { ThemedText } from '@/components/templates/ThemedText';
import { ThemedView } from '@/components/templates/ThemedView';
import { APP_CONSTANT } from '@/constants/AppConstants';
import { useLotto } from '@/context/lottoContext/LottoContext';
import commonStyle from '@/styles/common.style';
import playNumbersStyle from './PlayNumbers.style';

export default function PlayNumbers() {

  const { addPlays } = useLotto();
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const navigation = useNavigation();
  const router = useRouter();
  const toast = useToast();

  // To hide the default header when this screen is mounted
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // To handle number selection/deselection
  const handleNumberPress = useCallback((num: number) => {
    setSelectedNumbers(prev => prev.includes(num) ? prev.filter(n => n !== num) : prev.length < 5 ? [...prev, num] : prev);
  }, []);

  const handlePlayNumbersBtnClick = useCallback(() => {
    if (addPlays(selectedNumbers)) {
      setSelectedNumbers([]);
      router.push('/');
      toast.show('Play number added.', { type: 'success' });
    }
  }, [addPlays, selectedNumbers, router, toast]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1E90FF', dark: '#1E90FF' }}
      headerView={
        <ThemedView style={commonStyle.bgBlue}>
          <ThemedView
            style={[
              commonStyle.bgBlue,
              commonStyle.alignItemsCenter,
              commonStyle.justifyContentCenter,
              { margin: 10 },
            ]}
          >
            <ThemedText type="subtitle">{APP_CONSTANT.LUCKY_LOTTO}</ThemedText>
          </ThemedView>

          {/* Display selected numbers */}
          <View style={commonStyle.flexDirectionRow}>
            {Array.from({ length: 5 }).map((_, i) => (
              <View
                key={i}
                style={[
                  playNumbersStyle.circle,
                  commonStyle.bgWhite,
                  commonStyle.alignItemsCenter,
                  commonStyle.justifyContentCenter,
                ]}
              >
                <Text style={playNumbersStyle.circleText}>
                  {selectedNumbers[i] ?? ''}
                </Text>
              </View>
            ))}
          </View>
        </ThemedView>
      }
    >
      <ThemedView style={[commonStyle.bgWhite, commonStyle.flexContainer]}>
        <ThemedText type="defaultSemiBold">
          {APP_CONSTANT.PICK_FIVE_NUMBERS}
        </ThemedText>

        {/* Number Picker Grid */}
        <NumberPicker
          selectedNumbers={selectedNumbers}
          onPress={handleNumberPress}
        />

        {/* Play Button */}
        <ThemedView
          style={[commonStyle.bottomBtnContainer, commonStyle.bgWhite]}
        >
          <PrimaryButton
            isDisabled={selectedNumbers.length < 5}
            btnTxt={APP_CONSTANT.PLAY_NUMBERS}
            onPress={handlePlayNumbersBtnClick}
          />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}
