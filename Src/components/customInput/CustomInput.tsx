import React from 'react';
import {View, Text, TextInput, StyleProp, ViewComponent} from 'react-native';
import st from './style';

interface Props {
    label: string;
}

export const CustomInput: React.FC<Props> = ({label}) => {
    return (
        <View style={st.container}>
            <View style={[st.labelContainer]}>
                <Text style={st.labelStyle}>{label}</Text>
            </View>
            <TextInput style={st.inputStyle} />
        </View>
    );
};
