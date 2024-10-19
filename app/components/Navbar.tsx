"use client"; // Marking this component as a client component

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Link, 
} from "@nextui-org/react";
import { CircleUserRound, Search } from 'lucide-react';

export default function BrandofyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Gifts', 'About', 'Reviews', 'Contact','Gifts', 'About', 'Reviews',];
  const menuItems2 = ['Gifts', 'About', 'Reviews', 'Contact','Gifts', 'About', 'Reviews',];

  return (
    <div className='bg-blue-50' >
      <div className='flex justify-center pt-6 gap-[20vw]  h-[15vh] w-full ' >
        <div className='pt-3' >
        <CircleUserRound strokeWidth={1.1} size={36} />
        </div>
        <div className="">
        <Link href="/" className="cursor-pointer">
            <motion.h1
             className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600"
              initial={{ opacity: 0, y: -50 }}
               animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
           >
              Brandofy
           </motion.h1>
           </Link>
        </div>
        <div className='flex gap-1 pt-3' >
          <Search />
            Search
        </div>
      </div>
      <div className='flex justify-center gap-16 pb-3  ' >
        { menuItems.map((item, index) => (
          <li className="list-none " key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="text-xl text-gray-800 hover:text-blue-500 transition-colors"
            >
              {item}
            </Link>
          </li>
        ))}
      </div>
      <div className='flex justify-center gap-10 pb-3' >
        { menuItems2.map((item, index) => (
          <li className="list-none " key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="text-xl text-gray-800 hover:text-blue-500 transition-colors"
            >
              {item}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}

// <Navbar 
//       onMenuOpenChange={setIsMenuOpen}
//       className="pt-4 pb-4 mx-auto bg-white shadow-md" // White background with slight shadow for clean look
//       maxWidth="full"
//       isBordered={false}
//     >
//       <NavbarContent className="flex justify-center w-full">
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//         <NavbarBrand>
//           <Link href="/" className="cursor-pointer">
//             <motion.h1
//               className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600"
//               initial={{ opacity: 0, y: -50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               Brandofy
//             </motion.h1>
//           </Link>
//         </NavbarBrand>
//       </NavbarContent>

//       {/* Menu items for larger screens */}
//       <NavbarContent className="hidden sm:flex justify-center w-full gap-8">
//         {menuItems.map((item, index) => (
//           <NavbarItem key={`${item}-${index}`}>
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link 
//                 color="foreground" 
//                 href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
//                 className="text-xl text-gray-800 hover:text-blue-500 transition-colors"
//               >
//                 {item}
//               </Link>
//             </motion.div>
//           </NavbarItem>
//         ))}
//       </NavbarContent>

//       {/* Sign Up button for larger screens */}
//       <NavbarContent justify="end" className="flex w-full justify-center sm:justify-end">
//         <NavbarItem className="hidden sm:flex">
//           <Button 
//             variant="ghost" // Transparent button
//             startContent={<UserPlus size={20} />}
//             size="lg"
//             className="mr-4 text-gray-800 hover:text-blue-500 border-none hover:bg-transparent"
//           >
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
      
//       {/* Mobile menu */}
//       <NavbarMenu>
//         <div className="flex flex-col items-center">
//           {menuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item}-${index}`}>
//               <Link
//                 color="foreground"
//                 className="w-full text-xl text-center"
//                 href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
//                 size="lg"
//               >
//                 {item}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//           <NavbarMenuItem>
//             <Button 
//               variant="ghost"
//               startContent={<UserPlus size={20} />}
//               className="mt-4 w-full text-gray-800 hover:text-blue-500 border-none"
//             >
//               Sign Up
//             </Button>
//           </NavbarMenuItem>
//         </div>
//       </NavbarMenu>
// </Navbar>