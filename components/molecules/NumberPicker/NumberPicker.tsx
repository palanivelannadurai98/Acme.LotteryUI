import { FlatList, Pressable, Text } from 'react-native';

import playNumbersStyle from '@/app/screens/PlayNumbers/PlayNumbers.style';
import commonStyle from '@/app/styles/common.style';

export default function NumberPicker({selectedNumbers, onPress}: any) {

  const numbers = Array.from({ length: 42 }, (_, i) => i + 1);

  return (
    <>
        <FlatList
          data={numbers}
          numColumns={7}
          keyExtractor={(item) => item.toString()}
          scrollEnabled={false}
          renderItem={({ item }) => (

            <Pressable style={[ commonStyle.justifyContentCenter, commonStyle.alignItemsCenter, playNumbersStyle.numberButton, selectedNumbers.includes(item) && playNumbersStyle.selectedNumberButton]} onPress={() => onPress(item)}>
              <Text style={[ playNumbersStyle.numberText, selectedNumbers.includes(item) && playNumbersStyle.selectedNumberText]}>{item}</Text>
            </Pressable>

          )}/>
    </>
  );

}