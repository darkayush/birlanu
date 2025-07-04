import React, { useState, useEffect, useRef } from 'react';

const LegacyTimeline = () => {
    const [visibleSections, setVisibleSections] = useState([]);
    const timelineRef = useRef(null);

    const timelineData = [
        {
            year: "1946 - 1984",
            items: [
                "Setting up of Hyderabad Asbestos Cement Products Ltd.",
                "Launched brand Charminar",
                "Inaugurated Hyderabad Innovation Centre"
            ]
        },
        {
            year: "1985 - 2000",
            items: [
                "Name changed to Hyderabad Asbestos Industries Limited",
                "Listed on BSE and NSE",
                "Pioneered AAC Blocks",
                "DSIR National Innovation Award for Aerocon"
            ]
        },
        {
            year: "2001 - 2020",
            items: [
                "Installed windmills",
                "Name changed to HIL Ltd",
                "Launched PVC Pipes",
                "Started dry-mix production",
                "Acquired Parador",
                "Listed as a Fortune India 500 company",
                "Recognized first time as a Great Place to Work",
                "Good Design Award for Parador"
            ]
        },
        {
            year: "2021 - 2024",
            items: [
                "Started putty production",
                "Launched construction chemicals",
                "Acquired Parador LAC Blocks",
                "Acquired Crestia Polytech PVC pipes",
                "Good Green Design Award for Parador"
            ]
        },
        {
            year: "2025",
            items: [
                "HIL re-branded as BirlaNu",
                "Flooring Innovation Award UK for Parador"
            ]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.dataset.index);
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => [...new Set([...prev, index])]);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -20% 0px'
            }
        );

        const sections = timelineRef.current?.querySelectorAll('[data-index]');
        sections?.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden border-b">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('About/bg2.png')",
                    filter: 'brightness(0.8)'
                }}
            />

            {/* White to Transparent Gradient Overlay */}
            <div className="absolute inset-0 md:bg-gradient-to-b bg-white/70 from-white/90 to-transparent" />

            {/* Content */}
            <div className="relative z-10 py-16 px-4 marginal">
                <div className="mx-auto">
                    {/* Header */}
                    <div className="md:text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-semibold text-[#646b63] mb-4">
                            LEGACY OF CONSISTENT
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#646b63]">
                            VALUE CREATION
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div ref={timelineRef} className="relative">
                        {/* Timeline Line */}
                        <div className="absolute top-12 left-0 w-full h-0.5 bg-gray-300">
                            <div
                                className="h-full bg-[#646b63] transition-all duration-1000 ease-out"
                                style={{
                                    width: `${(visibleSections.length / timelineData.length) * 100}%`
                                }}
                            />
                        </div>

                        {/* Timeline Items */}
                        <div className="flex flex-col lg:flex-row justify-between items-start space-y-12 lg:space-y-0 lg:space-x-8">
                            {timelineData.map((section, index) => (
                                <div
                                    key={index}
                                    data-index={index}
                                    className={`flex-1 transition-all duration-1000 ease-out ${visibleSections.includes(index)
                                            ? 'opacity-100 translate-x-0'
                                            : 'opacity-0 translate-x-12'
                                        }`}
                                    style={{
                                        transitionDelay: `${index * 200}ms`
                                    }}
                                >
                                    {/* Year Badge */}
                                    <div className="relative mb-6 flex md:flex-col flex-row ">
                                        <div className="absolute md:top-10 top-2 md:left-1/2  transform -translate-x-1/2  w-4 h-4 bg-[#a5c3dc] rounded-full border-4 border-white shadow-lg" />
                                        <div className="backdrop-blur-sm rounded-lg md:px-4 md:py-1 translate-x-1/6 border-gray-200">
                                            <h3 className="text-xl font-bold text-[#646b63] text-center md:translate-x-[-20%]">
                                                {section.year}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Timeline Items */}
                                    <div className="space-y-3">
                                        {section.items.map((item, itemIndex) => (
                                            <div
                                                key={itemIndex}
                                                className={`transition-all duration-700 ease-out py-1 ${visibleSections.includes(index)
                                                        ? 'opacity-100 translate-y-0'
                                                        : 'opacity-0 translate-y-8'
                                                    }`}
                                                style={{
                                                    transitionDelay: `${(index * 200) + (itemIndex * 100)}ms`
                                                }}
                                            >
                                                <p className="md:text-lg text-[#4d4d4f] leading-relaxed">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegacyTimeline;