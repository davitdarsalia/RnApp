import React, {useState} from 'react';
import {View, Text, TextInput, StyleProp, ViewComponent} from 'react-native';
import st from './style';

interface Props {}

export const CustomInput: React.FC<Props> = ({}) => {
    const [text, setText] = useState<string>('');
    return (
        <View style={st.container}>
            <TextInput
                onChangeText={(text) => setText(text)}
                value={text}
                style={st.inputStyle}
            />
        </View>
    );
};
