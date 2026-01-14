export function TrustStrip() {
  return (
    <section className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 py-12 border-y border-blue-800/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          <div className="flex flex-col items-center">
            <div className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Governance First</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Verification by Design</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Audit Trail Ready</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Regulatory Aligned</div>
          </div>
        </div>
      </div>
    </section>
  )
}
