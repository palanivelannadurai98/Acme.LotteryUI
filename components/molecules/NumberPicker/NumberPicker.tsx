import React from 'react';
import { FlatList, Pressable, Text } from 'react-native';

import playNumbersStyle from '@/app/screens/PlayNumbers/PlayNumbers.style';
import commonStyle from '@/styles/common.style';

type NumberPickerProps = {
  selectedNumbers: number[];
  onPress: (num: number) => void;
};

export default function NumberPicker({ selectedNumbers, onPress }: NumberPickerProps) {

  // To generate numbers from 1 to 42
  const numbers = Array.from({ length: 42 }, (_, i) => i + 1);

  return (
    <FlatList
      data={numbers}
      numColumns={7}
      keyExtractor={(item) => item.toString()}
      scrollEnabled={false}
      renderItem={({ item }) => {
        const isSelected = selectedNumbers.includes(item);

        return (
          <Pressable
            onPress={() => onPress(item)}
            style={[
              commonStyle.justifyContentCenter,
              commonStyle.alignItemsCenter,
              playNumbersStyle.numberButton,
              isSelected && playNumbersStyle.selectedNumberButton
            ]}
          >
            <Text
              style={[
                playNumbersStyle.numberText,
                isSelected && playNumbersStyle.selectedNumberText
              ]}
            >
              {item}
            </Text>
          </Pressable>
        );
      }}
    />
  );
}
