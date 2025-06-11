import { PropsWithChildren } from 'react';
import { Pressable, Text, View } from 'react-native';

import commonStyle from '@/app/styles/common.style';
import { PrimaryBtnStyle } from './PrimaryButton.Style';

type Props = PropsWithChildren<{
    onPress: any,
    btnTxt: string,
    isDisabled: boolean
}>;

export default function PrimaryButton({
    onPress,
    btnTxt,
    isDisabled
}: Props) {
  return (
    <View style={[commonStyle.flexContainer, commonStyle.alignItemsCenter, commonStyle.justifyContentCenter]}> 
        <Pressable disabled={isDisabled} style={[PrimaryBtnStyle.button, commonStyle.alignItemsCenter, commonStyle.justifyContentCenter, isDisabled && PrimaryBtnStyle.disabledButton ]} onPress={onPress}>
            <Text style={[PrimaryBtnStyle.buttonText, isDisabled && PrimaryBtnStyle.disabledButtonText]}>{btnTxt}</Text>
        </Pressable>
    </View>
  );
}