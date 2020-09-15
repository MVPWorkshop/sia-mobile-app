import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic
} from '@expo-google-fonts/poppins';

export enum EPoppins {
  Thin = 'Poppins_100Thin',
  ExtraLight = 'Poppins_200ExtraLight',
  Light = 'Poppins_300Light',
  Regular = 'Poppins_400Regular',
  Medium = 'Poppins_500Medium',
  SemiBold = 'Poppins_600SemiBold',
  Bold = 'Poppins_700Bold',
  ExtraBold = 'Poppins_800ExtraBold',
  Black = 'Poppins_900Black'
}

const usePoppins = () => {
  const [
    poppinsLoaded,
    poppinsLoadError
  ] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic
  });

  return {
    isPoppinsLoading: !poppinsLoaded,
    poppinsLoadError
  }
}

export default usePoppins;
