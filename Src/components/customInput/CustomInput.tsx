import React, {useState} from 'react';
import {View, Text, TextInput, StyleProp, ViewComponent} from 'react-native';
import st from './style';

interface Props {
    value: string;
    isPasswordInput?: boolean;
}

export const CustomInput: React.FC<Props> = ({value, isPasswordInput}) => {
    const [text, setText] = useState<string>(value);
    return (
        <View style={st.container}>
            <TextInput
                autoCapitalize="none"
                secureTextEntry={isPasswordInput}
                autoCorrect={false}
                onChangeText={(text) => setText(text)}
                value={text}
                style={st.inputStyle}
            />
        </View>
    );
};
