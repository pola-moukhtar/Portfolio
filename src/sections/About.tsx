import { motion } from 'framer-motion'
import { aboutChapters } from '../data/experience'

// GIF URLs — replace these with your own
const CHAPTER_GIFS: Record<string, string> = {
  scout: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
  competitor: 'https://media.giphy.com/media/3ohhwkAzmHgZFGMxqo/giphy.gif',
  builder: 'https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif',
  human: 'https://media.giphy.com/media/VGwTq3G6a39cI/giphy.gif',
}

export default function About() {
  return (
    <section id="about" className="overflow-hidden p-0">
      {/* Banner */}
      <div className="relative py-20 px-6 text-center overflow-hidden" style={{ background: 'var(--accent)' }}>
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-display font-extrabold"
          style={{ fontSize: 'clamp(80px,18vw,200px)', color: 'rgba(255,255,255,0.06)', letterSpacing: '-8px' }}
        >
          POLA
        </div>
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-[11px] font-bold tracking-[3px] uppercase mb-4"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          Personal
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-extrabold text-white mb-4 leading-tight"
          style={{ fontSize: 'clamp(32px,5vw,56px)', letterSpacing: '-2px' }}
        >
          Beyond the Code
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg max-w-xl mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          Machine Learning and Software Engineering are a huge part of who I am — but not the whole story.
        </motion.p>
      </div>

      {/* Chapters */}
      {aboutChapters.map((chapter, i) => {
        const isFlipped = i % 2 !== 0
        return (
          <ChapterBlock key={chapter.id} chapter={chapter} flipped={isFlipped} gifUrl={CHAPTER_GIFS[chapter.id]} index={i} />
        )
      })}
    </section>
  )
}

interface ChapterBlockProps {
  chapter: (typeof aboutChapters)[0]
  flipped: boolean
  gifUrl: string
  index: number
}

function ChapterBlock({ chapter, flipped, gifUrl, index }: ChapterBlockProps) {
  const bg = index % 2 === 0 ? 'var(--bg)' : 'var(--bg-secondary)'

  const Visual = (
    <motion.div
      initial={{ opacity: 0, x: flipped ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="flex items-center justify-center"
    >
      <div
        className="w-full max-w-[480px] aspect-[4/3] rounded-[28px] overflow-hidden relative"
        style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
      >
        <img
          src={gifUrl}
          alt={`${chapter.label} illustration`}
          className="w-full h-full object-cover"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        {/* Chapter number watermark */}
        <div
          className="absolute bottom-3 left-3 font-display font-extrabold opacity-20 select-none"
          style={{ fontSize: '56px', color: 'var(--text-primary)', lineHeight: 1 }}
        >
          {chapter.number}
        </div>
      </div>
    </motion.div>
  )

  const Text = (
    <motion.div
      initial={{ opacity: 0, x: flipped ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
    >
      <span className="text-[11px] font-bold tracking-[3px] uppercase text-accent mb-3 block">
        Chapter {chapter.number} — {chapter.label}
      </span>
      <h2
        className="font-display font-extrabold text-primary mb-5 leading-[1.15]"
        style={{ fontSize: 'clamp(24px,3.5vw,38px)', letterSpacing: '-1px', whiteSpace: 'pre-line' }}
      >
        {chapter.title}
      </h2>
      {chapter.body.map((para, pi) => (
        <p key={pi} className="text-base text-secondary leading-[1.8] mb-4">
          {para}
        </p>
      ))}
      <div className="flex flex-wrap gap-2 mt-5">
        {chapter.tags.map(tag => (
          <motion.span
            key={tag}
            whileHover={{ scale: 1.04, borderColor: 'var(--accent-mid)', color: 'var(--accent)' }}
            className="text-xs font-semibold px-4 py-1.5 rounded-full text-secondary transition-colors"
            style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )

  return (
    <div className="py-20 relative" style={{ background: bg }}>
      {/* Chapter number bg watermark */}
      <div
        className="absolute top-6 font-display font-extrabold select-none pointer-events-none"
        style={{
          fontSize: '80px',
          opacity: 0.045,
          color: 'var(--text-primary)',
          lineHeight: 1,
          [flipped ? 'right' : 'left']: '24px',
        }}
      >
        {chapter.number}
      </div>

      <div className="section-container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center ${flipped ? 'lg:[&>*:first-child]:order-last' : ''}`}>
          {flipped ? (
            <>
              {Text}
              {Visual}
            </>
          ) : (
            <>
              {Visual}
              {Text}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
