import { Code2, Users, Play } from "lucide-react";

const codeLines = [
  "import { createRoom } from '@/sdk'",
  "",
  "const room = await createRoom({",
  "  name: 'Frontend Team',",
  "  language: 'javascript'",
  "})",
  "",
  "room.join()",
  "",
  "socket.emit('sync-code')",
];

const CodePreview = () => {
  return (
    <div className="mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-[#0B1220] shadow-2xl">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
        <div className="flex items-center gap-4">
          {/* Mac Buttons */}
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Code2 size={16} />
            <span>main.js</span>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300">
          <Users size={14} />
          <span>4 Online</span>
        </div>
      </div>

      {/* Editor */}
      <div className="grid md:grid-cols-[70px_1fr]">
        {/* Line Numbers */}
        <div className="hidden border-r border-slate-800 bg-[#08111F] py-6 text-right text-sm text-slate-500 md:block">
          {codeLines.map((_, index) => (
            <div key={index} className="pr-4 leading-8">
              {index + 1}
            </div>
          ))}
        </div>

        {/* Code */}
        <div className="p-6 font-mono text-sm leading-8 text-slate-300">
          {codeLines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4">
        {/* Users */}
        <div className="flex -space-x-3">
          <img
            className="h-9 w-9 rounded-full border-2 border-[#0B1220]"
            src="https://i.pravatar.cc/100?img=12"
            alt=""
          />
          <img
            className="h-9 w-9 rounded-full border-2 border-[#0B1220]"
            src="https://i.pravatar.cc/100?img=20"
            alt=""
          />
          <img
            className="h-9 w-9 rounded-full border-2 border-[#0B1220]"
            src="https://i.pravatar.cc/100?img=5"
            alt=""
          />
          <img
            className="h-9 w-9 rounded-full border-2 border-[#0B1220]"
            src="https://i.pravatar.cc/100?img=18"
            alt=""
          />
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <Play size={16} />
          Live
        </button>
      </div>
    </div>
  );
};

export default CodePreview;