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
  IconComponent,
  iconSize = 24,
  iconColor = '#222222',
  mode = 'highlight',
  ...props
}: PopupMenuProps &
  TouchableNativeFeedbackProps &
  TouchableHighlightProps &
  TouchableOpacityProps &
  TouchableWithoutFeedbackProps) {
  if (!items || typeof items !== 'object') {
    throw Error('react-native-android-popup-menu: Missing items');
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
          {!IconComponent ? (
            <Icon
              name={icon}
              size={iconSize}
              color={iconColor}
              ref={iconRef}
              style={iconStyle}
            />
          ) : (
            <IconComponent iconRef={iconRef} />
          )}
        </TouchableHighlight>
      ) : (
        <Touchable onPress={onPressBtn} style={buttonStyle} {...props}>
          {!IconComponent ? (
            <Icon
              name={icon}
              size={iconSize}
              color={iconColor}
              ref={iconRef}
              style={iconStyle}
            />
          ) : (
            <IconComponent iconRef={iconRef} />
          )}
        </Touchable>
      )}
    </View>
  );
}
