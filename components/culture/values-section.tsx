import React from 'react'

const ValeusSection = () => {
  return (
    <section className='flex flex-row gap-6 px-4'>
        <div className='basis-2/12'>
            <h2 className='font-Onest font-medium text-[30px]'>Our Values</h2>
        </div>
        <div className='grid grid-cols-5 gap-6 w-full'>
            <div className='col-span-1 bg-white rounded-full px-9 py-5 border border-[#F46D70]/35'>
                <h3 className='text-[22px] font-Onest tracking-tight'>Valuing Skills</h3>
            </div>
            <div className='col-span-4 bg-white rounded-full px-11 py-6 border border-[#9F8AFF]/25'>
                <h3 className='text-[22px] font-Onest tracking-tight text-right'>Democratizing Interviewing</h3>
            </div>
            <div className='col-span-4 bg-white rounded-full px-11 py-6 border border-[#D7F0C6]'>
                <h3 className='text-[22px] font-Onest tracking-tight'>Building Interviewing communities</h3>
            </div>
            <div className='col-span-1 bg-white rounded-full px-11 py-6 border border-[#12A4B8]/25'>
                <h3 className='text-[22px] font-Onest tracking-tight text-right'>Simplify</h3>
            </div>
            <div className='col-span-2 bg-white rounded-full px-11 py-6 border border-[#9F8AFF]/25'>
                <h3 className='text-[22px] font-Onest tracking-tight'>Executional excellence</h3>
            </div>
            <div className='col-span-3 bg-white rounded-full px-11 py-6 border border-[#F46D70]/35'>
                <h3 className='text-[22px] font-Onest tracking-tight text-right'>Client interests first</h3>
            </div>
            <div className='col-span-3 bg-white rounded-full px-11 py-6 border border-[#F46D70]/35'>
                <h3 className='text-[22px] font-Onest tracking-tight'>Create a culture of Belongingness</h3>
            </div>
            <div className='col-span-2 bg-white rounded-full px-11 py-6 border border-[#D7F0C6]'>
                <h3 className='text-[22px] font-Onest tracking-tight text-right'>Transparency</h3>
            </div>
            <div className='col-span-2 bg-white rounded-full px-11 py-6 border border-[#12A4B8]/25'>
                <h3 className='text-[22px] font-Onest tracking-tight'>Passion and Innovation</h3>
            </div>
            <div className='col-span-3 bg-white rounded-full px-11 py-6 border border-[#9F8AFF]/25'>
                <h3 className='text-[22px] font-Onest tracking-tight text-right'>High ethical standards</h3>
            </div>
            
        </div>
    </section>
  )
}

export default ValeusSection;