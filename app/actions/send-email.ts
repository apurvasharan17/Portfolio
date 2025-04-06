"use server"

import { Resend } from "resend"

// Initialize Resend with your API key
// You'll need to add RESEND_API_KEY to your environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(formData: ContactFormData) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing Resend API key")
    }

    const { name, email, subject, message } = formData

    // Validate form data
    if (!name || !email || !subject || !message) {
      return { success: false, error: "All fields are required" }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, error: "Invalid email address" }
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Use your verified domain
      to: "ranjan.apurva2017@gmail.com", // Your email address
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      // You can also use HTML for a nicer email
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: "Failed to send email" }
    }

    return { success: true }
  } catch (error) {
    console.error("Error in sendEmail:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

