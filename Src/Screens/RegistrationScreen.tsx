import React from 'react';
import {View} from 'react-native';

import globalStyles from '../../styles';
import RegistrationContainer from '../containers/registrationContainer/RegistrationContainer';

import {UseCustomDispatch} from '../Store/Hooks/CustomDispatch';
import {registrationAction} from '../Store/Reducers/authReducer';

interface Props {}

const RegistrationScreen: React.FC<Props> = ({}) => {
    const dispatch = UseCustomDispatch();

    const onRegistration = (
        fullName: string,
        password: string,
        email: string,
        checked: string,
    ) => {
        dispatch(
            registrationAction({
                fullName,
                password,
                email,
                checked,
            }),
        );
    };

    return (
        <View style={globalStyles.mainScreen}>
            <RegistrationContainer onReg={onRegistration} />
        </View>
    );
};

export default RegistrationScreen;
