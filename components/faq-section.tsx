"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Who is Valtreon for?",
      answer:
        "Valtreon serves governments, investment institutions, and ethical finance organizations seeking verifiable transparency in their financial operations. Our platform is designed for entities committed to regenerative finance and Doughnut Economics principles.",
    },
    {
      question: "What does Bhramavora OS actually verify?",
      answer:
        "Bhramavora OS verifies consistency and integrity across organizational and financial disclosures. It checks for alignment between stated values and actual practices, validates data consistency, and ensures traceability of all financial decisions.",
    },
    {
      question: "What data do you require?",
      answer:
        "We require organizational financial disclosures, impact metrics, governance documentation, and stakeholder engagement records. All data is processed with strict security protocols and audit trails.",
    },
    {
      question: "How do you prevent greenwashing claims?",
      answer:
        "Our verification layer cross-references claims against actual data, requires evidence for all impact statements, and maintains transparent audit trails. Human oversight loops ensure automated decisions are validated by expert reviewers.",
    },
    {
      question: "How do you handle risk and accountability?",
      answer:
        "Risk reporting is built into every layer of the platform. We use evidence-led scoring, maintain comprehensive audit trails, and employ a postnormal operating model designed to handle uncertainty and turbulence.",
    },
    {
      question: "What is the difference between tiers?",
      answer:
        "Our three tiers—Assessment, Governance, and Enterprise—offer progressively deeper integration. Assessment provides basic verification, Governance adds stakeholder oversight tools, and Enterprise includes full platform access with custom integrations.",
    },
  ]

  return (
    <section className="relative bg-zinc-950 py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-blue-200/80">Everything you need to know about Valtreon</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-blue-950/40 backdrop-blur border border-blue-800/30 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && <div className="px-6 pb-6 text-blue-200/80 leading-relaxed">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
