import {StyleSheet} from 'react-native';
import {Palette} from '@theme';

export const CommonStyles = (palette: Palette) =>
  StyleSheet.create({
    rootContainer: {flex: 1, backgroundColor: palette.background},
  });
