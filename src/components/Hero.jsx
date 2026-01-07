import React from 'react'

const Hero = () => {
  return (
    <div className="isolate">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 blur-3xl rounded-full opacity-20"></div>
      </div>
      <div className="container mx-auto px-6 py-20 md:py-24 lg:py-28 xl:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          <div className="flex-1 space-y-6 lg:space-y-7">
            <div className="space-y-4 lg:space-y-5">
              <div className="flex items-center max-xs:flex-col max-xs:gap-2">
                <span className="inline-flex items-center px-2 pt-1 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400 mr-2">
                  NEW
                </span>
                <h2 className="inline-block py-1.6 px-3 lg:px-4 lg:py-2 border border-neutral-700/50 backdrop-blur-sm rounded-full font-medium bg-neutral-900 text-amber-400">
                  <i className="bx bx-trending-up mr-1"></i>
                  Next Generation Design System
                </h2>
              </div>
              <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                <span className="block mb-1">Design</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">Without Limits</span>
              </h1>
              <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
                Elevate your web projects with our streamlined design system powered by the latest Tailwind CSS v4. Create stunning user experience with state-of-the-art theme switching.
              </p>
              <div className="flex gap-3 items-center">
                <div className="h-px bg-neutral-400 dark:bg-neutral-700 w-12"></div>
                <p className="uppercase font-medium tracking-widest text-neutral-500 dark:text-neutral-400 text-xs">Transition seemlessly</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 lg:px-7 lg:py-3.5  rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow-lg hover:shadow-neutral-900/20 dark:hover:shadow-amber-500/20 flex items-center transition group">
                <i className="bx bx-code-alt mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform"></i>
                <span>Start Coding</span>
              </button>
              <button className="px-6 py-3 lg:px-7 lg:py-3.5  rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white dark:text-neutral-900 font-medium flex items-center transition group">
                <i className="bx bx-book-open mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100 transition-opacity"></i>
                <span>Documentation</span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 sm-items-center pt-6 lg:pt-7 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex -space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/women/27.jpg" alt="User"
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full  object-cover border-2 border-white dark:border-neutral-900" />
                <img
                  src="https://randomuser.me/api/portraits/men/27.jpg" alt="User"
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full  object-cover border-2 border-white dark:border-neutral-900" />
                <img
                  src="https://randomuser.me/api/portraits/women/28.jpg" alt="User"
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full  object-cover border-2 border-white dark:border-neutral-900" />
                <span className="flex items-center justify-center font-medium w-9 h-9 lg:w-10 lg:h-10 rounded-full object-cover border-2 border-white dark:border-neutral-900 bg-neutral-900 text-neutral-300 dark:bg-amber-500 text-white dark:text-neutral-900">+5k</span>
              </div>
              <div className="space-y-0.3">
                <div className="flex">
                  <i className="bx bxs-star text-amber-500 mr-1"></i>
                  <i className="bx bxs-star text-amber-500 mr-1"></i>
                  <i className="bx bxs-star text-amber-500 mr-1"></i>
                  <i className="bx bxs-star text-amber-500 mr-1"></i>
                  <i className="bx bxs-star-half text-amber-500 mr-1"></i>
                  <span className="text-neutral-600 text-sm dark:text-neutral-500 ml-1">4.8/5</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs lg:text-sm">
                  Trusted by{' '}
                  <span className="font-bold text-neutral-900 dark:text-white">5,000+</span>
                  {' '}
                  Developers worldwide
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-indigo-900 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-neutral-200 dark:bg-neutral-900 p-4 lg:p-5 xl:p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center justify-between mb-3 lg:mb-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full w-2.5 h-2.5 lg:w-3 lg:h-3 bg-red-500"></span>
                    <span className="rounded-full w-2.5 h-2.5 lg:w-3 lg:h-3 bg-amber-500"></span>
                    <span className="rounded-full w-2.5 h-2.5 lg:w-3 lg:h-3 bg-green-500"></span>
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    dark-mode.jsx
                  </div>
                </div>
                <div className="h-56 md:h-64 lg:h-60 xl:h-72 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden">
                  <img src="/images/light-mode.png" alt="Code snippet for light mode" className="w-full h-full object-cover object-left-top dark:hidden" />
                  <img src="/images/dark-mode.png" alt="Code snippet for dark mode" className="w-full h-full object-cover object-left-top dark:block" />
                  <div className="absolute bottom-17 right-7 lg:bottom-22 lg:right-9">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-amber-500 to-indigo-900 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse max-xs:w-6 max-xs:h-6">
                      <i className="bx bx-brightness-half text-xl lg:text-2xl max-xs:text-xs"></i>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-5 flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1 rounded-full font-medium text-amber-400 bg-neutral-900 dark:bg-neutral-800 text-xs flex items-center">
                      <i className="bx bx-air mr-1"></i>
                      Tailwind v4.
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-indigo-900 bg-neutral-100 dark:bg-neutral-800 dark:text-indigo-400 border border-neutral-400 dark:border-neutral-700 text-xs flex items-center">
                      <i className="bx bx-atom mr-1"></i>
                      React
                    </span>
                  </div>
                  <button className="w-7 h-7 lg:h-8 lg:w-9 xl:h-9 grid  place-items-center rounded-full bg-amber-500 text-neutral-900 hover:bg-amber-600 transition">
                    <i className="bx bx-copy text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-8 left-8 lg:bottom-10 lg:bottom-10 animate-bounce">
        <div className="bg-neutral-900 shadow-lg text-xs lg:text-sm text-white px-2.5 py-1 rounded-lg flex items-center">
          <i className="bx bx-check-circle mr-1 text-amber-500"></i> Responsive
        </div>
      </div>
      <div className="hidden md:block absolute top-16 right-[15%] lg:top-20 lg:right-[20%] animate-bounce delay-300">
        <div className="bg-neutral-900 shadow-lg text-xs lg:text-sm text-white px-2.5 py-1 rounded-lg flex items-center">
          <i className="bx bx-check-circle mr-1 text-amber-500"></i> Accessible
        </div>
      </div>
    </div>
  )
}

export default Hero
