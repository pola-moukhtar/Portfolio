import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import { certificates } from '../data/certificates'

import type { Certificate } from '../types/project'
import CertificateCard from '../components/certificate/CertificateCard'
import CertificateModal from '../components/certificate/CertificateModal'

export default function Education() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null)

  return (
    <section id="education" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <SectionTitle
          label="Learning"
          title="Education & Certifications"
          description="Academic foundations backed by industry certifications."
        />

        {/* University card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-8 flex items-start gap-5 mb-12 max-w-2xl"
        >
          <div
            className="w-13 h-13 min-w-[52px] rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: 'var(--accent-light)', border: '1px solid var(--accent-mid)',}}>
            🎓
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-primary mb-2">
              Benha University
            </h3>

            <p className="text-sm text-secondary leading-relaxed">
              Faculty of Computer Science and Artificial Intelligence
              <br />
              B.Sc. Computer Science &amp; AI
            </p>

            <span
              className="inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: 'var(--accent-light)',
                color: 'var(--accent)',
                border: '1px solid var(--accent-mid)',
              }}
            >
              Expected Graduation: 2027
            </span>
          </div>
        </motion.div>

        {/* Certifications */}
        <h3 className="font-display text-lg font-bold text-primary mb-6">
          Certifications
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              index={i}
              onClick={() => setSelectedCertificate(cert)}
            />
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  )
}