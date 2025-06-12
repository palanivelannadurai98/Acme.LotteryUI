import { PropsWithChildren } from 'react';
import { Pressable, Text, View } from 'react-native';

import commonStyle from '@/styles/common.style';
import { SecondaryBtnStyle } from './SecondaryButton.Style';

type Props = PropsWithChildren<{
  onPress: () => void;
  btnTxt: string;
}>;

export default function SecondaryButton({ onPress, btnTxt }: Props) {
  return (
    <View style={commonStyle.flexContainer}>
      <Pressable
        onPress={onPress}
        style={[
          SecondaryBtnStyle.button,
          commonStyle.alignItemsCenter,
          commonStyle.justifyContentCenter
        ]}
      >
        <Text style={SecondaryBtnStyle.buttonText}>{btnTxt}</Text>
      </Pressable>
    </View>
  );
}
