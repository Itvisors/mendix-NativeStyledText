import { Text, View } from "react-native";
import { createElement, useMemo } from "react";
import { defaultStyle } from "./ui/styles";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

export function NativeStyledText(props) {
    const { limitTextLength, numberOfLines, textList, accessible, accessibilityLabel, accessibilityHint } = props;
    // The view and the surrounding text use classes that exist in the default style.
    // These may be overridden in the theme so we use the merged the styles
    const styles = mergeNativeStyles(defaultStyle, props.style);

    const renderContent = useMemo(() => {
        const renderTexts = () => {
            if (!textList || textList.length === 0) {
                return null;
            }

            // The individual texts use style classes that are defined in the project only.
            // The merge function only merges what exists in the default style.
            // So we need to use the raw props style to get these custom styles.
            const customStyle = props.style?.length ? props.style[0] : {};

            return textList.map((textItem, index) => {
                const { textValue, textClass } = textItem;

                if (!textValue || textValue.status !== "available") {
                    return null;
                }
                const textClassValue = textClass ? textClass.value : null;
                const textStyle = textClassValue ? customStyle[textClassValue] : undefined;

                return (
                    <Text key={index} style={textStyle} testID={`${props.name}$textitem${index}`}>
                        {textValue.value}
                    </Text>
                );
            });
        };

        // Create accessibility props.
        // The hint and label are set only if component is accessible. This prevents an undefined hint or label prop on the native component
        const a11y = {
            accessible
        };
        if (accessible) {
            a11y.accessibilityHint = accessibilityHint?.value;
            a11y.accessibilityLabel = accessibilityLabel?.value;
        }

        return (
            <View style={styles.container} {...a11y} testID={props.name}>
                <Text
                    style={styles.defaultTextStyle}
                    numberOfLines={limitTextLength ? numberOfLines : undefined}
                    testID={`${props.name}$maintext`}
                >
                    {renderTexts()}
                </Text>
            </View>
        );
    }, [
        accessible,
        styles,
        limitTextLength,
        numberOfLines,
        textList,
        props.name,
        props.style,
        accessibilityHint,
        accessibilityLabel
    ]);

    return renderContent;
}
