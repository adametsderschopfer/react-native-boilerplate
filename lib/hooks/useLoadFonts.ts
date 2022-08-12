import * as Font from 'expo-font';
import {useEffect, useState} from 'react';
import {projectConfig} from "../../projectConfig";

export default function useLoadFonts(): boolean
{
  const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);

  useEffect(() =>
  {
    async function loadResourcesAndDataAsync()
    {
      try {
        let fonts = {
          ...projectConfig.fonts.main,
        };

        for (const additionalElement of projectConfig.fonts.additional) {
          fonts = {
            ...fonts,
            ...additionalElement,
          }
        }

        await Font.loadAsync(fonts);
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
