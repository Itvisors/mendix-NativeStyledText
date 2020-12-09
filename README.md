## NativeStyledText
One text which allows parts to be styled separately. This will allow for the text to break naturally at the end of the container.

You can of course in Mendix place multiple text widgets after each other.
However, if the content does not fit, one or more entire text widgets will go to the next line,
probably causing unnatural line breaks.

## Features
- Specify multiple texts
- Optionally style each text

## Usage
- Place the widget on the page
- Add the texts you want to display.
- For each text you can enter the name of the class to add to the text
- Each text inherits the default.
- Create the custom class in your theme.

## Custom style class
You **must** create custom style classes for the widget to work correctly.
(The widget cannot access the app theme so the app theme should overrule the widget default style.)

If the style classes are not created or are incorrect the widget will render all text in green.

The content below is an example.

**The first export** defines a default for all NativeStyledText widget instances.

**The second export** is an example that defines a `nameStyle` and an `appointmentTime` style. These names can be used as text class for the text items on the widget. The `nextAppointmentStyledText` should be placed as class on the widget. This an example only, you can define as many as you want.


``` 
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

```

Place these in a separate JavaScript file. It is assumed the file is placed in a subfolder under `styles/native/app` Depending on your folder structure you may need to adjust the import statement

In custom.js, add your new file. Replace `app-custom` with the folder name you used to put the file in.

```
export * from "./app-custom/nativeStyledText";
```

An example can be found [in the GitHub repo](https://github.com/Itvisors/mendix-NativeStyledText/tree/main/test/theme/styles/native/app).
