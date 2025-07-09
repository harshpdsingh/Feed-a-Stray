// app/terms/page.js

export default function TermsPage() {
  return (
    <div className="min-h-screen text-gray-200 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
        <p>
          By using Feed a Stray, you agree to use the platform lawfully and not exploit or misuse any of its features.
        </p>
        <p>
          All donations made are voluntary and go toward feeding and caring for stray animals. We do not offer refunds on donations.
        </p>
        <p>
          We are not responsible for issues caused by third-party providers like Razorpay or social login platforms.
        </p>
        <p>
          These terms may change without notice. Continued use of the platform means you accept the latest terms.
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Terms of Service - Feed a Stray",
  description:
    "Read the terms of service for using Feed a Stray, including donation policies and user responsibilities.",
};