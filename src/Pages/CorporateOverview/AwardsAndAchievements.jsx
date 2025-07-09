import React from 'react'
import { motion } from 'framer-motion'

const AwardsAndAchievements = () => {
  const awards = [
    {
      img: "Award/BirlaNu_inside_02das.07asd.fasddgasd202sddfgf5sdg v2 pfdgsdage (ddddd038df-0were391).webp",
      title: "Brand of the Year 2025 - Roofing and Ceiling Ideas (INEX Reality +)",
      desc: "Award received for strategic leadership at the ET edge CEO Summit 2024",
    },
    {
      img: "Award/BirlaNu_inside_02asfdas.07asd.fasddgasd202sddfgf5sdg v2 pfdgsdage (ddddd038df-0were391).webp",
      title: "Impactful CEO - ET Edge CEO Summit 2024",
      desc: "Brand of the Year 2025 - Roofs and Walls Ideas (INEX Reality+) Recognized as the Leading brand in roofs and walls solutions for 2025",
    },
    {
      img: "Award/BirlaNu_inside_02asfdas.07asd.fasddfgdgasd202sdddfgfgdfgf5sdg v2 pfdgsdage (ddddd038df-0were391).webp",
      title: "Legacy Leader in Building Material Solutions - Acheivers Award 2024",
      desc: "Awarded for leadership and sustained presence in the building Material Sector",
    },
    {
      img: "Award/BirlaNu_inside_02asfdas.07asd.fasddfgdgasd202sdddfgfgdfgf5fghsdg v2 pfdgsdage (ddddd038df-0were391).webp",
      title: "Top 50 Great People Managers™ (2025)",
      desc: "Akshat Seth, Managing Director and Chief Executive Officer, BirlaNu, recognised among India’s top 50 people managers (CEOs/MDs/Founders) by the Great Manager Institute®",
    },
    {
      img: "Award/BirlaNu_inside_02asfdas.07asd.fasddfgdgasd202sddfgf5sdg v2 pfdgsdage (ddddd038df-0were391).webp",
      title: "Most Trusted Brands of 2024-2025",
      desc: "Listed Among India’s most trusted brands for the year 2024-2025",
    },
    {
      img: "Award/BirlaNu_inside_02asfdas.07asd.fasddfgdgasd202sddfgdfgf5sdg v2 pfdgsdage (ddddd038df-0were391).webp",
      title: "GreenPro Award 2023-25",
      desc: "Accredited with the GreenPro certification for sustainable product practice",
    },
    {
      img: "Award/BirlaNu_inside_02asfdas.07asd.fasddfgdgasd202sdddfgfgdfgf5fgdfghsdg v2 pfdgsdage (ddddd038df-0were391).webp",
      title: "Great Place to work, India",
      desc: "Recertified from March 2024 to March 2025",
    },
    {
      img: "Award/BirlaNu_inside_02asfdas.07asd.fasddfgdgasd202sdddfgfgdfgf5fgdfghsddfgg v2 pfdgsdage (ddddd038df-0were391).webp",
      title: "Superbrand 2025",
      desc: "Awarded the Superbrand title for 2025 in recognition of brand excellence",
    },
  ]

  return (
    <div className='marginal'>
      <div>
        <h1 className="text-[#646b63] font-semibold md:mb-10 mb-5 md:text-5xl text-3xl">
          AWARDS AND ACHIEVEMENTS
        </h1>
      </div>
      <div className='bg-gradient-to-b from-[#e8e0d2] to-transparent min-h-screen'>
        {Array.from({ length: Math.ceil(awards.length / 3) }).map((_, rowIndex) => (
          <div key={rowIndex} className='flex md:flex-row flex-col gap-10 p-10 items-stretch text-center text-lg'>
            {awards.slice(rowIndex * 3, rowIndex * 3 + 3).map((award, index) => (
              <motion.div
                key={index}
                className='md:w-1/3 flex flex-col h-full justify-between text-center items-center'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className='w-full aspect-[16/15] flex items-center justify-center'>
                  <img src={award.img} alt="" className='md:max-w-[20vw] max-w-[40vw] object-contain' />
                </div>
                <div className='mt-4 px-2'>
                  <h1 className='text-[#4d4d4f] font-semibold'>{award.title}</h1>
                  <h2 className='text-[#4d4d4f]'>{award.desc}</h2>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AwardsAndAchievements
