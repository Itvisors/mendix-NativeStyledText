import { hidePropertyIn } from "@mendix/pluggable-widgets-tools";

export function getProperties(values, defaultProperties) {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.

    if (!values.accessible) {
        hidePropertyIn(defaultProperties, values, "accessibilityLabel");
        hidePropertyIn(defaultProperties, values, "accessibilityHint");
    }

    return defaultProperties;
}

export function check(values) {
    const errors = [];
    // Add errors to the above array to throw errors in Studio and Studio Pro.
    /* Example
    if (values.myProperty !== "custom") {
        errors.push({
            property: `myProperty`,
            message: `The value of 'myProperty' is different of 'custom'.`,
            url: "https://github.com/myrepo/mywidget"
        });
    }
    */
    return errors;
}
