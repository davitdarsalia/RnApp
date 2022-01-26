import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';

import {CustomInput} from '../../components/customInput/CustomInput';
import st from './style';

import {Formik} from 'formik';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
                            <CustomInput value={values.fullName} />
                            <CustomInput
                                value={values.password}
                                isPasswordInput={true}
                            />
                            <CustomInput value={values.email} />
                            <CustomButton
                                onPress={handleSubmit}
                                label="Register"
                            />
                        </KeyboardAwareScrollView>
                    );
                }}
            </Formik>
        </SafeAreaView>
    );
};

export default RegistrationContainer;
