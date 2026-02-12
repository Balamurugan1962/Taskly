"use client";

import { useState, useRef, useEffect } from "react";

interface TodoInputProps {
    onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
    const [text, setText] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = () => {
        if (text.trim()) {
            onAdd(text);
            setText("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <div className="animate-scale-in relative flex items-center gap-3 bg-surface border border-muted/20 rounded-xl px-4 py-3 transition-all duration-300 focus-within:border-accent/50 focus-within:shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            {/* Plus icon */}
            <button
                onClick={handleSubmit}
                disabled={!text.trim()}
                className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center transition-all duration-200 hover:bg-accent/20 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-accent/10 cursor-pointer"
                aria-label="Add todo"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                >
                    <line x1="8" y1="3" x2="8" y2="13" />
                    <line x1="3" y1="8" x2="13" y2="8" />
                </svg>
            </button>

            <input
                ref={inputRef}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="What needs to be done?"
                className="flex-1 bg-transparent text-text placeholder-muted outline-none text-sm"
                autoComplete="off"
            />

            {text.trim() && (
                <span className="text-muted text-xs tracking-wide animate-fade-in">
                    ↵
                </span>
            )}
        </div>
    );
}
