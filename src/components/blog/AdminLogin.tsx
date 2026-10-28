"use client";

import { useState } from "react";
import { Lock, KeyRound, X } from "lucide-react";

interface AdminLoginProps {
    onUnlock: () => void;
}

// The admin secret key — change this to whatever password you want
const ADMIN_SECRET = "arvianmarketing2025";

export function AdminLogin({ onUnlock }: AdminLoginProps) {
    const [showPrompt, setShowPrompt] = useState(false);
    const [key, setKey] = useState("");
    const [error, setError] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleTitleClick = () => {
        const next = clickCount + 1;
        setClickCount(next);
        if (next >= 3) {
            setShowPrompt(true);
            setClickCount(0);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (key === ADMIN_SECRET) {
            localStorage.setItem("adminKey", ADMIN_SECRET);
            onUnlock();
            setShowPrompt(false);
            setKey("");
            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <>
            {/* Invisible clickable zone on the "Blog" heading — triple-click to open */}
            <span
                onClick={handleTitleClick}
                className="select-none"
                title=""
                aria-hidden="true"
            />

            {showPrompt && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="bg-[#161618] border border-white/10 rounded-2xl p-8 w-full max-w-sm shadow-2xl relative">
                        <button
                            onClick={() => { setShowPrompt(false); setKey(""); setError(false); }}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                                <Lock className="w-5 h-5 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Admin Access</h3>
                                <p className="text-gray-500 text-sm">Enter your secret key to publish</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="relative">
                                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input
                                    type="password"
                                    value={key}
                                    onChange={(e) => { setKey(e.target.value); setError(false); }}
                                    placeholder="Enter admin secret key"
                                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                                    autoFocus
                                />
                            </div>

                            {error && (
                                <p className="text-red-400 text-sm">Incorrect key. Please try again.</p>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-[#2563EB] text-white font-bold py-3 rounded-lg hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                            >
                                Unlock Admin Panel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
