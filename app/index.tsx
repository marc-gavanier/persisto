import { useState } from 'react';
import { View } from 'react-native';
import { useStorage } from '@/src/libraries/storage/use-storage';
import { Body } from '@/src/libraries/ui/body';
import { Button } from '@/src/libraries/ui/button';
import { Input } from '@/src/libraries/ui/input';
import { Line } from '@/src/libraries/ui/line';
import { Strong } from '@/src/libraries/ui/strong';
import { Title } from '@/src/libraries/ui/title';

const STORAGE_KEY = '@persisto:demo';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const onSave = () => {
    setStatus(`Saved at ${new Date().toLocaleTimeString()}`);
  };

  const onLoad = (value: string | null) => {
    if (value == null) return setStatus('Nothing in storage');
    setText(value);
    setStatus('Loaded from storage');
  };

  const onClear = () => {
    setText('');
    setStatus('Storage cleared');
  };

  const { save, load, clear } = useStorage<string>(STORAGE_KEY, { onSave, onLoad, onClear }, true);

  return (
    <Body className='flex-1 flex gap-8 p-6 justify-center'>
      <View>
        <Title size='5xl' className='mb-3'>
          Persisto
        </Title>
        <Line>
          A simple demo of persistence with <Strong>AsyncStorage</Strong>
        </Line>
      </View>
      <View>
        <Title size='2xl' className='mb-3'>
          State
        </Title>
        <Input value={text} onChangeText={setText} placeholder='Type something…' />
        <Line color='muted' className='text-sm'>
          Current value: <Strong>{text || 'No value yet'}</Strong>
        </Line>
      </View>
      <View>
        <Title size='2xl' className='mb-3'>
          Persistence
        </Title>
        <View className='flex flex-row gap-2'>
          <Button onPress={() => save(text)} className='flex-1'>
            Save
          </Button>
          <Button onPress={() => load()} kind='outline' className='flex-1'>
            Load
          </Button>
        </View>
        <Button onPress={() => clear()} kind='outline' color='base' className='mt-3'>
          Clear storage
        </Button>
        {status && (
          <Line color='muted' className='text-sm mt-4'>
            Status: <Strong>{status}</Strong>
          </Line>
        )}
      </View>
    </Body>
  );
};

export default HomeScreen;
