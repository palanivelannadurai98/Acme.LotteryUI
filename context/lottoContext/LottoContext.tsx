import React, { createContext, ReactNode, useContext, useState } from 'react';
import { useToast } from 'react-native-toast-notifications';

type LottoContextType = {
  plays: number[][];
  addPlays: (numbers: number[]) => boolean;
  deletePlays: (index: number) => void;
};

type LottoProviderProps = {
  children: ReactNode;
};

const LottoContext = createContext<LottoContextType>({
  plays: [],
  addPlays: () => false,
  deletePlays: () => {},
});

export const LottoProvider = ({ children }: LottoProviderProps) => {

  const [plays, setPlays] = useState<number[][]>([]);
  const toast = useToast();

  const addPlays = (numbers: number[]) => {
    const sorted = [...numbers].sort((a, b) => a - b);
    const isDuplicate = plays.some((play: number[]) =>
      play.length === sorted.length &&
      play.every((num: number, i: number) => num === sorted[i])
    );
    if (plays.length >= 3) {
      toast.show('Limit reached.', { type: 'warning' });
      return false;
    }
    if (isDuplicate) {
      toast.show('Duplicate play number.', { type: 'warning' });
      return false;
    }
    setPlays([...plays, sorted]);
    return true;
  };

  const deletePlays = (index: number) => {
    setPlays(plays.filter((_: number[], i: number) => i !== index));
    toast.show('Play number deleted.', { type: 'success' });
  };

  return (
    <LottoContext.Provider value={{ plays, addPlays, deletePlays }}>
      {children}
    </LottoContext.Provider>
  );
};

export const useLotto = () => useContext(LottoContext);
