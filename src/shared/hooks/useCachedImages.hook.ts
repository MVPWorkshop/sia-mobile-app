import { useEffect, useState } from 'react';
import { Images, ImageKeys } from '../constants/images.constants';
import { Asset } from 'expo-asset';

const useCachedImages = () => {
  const [isCachingImages, setIsCachingImages] = useState(true);

  useEffect(() => {
    const cacheImages = async () => {
      let cachingPromise: Promise<any>[] = [];

      for (let imageName in Images) {
        cachingPromise.push(
          Asset.fromModule(Images[imageName as ImageKeys]).downloadAsync()
        );
      }

      await Promise.all(cachingPromise);
      setIsCachingImages(false);
    }
  }, []);

  return {
    isCachingImages
  }
}

export default useCachedImages;
