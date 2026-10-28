"use client";

export function Background() {
    return (
        <div className="fixed inset-0 -z-50 h-full w-full bg-[#F6F8FC] pointer-events-none transition-colors duration-500 overflow-hidden">
            {/* Subtle Top-Center Radial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-white via-[#eff4ff] to-transparent opacity-80 blur-2xl" />
            
            {/* Fine Light Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,21,57,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,21,57,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
            
            {/* Soft Ambient Corner Glows */}
            <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#dbe1ff]/40 blur-[120px]" />
            <div className="absolute bottom-0 left-[-100px] w-[600px] h-[600px] rounded-full bg-[#eff4ff]/60 blur-[140px]" />
        </div>
    );
}
