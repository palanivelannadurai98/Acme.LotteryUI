import { Pressable, Text, View } from 'react-native';

import purchaseStyle from '@/app/screens/Purchase/Purchase.style';
import { APP_CONSTANT } from '@/constants/AppConstants';
import commonStyle from '@/styles/common.style';

type PurchaseNumberRowProps = {
  numbers: number[];
  onDelete: () => void;
};

export default function PurchaseNumberRow({ numbers, onDelete }: PurchaseNumberRowProps) {
  return (
    <View style={[purchaseStyle.rowContainer, commonStyle.alignItemsCenter]}>
      
      {/* Display selected numbers in a row */}
      <View
        style={[
          purchaseStyle.numberRow,
          commonStyle.justifyContentCenter,
          commonStyle.flexDirectionRow
        ]}
      >
        {numbers.map((num, index) => (
          <View
            key={index}
            style={[
              purchaseStyle.circle,
              commonStyle.bgWhite,
              commonStyle.alignItemsCenter,
              commonStyle.justifyContentCenter
            ]}
          >
            <Text style={purchaseStyle.numberText}>{num}</Text>
          </View>
        ))}
      </View>

      {/* Delete button for this row */}
      <Pressable style={purchaseStyle.deleteBtn} onPress={onDelete}>
        <Text style={purchaseStyle.deleteText}>{APP_CONSTANT.DELETE_ROW}</Text>
      </Pressable>
    </View>
  );
}
