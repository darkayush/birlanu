import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FinancialHighlights = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const consolidatedData = {
    revenue: [3048, 3220, 3479, 3753, 3615],
    pat: [260, 210, 97, 39, -23],
    ebitda: [439, 422, 248, 154, 88],
    netWorth: [995, 1166, 1244, 1253, 1211],
    roe: [25, 19, 8, 1, -9]
  };

  const standaloneData = {
    revenue: [1570, 1973, 2155, 2231, 2310],
    pat: [188, 186, 130, 103, 91],
    ebitda: [321, 307, 228, 175, 119],
    netWorth: [877, 1030, 1114, 1191, 1268],
    roe: [18, 19, 13, 12, 6]
  };

  const years = ['FY21', 'FY22', 'FY23', 'FY24', 'FY25'];

  const ChartBlock = ({ title, data, max, unit = '', isLast = false }) => (
    <div className={`w-full lg:w-1/5 ${isLast ? '' : 'md:border-r border-[#c9bfae]'} mb-8 md:mb-0`}>
      <h4 className="text-lg md:text-xl text-[#4d4d4f] font-medium mb-3 ml-3">{title}</h4>
      <div className="flex items-end h-40 md:h-48 gap-4.5 sm:gap-3 md:gap-9 lg:gap-2 xl:gap-4 ml-1 mt-10">
        {data.map((value, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${(Math.abs(value) / max) * 150}px` }}
            transition={{ delay: i * 0.2, duration: 1 }}
            className="w-10 md:w-7.5 relative"
          >
            <div
              className={`absolute bottom-full mb-1 text-xs md:text-sm font-medium text-center left-1/2 transform -translate-x-1/2 ${value < 0 ? 'text-red-500' : 'text-[#4d4d4f]'}`}
            >
              {value}
              {unit}
            </div>
            <div
              className={`w-full ${value < 0 ? 'bg-red-400' : i === 4 ? 'bg-[#b7c9d6]' : 'bg-[#c5c6c2]'}`}
              style={{ height: '100%' }}
            ></div>
          </motion.div>
        ))}
      </div>
      <div className="flex gap-8 sm:gap-6 md:gap-8 lg:gap-1 xl:gap-3 text-xs md:text-sm text-[#4d4d4f] mt-2 ml-1">
        {years.map((y, i) => (
          <span key={i}>{y}</span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="marginal">
      <h2 className="text-4xl md:text-5xl font-semibold text-[#646b64] mb-10">FINANCIAL HIGHLIGHTS</h2>
      <div className="">
        <div className="">
          <h3 className="text-[#4d4d4f] font-semibold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">Consolidated</h3>
          <div className="flex flex-col lg:flex-row border-t border-b border-[#c9bfae] py-6 md:py-8">
            <ChartBlock title="Revenue" data={consolidatedData.revenue} max={4000} />
            <ChartBlock title="Profit After Tax (PAT)*" data={consolidatedData.pat} max={300} />
            <ChartBlock title="EBITDA" data={consolidatedData.ebitda} max={500} />
            <ChartBlock title="Net Worth" data={consolidatedData.netWorth} max={1300} />
            <ChartBlock title="ROE" data={consolidatedData.roe} max={30} unit="%" isLast={true} />
          </div>
        </div>

        <div className="">
          <h3 className="text-[#4d4d4f] font-semibold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 mt-10 md:mt-16">Standalone</h3>
          <div className="flex flex-col lg:flex-row border-t border-b border-[#c9bfae] py-6 md:py-8">
            <ChartBlock title="Revenue" data={standaloneData.revenue} max={2500} />
            <ChartBlock title="Profit After Tax (PAT)*" data={standaloneData.pat} max={200} />
            <ChartBlock title="EBITDA" data={standaloneData.ebitda} max={350} />
            <ChartBlock title="Net Worth" data={standaloneData.netWorth} max={1400} />
            <ChartBlock title="ROE" data={standaloneData.roe} max={30} unit="%" isLast={true} />
          </div>
        </div>
      </div>

      <p className="text-[#4d4d4f] text-base md:text-lg mt-8 md:mt-10">* PAT includes non-operating income of ₹82 crore in FY25 and ₹37 crore in FY24 on account of sale of assets</p>
    </div>
  );
};

export default FinancialHighlights;