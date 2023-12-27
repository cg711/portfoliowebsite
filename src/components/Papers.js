import React from 'react'

export const Papers = () => {
  return (
    <div className="flex justify-evenly h-48 items-center flex-col w-full mt-4">
            <a href="https://drive.google.com/file/d/105Hz2Ypb4vhFEZ2FvWJGf_-w5BYCQL-R/view?usp=sharing" target="_blank" className="h-10 px-5 mt text-blue-500 border-2 border-blue-500 rounded-2xl transition-colors duration-150
                        focus:shadow-outline
                        hover:bg-blue-500 hover:text-white sm:mt-0 sm:w-auto mx-2 flex justify-center items-center">
                <div className="flex items-center">
                    <p className="mr-2">Introduction to ANNs</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </div> 
            </a>

    </div>
  )
}
