import commonStyle from '@/app/styles/common.style';
import { PropsWithChildren } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SecondaryBtnStyle } from './SecondaryButton.Style';

type Props = PropsWithChildren<{
    onPress: any,
    btnTxt: string
}>;

export default function SecondaryButton({
    onPress,
    btnTxt
}: Props) {
  return (
    <View style={commonStyle.flexContainer}> 
        <Pressable style={[SecondaryBtnStyle.button, commonStyle.alignItemsCenter, commonStyle.justifyContentCenter]} onPress={onPress}>
            <Text style={SecondaryBtnStyle.buttonText}>{btnTxt}</Text>
        </Pressable>
    </View>
  );
}