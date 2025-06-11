import { Pressable, Text, View } from 'react-native';

import purchaseStyle from '@/app/screens/Purchase/Purchase.style';
import commonStyle from '@/app/styles/common.style';
import { APP_CONSTANT } from '@/constants/AppConstants';

export default function PurchaseNumberRow({ numbers,  onDelete}: any) {

  return (
    <View style={[purchaseStyle.rowContainer, commonStyle.alignItemsCenter]}>
      <View style={[purchaseStyle.numberRow, commonStyle.justifyContentCenter, commonStyle.flexDirectionRow]}>
        {numbers.map((num: number, index: number) => (
          <View key={index} style={[purchaseStyle.circle, commonStyle.bgWhite, commonStyle.alignItemsCenter, commonStyle.justifyContentCenter]}>
            <Text style={purchaseStyle.numberText}>{num}</Text>
          </View>
        ))}
      </View>
      <Pressable style={purchaseStyle.deleteBtn} onPress={onDelete}>
        <Text style={purchaseStyle.deleteText}>{APP_CONSTANT.DELETE_ROW}</Text>
      </Pressable>
    </View>
  );

}