import React, { useCallback, useState } from 'react';
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

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const toggleTodo = useCallback((id: number) => {
        setTodos((todos) => {
            return todos.map((todo) => {
                if (todo.id !== id) {
                    return todo;
                }

                return { ...todo, completed: !todo.completed };
            });
        });
    }, []);

    const addTodo = useCallback((todo: Pick<Todo, 'text'>) => {
        if (todo.text.trim() === '') {
            return;
        }

        setTodos((todos) => {
            return [
                ...todos,
                {
                    id: todos.length + 1,
                    text: todo.text,
                    completed: false,
                    createdAt: Date.now(),
                },
            ];
        });
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
            <StatusBar backgroundColor={'dodgerblue'} style='auto' />
            <Footer />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:
            Platform.OS === 'android'
                ? (NativeStatusBar.currentHeight || 0) + 10
                : 0,
    },
});
