import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle, ArrowUp } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#001539] text-[#f8f9ff] py-14 px-4 sm:px-6 lg:px-8 border-t border-[#102a56]">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
                    {/* Brand Info */}
                    <div className="md:col-span-6 flex flex-col items-start">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/arvianlogo.webp"
                                alt="Arvian Marketing"
                                className="h-9 w-auto brightness-200"
                            />
                            <span className="font-heading font-black text-lg tracking-tight text-white">
                                ARVIAN MARKETING
                            </span>
                        </div>
                        <p className="text-sm text-[#b0c6fc] max-w-md leading-relaxed mb-6">
                            Delhi NCR &amp; Noida&apos;s strategic agency for performance Meta Ads, bespoke website design, conversion-focused landing pages, and search optimization.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=61593074286842"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#dbe1ff] hover:bg-[#0051d5] hover:text-white transition-all"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/arvianmarketing/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#dbe1ff] hover:bg-[#0051d5] hover:text-white transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ravi-verma-41a291212/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#dbe1ff] hover:bg-[#0051d5] hover:text-white transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20saw%20your%20Meta%20Ads%20service%20offer%20and%20want%20to%20get%20more%20qualified%20leads%20for%20my%20business."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center text-white hover:bg-[#20ba59] transition-all shadow-sm"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle size={18} className="fill-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-sm text-[#b0c6fc]">
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="#work" className="hover:text-white transition-colors">Case Studies</a>
                            </li>
                            <li>
                                <a href="#pricing" className="hover:text-white transition-colors">Pricing Packages</a>
                            </li>
                            <li>
                                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
                            </li>
                            <li>
                                <a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a>
                            </li>
                            <li>
                                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                            </li>
                            <li>
                                <Link href="/blog/" className="hover:text-white transition-colors">Blog &amp; Insights</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact details */}
                    <div className="md:col-span-3">
                        <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
                            Contact &amp; Support
                        </h4>
                        <div className="space-y-2.5 text-sm text-[#b0c6fc]">
                            <div>Noida &amp; Delhi NCR, India</div>
                            <div>
                                <a
                                    href="https://wa.me/919711190678"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white font-semibold transition-colors"
                                >
                                    +91 97111 90678 (WhatsApp / Call)
                                </a>
                            </div>
                            <div>contact@arvianmarketing.com</div>
                            <div className="pt-2">
                                <a
                                    href="#contact"
                                    className="inline-block text-xs font-bold text-[#b0c6fc] underline hover:text-white transition-colors"
                                >
                                    Get My Free Growth Plan &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#b0c6fc]">
                    <p>
                        © {new Date().getFullYear()} Arvian Marketing • Conversion-Focused Meta Ads &amp; Fast Funnels.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#services" className="hover:text-white transition-colors">Services</a>
                        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                        <a href="#work" className="hover:text-white transition-colors">Results</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
