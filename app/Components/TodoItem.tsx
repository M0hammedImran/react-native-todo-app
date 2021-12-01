import React from 'react';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';
import { Todo } from '../../types';

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

export default function TodoItem({
    todo,
    toggleTodo,
    removeTodo,
}: TodoItemProps) {
    return (
        <View style={styles.container}>
            <Switch
                style={styles.switch}
                trackColor={{ false: '#767577', true: 'dodgerblue' }}
                thumbColor={todo.completed ? '#ffffff' : '#f4f3f4'}
                ios_backgroundColor='#3e3e3e'
                onValueChange={() => toggleTodo(todo.id)}
                value={todo.completed}
            />
            <Text style={styles.text}>{todo.text}</Text>
            <Button
                color='tomato'
                title='Delete'
                onPress={() => removeTodo(todo.id)}
            ></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 12,
    },
    text: { fontWeight: 'bold', flex: 1 },
    switch: { marginRight: 5 },
});
