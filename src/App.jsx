import { useState, useEffect, Fragment } from 'react'
import { Dialog } from '@headlessui/react'
import './index.css'
import Coordashboard from './assets/Coordashboard.png';
import Deandashboard from './assets/Deandashboard.png';
import HTEdashboard from './assets/HTEdashboard.png';


import {
  ShieldAlert,
  MessageSquareText,
  Activity,
  UsersRound,
  FileCheck,
  Building2,
  Megaphone,
  LayoutDashboard,
  Menu,
  X,
} from 'lucide-react';

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Developers', href: '#developers' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close menu when clicking on navigation links
  const handleNavClick = (event) => {
    // Close the mobile menu
    setMobileMenuOpen(false);

    // Optional: Smooth scroll to the section
    const targetId = event.currentTarget.getAttribute('href');
    if (targetId && targetId.startsWith('#') && targetId !== '#') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-white">
        <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md shadow-md">
        <nav className="flex items-center justify-between p-4 lg:px-6">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <img
                alt="InternTrail Logo"
                src="/img/official_logo.png"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-gray-900 font-semibold">InternTrail</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-300"
                onClick={item.href.startsWith('#') ? handleNavClick : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Get Started Button (Desktop) */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform origin-top lg:hidden ${
            mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
          style={{ maxHeight: mobileMenuOpen ? '100vh' : '0', overflow: 'hidden' }}
        >
          {/* Mobile Navigation Links */}
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={handleNavClick}
              >
                {item.name}
              </a>
            ))}
            
            {/* Get Started Button (Mobile) */}
            <div className="mt-6 pt-2 border-t border-gray-200">
              <a
                href="#"
                className="block w-full rounded-md bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
                onClick={handleNavClick}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>


    <div className="relative isolate px-6 pt-10 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >   <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      />
      </div>
  
      {/* Section Container */}
      <div className="mx-auto max-w-4xl pt-20 pb-10 sm:py-24 lg:pt-24 lg:pb-10">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our first ever release of{' '}
            <span className="font-semibold text-indigo-600">InternTrail</span>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            InternTrail – empowering internships, simplifying management
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            Let's sign you up and gain access to our platform!
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 mb-14 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

        {/* First App Preview */}
      <div className="flex justify-center mt-2">
        <img
          src={Coordashboard}
          alt="Coordinator Dashboard Preview"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto"
        />
      </div>


        {/* New subheading section */}
        <div className="mt-8 mb-10 text-center">
          <h2 className="mt-15 text-5xl font-semibold text-gray-900">
            OJT, now simpler and easier
          </h2>
          <p className="mt-2 mx-auto max-w-2xl text-gray-600">
          With InternTrail, you can seamlessly track and manage trainee records, making the internship experience smoother and more efficient than ever before!
          </p>
        </div>

        {/* Features */}
        <section id="features" className="text-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-16">
            <h2 className="mt-4 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
              InternTrail offers essential tools for OJT management
          </h2>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center">
            {/* First 6 cards remain unchanged */}
            <div>
              <div className="flex justify-center items-center mb-4 mx-auto">
                <LayoutDashboard size={40} className="text-indigo-600 dark:text-indigo-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Dashboard Overview</h3>
              <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Stay on track with a real-time dashboard that displays internship progress, rendered hours, and important updates all in one place.
              </p>
            </div>

            <div>
              <div className="flex justify-center items-center mb-4 mx-auto">
                <Megaphone size={40} className="text-indigo-600 dark:text-indigo-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Announcements Hub</h3>
              <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Stay informed with important news, deadlines, and internship-related updates.
              </p>
            </div>

            <div>
              <div className="flex justify-center items-center mb-4 mx-auto">
                <Building2 size={40} className="text-indigo-600 dark:text-indigo-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Company Directory</h3>
              <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Explore and connect with partner companies for internship opportunities.
              </p>
            </div>

            <div>
              <div className="flex justify-center items-center mb-4 mx-auto">
                <FileCheck size={40} className="text-indigo-600 dark:text-indigo-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold">File Storage</h3>
              <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Upload, organize, and access essential documents like resumes, reports, and requirement templates.
              </p>
            </div>
            
            <div>
              <div className="flex justify-center items-center mb-4 mx-auto">
                <UsersRound size={40} className="text-indigo-600 dark:text-indigo-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Trainee Management</h3>
              <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Track student progress, performance, and evaluations throughout the internship.
              </p>
            </div>

            <div>
              <div className="flex justify-center items-center mb-4 mx-auto">
                <MessageSquareText size={40} className="text-indigo-600 dark:text-indigo-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Performance Feedback</h3>
              <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Receive AI-generated performance assessment and structured feedback from your supervisors
              </p>
            </div>
          </div>
          
          {/* New container for the last two cards */}
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-center gap-8 md:gap-12">
            {/* Emergency Alerts Card */}
            <div className="md:w-1/3 lg:w-1/4">
              <div className="flex justify-center items-center mb-4 mx-auto">
                <ShieldAlert size={40} className="text-indigo-600 dark:text-indigo-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Emergency Alerts</h3>
              <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Quickly report urgent concerns or incidents related to your internship for immediate assistance.
              </p>
            </div>

            {/* Trainee Monitoring Card */}
            <div className="md:w-1/3 lg:w-1/4">
              <div className="flex justify-center items-center mb-4 mx-auto">
                <Activity size={40} className="text-indigo-600 dark:text-indigo-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Trainee Monitoring</h3>
              <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                Monitor and manage your student trainee's records and accomplishments. 
              </p>
            </div>
          </div>
        </div>
      </section>
  
        {/* Second App Preview */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <img
              src={Deandashboard}
              alt="Dean Dashboard Preview"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <h2 className="text-4xl font-semibold text-gray-900">
              Seamless Integration
            </h2>
            <p className="mt-4 text-gray-600">
              InternTrail complements your existing systems, providing a smooth and efficient workflow for managing internships. Experience the ease of use and powerful features that InternTrail offers.
            </p>
          </div>
        </div>
      </section>

        
        {/* Flipped version of the "Seamless Integration" section */}
        {/* Third App Preview */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:order-2">
            <img
              src={HTEdashboard}
              alt="HTE Dashboard Preview"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pr-12 mt-8 lg:mt-0 lg:order-1">
            <h2 className="text-4xl font-semibold text-gray-900">
              Streamlined Management
            </h2>
            <p className="mt-4 text-gray-600">
              InternTrail centralizes OJT management, offering progress tracking, intuitive reporting, and seamless coordination between trainees, coordinators, and HTE supervisors. Stay organized and in control with ease.
            </p>
          </div>
        </div>
      </section>


        {/* New developer highlights section */}
        <section id="developers" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-5xl font-semibold text-gray-900 text-center mb-12">
              Meet the Developers
            </h2>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="w-64">
                <img
                  src="/img/unen.png"
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
                  src="/img/Maine.png"
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
                  src="/img/Vince.png"
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
                  src="/img/Lance.png"
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
                  src="/img/SirDex.jpg"
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
              Start using our application today!
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              InternTrail—where internships meet innovation.  Sign up now and experience a smarter way of managing internships.
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