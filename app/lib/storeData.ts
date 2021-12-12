import AsyncStorageLib from '@react-native-async-storage/async-storage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function setObject(key: string, value: any): Promise<void> {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorageLib.setItem(key, jsonValue);
    } catch (e) {
        console.log(e);
        throw new Error('Unable to store object');
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getObject(key: string): Promise<any> {
    try {
        const _val = await AsyncStorageLib.getItem(key);
        if (!_val) return {};
        const val = JSON.parse(_val);
        return val;
    } catch (e) {
        console.log(e);
        throw new Error('Unable to store object');
    }
}

export const setString = async (key: string, value: string) => {
    try {
        await AsyncStorageLib.setItem(key, value);
    } catch (e) {
        console.log(e);
        throw new Error('Unable to store string');
    }
};

export const getString = async (key: string): Promise<string> => {
    try {
        const _val = await AsyncStorageLib.getItem(key);
        if (!_val) return '';
        return _val;
    } catch (e) {
        console.log(e);
        throw new Error('Unable to store string');
    }
};
