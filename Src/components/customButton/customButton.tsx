import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import st from './style';

interface Props {
    label: string;
    onPress: () => void;
}

export const CustomButton: React.FC<Props> = ({label, onPress = () => {}}) => {
    return (
        <TouchableOpacity onPress={onPress} style={st.container}>
            <Text style={st.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    );
};
