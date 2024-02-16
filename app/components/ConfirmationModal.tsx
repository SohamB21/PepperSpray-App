import React from 'react';
import { Modal, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTFAMILY } from '../theme/theme';

const ConfirmationModal = ({ visible, message, onCancel, onCancelText, onConfirm, onConfirmText }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.messageText}>{message}</Text>
          <View style={styles.buttonContainer}>
            {onCancelText && (
              <TouchableOpacity onPress={onCancel} style={[styles.button, styles.cancelButton]}>
                <Text style={styles.buttonText}>{onCancelText}</Text>
              </TouchableOpacity>
            )}
            {onConfirmText && (
              <TouchableOpacity onPress={onConfirm} style={[styles.button, styles.confirmButton]}>
                <Text style={styles.buttonText}>{onConfirmText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.SecondaryText,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignItems: 'center',
    width: '80%',
  },
  messageText: {
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: 15,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: 10,
    borderRadius: 12,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: COLORS.SpecialForegroundElement,
  },
  confirmButton: {
    backgroundColor: COLORS.SpecialText,
  },
  buttonText: {
    color: COLORS.ForegroundElement,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: 15,
  },
});

export default ConfirmationModal;
