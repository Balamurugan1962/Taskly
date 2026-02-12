"use client";

import { useTodos } from "@/hooks/useTodos";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import FilterBar from "@/components/FilterBar";
import TodoList from "@/components/TodoList";

export default function Home() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    stats,
    isHydrated,
  } = useTodos();

  // Show splash screen while loading
  if (!isHydrated) {
    return (
      <main className="h-screen bg-void flex items-center justify-center">
        <Header />
      </main>
    );
  }

  return (
    <main className="h-screen bg-void flex justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-lg flex flex-col gap-4 animate-fade-in h-full">
        {/* Fixed top: input + filters */}
        <div className="flex flex-col gap-4 flex-shrink-0">
          <TodoInput onAdd={addTodo} />
          <FilterBar
            filter={filter}
            onFilterChange={setFilter}
            stats={stats}
            onClearCompleted={clearCompleted}
          />
        </div>

        {/* Scrollable todo list */}
        <div className="flex-1 min-h-0 overflow-y-auto pr-1">
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
            isHydrated={isHydrated}
          />
        </div>

        {/* Fixed bottom: progress + hint */}
        <div className="flex-shrink-0 flex flex-col gap-3">
          {stats.total > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs text-muted mb-2">
                <span>{stats.remaining} remaining</span>
                <span>
                  {Math.round((stats.completed / stats.total) * 100)}% done
                </span>
              </div>
              <div className="w-full h-1 bg-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent/60 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${(stats.completed / stats.total) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}

          <p className="text-center text-muted/40 text-[11px]">
            double-click a task to edit · data stored locally
          </p>
        </div>
      </div>
    </main>
  );
}

