'use client';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section
      id="about"
      className="w-full px-6 md:px-16 lg:px-24 py-16 grid md:grid-cols-2 gap-10 items-center"
    >
      {/* Left Images */}
      <div className="relative flex justify-center">
        <Image
          src="/assets/images/about_us/person.jpg"
          alt="Person"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <Image
          src="/assets/images/about_us/parts.jpg"
          alt="Parts"
          width={300}
          height={250}
          className="absolute -bottom-8 -left-8 rounded-lg border-8 border-white shadow-xl"
        />
      </div>

      {/* Right Content */}
      <div>
        <h3 className="text-red-500 font-semibold mb-2">About Us</h3>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          We are qualified <br /> & of experience <br /> in this field
        </h2>
        <p className="text-gray-600 mb-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p className="text-gray-600 mb-6">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md transition">
          Get More Info
        </button>
      </div>
    </section>
  );
}
