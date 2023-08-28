
import Link from 'next/link';
import React, { Fragment, useState, useEffect} from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { BsFillCartCheckFill } from "react-icons/bs";

import styles from '../styles/components/Header.module.css';
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";


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
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
 
const Menu = () => {    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [allCategorias, setCategorias] = useState([]);
   
    
    useEffect(() => {
      obtenerCategorias();  
    }, []);


   const obtenerCategorias = async () => {
   
    
   }

   return (
        < >
      

            



        <header className="">
      <nav className=" flex max-w-8xl items-center justify-between p-3 lg:px-0" aria-label="Global">
        

      <Popover.Group className="hidden lg:flex lg:gap-x-6">
        
        <div className="ml-4">
          <Link legacyBehavior href="/About" >
            <a className="text-sm  leading-6" aria-label="Mobiliario Medico">
              <p className=""> ABOUT</p>  
            </a>
          </Link>
        </div>
        


        <div >
          <Link legacyBehavior href="/Mens">
            <a className="text-sm leading-6" aria-label="">
            MEN
            </a>
          </Link>
        </div>
        <div className="">
          <Link legacyBehavior href="/Women">
            <a className="text-sm  leading-6" aria-label="">
            WOMEN
            </a>
          </Link>
        </div>
        <div>
          <Link legacyBehavior href="/Kids">
            <a className="text-sm leading-6" aria-label="">
              KIDS
            </a>
          </Link>      
        </div> 
        <div>
          <Link legacyBehavior href="/Baby">
            <a className="text-sm leading-6" aria-label="">
              BABY
            </a>
          </Link>      
        </div> 
        <div >
          <Link legacyBehavior href="/Contact">
            <a className="text-sm  leading-6" aria-label="">
            CONTACT
            </a>
          </Link>      
        </div> 

      </Popover.Group>


        <div className="flex lg:flex-2">
          <Link legacyBehavior 
                            
              href={{
                pathname: '/'
              }}
              >
              <a  className="mr-60" aria-label="Logo">
                <span className="sr-only ">Logo</span>
                <Image className="h-13 "  alt="Logo fadimet" src={"/images/logo.svg"} width={80} height={80} />
              </a>
          </Link>
        </div>

        
        <div className="flex lg:hidden ">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-12   ">
          {/*<Link legacyBehavior       
              href={`/carrito`}
              >
              <a className="text-sm font-semibold leading-6 text-gray-900  ml-4" aria-label="Carrito">
                <span > 
                  <FaHeart  className='inline text-blue-400'/> 
                </span>    
              </a>
            </Link>*/}

          <Link legacyBehavior       
              href={`/cart`}
              >
              <a className="text-sm font-semibold leading-6 text-gray-900  ml-4 mr-14" aria-label="Carrito">
                <span > 
                  <BsFillCartCheckFill  className='inline text-blue-400'/> 
                </span>    
              </a>
          </Link>
            
        </div>
      </nav>

      
      <Dialog as="div" className="lg:hidden"  open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <div > 
        <Dialog.Panel className="bg-calypso-50 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between ">
            <a href="#" className="-m-1.5 p-1.5 " aria-label="Menu">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/logo_nuevo.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gr"
              aria-label="Cerrar Menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root  ">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                <Link legacyBehavior href="/About">
                    <a
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-label="Mobiliario Medico"
                    >
                      ABOUT 
                    </a>
                </Link>
                <Link legacyBehavior href="/Mens">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    aria-label="Consultorios"
                  >
                    MEN
                  </a>
                </Link>
                <Link legacyBehavior href="/Women">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    aria-label="Laboratorios"
                  >
                    WOMEN
                  </a>
                </Link>
                <Link legacyBehavior href="/Kids">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    aria-label="Farmaceutica"
                  >
                    KIDS
                  </a>
                  </Link>
                 <Link legacyBehavior href="/Baby">
                    <a
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-label="Nosotros"
                    >
                      BABY
                    </a>
                 </Link>
                 <Link legacyBehavior href="/Contact">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    aria-label="Contacto"
                  >
                    CONTACT
                  </a>
                  </Link>  
                

              </div>
              <div className="py-6">
              <Link legacyBehavior       
                  href={`/cart`}
                  ><a
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-label="Carrito"
                    >
                  <span > 
                  <BsFillCartCheckFill  className='-mt-1 mr-2 justify-end inline text-blue-400'/> 
                </span>  
                Cart
                </a>
               </Link>          
              </div>
            </div>
          </div>
        </Dialog.Panel>
        </div>
      </Dialog>
      



      
    </header>


       
       
        </>
     );
};

export default Menu;