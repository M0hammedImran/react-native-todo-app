import React, { useCallback, useRef, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Todo } from '../../types';

interface AddTodoProps {
    addTodo: (todo: Pick<Todo, 'text'>) => void;
}

export default function AddTodo({ addTodo }: AddTodoProps) {
    const [todo, setTodo] = useState('');
    const inputRef = useRef<TextInput>(null);
    const onSubmit = useCallback(() => {
        addTodo({ text: todo });
        setTodo('');
        inputRef.current?.blur();
    }, [addTodo, todo]);

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setTodo}
                ref={inputRef}
                style={styles.input}
                value={todo}
                blurOnSubmit={true}
                onBlur={onSubmit}
            />

            <Button
                title='Add Todo'
                onPress={onSubmit}
                accessibilityLabel='Add todo to todos list'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 12,
        marginTop: 30,
    },
    input: {
        height: 35,
        marginRight: 12,
        padding: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ccc',
        flex: 1,
    },
});
