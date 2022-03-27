import React, {useCallback, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

import {Formik} from 'formik';

import {Input} from '../Primitives/Input/Input';

import {searchValue} from '../ValidationSchemas/AuthValidations';
import {GenericWidget} from '../Components/GenericWidget/GenericWidget';
import {WidgetData} from '../Constants/RandomDataGenerator';

import Modal from 'react-native-modal';
import {RegularWidget} from '../Components/RegularWidget/RegularWidget';

interface Props {
   onSubmit?: () => void;
}

export const BlurModalForm: React.FC<Props> = ({onSubmit = () => {}}) => {
   const [resizedWidget, setResizedWidget] = useState<boolean>(false);

   const onResizeWidget = useCallback(() => {
      setResizedWidget(true);
   }, [resizedWidget]);

   const onDismiss = useCallback(() => {
      setResizedWidget(false);
   }, [resizedWidget]);

   return (
      <Formik
         initialValues={{
            searchValue: '',
         }}
         onSubmit={() => {
            onSubmit();
         }}
         validationSchema={searchValue}>
         {({
            handleBlur,
            handleChange,
            setFieldValue,
            errors,
            values,
            touched,
            handleSubmit,
            setFieldTouched,
            setFieldError,
         }) => {
            return (
               <>
                  <Input
                     style={{
                        marginBottom: '3%',
                     }}
                     placeholder={'Help'}
                     value={values.searchValue}
                     onChangeText={(val) => {
                        setFieldValue('searchValue', val);
                     }}
                     maxLength={65}
                  />

                  <FlatList
                     style={{
                        flex: 1,
                     }}
                     numColumns={2}
                     initialNumToRender={8}
                     renderItem={({item}) => (
                        <GenericWidget
                           key={item.id}
                           onLongPress={onResizeWidget}
                           onPress={() => {}}>
                           <Text>DD</Text>
                        </GenericWidget>
                     )}
                     data={WidgetData}
                  />

                  {resizedWidget && (
                     <Modal
                        animationIn={'slideInRight'}
                        animationOut="slideOutLeft"
                        backdropColor="white"
                        isVisible={resizedWidget}>
                        <RegularWidget onModalDismiss={onDismiss}>
                           <Text>DDD</Text>
                        </RegularWidget>
                     </Modal>
                  )}
               </>
            );
         }}
      </Formik>
   );
};
