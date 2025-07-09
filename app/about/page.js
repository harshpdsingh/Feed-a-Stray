import Image from "next/image";

const impactImages = [
  "impact1.webp",
  "impact2.webp",
  "impact3.webp",
  "impact4.webp",
  "impact5.webp",
  "impact6.webp",
  "impact7.webp",
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-white">
      {/* 🌟 Impact Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          🐾 Our Impact
        </h1>
        <p className="text-base mb-6">
          Your donations help us provide food, care, and love to stray animals
          in need.
        </p>

        {/* 🖼️ Horizontal Image Scroll */}
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-4">
            {impactImages.map((impact, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 h-48 relative rounded-xl overflow-hidden"
              >
                <Image
                  src={`/images/${impact}`} // must match file in public/images/
                  alt={`Impact ${index + 1}`}
                  fill // uses layout="fill"
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          ❓ Frequently Asked Questions
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">Is my donation safe?</h3>
          <p className="text-sm text-gray-300">
            Yes, we use trusted payment gateways like Razorpay for secure
            transactions.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">Where does the money go?</h3>
          <p className="text-sm text-gray-300">
            100% of your donation is used to buy food, medicine, and essentials
            for stray animals.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            Can I see the results of my donation?
          </h3>
          <p className="text-sm text-gray-300">
            Yes! We regularly post photos and stories of feeding drives and
            rescues on this page.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            Can I donate in someone else's name?
          </h3>
          <p className="text-sm text-gray-300">
            Yes! You can dedicate your donation to a friend, family member, or
            loved one.
          </p>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'About Us - Feed a Stray',
}