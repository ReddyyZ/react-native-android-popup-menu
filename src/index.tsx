import {
  View,
  UIManager,
  findNodeHandle,
  TouchableHighlight,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';
import type { PopupMenuProps } from './types';

export default function PopupMenu({
  onPress,
  onError,
  items,
  accessibilityLabel,
  underlayColor = 'rgba(0,0,0,0.2)',
  style,
  icon = 'more-vert',
}: PopupMenuProps) {
  if (!items || typeof items !== 'object') {
    throw Error("react-native-simple-popup-menu: Expected items array");
  }

  const iconRef = useRef(null);

  const onPressBtn = () => {
    if (iconRef) {
      UIManager.showPopupMenu(
        findNodeHandle(iconRef.current),
        items,
        onError,
        onPress
      );
    }
  };

  return (
    <View>
      <TouchableHighlight
        onPress={onPressBtn}
        accessibilityLabel={accessibilityLabel}
        underlayColor={underlayColor}
        style={{
          ...style,
        }}
      >
        <Icon name={icon} size={24} color={'#222222'} ref={iconRef} />
      </TouchableHighlight>
    </View>
  );
}
