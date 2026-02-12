"use client";

import TodoItem from "./TodoItem";
import { Todo } from "@/types/todo";

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, text: string) => void;
    isHydrated: boolean;
}

export default function TodoList({
    todos,
    onToggle,
    onDelete,
    onEdit,
    isHydrated,
}: TodoListProps) {
    if (!isHydrated) {
        return (
            <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
                <div className="w-6 h-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
            </div>
        );
    }

    if (todos.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
                <div className="text-muted/40 mb-4">
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="8" y="6" width="32" height="36" rx="4" />
                        <line x1="16" y1="16" x2="32" y2="16" />
                        <line x1="16" y1="24" x2="28" y2="24" />
                        <line x1="16" y1="32" x2="24" y2="32" />
                    </svg>
                </div>
                <p className="text-muted text-sm">No tasks yet</p>
                <p className="text-muted/60 text-xs mt-1">Add one above to get started</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2">
            {todos.map((todo, index) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    index={index}
                />
            ))}
        </div>
    );
}
