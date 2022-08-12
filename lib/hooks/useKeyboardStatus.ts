import {useEffect, useState} from 'react';
import {Keyboard, Platform} from 'react-native';

interface IUseKeyboardHook
{
  isOpened: boolean;
  keyboardHeight: number;

  keyboardDismiss(): void;
}

export function useKeyboard(): IUseKeyboardHook
{
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  useEffect(() =>
  {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) =>
      {
        setKeyboardVisible(true); // or some other action
        setKeyboardHeight(
          event.endCoordinates.height > 100
            ? (Platform.OS === 'ios' ? event.endCoordinates.height : 0)
            : 0
        )
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () =>
      {
        setKeyboardHeight(0);
        setKeyboardVisible(false); // or some other action
      },
    );

    return () =>
    {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return {isOpened: isKeyboardVisible, keyboardHeight, keyboardDismiss: Keyboard.dismiss};
}