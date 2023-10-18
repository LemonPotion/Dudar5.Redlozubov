import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface FormProps {
  addHandler: (text: string) => void;
}

export default function Form({ addHandler }: FormProps) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    addHandler(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a task"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}
