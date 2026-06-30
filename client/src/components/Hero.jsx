import { Sparkles, ArrowRight } from "lucide-react";
import CodePreview from "./CodePreview";

const Hero = ({ onCreateClick, onJoinClick }) => {
  return (
<section className="relative px-6 pt-20 pb-24">
    {/* Background Glow */}

      <div className="mx-auto max-w-6xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          <Sparkles size={16} />
          <span>Real-time collaboration made simple</span>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Collaborate on
          <br />
          code in{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            real-time.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Build, debug and share code instantly with your team.
          Create a room, invite your friends and start coding together
          without any setup.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={onCreateClick}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Room
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onJoinClick}
            className="rounded-xl border border-gray-700 bg-[#101828] px-7 py-3 font-semibold text-white transition hover:border-blue-500 hover:bg-[#172033]"
          >
            Join Room
          </button>
        </div>

        {/* Code Preview */}
        <CodePreview />
      </div>
    </section>
  );
};

export default Hero;