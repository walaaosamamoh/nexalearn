interface GlassCardProps {
    children: React.ReactNode,
    className?: string
}

export default function GlassCard({children, className = ""}:GlassCardProps) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl ${className}`}>
      {children}
    </div>
  )
}
