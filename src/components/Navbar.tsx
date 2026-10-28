"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "/blog/" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <>
            <header className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/90 backdrop-blur-md border-b border-[#E5EAF2] shadow-sm py-2.5"
                    : "bg-[#F6F8FC]/80 backdrop-blur-sm border-b border-[#E5EAF2]/60 py-3.5"
            )}>
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <img
                            src="/arvianlogo.webp"
                            alt="Arvian Marketing"
                            className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                        <span className="font-heading font-extrabold text-[#0f131a] text-lg tracking-tight">
                            ARVIAN MARKETING
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-[#44474f] hover:text-[#0051d5] transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Action Buttons */}
                    <div className="hidden sm:flex items-center gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#102a56] hover:bg-[#001539] text-white text-sm font-bold shadow-sm transition-all"
                        >
                            Let's Discuss
                        </a>
                        <a
                            href="https://wa.me/918920442422"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#e8ecf2] hover:bg-[#dbe1ff] text-[#0f131a] text-sm font-semibold transition-all"
                        >
                            <MessageCircle className="w-4 h-4 text-[#0051d5]" />
                            <span>WhatsApp Chat</span>
                        </a>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg text-[#0f131a] hover:bg-[#e8ecf2] transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Slide-Down Drawer */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm pt-20" onClick={() => setIsOpen(false)}>
                    <div
                        className="bg-white border-b border-[#E5EAF2] px-6 py-8 shadow-xl max-h-[85vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col gap-4 mb-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-semibold text-[#0f131a] hover:text-[#0051d5] py-2 border-b border-[#E5EAF2]/50 transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3 pt-2">
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center py-3 rounded-lg bg-[#102a56] text-white text-sm font-bold shadow-sm"
                            >
                                Let's Discuss Your Project
                            </a>
                            <a
                                href="https://wa.me/918920442422"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#e8ecf2] text-[#0f131a] text-sm font-semibold"
                            >
                                <MessageCircle className="w-4 h-4 text-[#0051d5]" />
                                WhatsApp Chat
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
