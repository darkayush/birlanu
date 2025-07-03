import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ExternalLink, Home, User, Briefcase, Phone, Settings, Shield, Award, Users, MapPin, Clock, Mail } from "lucide-react";

const navItems = [
    {
        label: "Corporate Overview",
        submenu: [
            { label: "Build Your World" },
            { label: "The CKABirla Group" },
            { label: "About BirlaNu" },
            { label: "Chairman's Message" },
            { label: "MD & CEO'S Message" },
            { label: "Financial Highlights" },
            { label: "Portfolio of Consumer Offerings" },
            { label: "Intentional Innovation" },
            { label: "Technology & Digital" },
            { label: "Sustainability" },
            { label: "Human Capital" },
            { label: "Board of Directors" },
            { label: "Awards & Achievements" },
            { label: "Corporate Information" },
        ],
    },
    {
        label: "Statutory Reports",
        submenu: [
            { label: "Board's Report & its Annexures" },
            { label: "Management Discussion and Analysis" },
            { label: "Corporate Governance Report" },
            { label: "Business Responsibility & Sustainability Report" },
        ],
    },
    {
        label: "Financial Statements",
        submenu: [
            { label: "Standalone", isHeading: true },
            { label: "Independent Auditor's Report" },
            { label: "Balance Sheet" },
            { label: "Statement of Profit and Loss" },
            { label: "Statement of Cash Flows" },
            { label: "Statement of Changes in Equity" },
            { label: "Notes to the Financial Statements" },
            { label: "Consolidated", isHeading: true },
            { label: "Independent Auditor's Report" },
            { label: "Balance Sheet" },
            { label: "Statement of Profit and Loss" },
            { label: "Statement of Cash Flows" },
            { label: "Statement of Changes in Equity" },
            { label: "Notes to the Financial Statements" },
        ],
    },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [openAccordions, setOpenAccordions] = useState([]);
    const dropdownRef = useRef();
    
    // React Router DOM hooks
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const getPathFromItem = (item) =>
        "/" +
        item
            .toLowerCase()
            .replace(/[\s&:]+/g, "_")
            .replace(/[^\w_]/g, "");

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveSubmenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleAccordion = (index) => {
        setOpenAccordions(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const handleSubmenuToggle = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setMobileOpen(false);
        setActiveSubmenu(null);
    };

    const renderSubmenuContent = (submenu) => {
        return submenu.map((subItem, subIndex) => {
            if (subItem.isHeading) {
                return (
                    <div key={subIndex} className="px-4 py-2 text-xs font-semibold text-[#f48497] uppercase tracking-wider border-b border-[#f48497]/20 bg-gradient-to-r from-[#f48497]/10 to-transparent">
                        {subItem.label}
                    </div>
                );
            }

            return (
                <button
                    key={subIndex}
                    onClick={() => handleNavigation(getPathFromItem(subItem.label))}
                    className={`w-full px-4 py-3 text-sm text-left transition-all duration-200 rounded-lg mx-2 ${
                        currentPath === getPathFromItem(subItem.label)
                            ? 'text-[#f48497] bg-[#f48497]/10'
                            : 'text-[#3e4744] hover:bg-[#f48497]/10 hover:text-[#f48497]'
                    }`}
                >
                    {subItem.label}
                </button>
            );
        });
    };

    return (
        <>
            {/* Main Navigation Header */}
            <nav className="fixed top-0 w-full z-50">
                <div className="bg-white/90 backdrop-blur-xl border-b border-[#f48497]/20 shadow-lg">
                    <div className="marginal mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <button
                                    onClick={() => handleNavigation('/')}
                                    className="flex items-center group"
                                >
                                    <div className="transition-all duration-300">
                                        <img src="logo.png" alt="" className="w-40" />
                                    </div>
                                </button>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
                                {/* Home Button */}
                                <button
                                    onClick={() => handleNavigation('/')}
                                    className={`flex items-center px-3 py-4 text-sm font-medium transition-all duration-200 ${currentPath === <Home/>
                                        ? 'text-[#f48497] border-b-2 border-[#f48497]'
                                        : 'text-[#3e4744] hover:text-[#f48497]'
                                        }`}
                                >
                                    Home
                                </button>

                                {navItems.map((item, index) => (
                                    <div key={index} className="relative">
                                        <button
                                            onClick={() => handleSubmenuToggle(index)}
                                            className={`flex items-center px-3 py-4 text-sm font-medium transition-all duration-200 ${activeSubmenu === index
                                                ? 'text-[#f48497] border-b-2 border-[#f48497]'
                                                : 'text-[#3e4744] hover:text-[#f48497]'
                                                }`}
                                        >
                                            {item.label}
                                            <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeSubmenu === index ? 'rotate-180' : ''
                                                }`} />
                                        </button>

                                        {/* Dropdown Menu - Fixed scrolling */}
                                        {activeSubmenu === index && (
                                            <div className="absolute top-full left-0 mt-0 w-80 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-[#f48497]/20 py-2 z-50 max-h-96 overflow-y-auto scrollbar-hide">
                                                {renderSubmenuContent(item.submenu)}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Right Section - Desktop */}
                            <div className="hidden lg:flex items-center space-x-6">
                                {/* Annual Report */}
                                <a
                                    target="_blank"
                                    href="#"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#f48497] hover:bg-[#f48497]/80 rounded-lg backdrop-blur-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <span className="text-black px-1">Annual Report</span>2024-25
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </a>

                                {/* Social Icons */}
                                <div className="flex justify-center space-x-4">
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-[#3e4744]/10 flex items-center justify-center text-[#3e4744] hover:bg-[#f48497] hover:text-white transition-all duration-200 hover:scale-110"
                                    >
                                        <Users className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-[#3e4744]/10 flex items-center justify-center text-[#3e4744] hover:bg-[#f48497] hover:text-white transition-all duration-200 hover:scale-110"
                                    >
                                        <Award className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-[#3e4744]/10 flex items-center justify-center text-[#3e4744] hover:bg-[#f48497] hover:text-white transition-all duration-200 hover:scale-110"
                                    >
                                        <Mail className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <div className="lg:hidden">
                                <button
                                    onClick={() => setMobileOpen(!mobileOpen)}
                                    className="inline-flex items-center justify-center p-2 rounded-lg text-[#3e4744] hover:text-[#f48497] hover:bg-[#f48497]/10 backdrop-blur-sm transition-all duration-200"
                                >
                                    {mobileOpen ? (
                                        <X className="h-6 w-6" />
                                    ) : (
                                        <Menu className="h-6 w-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className={`lg:hidden fixed w-full z-30 top-16 transition-all duration-300 ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                <div className="bg-white/95 backdrop-blur-xl border-b border-[#f48497]/20 shadow-lg">
                    <div className="px-4 py-4 mt-2 space-y-1 max-h-[80vh] overflow-y-auto scrollbar-hide">
                        {/* Mobile Annual Report */}
                        <a
                            href="#"
                            className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-[#f48497] hover:bg-[#f48497]/80 rounded-lg backdrop-blur-sm transition-all duration-200 mb-4 shadow-lg"
                        >
                            Annual Report 2024-25
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </a>

                        {/* Mobile Home */}
                        <button
                            onClick={() => handleNavigation('/')}
                            className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 ${currentPath === '/'
                                ? 'text-[#f48497] bg-[#f48497]/10'
                                : 'text-[#3e4744] hover:bg-[#f48497]/10 hover:text-[#f48497]'
                                }`}
                        >
                            <Home className="mr-3 h-4 w-4" />
                            <span className="text-sm font-medium">Home</span>
                        </button>

                        {/* Mobile Navigation Items */}
                        {navItems.map((item, index) => (
                            <div key={index} className="border-b border-[#f48497]/10 last:border-b-0">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between px-4 py-3 text-left text-[#3e4744] hover:bg-[#f48497]/10 hover:text-[#f48497] rounded-lg transition-all duration-200"
                                >
                                    <span className="text-sm font-medium">{item.label}</span>
                                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openAccordions.includes(index) ? 'rotate-180' : ''
                                        }`} />
                                </button>

                                {openAccordions.includes(index) && (
                                    <div className="bg-[#f48497]/5 backdrop-blur-sm rounded-lg mt-1 mb-2 scrollbar-hide">
                                        {renderSubmenuContent(item.submenu)}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Mobile Social Links */}
                        <div className="pt-4 mt-4 border-t border-[#f48497]/20">
                            <div className="flex justify-center space-x-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#3e4744]/10 flex items-center justify-center text-[#3e4744] hover:bg-[#f48497] hover:text-white transition-all duration-200 hover:scale-110"
                                >
                                    <Users className="h-5 w-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#3e4744]/10 flex items-center justify-center text-[#3e4744] hover:bg-[#f48497] hover:text-white transition-all duration-200 hover:scale-110"
                                >
                                    <Award className="h-5 w-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#3e4744]/10 flex items-center justify-center text-[#3e4744] hover:bg-[#f48497] hover:text-white transition-all duration-200 hover:scale-110"
                                >
                                    <Mail className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
                    onClick={() => setMobileOpen(false)}
                />
            )}
        </>
    );
}