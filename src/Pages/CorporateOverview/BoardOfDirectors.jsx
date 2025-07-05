import { motion } from "framer-motion";

const BoardOfDirectors = () => {
  const people = [
    {
      name: "CK Birla",
      role: "Chairman",
      image: "BOD/CK B.png",
      icons: ["/icons/nomination.svg", "/icons/stakeholder.svg"],
    },
    {
      name: "Amita Birla",
      role: "Non-executive Director",
      image: "BOD/Amita.png",
      icons: ["/icons/csr.svg"],
    },
    {
      name: "Akshat Seth",
      role: "Managing Director & Chief Executive Officer",
      image: "BOD/Akshat.png",
      icons: ["/icons/stakeholder.svg", "/icons/csr.svg", "/icons/risk.svg"],
    },
    {
      name: "Desh Deepak Khetrapal",
      role: "Non-executive Director",
      image: "BOD/Deepak Khetripal.png",
      icons: ["/icons/audit.svg", "/icons/csr.svg", "/icons/risk.svg"],
    },
    {
      name: "Dr. Arvind Sahay",
      role: "Independent Director",
      image: "BOD/Prof. Arvind Sahay - cutout.png",
      icons: ["/icons/audit.svg", "/icons/nomination.svg", "/icons/risk.svg"],
    },
    {
      name: "Sunil Bhumralkar",
      role: "Independent Director",
      image: "BOD/Sunil.png",
      icons: ["/icons/audit.svg", "/icons/stakeholder.svg", "/icons/risk.svg", "/icons/csr.svg"],
    },
    {
      name: "Nidhi Killawala",
      role: "Independent Director",
      image: "BOD/Nidhi.png",
      icons: ["/icons/risk.svg", "/icons/stakeholder.svg", "/icons/nomination.svg", "/icons/audit.svg"],
    },
    {
      name: "Prof. Janat Shah",
      role: "Independent Director",
      image: "BOD/janat.png",
      icons: ["/icons/audit.svg", "/icons/risk.svg"],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='marginal'>
      <div>
        <h1 className="text-[#646b63] font-semibold md:mb-10 mb-5 md:text-5xl text-3xl">
          BOARD OF DIRECTORS
        </h1>
      </div>
      <div className="bg-[#f5ede3] text-[#3d4340]">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {people.map((person, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-square overflow-hidden rounded-md">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top bg-[#e7dfd1]" />
              </div>
              <div className="mt-3">
                <p className="font-semibold text-xl">{person.name}</p>
                <p className="text-md text-gray-600">{person.role}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {person.icons.map((icon, i) => (
                    <img src={icon} key={i} alt="icon" className="w-6 h-6" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-md text-[#3d4340]">
          <div className="flex items-center justify-center gap-2">
            <img src="BOD\Nomination.png" className="w-15 h-15" alt="Nomination" />
            Nomination and Remuneration cum Compensation committee
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src="/icons/stakeholder.svg" className="w-15 h-15" alt="Stakeholders" />
            Stakeholders’ Relationship committee
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src="BOD\Corporate.png" className="w-15 h-15" alt="CSR" />
            Corporate Social Responsibility committee
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src="/icons/risk.svg" className="w-15 h-15" alt="Risk" />
            Risk Management committee
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src="/icons/audit.svg" className="w-15 h-15" alt="Audit" />
            Audit committee
          </div>
        </div>

        <p className="text-md text-center mt-4">
          To know more about our Board of Directors, please visit our website<br />
          <a href="https://birlaanu.com/investor/board-of-directors" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">
            https://birlaanu.com/investor/board-of-directors
          </a>
        </p>
      </div>
    </div>
  )
}

export default BoardOfDirectors