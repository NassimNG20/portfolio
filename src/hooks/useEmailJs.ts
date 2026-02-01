import { useState } from "react";
import emailjs from "@emailjs/browser";

export function useEmailJS() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (
    formRef: React.RefObject<HTMLFormElement | null>,
  ) => {
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setSuccess(true);
      formRef.current!.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    sendEmail,
    loading,
    success,
    error,
  };
}
