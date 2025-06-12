import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton';
import SecondaryButton from '@/components/atoms/SecondaryButton/SecondaryButton';
import PurchaseNumberRow from '@/components/molecules/PurchaseNumberRow/PurchaseNumberRow';
import { ThemedView } from '@/components/templates/ThemedView';
import { APP_CONSTANT } from '@/constants/AppConstants';
import { useLotto } from '@/context/lottoContext/LottoContext';
import commonStyle from '@/styles/common.style';

export default function Purchase() {

  const { plays, deletePlays } = useLotto();
  const router = useRouter();

  // To handle purchase button click: show selected numbers in an alert
  const handlePurchaseBtnClick = () => {
    const message = plays.map(play => play.join(',')).join('\n');
    Alert.alert(APP_CONSTANT.YOU_SELECTIONS_ARE, message, [{ text: APP_CONSTANT.OK }]);
  };

  const handleAddPlayBtnClick = () => {
    router.push('/screens/PlayNumbers/PlayNumbers');
  };

  return (
    <ThemedView style={[commonStyle.flexContainer, commonStyle.bgWhite]}>
      {/* List of selected number rows */}
      <ThemedView style={[commonStyle.flexContainer, commonStyle.bgWhite]}>
        {plays.map((row, index) => (
          <PurchaseNumberRow
            key={index}
            numbers={row}
            onDelete={() => deletePlays(index)}
          />
        ))}

        {/* Button to add a new play */}
        <SecondaryButton
          btnTxt={APP_CONSTANT.ADD_Play}
          onPress={handleAddPlayBtnClick}
        />
      </ThemedView>

      {/* Bottom purchase button */}
      <ThemedView style={[commonStyle.bottomBtnContainer, commonStyle.bgWhite]}>
        <PrimaryButton
          isDisabled={plays.length === 0}
          btnTxt={APP_CONSTANT.PURCHASE}
          onPress={handlePurchaseBtnClick}
        />
      </ThemedView>
    </ThemedView>
  );
}
