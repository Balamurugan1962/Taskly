"use client";

import { FilterType } from "@/types/todo";

interface FilterBarProps {
    filter: FilterType;
    onFilterChange: (filter: FilterType) => void;
    stats: {
        total: number;
        completed: number;
        remaining: number;
    };
    onClearCompleted: () => void;
}

const filters: { value: FilterType; label: string }[] = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Done" },
];

export default function FilterBar({
    filter,
    onFilterChange,
    stats,
    onClearCompleted,
}: FilterBarProps) {
    if (stats.total === 0) return null;

    return (
        <div className="flex items-center justify-between animate-fade-in">
            {/* Filter pills */}
            <div className="flex items-center gap-1 bg-surface border border-muted/10 rounded-lg p-1">
                {filters.map((f) => (
                    <button
                        key={f.value}
                        onClick={() => onFilterChange(f.value)}
                        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer ${filter === f.value
                                ? "bg-accent/15 text-accent"
                                : "text-muted hover:text-subtle"
                            }`}
                    >
                        {f.label}
                        {f.value === "all" && (
                            <span className="ml-1.5 text-[10px] opacity-60">
                                {stats.total}
                            </span>
                        )}
                        {f.value === "active" && stats.remaining > 0 && (
                            <span className="ml-1.5 text-[10px] opacity-60">
                                {stats.remaining}
                            </span>
                        )}
                        {f.value === "completed" && stats.completed > 0 && (
                            <span className="ml-1.5 text-[10px] opacity-60">
                                {stats.completed}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* Clear completed */}
            {stats.completed > 0 && (
                <button
                    onClick={onClearCompleted}
                    className="text-xs text-muted hover:text-danger transition-colors duration-200 cursor-pointer"
                >
                    Clear done
                </button>
            )}
        </div>
    );
}
