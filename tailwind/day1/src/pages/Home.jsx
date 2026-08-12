import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Sparkles,
} from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=85",
    title: "Build Something Amazing",
    description:
      "Create modern digital experiences designed for performance, growth, and scale.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=85",
    title: "Work Smarter",
    description:
      "Powerful tools and intelligent workflows that help your team achieve more.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85",
    title: "Designed for Modern Teams",
    description:
      "A seamless workspace built around collaboration and productivity.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1920&q=85",
    title: "Turn Ideas Into Reality",
    description:
      "Transform your ideas into beautiful, reliable, and scalable products.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=85",
    title: "Grow Without Limits",
    description:
      "Infrastructure and technology that grows alongside your business.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1497366811360-30b0f5c9b6f1?auto=format&fit=crop&w=1920&q=85",
    title: "Innovation Starts Here",
    description:
      "Discover better ways to solve problems and create meaningful products.",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=85",
    title: "Your Vision, Our Technology",
    description:
      "Build experiences that make a real difference for your customers.",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=85",
    title: "Future Ready",
    description:
      "Modern technology designed to keep your business ahead of the curve.",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=1920&q=85",
    title: "Simple. Powerful. Beautiful.",
    description:
      "Everything you need to create exceptional digital experiences.",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1497366811360-30b0f5c9b6f1?auto=format&fit=crop&w=1920&q=85",
    title: "Let's Build Together",
    description:
      "Start your journey and create something people will love.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slider - 700ms
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Slider */}
      <section
        className="relative h-[calc(100vh-64px)] min-h-[600px] w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === current
                  ? "visible scale-100 opacity-100"
                  : "invisible scale-105 opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                <span>Build the future</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                {slides[current].title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-200 sm:text-lg">
                {slides[current].description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/get-started"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Watch Demo app
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/20 p-3 text-white backdrop-blur-md transition hover:bg-black/40 sm:block"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/20 p-3 text-white backdrop-blur-md transition hover:bg-black/40 sm:block"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Bottom Controls */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 right-6 z-20 hidden rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md sm:block">
          <span>{String(current + 1).padStart(2, "0")}</span>
          <span className="mx-1 text-white/50">/</span>
          <span className="text-white/60">10</span>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-white/20">
          <div
            key={current}
            className="h-full bg-white"
            style={{
              animation: "slideProgress 700ms linear",
            }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Everything you need
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built for modern businesses
            </h2>

            <p className="mt-4 text-gray-600">
              Powerful features, beautiful experiences, and technology that
              scales with you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Fast Performance",
                text: "Optimized experiences that load quickly and feel responsive.",
              },
              {
                title: "Modern Design",
                text: "Clean interfaces designed for usability and conversion.",
              },
              {
                title: "Built to Scale",
                text: "Reliable architecture ready to grow with your users.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required animation */}
      <style>{`
        @keyframes slideProgress {
          from {
            width: 0%;
          }

          to {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}