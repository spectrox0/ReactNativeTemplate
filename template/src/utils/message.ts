import Toast, {ToastType} from 'react-native-toast-message';
export const showMessage = ({
  type = 'info',
  msg = 'Error',
  visibilityTime = 2000,
}: {
  type?: ToastType;
  msg: string;
  visibilityTime?: number;
}) => {
  Toast.show({
    type,
    visibilityTime,
    text1: msg,
  });
};

export const showError = (msg: string) => {
  showMessage({type: 'error', msg});
};
