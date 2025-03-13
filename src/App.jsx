import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './index.css'
import AppPreview from './assets/App_Preview.png'

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Developers', href: '#developers' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-10 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-4xl pt-30 pb-10 sm:py-30 lg:pt-30 lg:pb-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our first ever release of InternTrail {' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl w-full">
              Interntrail, the best platform for managing your student trainees
            </h1>
            <p className="mt-8 text-md leading-8 text-gray-500 font-regular">
              Let's sign you up and gain access to our platform!
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-y-3 sm:flex-row sm:gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <img
            src={AppPreview}
            alt="App Preview"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto"
          />
        </div>

        {/* New subheading section */}
        <div className="mt-8 mb-10 text-center">
          <h2 className="mt-4 text-5xl font-semibold text-gray-900">
            Your job, now simpler and easier
          </h2>
          <p className="mt-2 mx-auto max-w-2xl text-gray-600">
            With InternTrail, you can monitor and manage your student trainee's records and accomplishments. Making your job easier than ever before!
          </p>
        </div>

        <section id = "features" className="text-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mx-auto mb-8 lg:mb-16">
              <h2 className="mt-4 text-5xl font-semibold text-gray-900">
                InternTrail offers the things that coordinators and managers need
              </h2>
            </div>

            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center">
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-100 lg:h-12 lg:w-12 dark:bg-indigo-900 mx-auto">
                  <svg
                    className="w-5 h-5 text-indigo-600 lg:w-6 lg:h-6 dark:text-indigo-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* ...existing svg path... */}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Access Control</h3>
                <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                  With InternTrail, you can monitor and manage your student trainee's records and accomplishments. Making your job easier than ever before!
                </p>
              </div>

              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-100 lg:h-12 lg:w-12 dark:bg-indigo-900 mx-auto">
                  <svg
                    className="w-5 h-5 text-indigo-600 lg:w-6 lg:h-6 dark:text-indigo-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* ...existing svg path... */}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Dashboard Overview</h3>
                <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Stay on track with a real-time dashboard that displays your internship progress, upcoming tasks, and important updates all in one place.
                </p>
              </div>

              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-100 lg:h-12 lg:w-12 dark:bg-indigo-900 mx-auto">
                  <svg
                    className="w-5 h-5 text-indigo-600 lg:w-6 lg:h-6 dark:text-indigo-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* ...existing svg path... */}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Announcements Hub</h3>
                <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Stay informed with important news, deadlines, and internship-related updates.
                </p>
              </div>

              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-100 lg:h-12 lg:w-12 dark:bg-indigo-900 mx-auto">
                  <svg
                    className="w-5 h-5 text-indigo-600 lg:w-6 lg:h-6 dark:text-indigo-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* ...existing svg path... */}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Company Directory </h3>
                <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Explore and connect with partner companies for internship opportunities.
                </p>
              </div>

              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-100 lg:h-12 lg:w-12 dark:bg-indigo-900 mx-auto">
                  <svg
                    className="w-5 h-5 text-indigo-600 lg:w-6 lg:h-6 dark:text-indigo-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* ...existing svg path... */}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">File Storage</h3>
                <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Upload, organize, and access essential documents like resumes, reports, and certificates.
                </p>
              </div>
              
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-100 lg:h-12 lg:w-12 dark:bg-indigo-900 mx-auto">
                  <svg
                    className="w-5 h-5 text-indigo-600 lg:w-6 lg:h-6 dark:text-indigo-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* ...existing svg path... */}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Trainee Management </h3>
                <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Track student progress, performance, and evaluations throughout the internship.
                </p>
              </div>

              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-100 lg:h-12 lg:w-12 dark:bg-indigo-900 mx-auto">
                  <svg
                    className="w-5 h-5 text-indigo-600 lg:w-6 lg:h-6 dark:text-indigo-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* ...existing svg path... */}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Performance Reports</h3>
                <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Receive structured feedback and progress assessments from supervisors.
                </p>
              </div>



              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-100 lg:h-12 lg:w-12 dark:bg-indigo-900 mx-auto">
                  <svg
                    className="w-5 h-5 text-indigo-600 lg:w-6 lg:h-6 dark:text-indigo-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* ...existing svg path... */}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Emergency Alerts </h3>
                <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Quickly report urgent concerns or incidents related to your internship for immediate assistance.
                </p>
              </div>

              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-100 lg:h-12 lg:w-12 dark:bg-indigo-900 mx-auto">
                  <svg
                    className="w-5 h-5 text-indigo-600 lg:w-6 lg:h-6 dark:text-indigo-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {/* ...existing svg path... */}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Monitoring</h3>
                <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                  Monitor and manage your student trainee's records and accomplishments. Making your job easier than ever before!
                </p>
              </div>

              {/* Repeat similar centering changes for each feature card */}
              {/* ...existing code... */}
            </div>
          </div>
        </section>
  
        <section className="py-16">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
              <img
                src={AppPreview}
                alt="App Preview"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
              <h2 className="text-4xl font-semibold text-gray-900">
                Seamless Integration
              </h2>
              <p className="mt-4 text-gray-600">
                InternTrail integrates seamlessly with your existing systems, providing a smooth and efficient workflow for managing your student trainees. Experience the ease of use and powerful features that InternTrail offers.
              </p>
            </div>
          </div>
        </section>
        
        {/* Flipped version of the "Seamless Integration" section */}
        <section className="py-16">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:order-2">
              <img
                src={AppPreview}
                alt="App Preview"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pr-12 mt-8 lg:mt-0 lg:order-1">
              <h2 className="text-4xl font-semibold text-gray-900">
                Seamless Integration
              </h2>
              <p className="mt-4 text-gray-600">
                InternTrail integrates seamlessly with your existing systems, providing a smooth and efficient workflow for managing your student trainees. Experience the ease of use and powerful features that InternTrail offers.
              </p>
            </div>
          </div>
        </section>

        {/* New developer highlights section */}
        <section id="developers" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-5xl font-semibold text-gray-900 text-center mb-12">
              Meet Our Developers
            </h2>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="w-64">
                <img
                  src="public\img\unen.png"
                  alt="Developer 1"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Onin Binuya</h3>
                <p className="mt-2 text-gray-600">
                  Project Manager, Full-stack Developer
                </p>
              </div>
              <div className="w-64">
                <img
                  src="public\img\Maine.png"
                  alt="Developer 2"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Aldrine Castro</h3>
                <p className="mt-2 text-gray-600">
                  Full-stack Developer, UI/UX Designer
                </p>
              </div>
              <div className="w-64">
                <img
                  src="public\img\Vince.png"
                  alt="Developer 3"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Vincent Manio</h3>
                <p className="mt-2 text-gray-600">
                  Frontend Developer
                </p>
              </div>
              <div className="w-64">
                <img
                  src="public\img\lance.png"
                  alt="Developer 4"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Lance Ugatillo</h3>
                <p className="mt-2 text-gray-600">
                  Information System Analyst
                </p>
              </div>
              <div className="w-64">
                <img
                  src="path/to/developer5.jpg"
                  alt="Developer 5"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Dexter Miranda</h3>
                <p className="mt-2 text-gray-600">
                  Technical Adviser
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gradient component */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Final section with email field and button */}
        <section className="py-50">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-semibold text-gray-900">
              Start using our program today
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-y-3 sm:flex-row sm:gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-8">
          <div className="container mx-auto text-center">
            <p className="text-sm text-gray-600">
              &copy; 2025 InternTrail. All rights reserved.
            </p>
          </div>
        </footer>
        
      </div>
    </div>
  )
}

export default App