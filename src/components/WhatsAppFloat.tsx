"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            setShowTooltip(true);
        }, 1500);

        const hideTooltipTimer = setTimeout(() => {
            setShowTooltip(false);
        }, 8000);

        return () => {
            clearTimeout(timer);
            clearTimeout(hideTooltipTimer);
        };
    }, []);

    const whatsappUrl =
        "https://wa.me/919711190678?text=" +
        encodeURIComponent(
            "Hi Ravi, I saw your Meta Ads & Web Design offer and want to get more qualified leads for my business."
        );

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
            {/* Tooltip Popup */}
            {showTooltip && (
                <div className="mb-3 mr-1 bg-white rounded-2xl p-3.5 shadow-2xl border border-[#E5EAF2] max-w-[260px] animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
                    <button
                        onClick={() => setShowTooltip(false)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                        aria-label="Close message"
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-[#001539]">Ravi Verma</span>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-medium">
                            Online
                        </span>
                    </div>
                    <p className="text-xs text-[#546a92] leading-snug">
                        Need more leads or a high-converting website? Chat directly with me on WhatsApp!
                    </p>
                </div>
            )}

            {/* Floating Action Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Chat with Ravi on WhatsApp"
            >
                {/* Ping Animation */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#128C7E] border-2 border-white"></span>
                </span>

                <MessageCircle className="w-7 h-7 fill-white" />
            </a>
        </div>
    );
}
