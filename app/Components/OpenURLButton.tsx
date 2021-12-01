import React, { ReactNode, useCallback } from 'react';
import { Alert, Linking, Text } from 'react-native';
interface Props {
    url: string;
    children: ReactNode;
}

export default function OpenURLButton({ url, children }: Props) {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return <Text onPress={handlePress}>{children}</Text>;
}
