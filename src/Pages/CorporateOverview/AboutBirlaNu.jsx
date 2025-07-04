import React from 'react'
import LegacyTimeline from '../../Components/LegacyTimeline'
import BirlaNuKeyStrengths from '../../Components/BirlaNuKeyStrengths'
const AboutBirlaNu = () => {
  return (
    <div className="">
      <div>
        <div>
          <div className="marginal ">
            <div className="flex flex-col md:flex-row items-center md:items-center justify-between md:gap-8">
              <div className="md:w-1/2">
                <h1 className="text-[#646b63] font-semibold md:mb-10 mb-5 md:text-5xl text-3xl">
                  ABOUT BIRLANU
                </h1>
                <p className="text-[#4d4d4f] mb-5 md:text-lg">
                  BirlaNu, part of the multi-billion dollar CKA Birla Group, is a home and building products and
                  services company. We serve homeowners, builders, and designers with sustainable, innovative
                  solutions across pipes, construction chemicals, putty, roofs, walls, and floors, featuring brands
                  like BirlaNu Leakproof Pipes, BirlaNu Construction Chemicals, BirlaNu TruColour Putty,
                  Charminar, BirlaNu Aerocon, and Parador.
                  <br />
                  <br />
                  With 32 manufacturing plants in India, Germany, and Austria, innovation centers in India and
                  Germany, and a market presence in 80+ countries, we adhere to the highest global quality
                  standards, holding certifications such as GreenPro, IGBC, PEFC, Blue Angel, and EPD. Our
                  products are integral to commercial, healthcare, hospitality, residential, and infrastructure
                  projects worldwide
                  <br />
                  <br />
                  Powered by over 5,000 employees and a strong partner ecosystem, BirlaNu is ranked 12th in
                  India’s Best Companies to Work For by Great Place to Work® 2024 and has been recognised
                  with accolades such as Iconic Brand, Asia’s Most Trusted Brand, and Super Brand awards
                </p>
              </div>
              <div className="md:w-1/2 bg-white p-2 md:translate-y-[5.5%] mb-5">
                <img src="About/1.png" alt="About BirlaNu" className="w-full h-auto " />
              </div>
            </div>
          </div>

          <div className="w-full min-h-screen bg-[url('About/bg.png')] bg-cover bg-center bg-no-repeat border-b border-t">
            <div className="marginal">
              <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between md:gap-30 gap-10">
                <div className="md:w-auto flex justify-center">
                  <img src="image.png" alt="Brand Story" className="md:w-100 w-53 h-auto xl:translate-x-[25%] lg:translate-x-[15%]" />
                </div>

                <div className="md:w-1/2">
                  <h1 className="text-[#646b63] font-semibold xl:mt-20 md:mt-15  md:mb-10 mb-5 md:text-5xl text-3xl">BRAND STORY</h1>
                  <p className="text-[#4d4d4f] mb-5 md:text-lg">
                    Since 1946, we've been on a journey of continuous evolution and today, we are proud to
                    announce a new chapter in our legacy: HIL is now BirlaNu.
                    <br />
                    <br />
                    BirlaNu is inspired by the people we serve and driven by a passion for continuous growth.
                    Rooted in connection, creativity and sustainability, we empower homeowners, builders and
                    designers to bring a vision to life, crafting innovative buildings and structures that stand the
                    test of time.
                    <br />
                    <br />
                    As the world evolves, we remain committed to shaping spaces where life unfolds and
                    inspiring beautiful, lasting design with our customers at the heart of everything we do.
                    <br />
                    <br />
                    BirlaNu isn't just a name. It is a reflection of our purpose and promise to be the trusted
                    partner in building the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <LegacyTimeline />
          </div>
          <div>
            <div className="relative w-full min-h-screen">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-top bg-no-repeat"
                style={{
                  backgroundImage: "url('About/2.png')"
                }}
              />
              <div className="absolute inset-0 " />
              <div className="relative z-10 h-full flex flex-col justify-end items-center">
                <div className="marginal">
                  <div className='bg-white/80 p-10'>
                    <div className="mb-8 md:mb-12">
                      <h1 className="text-4xl md:text-5xl font-semibold text-[#646b64] mb-4">
                        VISION
                      </h1>
                      <p className="text-[#646b64] md:text-lg ">
                        To be a leading global provider of innovative, sustainable Home & Building solutions.
                      </p>
                    </div>
                    <div className='mb-8 md:mb-12'>
                      <h1 className="text-4xl md:text-5xl font-semibold text-[#646b64] mb-4">
                        MISSION
                      </h1>
                      <p className="text-[#646b64] md:text-lg">
                        BirlaNu's mission is to empower homeowners, builders and designers to bring their
                        vision to life – a promise to be the trusted partner in building their future.
                        <br />
                        <br />
                        Our passion for creating sustainable and innovative products guides us in shaping
                        spaces where life happens.
                        <br />
                        <br />
                        We inspire timeless, beautiful design with our customers at the core of every
                        decision we make.
                        <br />
                        <br />
                        We are powered by a modern, technology-led, inclusive and safe work culture.
                      </p>
                    </div>
                    <div>
                      <h1 className="text-4xl md:text-5xl font-semibold text-[#646b64] mb-4">
                        VALUES
                      </h1>
                      <p className="text-[#646b64] md:text-lg">
                        Customers at the heart of everything we do.
                        <br />
                        <br />
                        I own, I am responsible.
                        <br />
                        <br />
                        Trust, respect and help each other.
                        <br />
                        <br />
                        Make it simple, act fast.
                        <br />
                        <br />
                        Challenge the status quo, raise the bar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-[url('About/3.png')] bg-cover bg-center w-full min-h-screen">
              <div className='marginal'>
                <div className='bg-black/60 p-10'>
            
                </div>
              </div>
            </div> */}
          </div>
          <div>
            <BirlaNuKeyStrengths/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBirlaNu