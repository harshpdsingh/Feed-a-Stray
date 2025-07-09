// app/privacy/page.js

export default function PrivacyPage() {
  return (
    <div className="min-h-screen text-gray-200 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        <p>
          Feed a Stray respects your privacy. We collect only essential
          information such as your name and email when you log in via Google,
          GitHub, or Facebook.
        </p>
        <p>
          Donations are handled securely via Razorpay in test mode. We do not
          store any card or sensitive payment details on our servers.
        </p>
        <p>
          All data is stored in encrypted form in MongoDB Atlas. We never sell
          or share your information with third parties.
        </p>
        <p>
          For data deletion requests or questions, email us at{" "}
          <span className="text-blue-400">harshpdsingh@email.com</span>.
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Privacy Policy - Feed a Stray",
  description:
    "Learn about our privacy practices and how we handle your data at Feed a Stray.",
};
