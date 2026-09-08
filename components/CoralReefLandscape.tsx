import {
  StaghornCoral,
  BrainCoral,
  TubeSponges,
  SeaAnemone,
  SeaFan,
  Seaweed,
  Starfish,
  Crab,
  ClownFish,
  BlueTang,
  TreasureChest,
  SunkenAnchor,
  Bubble,
} from './MarineBiota';

export default function CoralReefLandscape() {
  return (
    <div className="relative w-full overflow-hidden pointer-events-none select-none" style={{ minHeight: '320px', zIndex: 1 }}>
      {/* ── Layer 1: Ambient Seabed Bioluminescent Glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-10 left-[10%] w-72 h-44 rounded-full" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)', filter: 'blur(30px)' }} />
        <div className="absolute bottom-10 left-[45%] w-96 h-48 rounded-full" style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-10 right-[15%] w-80 h-44 rounded-full" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)', filter: 'blur(35px)' }} />
      </div>

      {/* ── Layer 2: Vector Seabed Terrain & Deep Coral Formations ── */}
      <svg
        viewBox="0 0 1440 280"
        className="w-full h-auto"
        preserveAspectRatio="none"
        style={{ display: 'block', minHeight: '260px' }}
      >
        <defs>
          <linearGradient id="seabedDeep" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0c1e38" />
            <stop offset="50%" stopColor="#071224" />
            <stop offset="100%" stopColor="#030813" />
          </linearGradient>
          <linearGradient id="seabedFore" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#142c4f" />
            <stop offset="60%" stopColor="#0b1a30" />
            <stop offset="100%" stopColor="#040b15" />
          </linearGradient>
        </defs>

        {/* Back Terrain Ridge */}
        <path
          d="M0,280 L0,140 Q180,95 380,125 Q600,155 820,110 Q1040,65 1240,115 Q1360,135 1440,110 L1440,280 Z"
          fill="url(#seabedDeep)"
          opacity="0.9"
        />

        {/* Midground Terrain Ridge */}
        <path
          d="M0,280 L0,180 Q160,135 360,165 Q580,195 780,150 Q1000,105 1200,155 Q1340,175 1440,145 L1440,280 Z"
          fill="url(#seabedFore)"
        />

        {/* Seabed Pebbles & Glow Stones */}
        {[
          { cx: 80, cy: 230, rx: 14, ry: 7, fill: '#38bdf8', op: 0.5 },
          { cx: 220, cy: 245, rx: 18, ry: 9, fill: '#ec4899', op: 0.45 },
          { cx: 480, cy: 235, rx: 12, ry: 6, fill: '#facc15', op: 0.6 },
          { cx: 750, cy: 250, rx: 20, ry: 10, fill: '#a855f7', op: 0.4 },
          { cx: 960, cy: 240, rx: 15, ry: 7, fill: '#38bdf8', op: 0.55 },
          { cx: 1210, cy: 245, rx: 16, ry: 8, fill: '#f43f5e', op: 0.5 },
          { cx: 1380, cy: 235, rx: 12, ry: 6, fill: '#facc15', op: 0.5 },
        ].map((p, i) => (
          <ellipse key={i} cx={p.cx} cy={p.cy} rx={p.rx} ry={p.ry} fill={p.fill} opacity={p.op} />
        ))}
      </svg>

      {/* ── Layer 3: Rich Multi-Type Coral Gardens & Ecosystem ── */}

      {/* ── Left Coral Reef Fortress (0% - 25%) ── */}
      <div className="absolute bottom-4 left-[2%] flex items-end gap-1">
        {/* Deep background Kelp */}
        <div className="anim-sway" style={{ animationDuration: '5s' }}>
          <Seaweed height={140} color="#15803d" />
        </div>
        <div className="anim-sway" style={{ animationDuration: '6.5s', animationDelay: '1s', marginLeft: '-25px' }}>
          <Seaweed height={110} color="#22c55e" />
        </div>

        {/* Large Pink Staghorn Coral */}
        <div className="relative" style={{ marginLeft: '-15px', zIndex: 3 }}>
          <StaghornCoral height={130} color="#ec4899" accentColor="#f472b6" />
        </div>

        {/* Cyan Tube Sponges */}
        <div className="relative" style={{ marginLeft: '-20px', zIndex: 4 }}>
          <TubeSponges height={105} color="#0284c7" rimColor="#38bdf8" />
        </div>

        {/* Purple Brain Coral */}
        <div className="relative" style={{ marginLeft: '-15px', zIndex: 5 }}>
          <BrainCoral size={80} color="#9333ea" ridgeColor="#e9d5ff" />
        </div>

        {/* Red Sea Anemone with Nemo */}
        <div className="relative" style={{ marginLeft: '-10px', zIndex: 6 }}>
          <SeaAnemone size={70} color="#f43f5e" tipColor="#fde047" />
          {/* Baby Nemo peeking out */}
          <div style={{ position: 'absolute', top: '15px', left: '10px' }}>
            <ClownFish size={24} />
          </div>
        </div>

        {/* Orange Sea Fan */}
        <div className="relative" style={{ marginLeft: '-25px', zIndex: 2 }}>
          <SeaFan height={115} color="#f97316" />
        </div>
      </div>

      {/* Starfish & Crab on Left Reef */}
      <div className="absolute bottom-3 left-[16%] z-10">
        <Starfish size={36} color="#f59e0b" />
      </div>
      <div className="absolute bottom-5 left-[22%] z-10">
        <Crab size={32} />
      </div>

      {/* ── Mid-Left Garden & Sunken Anchor (28% - 45%) ── */}
      <div className="absolute bottom-4 left-[32%] flex items-end gap-2">
        {/* Mossy Sunken Anchor */}
        <div className="relative" style={{ zIndex: 3 }}>
          <SunkenAnchor size={75} />
        </div>

        {/* Violet Staghorn Coral */}
        <div className="relative" style={{ marginLeft: '-15px', zIndex: 4 }}>
          <StaghornCoral height={110} color="#8b5cf6" accentColor="#c084fc" />
        </div>

        {/* Yellow/Green Tube Sponge */}
        <div className="relative" style={{ marginLeft: '-20px', zIndex: 5 }}>
          <TubeSponges height={90} color="#0d9488" rimColor="#2dd4bf" />
        </div>

        {/* Starfish clinging to rock */}
        <div className="relative" style={{ marginLeft: '-10px', zIndex: 6 }}>
          <Starfish size={28} color="#ea580c" />
        </div>
      </div>

      {/* ── Centerpiece: Sunken Treasure Chest & Coral Throne (48% - 68%) ── */}
      <div className="absolute bottom-3 left-[50%] -translate-x-1/2 flex items-end gap-3">
        {/* Tall Seaweed backdrop */}
        <div className="anim-sway" style={{ animationDuration: '6s', animationDelay: '0.5s' }}>
          <Seaweed height={150} color="#16a34a" />
        </div>

        {/* Giant Sea Fan */}
        <div className="relative" style={{ marginLeft: '-25px', zIndex: 2 }}>
          <SeaFan height={125} color="#ec4899" />
        </div>

        {/* Sunken Gold Treasure Chest with Glowing Pearl */}
        <div className="relative float-anim" style={{ animationDuration: '4s', zIndex: 7 }}>
          <TreasureChest size={65} />
        </div>

        {/* Giant Cyan Brain Coral */}
        <div className="relative" style={{ marginLeft: '-15px', zIndex: 5 }}>
          <BrainCoral size={88} color="#0284c7" ridgeColor="#bae6fd" />
        </div>

        {/* Vibrant Magenta Staghorn */}
        <div className="relative" style={{ marginLeft: '-20px', zIndex: 4 }}>
          <StaghornCoral height={120} color="#d946ef" accentColor="#f0abfc" />
        </div>

        {/* Sea Anemone & Blue Tang */}
        <div className="relative" style={{ marginLeft: '-15px', zIndex: 6 }}>
          <SeaAnemone size={65} color="#06b6d4" tipColor="#a5f3fc" />
          <div style={{ position: 'absolute', top: '-10px', right: '-15px' }}>
            <BlueTang size={26} />
          </div>
        </div>
      </div>

      {/* Starfish & Crab near treasure */}
      <div className="absolute bottom-2 left-[58%] z-10">
        <Starfish size={30} color="#f97316" />
      </div>
      <div className="absolute bottom-4 left-[42%] z-10">
        <Crab size={26} />
      </div>

      {/* ── Right Coral Reef Fortress (72% - 98%) ── */}
      <div className="absolute bottom-4 right-[2%] flex items-end gap-1">
        {/* Orange Staghorn Coral */}
        <div className="relative" style={{ zIndex: 3 }}>
          <StaghornCoral height={135} color="#ea580c" accentColor="#fb923c" />
        </div>

        {/* Purple Sea Fan */}
        <div className="relative" style={{ marginLeft: '-25px', zIndex: 2 }}>
          <SeaFan height={110} color="#a855f7" />
        </div>

        {/* Deep Magenta Tube Sponges */}
        <div className="relative" style={{ marginLeft: '-15px', zIndex: 4 }}>
          <TubeSponges height={115} color="#be185d" rimColor="#f472b6" />
        </div>

        {/* Greenish-Teal Brain Coral */}
        <div className="relative" style={{ marginLeft: '-20px', zIndex: 5 }}>
          <BrainCoral size={75} color="#0f766e" ridgeColor="#5eead4" />
        </div>

        {/* Pink Sea Anemone */}
        <div className="relative" style={{ marginLeft: '-10px', zIndex: 6 }}>
          <SeaAnemone size={68} color="#e11d48" tipColor="#fef08a" />
        </div>

        {/* Swaying Forest Kelp */}
        <div className="anim-sway" style={{ animationDuration: '5.5s', animationDelay: '1.5s', marginLeft: '-20px' }}>
          <Seaweed height={145} color="#15803d" />
        </div>
        <div className="anim-sway" style={{ animationDuration: '7s', marginLeft: '-25px' }}>
          <Seaweed height={120} color="#22c55e" />
        </div>
      </div>

      {/* Starfish & Crab on Right Reef */}
      <div className="absolute bottom-3 right-[15%] z-10">
        <Starfish size={34} color="#facc15" />
      </div>
      <div className="absolute bottom-6 right-[24%] z-10">
        <Crab size={30} />
      </div>

      {/* ── Layer 4: Rising Bioluminescent Bubble Columns ── */}
      {[
        { left: '8%', delay: '0s', dur: '4s', size: 14 },
        { left: '18%', delay: '1.2s', dur: '4.5s', size: 10 },
        { left: '26%', delay: '0.4s', dur: '3.8s', size: 16 },
        { left: '38%', delay: '2s', dur: '5s', size: 12 },
        { left: '50%', delay: '0.8s', dur: '4.2s', size: 18 },
        { left: '62%', delay: '1.6s', dur: '4.7s', size: 12 },
        { left: '74%', delay: '0.2s', dur: '3.9s', size: 15 },
        { left: '85%', delay: '2.4s', dur: '4.4s', size: 10 },
        { left: '94%', delay: '1s', dur: '5.2s', size: 16 },
      ].map((b, i) => (
        <div
          key={i}
          className="anim-bubble-rise"
          style={{
            position: 'absolute',
            bottom: '10px',
            left: b.left,
            animationDelay: b.delay,
            animationDuration: b.dur,
            zIndex: 8,
          }}
        >
          <Bubble size={b.size} />
        </div>
      ))}
    </div>
  );
}
