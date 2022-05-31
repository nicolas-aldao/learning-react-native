import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.font.main,
        fontWeight: theme.fontWeights.normal

    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    align: {
        textAlign: 'center'
    }
});

export default function StyledText({children, align, color, fontSize, fontWeight, style, ...restOfProps}){
    const textStyles = [
        styles.text,
        align === 'center' && styles.align,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style
    ]

    return(<Text style={textStyles} {...restOfProps}>
        {children}
    </Text>)
}