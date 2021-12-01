import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Todo } from '../../types';
import TodoItem from './TodoItem';

interface TodoItemsProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

export default function TodoItems({ todos, ...props }: TodoItemsProps) {
    return (
        <>
            {todos.length === 0 ? (
                <View style={styles.container}>
                    <Text style={styles.text}>Add todos now.</Text>
                </View>
            ) : (
                todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} {...props} />;
                })
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: { margin: 12, alignItems: 'center' },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
    },
});
