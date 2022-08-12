import {SafeAreaView, Text, View} from "react-native";
import FontText from "../lib/components/FontText/FontText";
import useLoadFonts from "../lib/hooks/useLoadFonts";

export function AppIndex()
{
  const isFontLoading = useLoadFonts();

  if (!isFontLoading) {
    return (
      <SafeAreaView>
        <Text>
          Шрифты еще грузятся
        </Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <View>
        <FontText.Regular>
          test content
        </FontText.Regular>
      </View>
    </SafeAreaView>
  )
}