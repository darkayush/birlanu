import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BirlaNuKeyStrengths = () => {
    const [visibleSections, setVisibleSections] = useState([]);
    const sectionsRef = useRef(null);

    const strengthsData = [
        {
            title: "Consistent track record of value delivery",
            stats: [
                { label: "Over 170 years legacy of the CK Birla Group", value: "" },
                { label: "Nearly 80 years of BirlaNu", value: "" }
            ],
            subtitle: "Extensive Portfolio",
            description: "Comprehensive solutions across pipes, construction chemicals, putty, roofs, walls and floors"
        },
        {
            title: "Global market presence",
            stats: [
                { label: "80+ countries", value: "" },
                { label: "30,000+ retail touch points worldwide", value: "" },
                { label: "Network of over 21,000+ channel partners worldwide", value: "" },
                { label: "Over 60% retail penetration in India", value: "" }
            ]
        },
        {
            title: "Manufacturing excellence",
            stats: [
                { label: "32 state of the art manufacturing facilities across India, Germany and Austria", value: "" }
            ]
        },
        {
            title: "Innovation",
            stats: [
                { label: "2 innovation hubs in India & Germany", value: "" }
            ],
            subtitle: "Sustainability",
            description: "60+ countries with green product credentials"
        },
        {
            title: "Leading brands",
            stats: [
                { label: "Charminar: No.1 in Roofs", value: "" },
                { label: "BirlaNu Aerocon: No.1 in AAC Blocks", value: "" },
                { label: "BirlaNu Leakproof Pipes", value: "" },
                { label: "Parador: Renowned global flooring brand", value: "" }
            ]
        },
        {
            title: "People",
            stats: [
                { label: "5,000+ employees", value: "" },
                { label: "30+ nationalities and across 160 locations", value: "" },
                { label: "12th amongst Great Places to Work in India and 14th amongst Great Workplaces in Asia", value: "" }
            ]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.dataset.index);
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -20% 0px',
            }
        );

        const sections = sectionsRef.current?.querySelectorAll('[data-index]');
        sections?.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('About/bg3.webp')",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-green-100/20" />

            {/* Content */}
            <div className="relative marginal">
                <div className="mx-auto">
                    <div className="text-left mb-16">
                        <h1 className="text-4xl text-center md:text-5xl font-semibold text-[#3d4744] mb-4">
                            BIRLANU'S KEY STRENGTHS
                        </h1>
                    </div>

                    <div ref={sectionsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {strengthsData.map((strength, index) => (
                            <motion.div
                                key={index}
                                data-index={index}
                                initial={{ opacity: 0, y: 48 }}
                                animate={visibleSections.includes(index) ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                            >
                                <motion.div
                                    layout
                                    className="bg-white/90 p-6 shadow-md border border-gray-100/50 h-full"
                                >
                                    <h3 className="text-lg font-semibold text-[#231e21] mb-6 leading-tight">
                                        {strength.title}
                                    </h3>

                                    <div className="space-y-4 mb-6">
                                        {strength.stats.map((stat, statIndex) => (
                                            <motion.div
                                                key={statIndex}
                                                initial={{ opacity: 0, x: 32 }}
                                                animate={visibleSections.includes(index) ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.6, delay: index * 0.15 + statIndex * 0.1 }}
                                                
                                            >
                                                <div className="flex items-start space-x-2">
                                                    <p className="text-md text-[#4d4d4f] leading-relaxed">
                                                        {stat.label.includes(':') ? (
                                                            <>
                                                                <span className="text-[#3d4744] font-medium">
                                                                    {stat.label.split(':')[0]}:
                                                                </span>{' '}
                                                                <span className="text-[#3d4744]">
                                                                    {stat.label.split(':')[1]}
                                                                </span>
                                                            </>
                                                        ) : (
                                                            stat.label
                                                        )}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {strength.subtitle && (
                                        <div className="border-t border-gray-200/50 pt-4">
                                            <h4 className="text-base font-semibold text-[#3d4744] mb-2">
                                                {strength.subtitle}
                                            </h4>
                                            {strength.description && (
                                                <p className="text-md text-[#4d4d4f] leading-relaxed">
                                                    {strength.description}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute top-20 right-10 w-32 h-32 bg-green-100/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-100/20 rounded-full blur-2xl" />
        </div>
    );
};

export default BirlaNuKeyStrengths;
