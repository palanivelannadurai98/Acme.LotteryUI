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

  // Tp add a new play if it's not a duplicate and within the limit as < 3
  const addPlays = (numbers: number[]): boolean => {
    const sorted = [...numbers].sort((a, b) => a - b);

    const isDuplicate = plays.some(
      (play) =>
        play.length === sorted.length &&
        play.every((num, i) => num === sorted[i])
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

  // To delete a play by index value
  const deletePlays = (index: number) => {
    setPlays((prev) => prev.filter((_, i) => i !== index));
    toast.show('Play number deleted.', { type: 'success' });
  };

  return (
    <LottoContext.Provider value={{ plays, addPlays, deletePlays }}>
      {children}
    </LottoContext.Provider>
  );
};

export const useLotto = () => useContext(LottoContext);
