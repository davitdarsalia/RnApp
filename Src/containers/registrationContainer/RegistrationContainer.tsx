import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';

import {CustomInput} from '../../components/customInput/CustomInput';
import st from './style';

import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface Props {}

const RegistrationContainer: React.FC<Props> = ({}) => {
    return (
        <SafeAreaView style={st.container}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(values) => {
                    console.log(values.email);
                    console.log(values.password);
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
                            <CustomInput />
                            <CustomInput />

                            <Button
                                onPress={() => handleSubmit}
                                title="Register"
                            />
                        </KeyboardAwareScrollView>
                    );
                }}
            </Formik>
        </SafeAreaView>
    );
};

export default RegistrationContainer;
