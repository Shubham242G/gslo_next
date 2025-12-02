'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(true) // already checked

  useEffect(() => {
    if (typeof window === 'undefined') return

    console.log('Disclaimer useEffect running')
    const hasAccepted = localStorage.getItem('disclaimerAcceptedGSLO')
    console.log('hasAccepted value:', hasAccepted)

    if (!hasAccepted) {
      setIsOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }, [])

  const handleProceed = () => {
    if (!isChecked) return
    if (typeof window !== 'undefined') {
      localStorage.setItem('disclaimerAcceptedGSLO', 'true')
      document.body.style.overflow = 'unset'
    }
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 px-8 py-6">
                <h2 className="text-3xl font-semibold text-gray-900">
                  Disclaimer
                </h2>
              </div>

              {/* Body */}
              <div className="px-8 py-6 overflow-y-auto max-h-[60vh]">
                <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                  <p className="text-justify">
                    The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website,{' '}
                    <a
                      href="https://www.gslo.in"
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.gslo.in
                    </a>
                    , you acknowledge and confirm that you are seeking information relating to Gaurav Sharma Law Offices of your own accord and that there has been no form of solicitation, advertisement or inducement by Gaurav Sharma Law Offices or its members.
                  </p>
                  <p className="text-justify">
                    The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Gaurav Sharma Law Offices shall not be liable for consequences of any action taken by relying on the material/information provided on this website.
                  </p>
                  <p className="text-justify">
                    The contents of this website are the intellectual property of Gaurav Sharma Law Offices.
                  </p>
                </div>

                {/* Checkbox */}
                <div className="mt-6 flex items-start gap-3">
                  <input
                    id="accept-disclaimer-gslo"
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="mt-0.5 w-5 h-5 rounded border-2 border-gray-400 text-gray-900 
                               focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 cursor-pointer"
                  />
                  <label
                    htmlFor="accept-disclaimer-gslo"
                    className="text-gray-800 text-sm cursor-pointer select-none"
                  >
                    I accept the above.
                  </label>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 border-t border-gray-200 px-8 py-5 flex justify-end">
                <button
                  onClick={handleProceed}
                  disabled={!isChecked}
                  className={`px-8 py-2.5 rounded-full text-xs md:text-sm font-medium tracking-[0.15em] uppercase
                    transition-all duration-200
                    ${isChecked
                      ? 'bg-black text-white hover:bg-zinc-900 shadow-md hover:shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  PROCEED TO WEBSITE
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
