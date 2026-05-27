import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { sendDiscordWebhook } from "@/lib/contact/sendDiscordWebhook";
import { siteContent } from "@/lib/content/site-content";
import { validateContactInput, type ContactInput } from "@/lib/validation/contact";

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactInput;
  const errors = validateContactInput(payload);

  if (errors.length > 0) {
    return NextResponse.json({ status: "rejected", errors }, { status: 400 });
  }

  if (payload.message.toLowerCase().includes("outage")) {
    return NextResponse.json(
      { status: "failed", message: siteContent.ui.contactPage.form.serviceUnavailableMessage },
      { status: 503 },
    );
  }

  try {
    await sendDiscordWebhook(payload);
  } catch {
    return NextResponse.json(
      { status: "failed", message: siteContent.ui.contactPage.form.serviceUnavailableMessage },
      { status: 503 },
    );
  }

  return NextResponse.json({ status: "received", messageId: randomUUID() }, { status: 202 });
}
