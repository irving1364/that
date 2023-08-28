
import Link from 'next/link';
import React, { useState, useEffect} from 'react'
import { BsInstagram, BsWhatsapp, BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";
import { IoIosMailOpen } from "react-icons/io"
import styles from '../styles/components/Header.module.css';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'


import { BsFillCartCheckFill } from "react-icons/bs";

import Image from 'next/image';

import {
   ArrowPathIcon,
   Bars3Icon,
   ChartPieIcon,
   CursorArrowRaysIcon,
   FingerPrintIcon,
   SquaresPlusIcon,
   XMarkIcon,
 } from '@heroicons/react/24/outline'

const Header = (props) => {
   
   const [allCategorias, setCategorias] = useState([]);
   
    useEffect(() => {
      //obtenerCategorias();  
    }, []);


   const obtenerCategorias = async () => {
      const data = await fetch("https://fadimet.com.pa/backendInterFuerzaFadimet/index.php/auth/getCategories")
      const result = await data.json();
      setCategorias(result.categories)
   }
    
      const [open, setOpen] = useState(false);
      const [flyer, setFlyer] = useState(false);
      const [flyerTwo, setFlyerTwo] = useState(false);

   return (

      <div >   

         <nav className=" flex max-w-8xl items-center justify-between p-3 lg:px-0" aria-label="Global">
        

      <Popover.Group className="hidden lg:flex lg:gap-x-6">
        <div className="ml-4">
          <Link legacyBehavior href="" >
            <a className="text-xs font-serif" aria-label="">
              <p > UNIFORM OF THE RESTLESS</p>  
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
              <a  className={styles.BotonHeader}>
                  
                  <div>
                     <span className={styles.textArchive}> ARCHIVE SALE: 50% OFF</span>    
                     <span className={styles.textSub}> MEN</span>    
                     <span className={styles.textSub}> WOMEN</span>    
                  </div> 
            </a>
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-12  ">
          <Link legacyBehavior       
              href={``}
              >
              <a className="text-sm  leading-6 text-gray-900  mr-7" aria-label="">
                 <div className= {styles.marginRem}>
                   <span className= "text-xs font-serif"> LOS ANGELES 16:16PSTs</span>    
                  </div> 
              </a>
          </Link>

            
        </div>
      </nav>









   </div>

 );
};

export default Header;