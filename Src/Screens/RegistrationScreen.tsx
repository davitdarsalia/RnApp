import React from 'react';
import {Image, ImageBackground, View} from 'react-native';

import globalStyles from '../../styles';
import RegistrationContainer from '../containers/registrationContainer/RegistrationContainer';

import {UseCustomDispatch} from '../Store/Hooks/CustomDispatch';
import {registrationAction} from '../Store/Reducers/authReducer';

interface Props {}

const RegistrationScreen: React.FC<Props> = ({}) => {
    const loginBackgroundImgUri = `https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg`;
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
        <View
            style={[
                globalStyles.mainScreen,
                // {backgroundColor: 'rgba(255,132,93,.8)'},
            ]}>
            <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={{uri: loginBackgroundImgUri}}>
                <RegistrationContainer onReg={onRegistration} />
            </ImageBackground>
        </View>
    );
};

export default RegistrationScreen;
