export function IgniteCore({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      {/* outer radial glow */}
      <div className="absolute inset-0 rounded-full blur-3xl opacity-70"
        style={{ background: "radial-gradient(circle, #E85D10 0%, rgba(232,93,16,0.3) 35%, transparent 70%)" }} />

      {/* rotating rings */}
      <div className="absolute inset-[6%] rounded-full border border-[#E85D10]/40 animate-spin-slow" />
      <div className="absolute inset-[14%] rounded-full border border-[#E85D10]/30 animate-spin-slower"
        style={{ animationDirection: "reverse" }} />
      <div className="absolute inset-[22%] rounded-full border border-white/10 animate-spin-slow" />

      {/* orbit dots */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute left-1/2 -top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-[#ff8a3d]"
          style={{ boxShadow: "0 0 20px #E85D10, 0 0 40px #E85D10" }} />
      </div>
      <div className="absolute inset-0 animate-spin-slower" style={{ animationDirection: "reverse" }}>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#E85D10]"
          style={{ boxShadow: "0 0 15px #E85D10" }} />
      </div>

      {/* core sphere */}
      <div className="absolute inset-[34%] rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle at 35% 30%, #ffd0a8 0%, #ff8a3d 25%, #E85D10 55%, #6b1c00 100%)",
          boxShadow: "0 0 80px #E85D10, inset -20px -30px 60px rgba(0,0,0,0.5), inset 10px 10px 40px rgba(255,200,150,0.4)"
        }} />

      {/* highlight */}
      <div className="absolute top-[36%] left-[38%] w-[12%] h-[12%] rounded-full blur-md opacity-80"
        style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }} />
    </div>
  );
}
