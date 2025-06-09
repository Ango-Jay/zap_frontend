import { useAppSelector } from '../hooks';
import { RootState } from '../index';

export const UseAppState = () => {
  const appState = useAppSelector(
    (storeState: RootState) => storeState.appSlice
  );
  return appState;
};
