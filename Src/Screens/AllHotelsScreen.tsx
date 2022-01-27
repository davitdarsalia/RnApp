import React from 'react';

import AllHotelsContainer from '../containers/allHotelsContainer/allHotelsContainer';
import {LinearGradient} from 'expo-linear-gradient';
import {colors} from '../consts/colors';

interface Props {}

const AllHotelsScreen: React.FC<Props> = ({}) => {
    const onHotelItem = () => {};

    return (
        <LinearGradient colors={[colors.gradientDark, colors.gradientLight]}>
            <AllHotelsContainer onHotelItem={onHotelItem} />
        </LinearGradient>
    );
};

export default AllHotelsScreen;
