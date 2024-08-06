'use client'

import React from 'react'

export default function ButtonNew() {
  return (
    <div className='flex bg-red-400 ml-100 w-40 flex-col items-center justify-center '>

      <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      className='border-r-50'
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 112v288M400 256H112"
      />
    </svg>
    <span>
      Add Child 
    </span>
     
   
   
    </div>
  )
}
