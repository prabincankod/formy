import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Doctor Appointment Form — Collect Patient Bookings Without a Backend",
    description:
        "A ready-to-use appointment booking form for doctors and clinics. Patients pick a date and reason, you get notified by email or webhook — no booking software required.",
    alternates: {
        canonical: "/use-cases/doctor-appointment-form",
    },
};

const htmlForm = `<form action="https://formy.io/api/submit/booking-requests" method="POST">
  <input type="hidden" name="slug" value="booking-requests">
  <label>Full name
    <input type="text" name="fullName" required>
  </label>
  <label>Phone
    <input type="tel" name="phone" required>
  </label>
  <label>Preferred date
    <input type="date" name="preferredDate" required>
  </label>
  <label>Reason for visit
    <select name="reason">
      <option>Check-up</option>
      <option>Follow-up</option>
      <option>New symptom</option>
    </select>
  </label>
  <button type="submit">Request appointment</button>
</form>`;

export default function DoctorAppointmentForm() {
    return (
        <>
            <Link
                href="/use-cases"
                className="text-xs text-on-surface-variant hover:text-on-surface transition-colors"
            >
                &larr; All use cases
            </Link>

            <p className="text-xs font-mono tracking-widest uppercase text-primary mt-6 mb-3">
                Use case
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-4">
                Doctor appointment form
            </h1>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl mb-8">
                A simple appointment request form for a doctor&apos;s office or
                clinic. Patients pick a date and reason for visit, the request
                lands in Formy, and you get an email (or webhook) the moment it
                arrives — no booking software, no patient portal, no database.
            </p>

            <h2 className="text-xl font-semibold text-on-surface mb-3">
                The form
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Paste this into any static site. Each submission is saved to
                Formy and a notification fires instantly.
            </p>

            <pre className="text-[0.85em]">{htmlForm}</pre>

            <h2 className="text-xl font-semibold text-on-surface mt-10 mb-3">
                What happens on submit
            </h2>
            <ol className="list-decimal pl-6 space-y-1.5 text-sm text-on-surface-variant leading-relaxed mb-8">
                <li>
                    The form POSTs the fields (name, phone, date, reason) to{" "}
                    <code className="text-[0.8em]">/api/submit/booking-requests</code>
                </li>
                <li>Formy stores the submission in your dashboard</li>
                <li>You receive an email notification with the request details</li>
                <li>
                    If you set a webhook URL, the full payload is forwarded to
                    your own system (e.g. a scheduler or CRM)
                </li>
            </ol>

            <div className="bg-surface-container-low border border-border-muted rounded-xl p-6 mb-10">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                    <strong className="text-on-surface">
                        Tip for clinics:
                    </strong>{" "}
                    patients on mobile don&apos;t want to call or fill long forms.
                    Keep it to these four fields and put the form on your
                    homepage and your Google Business profile link. Every
                    request is one less phone call to return.
                </p>
            </div>

            <div className="text-center bg-on-surface text-surface rounded-xl py-10 px-6">
                <h2 className="text-xl font-bold mb-2">
                    Set this up in 30 seconds
                </h2>
                <p className="text-sm text-surface/70 max-w-md mx-auto mb-6">
                    Create a form, copy your endpoint, paste the HTML. No
                    backend, no config.
                </p>
                <Link
                    href="/auth/register"
                    className="inline-flex items-center bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:brightness-95 transition-all"
                >
                    Create your appointment form
                </Link>
            </div>
        </>
    );
}
