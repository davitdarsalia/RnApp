import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';

import {CustomInput} from '../../components/customInput/CustomInput';
import {registration} from '../../Types/GlobalInterfaces';
import st from './style';

interface Props {}

const RegistrationContainer: React.FC<Props> = ({}) => {
    return (
        <SafeAreaView style={st.container}>
            <CustomInput />
            <CustomInput />

            <Button title="Register" onPress={() => {}} />
        </SafeAreaView>
    );
};

export default RegistrationContainer;
