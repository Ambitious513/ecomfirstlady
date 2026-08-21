import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      storeUrl,
      monthlyRevenue,
      services,
      biggestChallenge,
      budgetPreset,
      budgetCustom,
      howHeard,
    } = body;

    // Basic server-side validation
    if (!name || !email || !monthlyRevenue || !biggestChallenge || !howHeard) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const budget =
      budgetPreset === "Other (I'll share my budget)" && budgetCustom
        ? `Other — ${budgetCustom}`
        : budgetPreset;

    const servicesText = Array.isArray(services)
      ? services.join(", ")
      : services;

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0D0F0D;">
        <div style="background: #0D0F0D; padding: 24px 32px;">
          <p style="color: #C9A227; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 4px;">Ecom Firstlady</p>
          <h1 style="color: white; font-size: 22px; margin: 0;">New Application Received</h1>
        </div>
        <div style="padding: 32px; background: #F7F3EC;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18; width: 40%;"><strong style="font-size:12px; text-transform:uppercase; letter-spacing:0.1em; color:#0D0F0D80;">Name</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18;">${name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18;"><strong style="font-size:12px; text-transform:uppercase; letter-spacing:0.1em; color:#0D0F0D80;">Email</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18;"><strong style="font-size:12px; text-transform:uppercase; letter-spacing:0.1em; color:#0D0F0D80;">Store URL</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18;">${storeUrl || "Not provided"}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18;"><strong style="font-size:12px; text-transform:uppercase; letter-spacing:0.1em; color:#0D0F0D80;">Monthly Revenue</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18;">${monthlyRevenue}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18;"><strong style="font-size:12px; text-transform:uppercase; letter-spacing:0.1em; color:#0D0F0D80;">Services Needed</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18;">${servicesText}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18;"><strong style="font-size:12px; text-transform:uppercase; letter-spacing:0.1em; color:#0D0F0D80;">Budget</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18;">${budget}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18;"><strong style="font-size:12px; text-transform:uppercase; letter-spacing:0.1em; color:#0D0F0D80;">How They Heard</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #0D0F0D18;">${howHeard}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: white; border-left: 3px solid #C9A227;">
            <p style="font-size:12px; text-transform:uppercase; letter-spacing:0.1em; color:#0D0F0D80; margin: 0 0 8px;"><strong>Biggest Challenge</strong></p>
            <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #0D0F0D;">${biggestChallenge}</p>
          </div>
        </div>
        <div style="background: #173A2E; padding: 20px 32px;">
          <p style="color: white; font-size: 12px; margin: 0; opacity: 0.6;">Submitted via ecomfirstlady.com/apply</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: process.env.FROM_EMAIL ?? "noreply@ecomfirstlady.com",
      to: process.env.TO_EMAIL ?? "stephanie@ecomfirstlady.com",
      replyTo: email,
      subject: `New Application: ${name} — ${servicesText}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Apply API error:", error);
    return NextResponse.json(
      { error: "Failed to send application. Please try again." },
      { status: 500 }
    );
  }
}
