"use client";

import { useCallback, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Todo, FilterType } from "@/types/todo";

export function useTodos() {
    const [todos, setTodos, isHydrated] = useLocalStorage<Todo[]>("taskly-todos", []);
    const [filter, setFilter] = useLocalStorage<FilterType>("taskly-filter", "all");

    const addTodo = useCallback(
        (text: string) => {
            const trimmed = text.trim();
            if (!trimmed) return;
            setTodos((prev) => [
                {
                    id: crypto.randomUUID(),
                    text: trimmed,
                    completed: false,
                    createdAt: Date.now(),
                },
                ...prev,
            ]);
        },
        [setTodos]
    );

    const toggleTodo = useCallback(
        (id: string) => {
            setTodos((prev) =>
                prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
            );
        },
        [setTodos]
    );

    const deleteTodo = useCallback(
        (id: string) => {
            setTodos((prev) => prev.filter((t) => t.id !== id));
        },
        [setTodos]
    );

    const editTodo = useCallback(
        (id: string, text: string) => {
            const trimmed = text.trim();
            if (!trimmed) return;
            setTodos((prev) =>
                prev.map((t) => (t.id === id ? { ...t, text: trimmed } : t))
            );
        },
        [setTodos]
    );

    const clearCompleted = useCallback(() => {
        setTodos((prev) => prev.filter((t) => !t.completed));
    }, [setTodos]);

    const filteredTodos = useMemo(() => {
        switch (filter) {
            case "active":
                return todos.filter((t) => !t.completed);
            case "completed":
                return todos.filter((t) => t.completed);
            default:
                return todos;
        }
    }, [todos, filter]);

    const stats = useMemo(
        () => ({
            total: todos.length,
            completed: todos.filter((t) => t.completed).length,
            remaining: todos.filter((t) => !t.completed).length,
        }),
        [todos]
    );

    return {
        todos: filteredTodos,
        allTodos: todos,
        filter,
        setFilter,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
        stats,
        isHydrated,
    };
}
