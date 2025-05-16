import {Palette} from '@theme';
import {StyleSheet} from 'react-native';

export const DashboardScreenStyles = (palette: Palette) =>
  StyleSheet.create({
    container: {
      backgroundColor: palette.background,
      flex: 1,
    },
  });
