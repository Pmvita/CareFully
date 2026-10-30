"use client";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Carefully
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary">How It Works</a>
              <a href="/download" className="text-gray-700 hover:text-primary">Download</a>
              <a href="/download" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Trusted Care,
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> On Demand</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Book trusted babysitters and nannies in your neighborhood. Caregivers set their own hourly rates as independent contractors.
            Secure booking with transparent pricing and refundable booking options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/download" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg">
              Find a Caregiver
            </a>
            <a href="/download" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold border-2 border-primary hover:bg-indigo-50 transition-colors">
              Become a Caregiver
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h3>
            <p className="text-xl text-gray-600">Combining the best features from Care.com, Sittercity, UrbanSitter, and Bambino</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Caregiver-Controlled Rates", desc: "Sitter match each nanny and babysitter sets their own hourly rates as independent contractors with complete flexibility." },
              { title: "Secure Deposits", desc: "Book with confidence using our secure deposit system. Clear policies on deposits, refunds, and cancellations." },
              { title: "Neighborhood Network", desc: "Find trusted caregivers in your neighborhood through our powerful network-based matching." },
              { title: "Verified Profiles", desc: "Background checks, references, experience verification, and identity verification for added peace of mind." },
              { title: "Instant & Scheduled Booking", desc: "Book for last-minute date nights or schedule regular care in advance with flexible options." },
              { title: "In-App Payments", desc: "Seamless, secure payments through the app. Track earnings, view payment history, and manage transactions." },
              { title: "Reviews & Ratings", desc: "Build trust through transparent reviews from parents in your community." },
              { title: "Messaging & Interviews", desc: "Chat directly with caregivers, conduct video interviews, and hire with confidence." },
              { title: "Calendar & Availability", desc: "Caregivers manage their own availability. Parents see real-time availability for instant booking." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-primary mb-6">For Parents & Guardians</h4>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Search", desc: "Find caregivers near you based on location, availability, rates, and reviews." },
                  { step: "2", title: "Connect", desc: "Message caregivers, view profiles, and conduct interviews." },
                  { step: "3", title: "Book & Pay", desc: "Book securely with deposit. Pay safely through the app." },
                  { step: "4", title: "Enjoy Peace of Mind", desc: "Leave reviews and build long-term relationships." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold mb-1">{item.title}</h5>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-secondary mb-6">For Sitters & Nannies</h4>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Create Profile", desc: "Set your own hourly rate, availability, and showcase your experience." },
                  { step: "2", title: "Get Verified", desc: "Complete background checks and build trust with families." },
                  { step: "3", title: "Accept Bookings", desc: "Choose jobs that fit your schedule and preferences as an independent contractor." },
                  { step: "4", title: "Get Paid", desc: "Receive secure payments through the platform on your terms." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold mb-1">{item.title}</h5>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90">Join thousands of families and caregivers who trust Carefully</p>
          <a href="/download" className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Download the App
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">Carefully</h4>
          <p className="text-gray-400 mb-6">Trusted childcare marketplace connecting families with independent caregivers</p>
          <div className="flex justify-center gap-6">
            <a href="/download" className="text-gray-400 hover:text-white">Download</a>
            <a href="#features" className="text-gray-400 hover:text-white">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a>
          </div>
          <p className="text-gray-500 mt-8 text-sm">© 2024 Carefully. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
