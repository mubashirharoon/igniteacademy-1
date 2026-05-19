import { useState } from "react";
import { toast } from "sonner";

const levels = ["O Level", "IGCSE", "GCE", "AS Level", "A Level"];
const subjects = ["Physics", "Chemistry", "Mathematics", "Computer Science", "Accounting", "Business Studies", "Economics"];
const modes = ["Online", "Physical", "Not Sure Yet"];

export function ConsultForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("studentName") as string) || "Student";
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Consultation booked", {
        description: `Thank you, ${name}. We'll contact you on WhatsApp shortly.`,
      });
      (e.target as HTMLFormElement).reset();
    }, 700);
  }

  const fieldCls = "w-full bg-[#0e0e0e] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#666] focus:outline-none focus:border-[#E85D10] focus:ring-2 focus:ring-[#E85D10]/20 transition";
  const labelCls = "block text-xs font-medium text-[#B8B8B8] mb-2 uppercase tracking-wider";

  return (
    <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-5">
      <div>
        <label className={labelCls}>Student Name</label>
        <input required name="studentName" maxLength={80} className={fieldCls} placeholder="Full name" />
      </div>
      <div>
        <label className={labelCls}>Parent / Guardian Name</label>
        <input name="parentName" maxLength={80} className={fieldCls} placeholder="Optional" />
      </div>
      <div>
        <label className={labelCls}>WhatsApp Number</label>
        <input required name="whatsapp" maxLength={20} className={fieldCls} placeholder="+92 / +971 ..." />
      </div>
      <div>
        <label className={labelCls}>Email Address</label>
        <input required type="email" name="email" maxLength={120} className={fieldCls} placeholder="you@example.com" />
      </div>
      <div>
        <label className={labelCls}>Student Level</label>
        <select required name="level" className={fieldCls} defaultValue="">
          <option value="" disabled>Select level</option>
          {levels.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls}>Subjects Needed</label>
        <select required name="subject" className={fieldCls} defaultValue="">
          <option value="" disabled>Select subject</option>
          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls}>Preferred Class Mode</label>
        <select required name="mode" className={fieldCls} defaultValue="">
          <option value="" disabled>Select mode</option>
          {modes.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls}>Student Location</label>
        <input name="location" maxLength={100} className={fieldCls} placeholder="City, Country" />
      </div>
      <div className="md:col-span-2">
        <label className={labelCls}>Current Academic Concern</label>
        <input name="concern" maxLength={200} className={fieldCls} placeholder="e.g. Struggling with Economics essays" />
      </div>
      <div>
        <label className={labelCls}>Preferred Contact Time</label>
        <input name="time" maxLength={60} className={fieldCls} placeholder="e.g. After 5 PM PKT" />
      </div>
      <div>
        <label className={labelCls}>How Soon Do You Want to Start?</label>
        <input name="start" maxLength={60} className={fieldCls} placeholder="e.g. Within a week" />
      </div>
      <div className="md:col-span-2">
        <label className={labelCls}>Additional Message</label>
        <textarea name="message" maxLength={500} rows={3} className={fieldCls} placeholder="Anything else we should know?" />
      </div>
      <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
        <button
          disabled={submitting}
          className="magnetic-btn flex-1 inline-flex items-center justify-center px-7 py-4 rounded-full text-sm font-semibold text-white disabled:opacity-60"
          style={{ background: "var(--grad-ignite)", boxShadow: "var(--shadow-glow)" }}
        >
          {submitting ? "Sending..." : "Book My Free Consultation"}
        </button>
        <a
          href="https://wa.me/923211719494"
          target="_blank"
          rel="noopener noreferrer"
          className="magnetic-btn flex-1 inline-flex items-center justify-center px-7 py-4 rounded-full text-sm font-semibold text-white border border-white/15 hover:border-[#E85D10]/60 hover:bg-white/5 transition"
        >
          Message on WhatsApp
        </a>
      </div>
      <p className="md:col-span-2 text-xs text-[#888] mt-1">
        Your details are only used to contact you about Ignite Academy tuition.
      </p>
    </form>
  );
}
