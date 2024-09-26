import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import Nike from "./hero.svg"
import Logo1 from "./logo1.svg"
import Logo2 from "./logo2.svg"
import Logo3 from "./logo3.svg"

const navigation = [
  { name: 'Products', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Log In', href: '#' },
]

const features = [
  {icon: Logo1, title: 'Nibh viverra', description: 'Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.'},
  {icon: Logo2, title: 'Cursus amet', description: 'Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.'},
  {icon: Logo3, title: 'Ipsum fermentum', description: 'Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.'},
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative bg-[#fef3c7]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <p className='text-red-600 font-bold text-2xl'>Collers</p>
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
          <div className="hidden lg:flex lg:gap-x-12 items-center">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm leading-6 text-red-700 font-semibold">
                {item.name}
              </a>
            ))}
            <button type="button" className="text-red-800 font-semibold border-red-800 border-2  rounded-lg py-2 px-5">
              Sign up now
            </button>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {/* Triangle background */}
      <div className='absolute  inset-0 bg-[#fffced] w-full h-full' style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 100%)' }}></div>
      {/* Main content */}
      <main className='flex relative flex-col items-center justify-evenly h-full min-h-screen z-20 pt-20'>
        <div className='flex flex-col items-center justify-center sm:flex-row sm:gap-4 sm:px-4 h-full'>
          <div className='flex flex-col gap-4 items-center justify-center sm:items-start sm:gap-8 sm:text-left'>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Collectible Sneakers
            </h1>
            <p className='text-gray-600 max-w-4xl'>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
            <div className='flex gap-4'>
              <button className='text-red-800 font-semibold border-red-800 border-2  rounded-lg py-2 px-5 mt-5'>
                Sign up now
              </button>
              <button className='text-red-800 font-semibold flex gap-2  rounded-lg py-2 px-5 mt-5'>
                <PlayCircleIcon className='h-6 w-6' />
                Watch video
              </button>
            </div>
          </div>
          <img src={Nike} alt='nike' className='px-4' />
        </div>
        <div className='flex flex-col items-center justify- sm:flex-row sm:gap-4 sm:px-4 h-full '>
        {features.map((feature) => (
          <div className='flex flex-col items-center justify-center gap-4 max-w-xl p-4'>
            <img src={feature.icon} alt='icon' className='h-16 w-16' />
            <h2 className='text-xl font-bold'>{feature.title}</h2>
            <p className='text-lg font-medium'>{feature.description}</p>
          </div>
        ))}
      </div>
      </main>
    </div>
  )
}
