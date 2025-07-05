import React from 'react'
import { motion } from 'framer-motion'

const PortfolioOfConsumerOfferings = () => {
  // Animation variants for alternating directions
  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const ProductSection = ({ 
    title, 
    description, 
    productRange, 
    imageSrc, 
    imageAlt, 
    isReversed = false,
    animationVariant 
  }) => (
    <motion.div 
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-10 items-center mb-12 lg:mb-16`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariant}
    >
      {/* Image Section */}
      <div className='w-full lg:w-1/2 flex justify-center items-center'>
        <div className="w-full max-w-md lg:max-w-none">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className='w-full lg:w-1/2 flex flex-col justify-center min-h-[400px]'>
        <h1 className='text-2xl md:text-3xl text-[#646b63] mb-6 lg:mb-10 font-semibold'>
          {title}
        </h1>
        <div className="text-sm md:text-base lg:text-lg text-[#4d4d4f] leading-relaxed mb-6">
          {description}
        </div>
        
        <h2 className='text-lg md:text-xl text-[#4d4d4f] font-semibold mb-5'>
          Product Range
        </h2>
        
        {/* Responsive Product Range */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {productRange.map((product, index) => (
            <div key={index} className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-[#afb1a7] rounded-full mt-2 flex-shrink-0" />
              <span className="text-[#4d4d4f] text-sm md:text-base leading-relaxed">
                {product}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  const products = [
    {
      title: "PIPES",
      description: (
        <>
          At BirlaNu, we provide advanced water management solutions through two trusted brands:
          BirlaNu Leakproof Pipes and Topline. With a diverse range of 20+ products, our offerings
          include CPVC, uPVC, SWR, Silent, UGD, Foamcore, Pressure, Column, Casing, PPR, HDPE,
          MDPE, gas pipes, electrofusion fittings, FHTC fittings, and Water Tanks—all paired with
          expertly engineered fittings and solvents.
          <br /><br />
          Our innovation, TruFiT Technology, is at the heart of our offerings, ensuring precise tolerances
          for easy, leakproof assembly. Setting a new industry standard, BirlaNu delivers peace of mind
          to homeowners and effortless installation for plumbers.
        </>
      ),
      productRange: ["Pipes", "Water Tanks", "Fittings"],
      imageSrc: "Portfolio/Pipes.png",
      imageAlt: "Pipes",
      isReversed: false,
      animationVariant: slideInFromRight
    },
    {
      title: "CONSTRUCTION CHEMICALS",
      description: (
        <>
          BirlaNu Construction Chemicals portfolio is designed to deliver effective solutions
          for modern construction needs. Our wide range of durable tile adhesives and grouts,
          plasters and cleaners are engineered to support versatile applications across residential,
          commercial and large-scale projects.
        </>
      ),
      productRange: [
        "Tile Adhesives",
        "Tile Grouts", 
        "Surface Cleaners",
        "Accessories",
        "Plasters (Block Jointing Mortar, Ready Mix Plasters, Gypsum)",
        
      ],
      imageSrc: "Portfolio/Chemical.png",
      imageAlt: "Construction Chemicals",
      isReversed: true,
      animationVariant: slideInFromLeft
    },
    {
      title: "PUTTY",
      description: (
        <>
          BirlaNu TruColour Putty is the trusted solution for creating stunning, vibrant walls. Engineered with innovative TruColour Technology, this advanced putty ensures your chosen paint shade
          not only shines through brilliantly but also ensures the exact colour you envisioned with
          flawless precision.
          <br /><br />
          Our range of products offers high-performance solutions that deliver smooth, flawless surfaces
          along with features such as better coverage, water repellence and textured designs.
        </>
      ),
      productRange: [
        "Putty",
        "Putty Plus",
        "Waterproof Putty",
        "Texture Putty",
        "Distemper",
        "Coarse Putty",
        "Primers (Universal, Exterior, Interior, Red Oxide and Yellow Metal)",
        "Universal Stainer"
      ],
      imageSrc: "Portfolio/Putty.png",
      imageAlt: "Putty",
      isReversed: false,
      animationVariant: slideInFromRight
    },
    {
      title: "ROOFS",
      description: (
        <>
          A market leader, Charminar BirlaNu offers high-quality, visually appealing, and durable roofing
          solutions designed for modern living and workspaces. Our range combines strength with
          innovation, providing thermal insulation, fire resistance, and superior performance for homes,
          commercial, and industrial spaces.
          <br /><br />
          As a trusted name in the Indian roofing and cladding market, Charminar is known for delivering
          innovative products, including colour coated sheets and eco-conscious options for contemporary
          spaces - Ultracool Roofs for cooler indoors and Fortune Roofs for eco-conscious environment. We
          cater to every season and style with a solution for every need.
        </>
      ),
      productRange: [
        "Fiber Cement Roofs",
        "Fortune Cement Roofs",
        "Ultracool Fiber Cement Roofs",
        "Coloured Steel Roofs",
        "Tools & Accessories"
      ],
      imageSrc: "Portfolio/Roof.png",
      imageAlt: "Roofs",
      isReversed: true,
      animationVariant: slideInFromLeft
    },
    {
      title: "WALLS",
      description: (
        <>
          BirlaNu Aerocon delivers a versatile range of nature positive, beautiful wall solutions that
          combine strength, style and sustainability. Engineered for efficiency and durability, these
          materials enable faster execution, superior thermal and acoustic performance, and a reduced
          environmental footprint compared to traditional methods. From robust structures to refined
          interiors, BirlaNu Aerocon offers solutions that enhance both functionality and aesthetics,
          ensuring smarter and more sustainable building practices that every builder, architect and
          designer can rely on to bring their vision to life with precision and efficiency. With faster
          installation and a lower environmental footprint than traditional materials, we help you build
          better, smarter and greener.
        </>
      ),
      productRange: [
        "AAC Blocks",
        "Panels",
        "Designer Boards and Planks",
        "Panel Jointing Compound"
      ],
      imageSrc: "Portfolio/Walls.png",
      imageAlt: "Walls",
      isReversed: false,
      animationVariant: slideInFromRight
    },
    {
      title: "FLOORS",
      description: (
        <>
          Parador is a leading global interiors brand, born from passion and a desire to create
          outstanding spaces sustainably. Parador specialises in engineered wood, laminate, vinyl
          flooring and our eco-friendly resilient flooring, Modular ONE, for residential, retail, hospitality
          and commercial usage. With a strong emphasis on craftsmanship, innovative design and
          quality, the products are precision manufactured in Germany and Austria, using sustainably
          sourced materials.
        </>
      ),
      productRange: [
        "Engineered Wood",
        "Modular ONE",
        "Vinyl",
        "Laminates"
      ],
      imageSrc: "Portfolio/Floor.png",
      imageAlt: "Floors",
      isReversed: true,
      animationVariant: slideInFromLeft
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen md:bg-[url('Portfolio/bg.png')] bg-cover">
        <div className='marginal'>
          <h1 className="text-[#3d4744] font-semibold md:mb-5 mb-5 md:text-5xl text-3xl">
            PORTFOLIO OF CONSUMER OFFERINGS
          </h1>
          <p className='text-[#646b63] mb-5 md:text-lg'>
            BirlaNu brings to life a world of possibilities, offering a comprehensive range of home and building
            solutions, from pipes and construction chemicals to putty, roofs, walls and floors. Crafted with care
            and precision, our products are designed to endure, evolve and elevate every space.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className='marginal py-12 lg:py-16'>
        {products.map((product, index) => (
          <ProductSection key={index} {...product} />
        ))}
      </div>
    </>
  )
}

export default PortfolioOfConsumerOfferings