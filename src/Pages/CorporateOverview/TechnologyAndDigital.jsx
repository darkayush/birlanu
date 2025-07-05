import React from 'react'

const TechnologyAndDigital = () => {
  return (
    <div>
      <div className="relative w-full min-h-screen">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('Technology/image.png')"
          }}
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 h-full flex flex-col justify-end items-center">
          <div className="marginal">
            <div className='bg-[white]/80 p-10  mt-5 mb-5'>
              <div className="">
                <h1 className="text-4xl md:text-5xl font-semibold text-[#646b64] mb-4">
                  TECHNOLOGY & DIGITAL
                </h1>
                <p className="text-[#646b64] md:text-lg">
                  In today’s rapidly evolving business environment, technology and digitization are no longer
                  optional, they are fundamental to operational resilience and competitive advantage. Across
                  both manufacturing and sales, these advancements are reshaping the way we operate, deliver
                  value, and engage with customers.
                  <br />
                  <br />
                  At BirlaNu we are adopting comprehensive and advanced digital technologies across our
                  business operations, from sales to marketing, manufacturing and supply chain to improve
                  process efficiencies and drive growth. We are not only upgrading our core enterprise and data
                  systems, but also building a suite of digital platforms for stronger customer engagement, data
                  analytics and efficient operations.
                  <br />
                  <br />
                  On the manufacturing front, integration of Industry 4.0 technologies such as IoT, automation,
                  AI, and digital twins have enabled us to improve efficiency, enhance quality, and optimize
                  resource utilization. Similarly in sales, digital transformation is helping us with deeper customer
                  engagement and faster decision-making. With advanced digital sales platforms, data analytics,
                  and AI-driven tools, we are able to personalize customer outreach and respond swiftly to
                  changing market dynamics.
                </p>
                <div className='text-[#646b64] md:text-lg mt-5 space-y-5'>
                  <h1><span className='font-semibold'>Modernized our ERP with migration to SAP S/4 HANA</span>
                    <br />
                    Enabling real-time insights, streamlining operations, while laying the foundation for a digitalled business process transformation
                  </h1>
                  <h1><span className='font-semibold'>Connected digital shop floors </span>
                    <br />
                    Leveraging real-time IoT sensor data to drive smarter operations, minimize downtime, and
                    enable predictive maintenance
                  </h1>
                  <h1><span className='font-semibold'>Interconnected data lake</span>
                    <br />
                    Driving actionable insights across the organization
                  </h1>
                  <h1><span className='font-semibold'>Best in class loyalty platform for influencers, distributors and retailers</span>
                    <br />
                    Delivering customer delight, higher partner engagement & share of customer wallet
                  </h1>
                  <h1><span className='font-semibold'>Digital sales platforms - CRM and SFA
                  </span>
                    <br />
                    Stronger customer engagement and real-time sales tracking delivering higher field
                    force productivity
                  </h1>
                  <h1><span className='font-semibold'>Robust security platform</span>
                    <br />
                    Managing security of our platforms, applications and data to contain evolving data and
                    enterprise cyber risks
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyAndDigital