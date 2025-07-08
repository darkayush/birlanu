import React, { useState } from 'react'

const Sustainability = () => {
  const [expandedCard, setExpandedCard] = useState(null)

  const cardsData = [
    {
      id: 1,
      image: "Sustainability/1.webp",
      title: "Live Love Laugh – rural mental health program",
      description: "Outcome: Positively impacted over 6500 individuals through mental well-being initiatives.",
      fullContent: `Now in its second year, our rural mental health program — run in partnership with the Live Love Laugh Foundation — continues to bring meaningful change to thousands of lives across three rural locations in India.

Through a comprehensive approach that includes psychiatric treatment, rehabilitation, and community - wide mental health awareness, the initiative has significantly improved the well-being of its beneficiaries. Many individuals have not only achieved better mental health but also become financially independent and active participants in their communities.`,
      beneficiaries: "6,300+",
      beneficiariesLabel: "Beneficiaries"
    },
    {
      id: 2,
      image: "Sustainability/2.webp",
      title: "Child Survival India: Mobile Medical Unit (MMU)",
      description: "Outcome: Healthcare access for vulnerable populations enabling early detection of diseases.",
      fullContent: `In partnership with Child Survival India, our Mobile Medical Unit continues to bring essential healthcare services to underserved rural communities, improving health outcomes and saving lives. The unit offers free, high-quality outpatient consultations, medication, and regular health awareness sessions — enabling early detection and timely treatment of medical conditions.

This year, the initiative took on added significance through focused community engagement during key health observances such as Nutrition Month, World Heart Day etc. These efforts are making a lasting difference in building healthier, more informed communities across rural India.`,
      beneficiaries: "20,000+",
      beneficiariesLabel: "Beneficiaries"
    },
    {
      id: 3,
      image: "Sustainability/3.webp",
      title: "Education initiatives through public private partnerships",
      description: "Outcome: Increased schooling rates and enhanced digital literacy.",
      fullContent: `Our education initiatives are creating lasting impact by improving school infrastructure and expanding digital access for young learners. Through the construction and renovation of classrooms and facilities, we are fostering safe, inclusive, and secure learning environments — encouraging increased school enrolment and regular attendance.

Recognizing the growing importance of digital literacy, our programs also equip students with foundational knowledge in emerging fields helping bridge the digital divide and preparing them for the future.`,
      beneficiaries: "350+",
      beneficiariesLabel: "Beneficiaries"
    },
    {
      id: 4,
      image: "Sustainability/4.webp",
      title: "Sambhav Foundation – Skill building programs",
      description: "Outcome: Livelihood training through skill-based learning.",
      fullContent: `In partnership with the Sambhav Foundation, we have launched livelihood skill training initiative aimed at empowering plumbers, masons, and painters across multiple cities. The program combines structured classroom instruction with industry-recognized certification, equipping participants with practical, job-ready skills.

By focusing on productivity, efficiency, and technical know-how, the initiative enhances on-the-job performance while opening doors to better employment prospects and higher wages.`,
      beneficiaries: "3,200+",
      beneficiariesLabel: "Beneficiaries"
    }
  ]

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <div>
      <div className="relative w-full min-h-screen">
        <div
          className="absolute inset-0 w-full h-full bg-cover md:bg-center bg-[49.4%] bg-no-repeat"
          style={{
            backgroundImage: "url('Sustainability/image.webp')"
          }}
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 h-full flex flex-col justify-end items-center">
          <div className="marginal">
            <div className='bg-[white]/90 p-10 mt-5 mb-5'>
              <div className="">
                <h1 className="text-4xl md:text-5xl font-semibold text-[#646b64] mb-5">
                  SUSTAINABILITY
                </h1>
                <h2 className='text-[#646b64] md:text-lg font-semibold mb-5'>Sustainability isn't a choice; it's a responsibility we own.</h2>
                <p className="text-[#646b64] md:text-lg">
                  We are committed to sustainable growth by protecting the environment, ensuring employee
                  well-being and upholding the highest safety standards while strictly complying with all
                  occupational health, safety and environmental regulations. We are committed to reducing our
                  footprint, helping consumers minimize theirs and scaling sustainable solutions.
                  <br />
                  <br />
                  By driving circularity, repurposing industrial waste and pioneering innovations like OBS for
                  UPVC pipes, we turn challenges into opportunities. Our zero-discharge plants, expanded
                  solar integration and use of renewable fuels, which now power half our operations, reflect our
                  dedication to a greener future.
                  <br />
                  <br />
                  We have implemented energy-efficient technologies across manufacturing facilities and
                  increased our renewable energy contribution to 46.5%. Emissions have been reduced by nearly
                  2%, accompanied by water savings through optimised rainwater harvesting and recycling
                  systems.
                  <br />
                  <br />
                  Ethically sourced, waste conscious and powered by clean energy, we are shaping a world where
                  responsibility and innovation go hand in hand. We are not just building – we are redefining
                  what is possible in a sustainable future.
                  <br />
                  <br />
                  Key Initiatives:
                  <ul className="space-y-2">
                    <li className="relative pl-6 text-[#4d4d4f]">
                      <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
                      Use of agro-based fuels in manufacturing operations
                    </li>
                    <li className="relative pl-6 text-[#4d4d4f]">
                      <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
                      Substantial increase in renewable power share
                    </li>
                    <li className="relative pl-6 text-[#4d4d4f]">
                      <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
                      Significant increase in investment on energy conservation equipment
                    </li>
                    <li className="relative pl-6 text-[#4d4d4f]">
                      <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
                      Eco-friendly innovations such as Organic Based Stabilisers (OBS) in UPVC pipes and Modular
                      One in floors
                    </li>
                    <li className="relative pl-6 text-[#4d4d4f]">
                      <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
                      Responsible sourcing of wood-based materials from controlled managed forests (FSC,
                      PEFC)
                    </li>
                    <li className="relative pl-6 text-[#4d4d4f]">
                      <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
                      Industry leading Green certifications and credentials such GRIHA, IGBC, GreenPro, EMAS,
                      EcoVadis Sustainability Gold Medal and UN Compact signatory
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full min-h-screen">
        <div
          className="absolute inset-0 w-full h-full md:bg-cover md:bg-center bg-[70%] bg-no-repeat"
          style={{
            backgroundImage: "url('Sustainability/bg2.webp')"
          }}
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 h-full flex flex-col justify-end items-center">
          <div className="marginal">
            <div className='mt-5'>
              <div className="bg-gradient-to-t lg:bg-none from-white/80 to-transparent p-10">
                <h1 className="text-4xl md:text-5xl font-semibold mb-5">
                  COMMUNITY
                </h1>
                <p className='md:text-lg md:max-w-[50%]'>
                  At BirlaNu, our approach to sustainable development goes beyond responsibility — it reflects
                  our commitment to building resilient, self-reliant communities. Our social impact efforts
                  are anchored around the pillars of health and wellness, education and skill building and
                  community development.
                  <br />
                  <br />
                  We collaborate with respected partners such as the Live Love Laugh Foundation (LLL), Child
                  Survival India (CSI), and Sambhav Foundation to amplify the reach and impact of our
                  community efforts.
                  <br />
                  <br />
                  Through these meaningful partnerships, we are challenging stigmas around mental
                  health and enhancing access to healthcare in rural areas, enabling children to remain
                  in school, and fostering self-reliance and livelihood skill adoption amongst underserved
                  communities. Each initiative is a step toward creating inclusive growth and building a
                  healthier, more equitable future for all.
                </p>
              </div>
            </div>
            <div className='flex xl:flex-col md:gap-20 gap-10 mt-5 xl:gap-2'>
              <div className='flex xl:flex-col xl:items-end'>
                <div className='flex flex-col items-center'>
                  <img src="Sustainability/icon1.webp" alt="" className='w-20' />
                  <h1 className='text-4xl font-bold text-[#414550] border-b-2'>~30,000</h1>
                  <h2>Total Beneficiaries</h2>
                </div>
              </div>
              <div className='flex xl:flex-col xl:items-end'>
                <div className='flex flex-col items-center'>
                  <img src="Sustainability/icon2.webp" alt="" className='w-20' />
                  <h1 className='text-4xl font-bold text-[#414550] border-b-2'>3.14 Cr.</h1>
                  <h2>CSR Expenditure</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marginal py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`bg-white transition-all duration-500 ease-in-out ${expandedCard === card.id ? 'md:col-span-2' : ''
                }`}
            >
              <div className="w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className={`w-full object-cover transition-all duration-500 ${expandedCard === card.id ? 'h-64' : 'h-48'
                    }`}
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#646b64] mb-3">
                  {card.title}
                </h3>

                <p className="text-[#4d4d4f] mb-4 text-lg">
                  {card.description}
                </p>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCard === card.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="mb-4">
                    <p className="text-[#4d4d4f] text-lg leading-relaxed whitespace-pre-line">
                      {card.fullContent}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex flex-col items-center">
                      <h4 className="text-3xl font-bold text-[#414550] border-b-2 border-[#414550]">
                        {card.beneficiaries}
                      </h4>
                      <p className="text-[#4d4d4f] text-lg mt-1">
                        {card.beneficiariesLabel}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleCard(card.id)}
                  className="text-[#215e9e] text-lg font-medium hover:underline transition-colors"
                >
                  {expandedCard === card.id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='marginal flex md:flex-row flex-col md:gap-10 gap-5'>
        <div className='md:w-1/2 md:h-[85vh] h-[40vh] overflow-hidden mb-5 bg-white p-2'>
          <img src="Sustainability/governance.webp" alt="" className='w-full h-full object-cover object-top' />
        </div>
        <div className='md:w-1/2'>
          <h1 className="text-[#646b63] font-semibold md:mb-10 mb-5 md:text-5xl text-3xl">
            GOVERNANCE
          </h1>
          <p className="text-[#4d4d4f] mb-5 md:text-lg">
            Governance at BirlaNu is structured to ensure that decisions are made with accountability,
            fairness, and clarity. The approach is built on clear responsibilities and adherence to
            ethical practices across all levels of the organisation. The focus remains on balancing
            business priorities with stakeholder interests, while ensuring compliance with applicable
            regulations and standards. Transparency, integrity, and consistency are the principles that
            guide how we operate and how decisions are evaluated.
            <br />
            <br />
            To support this, a set of defined policies and committee-led oversight mechanilgs are in
            place to manage areas such as risk, ethics, sustainability, and stakeholder relations. These
            frameworks are reviewed regularly to stay aligned with regulatory developments and
            evolving expectations.
            <br />
            <br />
            Details of our governance policies and committee structures are available on our website at
            <br />
            <br />
            <a className='text-[#215e9e]' href="https://birlanu.com/investor">https://birlanu.com/investor</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sustainability