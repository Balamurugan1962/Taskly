"use client";

import { useState, useRef, useEffect } from "react";
import { Todo } from "@/types/todo";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, text: string) => void;
    index: number;
}

export default function TodoItem({
    todo,
    onToggle,
    onDelete,
    onEdit,
    index,
}: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const [isDeleting, setIsDeleting] = useState(false);
    const editRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && editRef.current) {
            editRef.current.focus();
            editRef.current.select();
        }
    }, [isEditing]);

    const handleDoubleClick = () => {
        if (!todo.completed) {
            setIsEditing(true);
            setEditText(todo.text);
        }
    };

    const handleEditSubmit = () => {
        const trimmed = editText.trim();
        if (trimmed && trimmed !== todo.text) {
            onEdit(todo.id, trimmed);
        } else {
            setEditText(todo.text);
        }
        setIsEditing(false);
    };

    const handleEditKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleEditSubmit();
        } else if (e.key === "Escape") {
            setEditText(todo.text);
            setIsEditing(false);
        }
    };

    const handleDelete = () => {
        setIsDeleting(true);
        setTimeout(() => onDelete(todo.id), 200);
    };

    return (
        <div
            className={`group flex items-center gap-3 bg-surface border border-muted/10 rounded-xl px-4 py-3 transition-all duration-300 hover:border-muted/25 hover:bg-surface/80 animate-slide-down ${isDeleting ? "opacity-0 scale-95 translate-x-4" : ""
                }`}
            style={{ animationDelay: `${index * 40}ms` }}
        >
            {/* Custom checkbox */}
            <button
                onClick={() => onToggle(todo.id)}
                className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${todo.completed
                        ? "bg-accent border-accent"
                        : "border-muted/40 hover:border-accent/60"
                    }`}
                aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
            >
                {todo.completed && (
                    <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-checkmark"
                    >
                        <path
                            d="M2 6l3 3 5-5"
                            strokeDasharray="24"
                            strokeDashoffset="0"
                        />
                    </svg>
                )}
            </button>

            {/* Text / Edit */}
            {isEditing ? (
                <input
                    ref={editRef}
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleEditSubmit}
                    onKeyDown={handleEditKeyDown}
                    className="flex-1 bg-transparent text-text outline-none text-sm border-b border-accent/50 pb-0.5"
                />
            ) : (
                <span
                    onDoubleClick={handleDoubleClick}
                    className={`flex-1 text-sm transition-all duration-200 cursor-default select-none ${todo.completed
                            ? "line-through text-muted"
                            : "text-text"
                        }`}
                    title="Double-click to edit"
                >
                    {todo.text}
                </span>
            )}

            {/* Delete button */}
            {!isEditing && (
                <button
                    onClick={handleDelete}
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 text-muted hover:text-danger hover:bg-danger/10 cursor-pointer"
                    aria-label="Delete todo"
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    >
                        <line x1="4" y1="4" x2="12" y2="12" />
                        <line x1="12" y1="4" x2="4" y2="12" />
                    </svg>
                </button>
            )}
        </div>
    );
}
