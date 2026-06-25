'use client';

export default function AboutSection() {
  return (
    <section className="w-full py-16 px-6 lg:px-10">
      <div className="max-w-[900px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
          <h2 className="text-white text-[28px] md:text-[36px] font-[inter4-medium] leading-[1.1] tracking-[-0.02em] max-w-[320px]">
            We Turn Ideas
            <br />
            into Visual
            <br />
            Masterpieces
          </h2>

          <div className="max-w-[300px]">
            <p className="text-white/50 text-[15px] leading-tight mb-5">
              Whether it&apos;s an engaging explainer video, a vibrant social
              media campaign, or captivating motion graphics, we bring
              creativity and expertise to every project.
            </p>
            <a
              href="#about"
              className="inline-flex items-center px-4 py-2 bg-white hover:bg-white/90 text-[#0A0A0A] text-[12px] font-[inter4-medium] rounded-full transition-all duration-200"
            >
              Know More About us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="md:col-span-2 relative rounded-[16px] overflow-hidden bg-[#111111] border border-white/[0.06] aspect-[2.8/1] min-h-[180px]">
            <img
              src="https://ik.imagekit.io/05g48qteo/Aphelion%20Ui/987428d8834efb2e732d11b20021c1d0.jpg"
              alt="Visual masterpiece"
              className="absolute inset-0 w-full h-full object-cover opacity-60 saturate-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="text-white text-[32px] md:text-[40px] font-bold leading-none tracking-[-0.02em]">
                200+
              </span>
              <p className="text-white/40 text-[11px] font-medium uppercase tracking-[0.08em] mt-1">
                Projects Delivered
              </p>
            </div>
          </div>

          <div className="relative rounded-[16px] overflow-hidden bg-[#111111] border border-white/[0.06] aspect-[4/3] min-h-[200px]">
            <img
              src="https://i.pinimg.com/webp/736x/9f/65/14/9f65140fcff9648d7c73ce016279f8df.webp"
              alt="Creative work"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="text-white text-[32px] md:text-[36px] font-bold leading-none tracking-[-0.02em]">
                100+
              </span>
              <p className="text-white/40 text-[11px] font-medium uppercase tracking-[0.08em] mt-1">
                Happy Clients
              </p>
            </div>
          </div>

          <div className="relative rounded-[16px] overflow-hidden bg-[#111111] border border-white/[0.06] aspect-[4/3] min-h-[200px]">
            <img
              src="https://ik.imagekit.io/05g48qteo/Aphelion%20Ui/Behance(JPG).jpg"
              alt="Experience"
              className="absolute inset-0 w-full h-full object-cover opacity-50 saturate-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="text-white text-[32px] md:text-[36px] font-bold leading-none tracking-[-0.02em]">
                15
              </span>
              <p className="text-white/40 text-[11px] font-medium uppercase tracking-[0.08em] mt-1">
                Years of Experience
              </p>
            </div>
            <div className="absolute bottom-5 right-5 text-right">
              <span className="text-white text-[32px] md:text-[36px] font-bold leading-none tracking-[-0.02em]">
                95%
              </span>
              <p className="text-white/40 text-[11px] font-medium uppercase tracking-[0.08em] mt-1">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
