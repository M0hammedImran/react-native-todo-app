import React, { useCallback, useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar as NativeStatusBar,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Todo } from './types';
import TodoItems from './app/Components/TodoItems';
import Footer from './app/Components/Footer';
import AddTodo from './app/Components/AddTodo';
import { getObject, setObject } from './app/lib/storeData';

const TODOS_KEY = 'TODOS';
export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        (async () => setTodos((await getObject(TODOS_KEY)) || []))();
    }, []);

    useEffect(() => {
        (async () => await setObject(TODOS_KEY, todos))();
    }, [todos]);

    const toggleTodo = useCallback(async (id: number) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id !== id ? todo : { ...todo, completed: !todo.completed }
            )
        );
    }, []);

    const addTodo = useCallback((todo: Pick<Todo, 'text'>) => {
        if (todo.text.trim() === '') {
            return;
        }

        setTodos((todos) => [
            ...todos,
            {
                id: todos.length + 1,
                text: todo.text,
                completed: false,
                createdAt: Date.now(),
            },
        ]);
    }, []);

    const removeTodo = useCallback((id: number) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <AddTodo addTodo={addTodo} />
            <TodoItems
                todos={todos}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
            />
            <StatusBar
                backgroundColor={'dodgerblue'}
                animated
                networkActivityIndicatorVisible
                style='auto'
            />
            <Footer />
        </SafeAreaView>
    );
}

const paddingTop =
    Platform.OS === 'android' ? NativeStatusBar.currentHeight : 0;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop,
    },
});
