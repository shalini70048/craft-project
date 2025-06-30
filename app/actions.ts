"use server"

import { Resend } from "resend"

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const giftType = formData.get("giftType") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !giftType || !message) {
    return {
      success: false,
      error: "All fields are required. Please fill in all the information.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    }
  }

  // Name validation (minimum 2 characters)
  if (name.trim().length < 2) {
    return {
      success: false,
      error: "Please enter a valid name (at least 2 characters).",
    }
  }

  // Message validation (minimum 10 characters)
  if (message.trim().length < 10) {
    return {
      success: false,
      error: "Please provide a more detailed message (at least 10 characters).",
    }
  }

  try {
    const emailContent = {
      from: process.env.FROM_EMAIL || "Art & Craft with Heart <noreply@yourdomain.com>",
      to: [process.env.TO_EMAIL || "shalini@craftingbyshalini.com"],
      subject: `New Contact Form Submission - ${giftType}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fef7f0; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #be185d, #f472b6); border-radius: 8px;">
            <h1 style="color: white; font-size: 28px; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">✨ New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 10px 0 0 0;">Art & Craft with Heart</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); border: 1px solid #f3f4f6;">
            <div style="margin-bottom: 25px;">
              <h3 style="color: #be185d; margin: 0 0 15px 0; font-size: 20px; border-bottom: 2px solid #f472b6; padding-bottom: 8px;">Contact Details</h3>
              <div style="background-color: #fef7f0; padding: 20px; border-radius: 8px; border-left: 4px solid #f472b6;">
                <p style="margin: 8px 0; color: #374151; font-size: 16px;"><strong style="color: #be185d;">Name:</strong> ${name}</p>
                <p style="margin: 8px 0; color: #374151; font-size: 16px;"><strong style="color: #be185d;">Email:</strong> <a href="mailto:${email}" style="color: #be185d; text-decoration: none;">${email}</a></p>
                <p style="margin: 8px 0; color: #374151; font-size: 16px;"><strong style="color: #be185d;">Gift Type:</strong> ${giftType}</p>
              </div>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #be185d; margin: 0 0 15px 0; font-size: 20px; border-bottom: 2px solid #f472b6; padding-bottom: 8px;">Message</h3>
              <div style="background-color: #fef7f0; padding: 20px; border-radius: 8px; border-left: 4px solid #f472b6;">
                <p style="margin: 0; color: #374151; line-height: 1.7; font-size: 16px; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 25px; border-top: 2px solid #f3f4f6;">
              <div style="background: linear-gradient(135deg, #f472b6, #be185d); color: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <p style="margin: 0; font-size: 16px; font-weight: 600;">📅 Submitted on ${new Date().toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZoneName: "short",
                  },
                )}</p>
              </div>
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                💡 <strong>Quick Reply:</strong> You can reply directly to this email to respond to ${name}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 25px; padding: 20px; background: linear-gradient(135deg, #f472b6, #be185d); border-radius: 8px;">
            <p style="color: white; font-size: 16px; margin: 0; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">
              🎨 Made with ❤️ by Shalini | Art & Craft with Heart
            </p>
            <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 5px 0 0 0;">
              Instagram: @crafting_by_shalini
            </p>
          </div>
        </div>
      `,
    }

    // Try to send email with Resend if configured
    if (resend && process.env.RESEND_API_KEY) {
      const { data, error } = await resend.emails.send(emailContent)

      if (error) {
        console.error("Resend error:", error)
        // Log the submission for manual follow-up
        console.log("Contact form submission (email failed):", {
          name,
          email,
          giftType,
          message,
          timestamp: new Date().toISOString(),
          error: error.message,
        })

        return {
          success: false,
          error:
            "There was an issue sending your message. Please try contacting us directly on Instagram @crafting_by_shalini or try again later.",
        }
      }

      console.log("Email sent successfully:", data)
    } else {
      // Fallback: Log the submission when Resend is not configured
      console.log("Contact form submission (Resend not configured):", {
        name,
        email,
        giftType,
        message,
        timestamp: new Date().toISOString(),
        emailContent: emailContent.html,
      })

      // In development/demo mode, still return success
      console.log("📧 EMAIL WOULD BE SENT TO:", process.env.TO_EMAIL || "shalini@craftingbyshalini.com")
      console.log("📧 EMAIL CONTENT:", emailContent.subject)
    }

    // Simulate processing time for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message:
        "Thank you for your message! 🎉 I've received your inquiry and will get back to you within 24 hours. Feel free to check out my latest work on Instagram in the meantime!",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)

    // Log the submission for manual follow-up
    console.log("Contact form submission (error occurred):", {
      name,
      email,
      giftType,
      message,
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error",
    })

    return {
      success: false,
      error:
        "Sorry, there was an unexpected error sending your message. Please try contacting us directly on Instagram @crafting_by_shalini or try again in a few minutes.",
    }
  }
}
