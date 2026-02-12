"use client";

export default function Header() {
    return (
        <header className="text-center mb-10 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">
                taskly
                <span className="text-accent">.</span>
            </h1>
            <p className="text-subtle text-sm mt-2 tracking-wide">
                minimal. focused. yours.
            </p>
        </header>
    );
}
