
import { Button } from '@/components/ui/button'
import { ListSortAscending, Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='shadow-md flex justify-between p-3'>
   <div className=' flex gap-8 items-center   '>
       <Image 
      width={60}
      height={60}
      src="/logo.png"
      alt='restaurant icon'
/>   
   

  
    <h2 className='flex gap-2 items-center border rounded-full p-2 bg-slate-200'> <ListSortAscending /> Category</h2>

<div className='hidden md:flex gap-3 items-center border rounded-full p-2'>
<Search/>
<input type="text" className='outline-none' placeholder='search'/>
</div>
</div>
<div className='flex gap-5 items-center'>
    <h2 className='flex gap-2 items-center'><ShoppingBag/>0</h2>
    <Button>Log in</Button>
</div>
   </div>
  )
}

export default Header
