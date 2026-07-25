import { Resend } from "resend";
import { render } from "@react-email/components";
import { NotificationEmail } from "@/components/emails/NotificationEmail";

const resendKey = process.env.RESEND_KEY ?? "";
const resendFrom = process.env.RESEND_FROM ?? "";
const resend = new Resend(resendKey);

export async function sendNotification(opts: {
  to: string;
  logoUrl: string;
  formTitle: string;
  submissionId: string;
  data: Record<string, unknown>;
  submittedAt: string;
}) {
  const html = await render(
    NotificationEmail({
      logoUrl: opts.logoUrl,
      formTitle: opts.formTitle,
      submissionId: opts.submissionId,
      data: opts.data,
      submittedAt: opts.submittedAt,
    }),
  );

  const { error } = await resend.emails.send({
    from: resendFrom,
    to: [opts.to],
    subject: `Received submission on: ${opts.formTitle}`,
    html,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}
