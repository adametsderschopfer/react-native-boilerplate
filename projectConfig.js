import {FontAwesome} from '@expo/vector-icons';

export const projectConfig = {
    fonts: {
        main: {
            OpenSansBold: require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
            OpenSansBoldItalic: require('./assets/fonts/OpenSans/OpenSans-BoldItalic.ttf'),
            OpenSansExtraBold: require('./assets/fonts/OpenSans/OpenSans-ExtraBold.ttf'),
            OpenSansExtraBoldItalic: require('./assets/fonts/OpenSans/OpenSans-ExtraBoldItalic.ttf'),
            OpenSansItalic: require('./assets/fonts/OpenSans/OpenSans-Italic.ttf'),
            OpenSansLight: require('./assets/fonts/OpenSans/OpenSans-Light.ttf'),
            OpenSansLightItalic: require('./assets/fonts/OpenSans/OpenSans-LightItalic.ttf'),
            OpenSansMedium: require('./assets/fonts/OpenSans/OpenSans-Medium.ttf'),
            OpenSansMediumItalic: require('./assets/fonts/OpenSans/OpenSans-MediumItalic.ttf'),
            OpenSansRegular: require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
            OpenSansSemiBold: require('./assets/fonts/OpenSans/OpenSans-SemiBold.ttf'),
            OpenSansSemiBoldItalic: require('./assets/fonts/OpenSans/OpenSans-SemiBoldItalic.ttf'),
        },
        additional: [
            {...FontAwesome.font},
        ],
    }
}