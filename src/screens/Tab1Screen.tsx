import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View} from 'react-native';
import { styles, colors } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const Tab1Screen = () => {
    const { top } = useSafeAreaInsets();
    useEffect(() => {
        console.log('UseEffect Tab1Screen')
    }, [])
    
    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top
        }}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <Icon name="airplane-sharp" size={ 80 } color={colors.pruple} />;
            </Text>
        </View>
    );
};