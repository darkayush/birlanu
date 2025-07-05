import React from 'react'

const IntentionalInnovation = () => {
  return (
    <div>
      <div className="relative w-full min-h-screen">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('IntentionalInnovation/image.png')"
          }}
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 h-full flex flex-col justify-end items-center">
          <div className="marginal">
            <div className='bg-white/80 p-10 mt-5 mb-5'>
              <div className="">
                <h1 className="text-4xl md:text-5xl font-semibold text-[#646b64] mb-4">
                  INTENTIONAL INNOVATION
                </h1>
                <p className="text-[#646b64] md:text-lg">
                  Every breakthrough starts with a vision to push beyond limits. We create innovations that
                  turn challenges into opportunities. We don’t just define progress; we make it inevitable.
                  <br />
                  <br />
                  BirlaNu has established advanced Innovation and R&D centres in both India and Germany,
                  facilitating robust product development and research. The cutting-edge infrastructure
                  at its Hyderabad Innovation centre, which includes an in-house pilot plant recognized by
                  the Department of Scientific & Industrial Research (DSIR) of the Government of India, is
                  dedicated to adopting innovative processes and studying industry dynamics to maintain a
                  competitive edge.
                  <br />
                  <br />
                  We invest in innovations related to products, operations and technology. Product innovations
                  are holistic in design and concentrate on meeting customer needs, driving sustainability and
                  also enhancing the differentiators that BirlaNu offers in the marketplace.
                </p>
                <div className='text-[#646b64] md:text-lg mt-5 space-y-5'>
                  <h1><span className='font-semibold'>Parador’s eco-friendly Modular ONE</span>
                    <br />
                    Advantage: Plasticiser-free design flooring, offering the organic beauty of wood, zero
                    compromise on durability or healthy living.
                  </h1>
                  <h1><span className='font-semibold'>TruFiT leakproof pipe technology</span>
                    <br />
                    Advantage: Precise tolerances and zero leakage
                  </h1>
                  <h1><span className='font-semibold'>Ultracool Roofs</span>
                    <br />
                    Advantage: Temperature reduction up to 8 degrees. Better comfort and energy efficiency
                  </h1>
                  <h1>
                    <span className='font-semibold'>Organic Based Stabilizer (OBS)</span>{' '}
                    for UPVC pipes
                    <br />
                    Advantage: Improves pipes heat resistance and durability, safe for both the environment
                    and human health
                  </h1>

                  <h1><span className='font-semibold'>Electrofusion with integrated service saddle</span>
                    <br />
                    Advantage: Higher durability, reliability and efficiency
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

export default IntentionalInnovation