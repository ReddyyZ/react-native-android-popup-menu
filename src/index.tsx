import {
  View,
  UIManager,
  findNodeHandle,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  type TouchableNativeFeedbackProps,
  type TouchableHighlightProps,
  type TouchableOpacityProps,
  type TouchableWithoutFeedbackProps,
} from 'react-native';
import React, { useRef } from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';
import type { PopupMenuProps } from './types';

export default function PopupMenu({
  onPress,
  onError,
  items,
  underlayColor = 'rgba(0,0,0,0.2)',
  containerStyle,
  buttonStyle,
  iconStyle,
  icon = 'more-vert',
  iconComponent,
  iconSize = 24,
  mode = 'highlight',
  ...props
}: PopupMenuProps &
  TouchableNativeFeedbackProps &
  TouchableHighlightProps &
  TouchableOpacityProps &
  TouchableWithoutFeedbackProps) {
  if (!items || typeof items !== 'object') {
    throw Error('react-native-simple-popup-menu: Missing items');
  }

  const iconRef = useRef(null);

  const Touchable =
    mode === 'highlight'
      ? TouchableHighlight
      : mode === 'opacity'
        ? TouchableOpacity
        : mode === 'native'
          ? TouchableNativeFeedback
          : TouchableWithoutFeedback;

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
    <View style={containerStyle}>
      {mode === 'highlight' ? (
        <TouchableHighlight
          onPress={onPressBtn}
          style={buttonStyle}
          underlayColor={underlayColor}
          {...props}
        >
          {!iconComponent ? (
            <Icon
              name={icon}
              size={iconSize}
              color={'#222222'}
              ref={iconRef}
              style={iconStyle}
            />
          ) : (
            iconComponent
          )}
        </TouchableHighlight>
      ) : (
        <Touchable onPress={onPressBtn} style={buttonStyle} {...props}>
          {!iconComponent ? (
            <Icon
              name={icon}
              size={iconSize}
              color={'#222222'}
              ref={iconRef}
              style={iconStyle}
            />
          ) : (
            iconComponent
          )}
        </Touchable>
      )}
    </View>
  );
}
