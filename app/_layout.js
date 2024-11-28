import { Stack } from "expo-router"
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
// SplashScreen.preventAutoHideAsync();
const Layout = () => {
    const [fontLoaded, error] = useFonts({
        LatoBold: require('../fonts/Lato-Black.ttf'),
        LatoMedium: require('../fonts/Lato-Bold.ttf'),
        LatoRegular: require('../fonts/Lato-Regular.ttf'),

    });
    const onLayoutRootView = useCallback(async () => {
        console.log("checking the font")
        if (fontLoaded) {
            await SplashScreen.hideAsync();
        }
        else { console.log(error) }
    }, [fontLoaded, error])
    if (!fontLoaded) return null;
    return (<Stack />)
}
export default Layout;