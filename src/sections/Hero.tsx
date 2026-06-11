import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

const STATS = [
  { value: '95.05%', label: 'Plant Disease Classification Accuracy' },
  { value: '2.8M+', label: 'Network Intrusion Detection Records' },
  { value: '7+', label: 'Machine Learning Models Compared' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-68px)] flex items-center bg-base"
    >
      <div className="section-container w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent-light border border-accent-mid text-accent text-[13px] font-medium px-4 py-1.5 rounded-full mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            Available for opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[clamp(36px,5vw,60px)] font-bold leading-[1.1] tracking-[-1.5px] mb-5"
          >
            Hi 👋 I'm{' '}
            <span
              className="bg-gradient-to-br from-accent to-purple-600 bg-clip-text"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Paula Moukhtar
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-medium text-secondary mb-5"
          >
            Computer Science &amp; AI Student
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-secondary leading-relaxed mb-9 max-w-[480px]"
          >
            Building Machine Learning solutions with strong Software Engineering foundations.
            I transform ideas into intelligent systems that make a real impact.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-14"
          >
            <Button href="#projects" variant="primary">
              View Projects <span>→</span>
            </Button>
            <Button variant="outline" href="public/pola_mokhtar_CV.pdf" target="_blank" rel="noopener">
              Download CV <span>↓</span>
            </Button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -2 }}
                className="rounded-2xl p-3 sm:p-5 min-w-0"
                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
              >
                <div className="font-display text-[18px] sm:text-[26px] font-bold text-accent leading-tight mb-1 truncate">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-secondary leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — animated visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <div
            className="w-full max-w-[480px] aspect-square rounded-[32px] flex items-center justify-center relative overflow-hidden"
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
          >
            {/* Replace the img src with your own GIF */}
            <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Coding animation"
              className="w-full h-full object-cover rounded-[31px]"
              onError={e => {
                const t = e.currentTarget
                t.style.display = 'none'
                const fallback = t.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            {/* Fallback orbit animation */}
            <div className="absolute inset-0 hidden items-center justify-center">
              <OrbitAnimation />
            </div>
            {/* Tags */}
            <div
              className="absolute top-4 left-4 rounded-xl px-3 py-2 text-xs font-semibold text-primary"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              Machine Learning
            </div>
            <div
              className="absolute bottom-6 right-4 rounded-xl px-3 py-2 text-xs font-semibold text-primary"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              Software Eng.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function OrbitAnimation() {
  const planets = ['🧠', '⚙️', '🐍', '📊']
  return (
    <div className="relative w-72 h-72 flex items-center justify-center">
      {[120, 200, 290].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: size,
            height: size,
            borderColor: 'var(--accent-mid)',
            opacity: 0.4,
          }}
        />
      ))}
      <div
        className="w-16 h-16 rounded-[18px] flex items-center justify-center text-3xl z-10"
        style={{ background: 'var(--accent)' }}
      >
        🤖
      </div>
      {planets.map((p, i) => (
        <div
          key={p}
          className="absolute w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            animation: `orbit ${8 + i * 2}s linear infinite`,
            animationDelay: `${-i * 2}s`,
          }}
        >
          {p}
        </div>
      ))}
    </div>
  )
}
