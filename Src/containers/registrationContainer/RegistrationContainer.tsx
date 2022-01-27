import React from 'react';
import {SafeAreaView} from 'react-native';

import CustomInput from '../../components/customInput/CustomInput';
import st from './style';

import {Formik} from 'formik';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BlurView} from 'expo-blur';

import {CustomButton} from '../../components/customButton/customButton';
import {useNavigation} from '@react-navigation/native';

interface Props {
    onReg: (
        fullName: string,
        email: string,
        password: string,
        checked: string,
    ) => void;
}

const RegistrationContainer: React.FC<Props> = ({onReg = () => {}}) => {
    const {navigate} = useNavigation();

    const onDummyRegistration = () => {
        navigate('mainScreen');
    };

    return (
        <SafeAreaView style={st.container}>
            <Formik
                initialValues={{
                    fullName: 'Davit Darsalia',
                    email: 'darsalia.david333@gmail.com',
                    password: 'David.1998!',
                }}
                onSubmit={(values) => {
                    onReg(
                        values.fullName,
                        values.password,
                        values.email,
                        'true',
                    );
                    console.log(values.fullName, values.password, values.email);
                }}
                // validationSchema={NewPasswordSchema}
            >
                {({
                    handleSubmit,
                    values,
                    setFieldTouched,
                    setFieldValue,
                    errors,
                }) => {
                    return (
                        <KeyboardAwareScrollView
                            keyboardShouldPersistTaps="always"
                            showsVerticalScrollIndicator={false}
                            scrollEnabled
                            enableOnAndroid>
                            <BlurView intensity={100} style={st.innerContainer}>
                                <CustomInput
                                    label="Full Name"
                                    value={values.fullName}
                                />
                                <CustomInput
                                    label="Password"
                                    value={values.password}
                                    isPasswordInput={true}
                                    passwordInput={true}
                                />
                                <CustomInput
                                    label="Email"
                                    value={values.email}
                                />
                                <CustomButton
                                    onPress={onDummyRegistration}
                                    label="Register"
                                />
                            </BlurView>
                        </KeyboardAwareScrollView>
                    );
                }}
            </Formik>
        </SafeAreaView>
    );
};

export default RegistrationContainer;
