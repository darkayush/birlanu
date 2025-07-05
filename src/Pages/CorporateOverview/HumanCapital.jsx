import React from 'react'
import { motion } from "framer-motion";

const HumanCapital = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className='marginal'>
      <div>
        <h1 className="text-[#646b63] font-semibold md:mb-10 mb-5 md:text-5xl text-3xl">
          HUMAN CAPITAL
        </h1>
        <p className="text-[#4d4d4f] mb-5 md:text-lg">
          At BirlaNu, we are built on a strong value system and the legacy of the CKA Birla Group.
          We foster an inclusive, tech-driven workplace that empowers our people.
          <br />
          <br />
          Recognized as a Great Place to Work, we offer career mobility, flexible work options, and
          a focus on well-being. With transparent communication, progressive policies, and talent
          programs like LEGO, LEAP, and LEAD, we invest in our people’s growth and impact.
        </p>
        <img src="HumanCapital/1.png" alt="" />
      </div>
      <div className="mt-5">
        <h2 className="text-[#646b63] font-semibold text-2xl mb-4">Hidden Gems</h2>
        <ul className="space-y-2">
          <li className="relative pl-6 text-[#4d4d4f] md:text-lg">
            <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
            Nurturing high potential talent through cross functional and cross business exposure
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <h2 className="text-[#646b63] font-semibold text-2xl mb-4">Employee connect</h2>
        <ul className="space-y-2">
          <li className="relative pl-6 text-[#4d4d4f] md:text-lg">
            <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
            Parichay: New joinee connects with leadership
          </li>
          <li className="relative pl-6 text-[#4d4d4f] md:text-lg">
            <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
            Regular townhalls: Company and business leve
          </li>
          <li className="relative pl-6 text-[#4d4d4f] md:text-lg">
            <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
            Group induction program
          </li>
        </ul>
      </div>
      <div className='flex md:flex-row flex-col md:gap-10 gap-5'>
        <div className='md:w-1/2'>
          <div className="mt-5">
            <h2 className="text-[#646b63] font-semibold text-2xl mb-4">JOSH events</h2>
            <ul className="space-y-2">
              <li className="relative pl-6 text-[#4d4d4f] md:text-lg">
                <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
                Conducting over 100 events annually to foster
                engagement and collaboration
              </li>
            </ul>
            <div className="aspect-[16/9] w-full overflow-hidden mb-4">
              <img src="HumanCapital/Zero tolerance 1.png" alt="" className="w-full h-full object-cover mt-5" />
            </div>
            <h2 className="text-[#646b63] font-semibold text-2xl mb-4">Nayi Disha</h2>
            <ul className="space-y-2">
              <li className="relative pl-6 text-[#4d4d4f] md:text-lg">
                <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
                Platform to share ideas and suggestions for
                innovation, process improvements and new
                opportunities for the organization
              </li>
            </ul>
          </div>
        </div>
        <div className='md:w-1/2'>
          <div className="mt-5">
            <h2 className="text-[#646b63] font-semibold text-2xl mb-4">Yashotsav</h2>
            <ul className="space-y-2">
              <li className="relative pl-6 text-[#4d4d4f] md:text-lg">
                <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
                Rewards and recognition for outstanding
                contribution by employees
              </li>
            </ul>
            <div className="aspect-[16/9] w-full overflow-hidden mb-5">
              <img src="HumanCapital/Yashotsav 1.png" alt="" className="w-full h-full object-cover mt-5" />
            </div>
            <h2 className="text-[#646b63] font-semibold text-2xl mb-4">Zero tolerance for discrimination
              and haraslgent</h2>
            <ul className="space-y-2">
              <li className="relative pl-6 text-[#4d4d4f] md:text-lg">
                <span className="absolute left-0 top-2 w-2 h-2 bg-[#afb1a7] rounded-full" />
                Enforcing a strict no-discrimination policy
                and maintaining a haraslgent-free
                work environment
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(245,237,227)] mt-10 text-[#3d4340]">
        <div className="mx-auto">
          <h2 className="text-2xl font-semibold mb-10">Building on a strong foundation</h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-y-10 gap-x-8 text-left">
            {[
              { value: "5,000+", label: "No. of employees" },
              {
                value: (
                  <>
                    7 <span className="text-xl font-medium">years</span> 10 <span className="text-xl font-medium">months</span>
                  </>
                ),
                label: "Average tenure of employees",
              },
              {
                value: (
                  <>
                    ~38 <span className="text-xl font-medium">years</span>
                  </>
                ),
                label: "Average age of employees",
              },
              { value: "23,800+", label: "Learning hours for our employees" },
              { value: "94+", label: "GPTW trust Index Score" },
              {
                value: (
                  <>
                    12<sup className="text-2xl align-super">th</sup> <span className="text-xl font-medium">rank</span>
                  </>
                ),
                label: "India’s Best Companies To Work For 2024 by GPTW",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="text-5xl font-bold">{item.value}</p>
                <p className="bg-[#757575] text-white inline-block px-2 mt-2 md:text-lg">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default HumanCapital