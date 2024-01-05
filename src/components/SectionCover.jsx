import React from 'react'

const SectionCover = ({img, title, desc, banner=false}) => {
  return (
    <section className={`cover-bg bg-cover bg-no-repeat bg-fixed md:py-20 md:px-28`}
    style={{
        backgroundImage:`url("${img}")`
    }}>
        <div className={`bg-black text-center p-8 pt-20 md:p-20 bg-opacity-50 text-white ${banner? "md:mt-10":"md:mt-0"}`}>
            <h2 className='text-6xl mb-4 font-clash-display font-semibold'>{title}</h2>
            <span className='font-clash-display'>{desc}</span>
        </div>
    </section>
  )
}

export default SectionCover