import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiExternalLink, FiX } from 'react-icons/fi'
import type { Certificate } from '../../types/project'

interface CertificateModalProps {
  certificate: Certificate | null
  onClose: () => void
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handler)
    document.body.style.overflow = certificate ? 'hidden' : ''

    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [certificate, onClose])

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[2000] flex items-start justify-center p-6 overflow-y-auto"
          style={{
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={e => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            className="bg-base w-full max-w-4xl rounded-3xl my-auto"
            style={{
              border: '1px solid var(--border)',
            }}
          >
            {/* Header */}
            <div
              className="px-8 pt-7 pb-5 rounded-t-3xl"
              style={{
                borderBottom: '1px solid var(--border)',
              }}
            >
              <h2 className="font-display text-2xl font-bold text-primary pr-10">
                {certificate.name}
              </h2>

              <p className="text-secondary mt-2">
                {certificate.organization}
              </p>

              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-xl flex items-center justify-center text-secondary hover:text-primary transition-colors"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="px-8 py-8 flex flex-col gap-8">

              {/* Certificate Image */}
              {certificate.image && (
                <Section title="Certificate">
                  <div
                    className="rounded-2xl overflow-auto"
                    style={{
                      maxHeight: '500px',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      className="w-full"
                    />
                  </div>
                </Section>
              )}

              {/* Description */}
              {certificate.description && (
                <Section title="Description">
                  <p className="text-[15px] text-secondary leading-[1.75]">
                    {certificate.description}
                  </p>
                </Section>
              )}

              {/* Skills */}
              {certificate.skills && certificate.skills.length > 0 && (
                <Section title="Skills">
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map(skill => (
                      <span
                        key={skill}
                        className="text-sm font-medium px-3.5 py-1.5 rounded-xl text-primary"
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Section>
              )}

              {/* Information */}
              {(certificate.date || certificate.credentialId) && (
                <Section title="Certificate Information">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {certificate.date && (
                      <div
                        className="rounded-2xl p-4"
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <div className="text-xs text-secondary">
                          Issue Date
                        </div>

                        <div className="font-semibold text-primary mt-1">
                          {certificate.date}
                        </div>
                      </div>
                    )}

                    {certificate.credentialId && (
                      <div
                        className="rounded-2xl p-4"
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <div className="text-xs text-secondary">
                          Credential ID
                        </div>

                        <div className="font-semibold text-primary mt-1">
                          {certificate.credentialId}
                        </div>
                      </div>
                    )}
                  </div>
                </Section>
              )}

              {/* Verify */}
              {certificate.verifyUrl && (
                <div>
                  <a
                    href={certificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-primary hover:text-accent transition-colors"
                    style={{
                      border: '1.5px solid var(--border)',
                    }}
                  >
                    <FiExternalLink size={15} />
                    Verify Certificate
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[1.5px] uppercase text-accent mb-3.5">
        {title}
      </p>
      {children}
    </div>
  )
}