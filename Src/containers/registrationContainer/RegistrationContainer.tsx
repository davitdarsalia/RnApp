import React, {useState} from 'react';
import {Button, SafeAreaView, View} from 'react-native';

import {CustomInput} from '../../components/customInput/CustomInput';
import st from './style';

import {Formik} from 'formik';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BlurView} from 'expo-blur';

import {CustomButton} from '../../components/customButton/customButton';

interface Props {
    onReg: (
        fullName: string,
        email: string,
        password: string,
        checked: string,
    ) => void;
}

const RegistrationContainer: React.FC<Props> = ({onReg = () => {}}) => {
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
                            <View
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: 'purple',
                                    position: 'absolute',
                                    left: '35%',
                                    top: '10%',
                                }}
                            />
                            <View
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: 'teal',
                                    position: 'absolute',
                                    left: '35%',
                                    top: '70%',
                                }}
                            />
                            <View
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: 'dodgerblue',
                                    position: 'absolute',
                                    left: '35%',
                                    top: '40%',
                                }}
                            />
                            <BlurView intensity={50} style={st.innerContainer}>
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
                                    onPress={handleSubmit}
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
