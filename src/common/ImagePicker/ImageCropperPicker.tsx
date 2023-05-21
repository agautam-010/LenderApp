/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Modal} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Row, Wrap, Typography, TouchableRipple} from 'src/common';
import {styles} from './styles';
import {reportError} from 'lib/CommonFunctions';

interface ImageCropperPickerProps {
  dialogVisible: boolean;
  setDialogVisible: (param?: any) => void;
  onFileSelection: (param?: any) => void;
  width: number;
  height: number;
  cropping: boolean;
}

export default function ImageCropperPicker({
  dialogVisible,
  setDialogVisible,
  onFileSelection,
  width = 600,
  height = 600,
  cropping = true,
}: ImageCropperPickerProps) {
  const cameraLaunch = () => {
    setDialogVisible(false);
    let options = {
      width: width,
      height: height,
      cropping: cropping,
    };

    ImagePicker.openCamera(options)
      .then(source => {
        onFileSelection(source);
      })
      .catch(error => {
        reportError(error);
        onFileSelection(null);
      });
  };

  const imageGalleryLaunch = () => {
    setDialogVisible(false);
    let options = {
      width: width,
      height: height,
      cropping: cropping,
    };

    ImagePicker.openPicker(options)
      .then(source => {
        onFileSelection(source);
      })
      .catch(error => {
        reportError(error);
        onFileSelection(null);
      });
  };

  return (
    <Modal
      visible={dialogVisible}
      transparent={true}
      animationType={'slide'}
      onRequestClose={() => {
        setDialogVisible(false);
      }}>
      <Wrap autoMargin={false} style={styles.imagePickerModalContainer}>
        <Wrap autoMargin={false} style={styles.imagePickerModalContainer2}>
          <TouchableRipple
            style={{flexDirection: 'row'}}
            onPress={() => cameraLaunch()}>
            <Row autoMargin={false}>
              <Typography style={styles.title} text="Take Photo" />
            </Row>
          </TouchableRipple>
          <Row autoMargin={false} style={styles.divider} />

          <TouchableRipple
            style={{flexDirection: 'row'}}
            onPress={() => imageGalleryLaunch()}>
            <Row autoMargin={false}>
              <Typography style={styles.title} text="Choose From Gallery" />
            </Row>
          </TouchableRipple>

          <Row autoMargin={false} style={styles.divider} />

          <TouchableRipple
            style={{flexDirection: 'row'}}
            onPress={() => setDialogVisible(false)}>
            <Row autoMargin={false}>
              <Typography style={styles.buttonText} text="Cancel" />
            </Row>
          </TouchableRipple>
        </Wrap>
      </Wrap>
    </Modal>
  );
}
