export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Something Went Wrong</h1>
        <p className="text-gray-700 mb-6">
          We couldn’t find the admin information in our system.<br />
          Please try again later or contact support if the issue persists.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Error - Feed a Stray",
  description: "An error occurred while processing your request. Please try again later.",
};