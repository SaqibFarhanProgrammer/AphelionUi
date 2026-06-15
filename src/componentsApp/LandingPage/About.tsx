'use client';

export default function AboutSection() {
  return (
    <section className="w-full  py-24 px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-16">
          <h2 className="text-white text-[clamp(32px,4vw,48px)]  leading-[1.1] tracking-[-0.02em] max-w-[400px]">
            We Turn Ideas
            <br />
            into Visual
            <br />
            Masterpieces
          </h2>

          <div className="max-w-[380px]">
            <p className="text-white/50 text-[14px] leading-[1.7] mb-6">
              Whether it&apos;s an engaging explainer video, a vibrant social
              media campaign, or captivating motion graphics, we bring
              creativity and expertise to every project.
            </p>
            <a
              href="#about"
              className="inline-flex items-center px-5 py-2.5 bg-white hover:bg-white/90 text-[#0A0A0A] text-[13px] font-semibold rounded-full transition-all duration-200"
            >
              Know More About us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2 relative rounded-[20px] overflow-hidden bg-[#111111] border border-white/[0.06] aspect-[2.4/1] min-h-[240px]">
            <img
              src="https://i.pinimg.com/736x/a2/28/e5/a228e543294988fd6874da85b1dad7f3.jpg"
              alt="Visual masterpiece"
              className="absolute  saturate-0 w-full h-full object-cover opacity-60 tr"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-white text-[40px] md:text-[56px] font-bold leading-none tracking-[-0.02em]">
                200+
              </span>
              <p className="text-white/40 text-[12px] font-medium uppercase tracking-[0.08em] mt-1">
                Projects Delivered
              </p>
            </div>
          </div>

          <div className="relative rounded-[20px] overflow-hidden bg-[#111111] border border-white/[0.06] aspect-[4/3] min-h-[280px]">
            <img
              src="https://i.pinimg.com/webp/736x/9f/65/14/9f65140fcff9648d7c73ce016279f8df.webp"
              alt="Creative work"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-white text-[40px] md:text-[48px] font-bold leading-none tracking-[-0.02em]">
                100+
              </span>
              <p className="text-white/40 text-[12px] font-medium uppercase tracking-[0.08em] mt-1">
                Happy Clients
              </p>
            </div>
          </div>

          <div className="relative rounded-[20px] overflow-hidden bg-[#111111] border border-white/[0.06] aspect-[4/3] min-h-[280px]">
            <img
              src="https://i.pinimg.com/736x/b6/5e/22/b65e22bb7b1f124b20a66543c40136e5.jpg"
              alt="Experience"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-white text-[40px] md:text-[48px] font-bold leading-none tracking-[-0.02em]">
                15
              </span>
              <p className="text-white/40 text-[12px] font-medium uppercase tracking-[0.08em] mt-1">
                Years of Experience
              </p>
            </div>
            <div className="absolute bottom-6 right-6 text-right">
              <span className="text-white text-[40px] md:text-[48px] font-bold leading-none tracking-[-0.02em]">
                95%
              </span>
              <p className="text-white/40 text-[12px] font-medium uppercase tracking-[0.08em] mt-1">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
