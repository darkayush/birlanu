import React from 'react'

const BuildYourWorld = () => {
  return (
    <div>
      <div className="relative w-full min-h-screen">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('BuildYourWorld/image.png')"
          }}
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 h-full flex flex-col justify-end items-center">
          <div className="marginal">
            <div className='bg-white/80 p-10 md:mt-15 mt-5 mb-5'>
              <div className="">
                <h1 className="text-4xl md:text-5xl font-semibold text-[#646b64] mb-4">
                  BUILD YOUR WORLD
                </h1>
                <p className="text-[#646b64] md:text-lg ">
                  Build Your World inspires individuals to shape their spaces according to their vision. It embodies
                  the power of self-expression, where every space becomes a reflection of personal identity and
                  aspirations. Rooted in creativity, sustainability, and lasting design, it inspires individuals to shape
                  environments that tell their unique stories. Whether it’s a home, a workspace, or an innovative
                  commercial or infrastructural structure, this philosophy empowers people to bring their
                  dreams to life.
                  <br />
                  <br />
                  BirlaNu, through its innovative home and building solutions, promises to make every space
                  become a canvas for imagination. Built for today, designed for tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BuildYourWorld