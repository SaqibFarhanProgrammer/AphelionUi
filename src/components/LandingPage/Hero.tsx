'use client';

const avatars = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
];

export default function Hero() {
  return (
    <section className="relative bg-black h-[100vh] flex flex-col overflow-hidden">
      <img
        src="https://i.pinimg.com/736x/11/af/16/11af1629e34b39f5cfb403f07424c5a6.jpg"
        alt=""
        className="h-screen blur-[5px] w-full absolute z-[1]"
      />
      <div className="absolute bottom-0 h-[40vh] z-10 w-full bg-gradient-to-b from-transparent to-black" />

      <div className="w-full h-[90%] flex flex-col justify-center items-center pt-10 px-6 lg:px-10 z-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <div
                key={i}
                className="relative w-9 h-9 rounded-full border-2 border-black overflow-hidden"
                style={{
                  marginLeft: i === 0 ? 0 : '-10px',
                  zIndex: avatars.length - i,
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-0.5">
            <span className="bg-gradient-to-bl font-[inter-rag] from-white to-white/40 bg-clip-text text-transparent">
              200+ Developers contributing
            </span>{' '}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center pt-5">
          <h1 className="text-[clamp(30px,5vw,58px)] leading-[1.05] tracking-[-0.03em] mb-6 font-[inter4-medium] max-w-[900px]">
            <span className="bg-gradient-to-tr from-white to-white/40 bg-clip-text text-transparent">
              at lightning Ship
            </span>
            <span className="bg-gradient-to-bl from-white to-white/40 bg-clip-text text-transparent">
              {' '}
              landing{' '}
            </span>
            <span className="bg-gradient-to-bl from-white to-white/40 bg-clip-text text-transparent">
              pages speed landing
            </span>
          </h1>

          <p className="text-white/70 font-[inter-rag] text-[15px] leading-[1.7] max-w-[560px] mb-8">
            200+ production-ready components, blocks and templates that make
            your site feel like you hired a design team. Copy, paste,
          </p>

          <div className="flex items-center justify-center gap-3 mb-12">
            <a
              href="#components"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-white hover:bg-white/90 text-[#0A0A0A] text-[13px] font-semibold rounded-lg transition-all duration-200"
            >
              Browse Components
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-white/[0.12] hover:border-white/[0.25] text-white/70 hover:text-white text-[13px] font-medium rounded-lg transition-all duration-200"
            >
              Get All-Access
            </a>
          </div>

          {/* Social Proof — sirf itna hi */}
        </div>
      </div>
    </section>
  );
}
