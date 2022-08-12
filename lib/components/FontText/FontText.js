import {Text} from "react-native";
import {projectConfig} from "../../../projectConfig";

const createDefaultTextComponent = (fontFamilyName = '') => (props) => (
    <Text
        allowFontScaling={false}
        {...props}
        style={[fontFamilyName.length ? {
            fontFamily: fontFamilyName
        }: { fontSize: 12 }, props.style]}
    >
        {props.children}
    </Text>
);

export default {
    Bold: createDefaultTextComponent(projectConfig.fonts.main.Bold || ''),
    BoldItalic: createDefaultTextComponent(projectConfig.fonts.main.BoldItalic || ''),
    ExtraBold: createDefaultTextComponent(projectConfig.fonts.main.ExtraBold || ''),
    ExtraBoldItalic: createDefaultTextComponent(projectConfig.fonts.main.ExtraBoldItalic || ''),
    Italic: createDefaultTextComponent(projectConfig.fonts.main.Italic || ''),
    Light: createDefaultTextComponent(projectConfig.fonts.main.Light || ''),
    LightItalic: createDefaultTextComponent(projectConfig.fonts.main.LightItalic || ''),
    Medium: createDefaultTextComponent(projectConfig.fonts.main.Medium || ''),
    MediumItalic: createDefaultTextComponent(projectConfig.fonts.main.MediumItalic || ''),
    Regular: createDefaultTextComponent(projectConfig.fonts.main.Regular || ''),
    SemiBold: createDefaultTextComponent(projectConfig.fonts.main.SemiBold || ''),
    SemiBoldItalic: createDefaultTextComponent(projectConfig.fonts.main.SemiBoldItalic || ''),
};