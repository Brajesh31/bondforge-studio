// conversation.tsx
import React, { useState } from "react";
import {
  Clock,
  Calendar,
  Headphones,
  Lock,
  Send,
  ChevronDown,
  Check
} from "lucide-react";

export default function Conversation() {
  // State for all form fields
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    details: ""
  });

  // State to handle submission success UI
  const [isSent, setIsSent] = useState(false);

  // Generic handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent entering more than 1000 characters in the textarea
    if (name === "details" && value.length > 1000) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger the success state
    setIsSent(true);

    // Clear the form fields
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      details: ""
    });

    // Reset the success message back to default after 3 seconds
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white py-5 lg:py-6">
      <div className="mx-auto w-full max-w-[1800px] px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-6 xl:gap-8">

          {/* --- LEFT COLUMN --- */}
          <div className="flex w-full flex-col">
            <h1 className="font-sans text-[42px] font-extrabold leading-[1.05] tracking-tight sm:text-[48px] md:text-[56px] lg:text-[64px]">
              Tell us about your <br />
              project. <br />
              <span className="font-serif text-[#E04D43] italic font-normal">We'll take it from here.</span>
            </h1>

            <div className="mt-5 mb-5 h-[2px] w-12 bg-gray-300 dark:bg-gray-700" />

            <p className="mb-7 max-w-2xl text-[16px] leading-relaxed text-gray-700 dark:text-gray-300 font-medium pr-4">
              Whether you need a single video edited or a complete social media partner — we're here to understand your goals and help you achieve them.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-5 max-w-2xl pr-4">
              <div className="flex items-start gap-4 border-b border-gray-200/80 pb-5 dark:border-white/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-[#E04D43]/10 border border-gray-100 dark:border-red-900/20">
                  <Clock className="h-5 w-5 text-[#E04D43]" strokeWidth={2} />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-[15px] font-bold text-gray-900 dark:text-white">Quick Response</span>
                  <span className="text-[14px] text-gray-600 dark:text-gray-400 mt-1">We reply to all inquiries within 24 hours.</span>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-gray-200/80 pb-5 dark:border-white/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-[#E04D43]/10 border border-gray-100 dark:border-red-900/20">
                  <Calendar className="h-5 w-5 text-[#E04D43]" strokeWidth={2} />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-[15px] font-bold text-gray-900 dark:text-white">Available Worldwide</span>
                  <span className="text-[14px] text-gray-600 dark:text-gray-400 mt-1">We work with clients across the USA, India, and around the globe.</span>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-gray-200/80 pb-5 dark:border-white/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-[#E04D43]/10 border border-gray-100 dark:border-red-900/20">
                  <Headphones className="h-5 w-5 text-[#E04D43]" strokeWidth={2} />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-[15px] font-bold text-gray-900 dark:text-white">Business Hours</span>
                  <span className="text-[14px] text-gray-600 dark:text-gray-400 mt-1 block">Mon - Fri: 9:00 AM - 6:00 PM (IST)</span>
                  <span className="text-[14px] text-gray-600 dark:text-gray-400 block">Saturday: 10:00 AM - 2:00 PM (IST)</span>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="mt-6 rounded-2xl bg-white/60 border border-gray-200/60 dark:bg-[#E04D43]/5 dark:border-red-900/20 p-5 max-w-2xl shadow-sm mr-4">
              <div className="flex gap-3">
                <span className="font-serif text-4xl text-[#E04D43] leading-none shrink-0">“</span>
                <p className="text-[15px] font-bold leading-snug text-gray-900 dark:text-gray-100 pt-2">
                  "The more details you share, the better we can understand your vision and deliver exceptional results."
                </p>
              </div>

              <a
                href="https://www.linkedin.com/in/blvrran"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex w-fit items-center gap-3 pl-8 transition-opacity hover:opacity-80"
              >
                {/* Image wrapper to crop the zoomed image perfectly into a circle */}
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200 dark:border-white/10 transition-all group-hover:border-[#E04D43]/50">
                  <img
                    src="anand.png"
                    alt="Anand Kumar Mahato, Founder"
                    className="h-full w-full object-cover scale-[1.2]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-gray-900 transition-colors group-hover:text-[#E04D43] dark:text-white dark:group-hover:text-[#E04D43] leading-tight">
                    - Anand Kumar Mahato, Founder
                  </span>
                  <span className="text-[13px] text-gray-500 dark:text-gray-400 leading-tight mt-0.5">Social Bond</span>
                </div>
              </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN (FORM) --- */}
          <div className="flex w-full flex-col lg:pl-4 xl:pl-6">
            <h2 className="mb-6 text-[28px] font-extrabold tracking-tight text-gray-900 dark:text-white">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[14px] font-bold text-gray-900 dark:text-gray-200">
                    Full Name <span className="text-[#E04D43]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-gray-300/80 bg-white/50 px-4 py-3 text-[15px] text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-black focus:bg-white dark:border-white/10 dark:bg-black/40 dark:text-white dark:focus:border-white dark:focus:bg-[#0A0A0A] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[14px] font-bold text-gray-900 dark:text-gray-200">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company or brand"
                    className="w-full rounded-xl border border-gray-300/80 bg-white/50 px-4 py-3 text-[15px] text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-black focus:bg-white dark:border-white/10 dark:bg-black/40 dark:text-white dark:focus:border-white dark:focus:bg-[#0A0A0A] transition-all"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[14px] font-bold text-gray-900 dark:text-gray-200">
                    Email Address <span className="text-[#E04D43]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-300/80 bg-white/50 px-4 py-3 text-[15px] text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-black focus:bg-white dark:border-white/10 dark:bg-black/40 dark:text-white dark:focus:border-white dark:focus:bg-[#0A0A0A] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[14px] font-bold text-gray-900 dark:text-gray-200">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full rounded-xl border border-gray-300/80 bg-white/50 px-4 py-3 text-[15px] text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-black focus:bg-white dark:border-white/10 dark:bg-black/40 dark:text-white dark:focus:border-white dark:focus:bg-[#0A0A0A] transition-all"
                  />
                </div>
              </div>

              {/* Row 3 - Service Needed */}
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-[14px] font-bold text-gray-900 dark:text-gray-200">
                  Service Needed <span className="text-[#E04D43]">*</span>
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-xl border border-gray-300/80 bg-white/50 px-4 py-3 pr-10 text-[15px] text-gray-900 shadow-sm outline-none focus:border-black focus:bg-white dark:border-white/10 dark:bg-black/40 dark:text-white dark:focus:border-white dark:focus:bg-[#0A0A0A] transition-all cursor-pointer"
                  >
                    <option value="" disabled className="text-gray-500 bg-white dark:bg-[#0F0F0F] dark:text-gray-400">Select the service you need</option>
                    <option value="video" className="text-black bg-white dark:text-white dark:bg-[#0F0F0F]">Video Editing</option>
                    <option value="social" className="text-black bg-white dark:text-white dark:bg-[#0F0F0F]">Social Media Management</option>
                    <option value="strategy" className="text-black bg-white dark:text-white dark:bg-[#0F0F0F]">Content Strategy</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[14px] font-bold text-gray-900 dark:text-gray-200">
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-gray-300/80 bg-white/50 px-4 py-3 pr-10 text-[15px] text-gray-900 shadow-sm outline-none focus:border-black focus:bg-white dark:border-white/10 dark:bg-black/40 dark:text-white dark:focus:border-white dark:focus:bg-[#0A0A0A] transition-all cursor-pointer"
                    >
                      <option value="" disabled className="text-gray-500 bg-white dark:bg-[#0F0F0F] dark:text-gray-400">Select your budget range</option>
                      <option value="1k-3k" className="text-black bg-white dark:text-white dark:bg-[#0F0F0F]">$1,000 - $3,000</option>
                      <option value="3k-5k" className="text-black bg-white dark:text-white dark:bg-[#0F0F0F]">$3,000 - $5,000</option>
                      <option value="5k+" className="text-black bg-white dark:text-white dark:bg-[#0F0F0F]">$5,000+</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[14px] font-bold text-gray-900 dark:text-gray-200">
                    Timeline
                  </label>
                  <div className="relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-gray-300/80 bg-white/50 px-4 py-3 pr-10 text-[15px] text-gray-900 shadow-sm outline-none focus:border-black focus:bg-white dark:border-white/10 dark:bg-black/40 dark:text-white dark:focus:border-white dark:focus:bg-[#0A0A0A] transition-all cursor-pointer"
                    >
                      <option value="" disabled className="text-gray-500 bg-white dark:bg-[#0F0F0F] dark:text-gray-400">When do you want to start?</option>
                      <option value="asap" className="text-black bg-white dark:text-white dark:bg-[#0F0F0F]">Immediately</option>
                      <option value="1-2weeks" className="text-black bg-white dark:text-white dark:bg-[#0F0F0F]">1-2 Weeks</option>
                      <option value="1month" className="text-black bg-white dark:text-white dark:bg-[#0F0F0F]">Next Month</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 5 - Textarea */}
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-[14px] font-bold text-gray-900 dark:text-gray-200">
                  Project Details <span className="text-[#E04D43]">*</span>
                </label>
                <textarea
                  rows={4}
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project, goals, target audience, and any reference links or specific requirements."
                  className="w-full resize-none rounded-xl border border-gray-300/80 bg-white/50 px-4 py-3 text-[15px] text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-black focus:bg-white dark:border-white/10 dark:bg-black/40 dark:text-white dark:focus:border-white dark:focus:bg-[#0A0A0A] transition-all"
                />
                <span className="absolute bottom-3 right-4 text-[12px] font-medium text-gray-400">
                  {formData.details.length} / 1000
                </span>
              </div>

              {/* Security Note */}
              <div className="flex items-center gap-2 rounded-xl bg-gray-100/50 dark:bg-white/5 px-4 py-3 border border-gray-200 dark:border-white/5">
                <Lock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <p className="text-[13px] font-bold text-gray-700 dark:text-gray-300">
                  Your information is 100% secure and confidential.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSent}
                className={`group mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-[16px] font-bold text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#E04D43]/50 active:scale-[0.98] ${
                  isSent
                    ? "bg-green-600 hover:bg-green-700 shadow-md cursor-not-allowed"
                    : "bg-[#E04D43] hover:bg-[#d63f35] hover:shadow-lg"
                }`}
              >
                {isSent ? "Message Sent!" : "Send Message"}
                {isSent ? (
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                ) : (
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}