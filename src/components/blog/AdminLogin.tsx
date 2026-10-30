"use client";

import { useState, useEffect } from "react";
import { Lock, KeyRound, X } from "lucide-react";

interface AdminLoginProps {
    onUnlock: () => void;
}

const ADMIN_SECRET = "arvianmarketing2025";

export function AdminLogin({ onUnlock }: AdminLoginProps) {
    const [showPrompt, setShowPrompt] = useState(false);
    const [key, setKey] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        const handleCustom = () => {
            setShowPrompt(true);
        };
        window.addEventListener("adminTripleClick", handleCustom);
        return () => window.removeEventListener("adminTripleClick", handleCustom);
    }, []);

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

    if (!showPrompt) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white border border-[#E5EAF2] rounded-3xl p-8 w-full max-w-sm shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
                <button
                    onClick={() => { setShowPrompt(false); setKey(""); setError(false); }}
                    className="absolute top-5 right-5 text-[#747780] hover:text-[#0f131a] transition-colors p-1 rounded-lg hover:bg-gray-100"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-[#eff4ff] flex items-center justify-center text-[#0051d5]">
                        <Lock className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-[#001539] font-bold text-lg">Admin Login</h3>
                        <p className="text-[#546a92] text-xs">Enter your secret key to manage posts</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#747780]" />
                        <input
                            type="password"
                            value={key}
                            onChange={(e) => { setKey(e.target.value); setError(false); }}
                            placeholder="Enter secret key"
                            className="w-full bg-[#F6F8FC] border border-[#E5EAF2] rounded-xl pl-10 pr-4 py-3 text-sm text-[#0f131a] placeholder:text-[#9aa0a6] focus:outline-none focus:border-[#0051d5] focus:bg-white transition-all"
                            autoFocus
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-xs font-semibold">Incorrect key. Please try again.</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-[#001539] hover:bg-[#002868] text-white font-bold py-3 rounded-xl transition-all shadow-sm text-sm"
                    >
                        Unlock Editorial Desk
                    </button>
                </form>
            </div>
        </div>
    );
}
