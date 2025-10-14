export default function AnnualReports() {
  const years = [2024, 2023, 2022, 2021, 2020]

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Annual Reports
        </h2>
        
        <div className="flex flex-wrap gap-4">
          {years.map((year) => (
            <button
              key={year}
              className="bg-[#622676] hover:bg-[#7a3091] text-white font-bold text-2xl px-12 py-4 rounded transition-colors duration-200"
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
