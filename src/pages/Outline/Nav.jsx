import React from 'react'
import { Fragment, useState } from 'react'
import himal from '/himal.png'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Academc Programs', description: 'Get a better quality High quality Education', href: '#', icon: ChartPieIcon },
  { name: 'Extracurricular Activities', description: 'Beyond Academic for overall Developnment', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Innovation Labs', description: 'For the practical & Research', href: '#', icon: FingerPrintIcon },
  { name: 'Student Led projects', description: 'Innovatie New projects ', href: '#', icon: SquaresPlusIcon },
  { name: 'Startup challenge', description: 'Chance to present idea and raise support', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact Here', href: 'https://youtube.com/', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className='fixed z-50 w-full'>
      <header className="  lg:top-0 w-full z-50 bg-[#DAE0E2]  shadow-white">

        {/* Full Navigation Part For Large screen */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:p-3  lg:px-8" aria-label="Global">

          {/* Left part mobile and computer screen logos */}
          <div className="flex lg:flex-1  ">
            <Link to="/" className="-m-1.5 p-1.5 relative">
              <span className=" text-red-900 font-bold text-3xl capitalize  ">HIMAL </span>
              <span className='text-cyan-700 font-bold text-2xl   border '>ACADEMY</span>

              {/* <img className="h-12 w-auto" src={himal} alt="" /> */}
            </Link>
          </div>
          {/* Mobile Screen Open menu logo */}

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >

              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Big Screen Navigation Links */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Carrier Paths
            </a>
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Programs
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </PopoverButton>

              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </Transition>
            </Popover>

            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              About us
            </a>

            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Admisions and Aid
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Carrier Paths
            </a>
          </PopoverGroup>





          {/* big Screen Login button */}

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://himalacademy.com/" className="text-sm font-semibold leading-6 text-gray-900" target='_blank'>
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

        </nav>

{/* Mobile Device Navigation */}
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Himal Academy</span>
                <img
                  className="h-8 w-auto"
                  src={himal}
                  alt=""
                />
              </a>




              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">

                <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                     
                        <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Programs
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </DisclosureButton>

                        <DisclosurePanel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <DisclosureButton
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </DisclosureButton>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>


                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Admisions and Aid
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Carrier Paths
                  </a>
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
    </div>
  )
}

export default Nav
