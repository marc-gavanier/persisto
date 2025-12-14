import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect } from 'react';

type StorageHandlers<T> = {
  onLoad?: (value: T | null) => void;
  onSave?: (value: T) => void;
  onClear?: () => void;
};

export const useStorage = <T>(key: string, { onLoad, onSave, onClear }: StorageHandlers<T> = {}, loadOnInit?: boolean) => {
  const save = useCallback(
    async (value: T) => {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      onSave?.(value);
    },
    [key, onSave]
  );

  const load = useCallback(async (): Promise<T | null> => {
    const stored = await AsyncStorage.getItem(key);
    const loaded = stored ? JSON.parse(stored) : null;
    onLoad?.(loaded);
    return loaded;
  }, [key, onLoad]);

  const clear = useCallback(async () => {
    await AsyncStorage.removeItem(key);
    onClear?.();
  }, [key, onClear]);

  useEffect(() => {
    loadOnInit && load();
  }, [loadOnInit, load]);

  return { save, load, clear };
};
