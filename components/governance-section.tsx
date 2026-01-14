import { CheckCircle } from "lucide-react"

export function GovernanceSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-950/20 to-zinc-950 py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">Regulatory & Trust</h2>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
            Built with compliance and transparency at the foundation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-950/40 backdrop-blur border border-blue-800/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Regulatory Posture</h3>
            <div className="space-y-4 text-blue-200/80">
              <p className="leading-relaxed">
                <span className="font-semibold text-blue-300">Fictional coursework organization.</span> Regulatory
                design aligned with FCA expectations.
              </p>
              <p className="leading-relaxed">
                Built as a fintech concept for academic purposes, designed to operate in line with regulatory style
                expectations for governance, risk, and transparency.
              </p>
            </div>
          </div>

          <div className="bg-blue-950/40 backdrop-blur border border-blue-800/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Operational Controls</h3>
            <div className="space-y-4">
              {[
                "Audit trails for all transactions",
                "Documented governance frameworks",
                "Tiered access with role-based permissions",
                "Risk reporting by default",
                "Data integrity verification",
                "Transparent decision-making processes",
              ].map((control, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-200/80">{control}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
