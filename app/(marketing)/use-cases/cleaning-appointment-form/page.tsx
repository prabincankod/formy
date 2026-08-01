import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Cleaning Service Appointment Form — Take Bookings on Any Site",
    description:
        "A simple appointment form for cleaning companies: service type, address, date. Collect bookings on your site — no booking engine required.",
    alternates: {
        canonical: "/use-cases/cleaning-appointment-form",
    },
};

const htmlForm = `<form action="https://formy.io/api/submit/cleaning-bookings" method="POST">
  <input type="hidden" name="slug" value="cleaning-bookings">
  <label>Your name
    <input type="text" name="name" required>
  </label>
  <label>Phone
    <input type="tel" name="phone" required>
  </label>
  <label>Service
    <select name="service" required>
      <option>Standard Clean</option>
      <option>Deep Clean</option>
      <option>Move-In / Move-Out</option>
    </select>
  </label>
  <label>Address
    <input type="text" name="address" required>
  </label>
  <label>Preferred date
    <input type="date" name="date" required>
  </label>
  <button type="submit">Request booking</button>
</form>`;

export default function CleaningAppointmentForm() {
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
                Cleaning service appointment form
            </h1>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl mb-8">
                Cleaning companies lose leads when customers have to call, email,
                or fill out a long quote form. A single appointment form —
                service, address, date — turns your website into a booking
                channel that works while you&apos;re on a job. Formy handles the
                submission and notifies you instantly.
            </p>

            <h2 className="text-xl font-semibold text-on-surface mb-3">
                The form
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Five fields, one endpoint. Customers pick a service and a date;
                you get the request in your inbox and dashboard.
            </p>

            <pre className="text-[0.85em]">{htmlForm}</pre>

            <h2 className="text-xl font-semibold text-on-surface mt-10 mb-3">
                What happens on submit
            </h2>
            <ol className="list-decimal pl-6 space-y-1.5 text-sm text-on-surface-variant leading-relaxed mb-8">
                <li>
                    The form POSTs to{" "}
                    <code className="text-[0.8em]">/api/submit/cleaning-bookings</code>
                </li>
                <li>Formy stores the booking request in your dashboard</li>
                <li>
                    You get an email notification — no more checking a shared
                    inbox every hour
                </li>
                <li>
                    Set a webhook to push bookings into your calendar or job
                    management tool automatically
                </li>
            </ol>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-10">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                    <strong className="text-on-surface">
                        Prefer a full booking page instead of a form on your
                        site?
                    </strong>{" "}
                    If you&apos;re a cleaning company and you want customers to book
                    straight from your Instagram bio, Facebook page, or Google
                    Business profile, check out{" "}
                    <a
                        href="https://kilino.prasuco.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:brightness-90 underline underline-offset-3"
                    >
                        Kilino
                    </a>{" "}
                    — a link-in-bio booking page built specifically for cleaning
                    companies. One tap to book, no logins, no quote forms. Formy
                    is the right tool when you want bookings to land on{" "}
                    <em>your own website</em>; Kilino is the right tool when you
                    want them to land on a link you share everywhere.
                </p>
            </div>

            <div className="text-center bg-on-surface text-surface rounded-xl py-10 px-6">
                <h2 className="text-xl font-bold mb-2">
                    Put this form on your site today
                </h2>
                <p className="text-sm text-surface/70 max-w-md mx-auto mb-6">
                    Create a form, copy your endpoint, paste the HTML. Start
                    collecting bookings in minutes.
                </p>
                <Link
                    href="/auth/register"
                    className="inline-flex items-center bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:brightness-95 transition-all"
                >
                    Create your booking form
                </Link>
            </div>
        </>
    );
}
