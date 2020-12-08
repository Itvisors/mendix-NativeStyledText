import { brand, font } from "../custom-variables";

// Take the default values from the native theme
// eslint-disable-next-line camelcase
export const itvisors_nativestyledtext_NativeStyledText = {
    container: {},
    defaultTextStyle: {
        color: font.color,
        fontSize: font.size
    }
};

// Custom text styles.
// Add a block for each style. All TextStyle properties are allowed
export const nextAppointmentStyledText = {
    container: {},
    nameStyle: {
        color: brand.success
    },
    appointmentTime: {
        color: brand.primary
    }
};
