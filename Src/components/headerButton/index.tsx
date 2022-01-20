import React from 'react';
import {View} from 'react-native';

import {Ionicons} from '@expo/vector-icons';
import st from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
    name: 'person-outline';
    size?: number;
    color?: string;
    onPress: () => void;
}

const HeaderButton: React.FC<Props> = ({
    name,
    size = 20,
    color = 'black',
    onPress,
}) => {
    return (
        <View style={st.padding}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons
                    name={name}
                    size={size}
                    color={color}
                    onPress={onPress}
                />
            </TouchableOpacity>
        </View>
    );
};

export default HeaderButton;
