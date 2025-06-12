import { PropsWithChildren } from 'react';
import { Pressable, Text, View } from 'react-native';

import commonStyle from '@/styles/common.style';
import { PrimaryBtnStyle } from './PrimaryButton.Style';

type Props = PropsWithChildren<{
  onPress: () => void;
  btnTxt: string;
  isDisabled: boolean;
}>;

export default function PrimaryButton({onPress, btnTxt, isDisabled}: Props) {
  return (
    <View
      style={[
        commonStyle.flexContainer,
        commonStyle.alignItemsCenter,
        commonStyle.justifyContentCenter
      ]}
    >
      <Pressable
        disabled={isDisabled}
        onPress={onPress}
        style={[
          PrimaryBtnStyle.button,
          commonStyle.alignItemsCenter,
          commonStyle.justifyContentCenter,
          isDisabled && PrimaryBtnStyle.disabledButton
        ]}
      >
        <Text
          style={[
            PrimaryBtnStyle.buttonText,
            isDisabled && PrimaryBtnStyle.disabledButtonText
          ]}
        >
          {btnTxt}
        </Text>
      </Pressable>
    </View>
  );
}
