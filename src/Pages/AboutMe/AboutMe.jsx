import React, { useEffect, useRef, useState } from "react";
import AnimatedBackground from "@/Components/AnimatedBackground/AnimatedBackground";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

// ─── Typing Hook ────────────────────────────────────────────────────────────
const useTypingAnimation = (lines, speed = 35, pauseAfter = 2200) => {
  const [display, setDisplay] = useState("");
  const lineRef = useRef(0);
  const charRef = useRef(0);
  const timerRef = useRef(null);

  const tick = () => {
    const l = lineRef.current;
    const c = charRef.current;

    if (l >= lines.length) {
      timerRef.current = setTimeout(() => {
        setDisplay("");
        lineRef.current = 0;
        charRef.current = 0;
        timerRef.current = setTimeout(schedule, 60);
      }, pauseAfter);
      return;
    }

    const line = lines[l];
    if (c < line.length) {
      setDisplay((prev) => prev + line[c]);
      charRef.current = c + 1;
    } else {
      setDisplay((prev) => prev + "\n");
      lineRef.current = l + 1;
      charRef.current = 0;
    }
    schedule();
  };

  const schedule = () => {
    timerRef.current = setTimeout(tick, speed);
  };

  useEffect(() => {
    schedule();
    return () => clearTimeout(timerRef.current);
  }, []);

  return display;
};

// ─── Syntax Highlighter ──────────────────────────────────────────────────────
const highlight = (line) => {
  const tokens = [];
  let remaining = line;
  const rules = [
    {
      re: /^(const|let|return|=>|true|false)/,
      cls: "text-violet-400 font-medium",
    },
    { re: /^'[^']*'/, cls: "text-emerald-400" },
    {
      re: /^(name|role|stack|aiStack|traits|hire)(?=\s*:|\()/,
      cls: "text-sky-300",
    },
    { re: /^\/\/[^\n]*/, cls: "text-gray-500 italic" },
    { re: /^\d+/, cls: "text-amber-300" },
  ];

  let key = 0;
  while (remaining.length > 0) {
    let matched = false;
    for (const { re, cls } of rules) {
      const m = remaining.match(re);
      if (m) {
        tokens.push(
          <span key={key++} className={cls}>
            {m[0]}
          </span>,
        );
        remaining = remaining.slice(m[0].length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      tokens.push(
        <span key={key++} className="text-gray-300">
          {remaining[0]}
        </span>,
      );
      remaining = remaining.slice(1);
    }
  }
  return tokens;
};

// ─── Code Terminal ───────────────────────────────────────────────────────────
const Terminal = () => {
  const lines = [
    "const developer = {",
    "  name: 'Md. Rifat Sheikh',",
    "  role: 'Software Engineer',",
    "  stack: [",
    "    'React', 'Next.js', 'TypeScript',",
    "    'Node.js', 'Express', 'MongoDB',",
    "  ],",
    "  aiStack: [",
    "    'Python', 'TensorFlow', 'NLP',",
    "    'BiLSTM', 'Transformers',",
    "  ],",
    "  traits: {",
    "    hardWorker: true,",
    "    quickLearner: true,",
    "    teamPlayer: true,",
    "  },",
    "  hire: () => true, // please do :)",
    "};",
  ];

  const text = useTypingAnimation(lines, 34, 2400);
  const rows = text.split("\n");

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-xl">
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/[0.06]">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-gray-500 font-mono tracking-wide">
          developer.ts
        </span>
      </div>
      {/* Code */}
      <div className="p-5 overflow-x-auto">
        <pre className="font-mono text-sm leading-6 min-h-[18rem]">
          {rows.map((row, i) => (
            <div key={i} className="flex gap-4">
              <span className="select-none text-gray-600 text-right w-4 shrink-0">
                {i + 1}
              </span>
              <span>{highlight(row)}</span>
            </div>
          ))}
          <span className="inline-block w-[2px] h-4 bg-violet-400 animate-pulse align-middle ml-1" />
        </pre>
      </div>
    </div>
  );
};

// ─── Stat Card ───────────────────────────────────────────────────────────────
const Stat = ({ value, label, accent }) => (
  <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] py-5 px-3 hover:bg-white/[0.05] transition-colors duration-200">
    <span className={`text-3xl font-bold ${accent}`}>{value}</span>
    <span className="text-gray-500 text-xs mt-1.5 tracking-wide uppercase">
      {label}
    </span>
  </div>
);

// ─── Skill Pill ──────────────────────────────────────────────────────────────
const Pill = ({ label, variant = "default" }) => {
  const styles = {
    default: "border-white/10 bg-white/[0.04] text-gray-300",
    ai: "border-violet-500/25 bg-violet-500/10 text-violet-300",
  };
  return (
    <span
      className={`px-3 py-1 rounded-lg border text-xs font-medium tracking-wide transition-colors hover:bg-white/[0.08] ${styles[variant]}`}
    >
      {label}
    </span>
  );
};

// ─── Timeline Item ────────────────────────────────────────────────────────────
const TimelineItem = ({ year, title, desc, accent }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className={`h-2 w-2 rounded-full mt-1.5 shrink-0 ${accent}`} />
      <div className="w-px flex-1 bg-white/[0.07] mt-1" />
    </div>
    <div className="pb-5">
      <span className="text-xs text-gray-500 font-mono">{year}</span>
      <p className="text-sm font-medium text-white mt-0.5">{title}</p>
      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{desc}</p>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const AboutMe = () => {
  const webStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Firebase",
    "REST APIs",
    "JWT",
  ];
  const aiStack = [
    "Python",
    "TensorFlow",
    "NLP",
    "BiLSTM",
    "Transformers",
    "LLMs",
    "scikit-learn",
  ];

  const timeline = [
    {
      year: "2023",
      title: "Started frontend development",
      desc: "Built first projects with HTML, CSS, JavaScript and fell in love with the web.",
      accent: "bg-sky-400",
    },
    {
      year: "2024",
      title: "Went full-stack with MERN",
      desc: "Shipped 10+ apps using React, Node.js, Express, and MongoDB.",
      accent: "bg-emerald-400",
    },
    {
      year: "2025",
      title: "Expanded into AI & NLP",
      desc: "Began studying Machine Learning, Deep Learning, Transformers, and BiLSTM models.",
      accent: "bg-violet-400",
    },
    {
      year: "Now",
      title: "Building toward AI Engineering",
      desc: "Merging software engineering skills with LLM development and NLP research.",
      accent: "bg-amber-400",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gray-950 text-white"
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Header ── */}
        <SectionTitle
          title="About Me"
          // subtitle="MERN Stack Developer • AI/ML Engineer • NLP Enthusiast"
        />

        {/* ── Status Badge ── */}
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.2]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-emerald-300 text-sm font-medium">
              Open to Internship & Junior Software Engineer Roles
            </span>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3 text-[15px] text-gray-300 leading-7">
              <p>
                I'm a Computer Science student and Junior MERN Stack Developer
                who builds modern, performant web apps with clean and scalable
                architecture. My core stack is{" "}
                <span className="text-sky-300">React</span>,{" "}
                <span className="text-sky-300">Next.js</span>,{" "}
                <span className="text-emerald-400">Node.js</span>,{" "}
                <span className="text-emerald-400">Express</span>, and{" "}
                <span className="text-emerald-400">MongoDB</span>.
              </p>
              <p>
                Beyond web dev, I'm actively studying Machine Learning, NLP,
                BiLSTM, and Transformers — moving toward AI Engineering and LLM
                development.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <Stat value="20+" label="Projects" accent="text-sky-400" />
              <Stat value="2+" label="Years" accent="text-emerald-400" />
              <Stat value="30+" label="Skills" accent="text-violet-400" />
            </div>

            {/* Skills */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mb-5">
                Journey
              </p>
              {timeline.map((t) => (
                <TimelineItem key={t.year} {...t} />
              ))}
            </div>
            {/* <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mb-3">Web Stack</p>
                                <div className="flex flex-wrap gap-2">
                                    {webStack.map(s => <Pill key={s} label={s} />)}
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mb-3">AI / ML Stack</p>
                                <div className="flex flex-wrap gap-2">
                                    {aiStack.map(s => <Pill key={s} label={s} variant="ai" />)}
                                </div>
                            </div>
                        </div> */}
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            {/* Terminal */}
            <Terminal />

            {/* Timeline */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
