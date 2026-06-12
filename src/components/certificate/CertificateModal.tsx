import { AnimatePresence, motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import type { Certificate } from '../../types/project'

interface Props {
  certificate: Certificate | null
  onClose: () => void
}

export default function CertificateModal({
  certificate,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center p-6"
          style={{
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={e => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-5xl w-full"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2"
            >
              <FiX />
            </button>

            <div
                className="overflow-auto rounded-2xl"
                style={{
                    maxHeight: '700px',
                    border: '1px solid var(--border)',
                }}
                >
                <img
                    src={certificate.image}
                    alt={certificate.name}
                    className="w-full"
                />
                </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}