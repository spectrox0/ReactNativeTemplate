import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FCC} from 'src/types/common';
import {Card, Modal as KittenModal} from '@ui-kitten/components';
interface Props {
  title: string;
  onClose: () => void;
  visible: boolean;
  size?: 'small' | 'medium' | 'large';
}
export const Modal: FCC<Props> = ({children, onClose, visible}) => {
  return (
    <View style={styles.container}>
      <KittenModal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={onClose}>
        <Card disabled={true}>{children}</Card>
      </KittenModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
