"use client";

import { useState, ReactNode } from "react";
import toast from "react-hot-toast";
import {
  Link2,
  Globe,
  AtSign,
  Mail,
  Send,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { PORTFOLIO } from "@/app/content";

const socialIconMap: Record<string, ReactNode> = {
  linkedin: <Link2 size={18} strokeWidth={1.5} />,
  twitter: <Globe size={18} strokeWidth={1.5} />,
  instagram: <AtSign size={18} strokeWidth={1.5} />,
  mail: <Mail size={18} strokeWidth={1.5} />,
};

export default function Contact() {
  const { contact } = PORTFOLIO;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        toast.success(
          `Thanks, ${formData.name.split(" ")[0]}! I'll get back to you soon.`,
          { duration: 5000 }
        );
      } else {
        throw new Error(data.error || "Something went wrong.");
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to send. Please email me directly.";
      toast.error(message, { duration: 5000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal text-sm font-semibold text-[#8B4A3C] tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2
            className="reveal text-4xl md:text-5xl font-bold text-[#2C1810] leading-tight mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {contact.headline}
          </h2>
          <p className="reveal text-[#6B5744] max-w-xl mx-auto font-light">
            {contact.subtext}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left — Socials */}
          <div className="md:col-span-2 reveal-left">
            <div className="bg-[#EDE8DC] rounded-3xl p-8 border border-[#C4956A]/20">
              <h3
                className="text-2xl font-bold text-[#2C1810] mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Connect with me
              </h3>
              <p className="text-[#6B5744] text-sm mb-8 font-light">
                Find me on the platforms below, or send a direct email.
              </p>

              <div className="flex flex-col gap-3">
                {contact.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target={
                      social.url.startsWith("mailto") ? "_self" : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="social-link group flex items-center gap-4 p-4 rounded-xl bg-[#F5EFE0] border border-[#C4956A]/20 hover:border-[#8B4A3C] hover:bg-[#8B4A3C] transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-[#8B4A3C] group-hover:text-[#F5EFE0] transition-colors duration-300">
                      {socialIconMap[social.icon] || (
                        <Mail size={18} strokeWidth={1.5} />
                      )}
                    </span>
                    <span className="text-[#2C1810] group-hover:text-[#F5EFE0] font-medium text-sm transition-colors duration-300">
                      {social.label}
                    </span>
                    <ArrowRight
                      size={15}
                      className="ml-auto text-[#8B4A3C] group-hover:text-[#F5EFE0] transition-all duration-300 group-hover:translate-x-1"
                    />
                  </a>
                ))}
              </div>

              {/* Direct email */}
              <div className="mt-8 pt-6 border-t border-[#C4956A]/20">
                <p className="text-xs text-[#6B5744] uppercase tracking-wider font-semibold mb-2">
                  Direct email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[#8B4A3C] font-semibold hover:text-[#2C1810] transition-colors duration-200 underline underline-offset-4 cursor-pointer text-sm"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="md:col-span-3 reveal-right">
            <form
              onSubmit={handleSubmit}
              className="bg-[#F5EFE0] rounded-3xl p-8 border border-[#C4956A]/20 shadow-sm"
              noValidate
            >
              <h3
                className="text-2xl font-bold text-[#2C1810] mb-8"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Send a Message
              </h3>

              <div className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#8B4A3C] uppercase tracking-wider mb-2 cursor-default"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="e.g. Priya Sharma"
                    className={`w-full bg-[#EDE8DC] border rounded-xl px-5 py-4 text-[#2C1810] placeholder-[#6B5744]/40 text-sm focus:outline-none transition-all duration-300 cursor-text ${
                      focusedField === "name"
                        ? "border-[#8B4A3C] ring-2 ring-[#8B4A3C]/10 shadow-sm"
                        : "border-[#C4956A]/30 hover:border-[#C4956A]/60"
                    }`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-[#8B4A3C] uppercase tracking-wider mb-2 cursor-default"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="you@example.com"
                    className={`w-full bg-[#EDE8DC] border rounded-xl px-5 py-4 text-[#2C1810] placeholder-[#6B5744]/40 text-sm focus:outline-none transition-all duration-300 cursor-text ${
                      focusedField === "email"
                        ? "border-[#8B4A3C] ring-2 ring-[#8B4A3C]/10 shadow-sm"
                        : "border-[#C4956A]/30 hover:border-[#C4956A]/60"
                    }`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#8B4A3C] uppercase tracking-wider mb-2 cursor-default"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    className={`w-full bg-[#EDE8DC] border rounded-xl px-5 py-4 text-[#2C1810] placeholder-[#6B5744]/40 text-sm focus:outline-none transition-all duration-300 resize-none cursor-text ${
                      focusedField === "message"
                        ? "border-[#8B4A3C] ring-2 ring-[#8B4A3C]/10 shadow-sm"
                        : "border-[#C4956A]/30 hover:border-[#C4956A]/60"
                    }`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit"
                  disabled={isSubmitting}
                  className="btn-fill bg-[#2C1810] text-[#F5EFE0] font-semibold py-4 rounded-xl flex items-center justify-center gap-3 text-sm disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-xl active:scale-[0.98] transition-transform duration-150"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2
                        size={16}
                        className="animate-spin relative z-10"
                      />
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <Send size={15} className="relative z-10" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[#C4956A]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#6B5744] text-sm">
          <p style={{ fontFamily: "Playfair Display, serif" }}>
            © {new Date().getFullYear()} {PORTFOLIO.name}
          </p>
          <p className="text-xs font-light">Crafted with care · New Delhi, India</p>
        </div>
      </div>
    </section>
  );
}
