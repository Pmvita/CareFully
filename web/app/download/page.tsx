"use client";

export default function Download() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Carefully
              </h1>
            </a>
            <a href="/" className="text-gray-700 hover:text-primary">← Back to Home</a>
          </div>
        </div>
      </nav>

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Download <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Carefully</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Get the full app experience on iOS and Android
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-4">iOS</h3>
              <p className="text-gray-600 mb-6">Download for iPhone and iPad</p>
              <button className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                <span className="text-2xl">🍎</span>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg">App Store</div>
                </div>
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">Android</h3>
              <p className="text-gray-600 mb-6">Download for Android devices</p>
              <button className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                <span className="text-2xl">▶️</span>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Scan to Download</h3>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-200 mx-auto mb-3 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">▦</span>
                </div>
                <p className="font-semibold">iOS QR Code</p>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-200 mx-auto mb-3 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">▦</span>
                </div>
                <p className="font-semibold">Android QR Code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">App Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Browse & search caregivers by location",
              "View profiles with rates, reviews & availability",
              "Message and interview caregivers",
              "Book with secure deposit system",
              "In-app messaging and notifications",
              "Manage bookings & calendar",
              "Track payments and earnings",
              "Leave reviews and ratings",
              "Set your own rates (for caregivers)",
              "Background check integration",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
