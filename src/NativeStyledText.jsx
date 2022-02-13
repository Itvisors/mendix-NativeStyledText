import { Component, createElement } from "react";
import { Text, View } from "react-native";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

const defaultStyle = {
    container: {},
    defaultTextStyle: {
        color: "green"
    }
};

export class NativeStyledText extends Component {
    styles = mergeNativeStyles(defaultStyle, this.props.style);
    render() {
        const { limitTextLength, numberOfLines } = this.props;
        return (
            <View style={this.styles.container}>
                <Text style={this.styles.defaultTextStyle} numberOfLines={limitTextLength ? numberOfLines : undefined}>
                    {this.renderTexts()}
                </Text>
            </View>
        );
    }

    renderTexts() {
        const { style, textList } = this.props;

        if (!textList || textList.length === 0) {
            return null;
        }

        let customStyle;
        if (style && style.length) {
            customStyle = style[0];
        }

        return textList.map((textItem, index) => {
            const { textValue, textClass } = textItem;

            if (!textValue || textValue.status !== "available") {
                return null;
            }
            const textClassValue = textClass ? textClass.value : null;

            return (
                <Text key={index} style={customStyle[textClassValue]}>
                    {textValue.value}
                </Text>
            );
        });
    }
}
