import { useNavigation, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import commonStyle from '@/app/styles/common.style';
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton';
import NumberPicker from '@/components/molecules/NumberPicker/NumberPicker';
import ParallaxScrollView from '@/components/templates/ParallaxScrollView';
import { ThemedText } from '@/components/templates/ThemedText';
import { ThemedView } from '@/components/templates/ThemedView';
import { APP_CONSTANT } from '@/constants/AppConstants';
import { useLotto } from '@/context/lottoContext/LottoContext';
import { useToast } from 'react-native-toast-notifications';
import playNumbersStyle from './PlayNumbers.style';

export default function PlayNumbers() {
  
  const { addPlays } = useLotto();
  
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const navigation = useNavigation();
  const router = useRouter();
  const toast = useToast();
  
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleNumberPress = (num: any) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n: any) => n !== num));
    } else if (selectedNumbers.length < 5) {
      setSelectedNumbers([...selectedNumbers, num]);
    }
  };

  const handlePlayNumbersBtnClick = () => {
    if (addPlays(selectedNumbers)) {
      setSelectedNumbers([]);
      router.push('/');
      toast.show('Play number added.', { type: 'success' });
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1E90FF', dark: '#1E90FF' }}
      headerView={

        <ThemedView style={commonStyle.bgBlue}>

          <ThemedView style={[commonStyle.bgBlue, commonStyle.alignItemsCenter, commonStyle.justifyContentCenter, { margin: 10 }]}>
            <ThemedText type="subtitle">{APP_CONSTANT.LUCKY_LOTTO}</ThemedText>
          </ThemedView>
        
          <View style={commonStyle.flexDirectionRow}>
      
            {Array.from({ length: 5 }).map((_, i) => (
      
              <View key={i} style={[playNumbersStyle.circle, commonStyle.bgWhite, commonStyle.alignItemsCenter, commonStyle.justifyContentCenter]}>
                
                <Text style={playNumbersStyle.circleText}>
                  {selectedNumbers[i] !== undefined ? selectedNumbers[i] : ''}
                </Text>
              
              </View>
            
            ))}
      
          </View>
        
        </ThemedView>
      
      }>
      
      <ThemedView style={[commonStyle.bgWhite, commonStyle.flexContainer]}>

        <ThemedText type="defaultSemiBold">{APP_CONSTANT.PICK_FIVE_NUMBERS}</ThemedText>
        
          <NumberPicker selectedNumbers={selectedNumbers} onPress={(item: number)=> handleNumberPress(item)} />

          <ThemedView style={[commonStyle.bottomBtnContainer, commonStyle.bgWhite]}>
            <PrimaryButton isDisabled={selectedNumbers.length < 5} btnTxt={APP_CONSTANT.PLAY_NUMBERS} onPress={handlePlayNumbersBtnClick} />
          </ThemedView>

      </ThemedView>
    
    </ParallaxScrollView>
  
  );

}


