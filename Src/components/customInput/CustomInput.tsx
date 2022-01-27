import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleProp,
    ViewComponent,
    Touchable,
} from 'react-native';

import {BlurView} from 'expo-blur';

import {Entypo} from '@expo/vector-icons';

import st from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
    value: string;
    isPasswordInput?: boolean;
    label: string;
    passwordInput?: boolean;
    onChange: (text: string) => void;
}

const CustomInput: React.FC<Props> = ({
    value,
    isPasswordInput,
    label,
    passwordInput,
    onChange,
}) => {
    const [text, setText] = useState<string>(value);
    const [visible, setVisible] = useState<boolean>(false);

    // const passwordIcon = passwordInput ? (
    //     <TouchableOpacity
    //         onPress={() => setVisible((prev) => !prev)}
    //         style={st.passwordIcon}>
    //         <Entypo name="eye" size={24} color="black" />
    //     </TouchableOpacity>
    // ) : (
    //     <TouchableOpacity
    //         style={st.passwordIcon}
    //         onPress={() => setVisible((prev) => !prev)}>
    //         <Entypo name="eye-with-line" size={24} color="black" />
    //     </TouchableOpacity>
    // );

    return (
        <View style={st.container}>
            <TextInput
                autoCapitalize="none"
                placeholder={label}
                secureTextEntry={isPasswordInput}
                autoCorrect={false}
                onChangeText={onChange}
                value={text}
                style={st.inputStyle}
            />
            {/* <View>{passwordIcon}</View> */}
        </View>
    );
};

export default CustomInput;
