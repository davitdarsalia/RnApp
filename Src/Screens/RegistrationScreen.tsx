import React from 'react';
import {View, Text} from 'react-native';

import globalStyles from '../../styles';
import RegistrationContainer from '../containers/registrationContainer/RegistrationContainer';

interface Props {}

const RegistrationScreen: React.FC<Props> = ({}) => {
    return (
        <View style={globalStyles.mainScreen}>
            <RegistrationContainer />
        </View>
    );
};

export default RegistrationScreen;
