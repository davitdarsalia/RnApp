import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {CustomInput} from '../../components/customInput/CustomInput';
import st from './style';

interface Props {}

const RegistrationContainer: React.FC<Props> = ({}) => {
    return (
        <SafeAreaView style={st.container}>
            <CustomInput label="Mobile Number" />
        </SafeAreaView>
    );
};

export default RegistrationContainer;
