import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    Menu,
    X,
    ExternalLink,
    Home,
} from "lucide-react";

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
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleAccordion = (index) => {
        setOpenAccordions((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
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

    const renderSubmenuContent = (submenu) =>
        submenu.map((subItem, subIndex) => {
            if (subItem.isHeading) {
                return (
                    <div
                        key={subIndex}
                        className="px-4 py-2 text-xs font-semibold text-[#f48497] uppercase tracking-wider border-b border-[#f48497]/20 bg-gradient-to-r from-[#f48497]/10 to-transparent"
                    >
                        {subItem.label}
                    </div>
                );
            }
            return (
                <button
                    key={subIndex}
                    onClick={() => handleNavigation(getPathFromItem(subItem.label))}
                    className={`w-full px-4 py-3 text-sm text-left transition-all duration-200 mx-2 ${
                        currentPath === getPathFromItem(subItem.label)
                            ? "text-[#f48497] bg-[#f48497]/10"
                            : "text-[#3e4744] hover:bg-[#f48497]/10 hover:text-[#f48497]"
                    }`}
                >
                    {subItem.label}
                </button>
            );
        });

    return (
        <>
            <nav className="fixed top-0 w-full z-50">
                <div className="bg-white/90 backdrop-blur-xl border-b border-[#f48497]/20 shadow-lg">
                    <div className="w-[86%] mx-auto">
                        <div className="flex items-center justify-between h-16">
                            <button
                                onClick={() => handleNavigation("/")}
                                className="flex items-center"
                            >
                                <img src="image.png" alt="" className="md:w-40 w-30" />
                            </button>

                            <div className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
                                {navItems.map((item, index) => (
                                    <div key={index} className="relative">
                                        <button
                                            onClick={() => handleSubmenuToggle(index)}
                                            onMouseEnter={() => setActiveSubmenu(index)}
                                            onMouseLeave={() => setActiveSubmenu(index)}
                                            className={`flex items-center px-3 py-4 text-sm font-medium transition-all duration-200 ${
                                                activeSubmenu === index
                                                    ? "text-[#f48497] border-b-2 border-[#f48497]"
                                                    : "text-[#3e4744] hover:text-[#f48497]"
                                            }`}
                                        >
                                            {item.label}
                                            <ChevronDown
                                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                                    activeSubmenu === index ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>
                                        
                                        <AnimatePresence>
                                            {activeSubmenu === index && (
                                                <motion.div
                                                    onMouseEnter={() => setActiveSubmenu(index)}
                                                    onMouseLeave={() => setActiveSubmenu(null)}
                                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                    transition={{ 
                                                        duration: 0.25,
                                                        ease: "easeOut"
                                                    }}
                                                    className="absolute top-full left-0 mt-0 w-[600px] bg-white/95 backdrop-blur-xl shadow-xl border border-[#f48497]/20 py-4 z-50 overflow-hidden rounded-lg"
                                                >
                                                    {/* Corporate Overview */}
                                                    {item.label === "Corporate Overview" && (
                                                        <motion.div 
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 0.1 }}
                                                            className="grid grid-cols-2 gap-2 px-4"
                                                        >
                                                            {item.submenu.map((subItem, subIndex) => (
                                                                <motion.button
                                                                    key={subIndex}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: subIndex * 0.03 }}
                                                                    onClick={() => handleNavigation(getPathFromItem(subItem.label))}
                                                                    className={`text-left px-4 py-2 text-sm transition-all duration-200 rounded-md ${
                                                                        currentPath === getPathFromItem(subItem.label)
                                                                            ? "text-[#f48497] bg-[#f48497]/10"
                                                                            : "text-[#3e4744] hover:bg-[#f48497]/10 hover:text-[#f48497]"
                                                                    }`}
                                                                >
                                                                    {subItem.label}
                                                                </motion.button>
                                                            ))}
                                                        </motion.div>
                                                    )}

                                                    {/* Financial Statements */}
                                                    {item.label === "Financial Statements" && (
                                                        <motion.div 
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 0.1 }}
                                                            className="px-4 space-y-4"
                                                        >
                                                            {/* Standalone */}
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: 0.15 }}
                                                            >
                                                                <div className="text-xs font-semibold text-[#f48497] uppercase tracking-wider border-b border-[#f48497]/20 mb-2">
                                                                    Standalone
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-2">
                                                                    {item.submenu
                                                                        .filter((_, i) => i >= 1 && i <= 6)
                                                                        .map((subItem, subIndex) => (
                                                                            <motion.button
                                                                                key={subIndex}
                                                                                initial={{ opacity: 0, x: -10 }}
                                                                                animate={{ opacity: 1, x: 0 }}
                                                                                transition={{ delay: 0.2 + subIndex * 0.03 }}
                                                                                onClick={() => handleNavigation(getPathFromItem(subItem.label))}
                                                                                className={`text-left px-4 py-2 text-sm transition-all duration-200 rounded-md ${
                                                                                    currentPath === getPathFromItem(subItem.label)
                                                                                        ? "text-[#f48497] bg-[#f48497]/10"
                                                                                        : "text-[#3e4744] hover:bg-[#f48497]/10 hover:text-[#f48497]"
                                                                                }`}
                                                                            >
                                                                                {subItem.label}
                                                                            </motion.button>
                                                                        ))}
                                                                </div>
                                                            </motion.div>

                                                            {/* Consolidated */}
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: 0.25 }}
                                                            >
                                                                <div className="text-xs font-semibold text-[#f48497] uppercase tracking-wider border-b border-[#f48497]/20 mb-2">
                                                                    Consolidated
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-2">
                                                                    {item.submenu
                                                                        .filter((_, i) => i >= 8)
                                                                        .map((subItem, subIndex) => (
                                                                            <motion.button
                                                                                key={subIndex}
                                                                                initial={{ opacity: 0, x: -10 }}
                                                                                animate={{ opacity: 1, x: 0 }}
                                                                                transition={{ delay: 0.3 + subIndex * 0.03 }}
                                                                                onClick={() => handleNavigation(getPathFromItem(subItem.label))}
                                                                                className={`text-left px-4 py-2 text-sm transition-all duration-200 rounded-md ${
                                                                                    currentPath === getPathFromItem(subItem.label)
                                                                                        ? "text-[#f48497] bg-[#f48497]/10"
                                                                                        : "text-[#3e4744] hover:bg-[#f48497]/10 hover:text-[#f48497]"
                                                                                }`}
                                                                            >
                                                                                {subItem.label}
                                                                            </motion.button>
                                                                        ))}
                                                                </div>
                                                            </motion.div>
                                                        </motion.div>
                                                    )}

                                                    {/* For other menus: default column list */}
                                                    {item.label !== "Corporate Overview" && item.label !== "Financial Statements" && (
                                                        <motion.div 
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 0.1 }}
                                                            className="flex flex-col"
                                                        >
                                                            {item.submenu.map((subItem, subIndex) => {
                                                                if (subItem.isHeading) {
                                                                    return (
                                                                        <motion.div
                                                                            key={subIndex}
                                                                            initial={{ opacity: 0, x: -10 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ delay: subIndex * 0.03 }}
                                                                            className="px-4 py-2 text-xs font-semibold text-[#f48497] uppercase tracking-wider border-b border-[#f48497]/20 bg-gradient-to-r from-[#f48497]/10 to-transparent"
                                                                        >
                                                                            {subItem.label}
                                                                        </motion.div>
                                                                    );
                                                                }
                                                                return (
                                                                    <motion.button
                                                                        key={subIndex}
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: subIndex * 0.03 }}
                                                                        onClick={() => handleNavigation(getPathFromItem(subItem.label))}
                                                                        className={`w-full px-4 py-3 text-sm text-left transition-all duration-200 mx-2 rounded-md ${
                                                                            currentPath === getPathFromItem(subItem.label)
                                                                                ? "text-[#f48497] bg-[#f48497]/10"
                                                                                : "text-[#3e4744] hover:bg-[#f48497]/10 hover:text-[#f48497]"
                                                                        }`}
                                                                    >
                                                                        {subItem.label}
                                                                    </motion.button>
                                                                );
                                                            })}
                                                        </motion.div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>

                            <div className="hidden lg:flex items-center space-x-6">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#f48497] hover:bg-[#f48497]/80 backdrop-blur-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <span className="text-black px-1">Annual Report</span>2024-25
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.ckabirlagroup.com/">
                                    <img src="logo.png" alt="" className="w-45" />
                                </a>
                            </div>

                            <div className="lg:hidden">
                                <button
                                    onClick={() => setMobileOpen(!mobileOpen)}
                                    className="inline-flex items-center justify-center p-2 text-[#3e4744] hover:text-[#f48497] hover:bg-[#f48497]/10 backdrop-blur-sm transition-all duration-200"
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

            {/* Mobile navigation */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden fixed w-full z-30 top-16"
                    >
                        <div className="bg-white/95 backdrop-blur-xl border-b border-[#f48497]/20 shadow-lg">
                            <div className="px-4 py-4 mt-2 space-y-1 max-h-[80vh] overflow-y-auto scrollbar-hide">
                                {/* Mobile Annual Report */}
                                <motion.a
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    href="#"
                                    className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-[#f48497] hover:bg-[#f48497]/80 backdrop-blur-sm transition-all duration-200 mb-4 shadow-lg"
                                >
                                    Annual Report 2024-25
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </motion.a>

                                {/* Mobile Home */}
                                <motion.button
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 }}
                                    onClick={() => handleNavigation('/')}
                                    className={`w-full flex items-center px-4 py-3 text-left transition-all duration-200 ${
                                        currentPath === '/'
                                            ? 'text-[#f48497] bg-[#f48497]/10'
                                            : 'text-[#3e4744] hover:bg-[#f48497]/10 hover:text-[#f48497]'
                                    }`}
                                >
                                    <Home className="mr-3 h-4 w-4" />
                                    <span className="text-sm font-medium">Home</span>
                                </motion.button>

                                {/* Mobile Navigation Items */}
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.05 }}
                                        className="border-b border-[#f48497]/10 last:border-b-0"
                                    >
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex items-center justify-between px-4 py-3 text-left text-[#3e4744] hover:bg-[#f48497]/10 hover:text-[#f48497] transition-all duration-200"
                                        >
                                            <span className="text-sm font-medium">{item.label}</span>
                                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                                                openAccordions.includes(index) ? 'rotate-180' : ''
                                            }`} />
                                        </button>

                                        <AnimatePresence>
                                            {openAccordions.includes(index) && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="bg-[#f48497]/5 backdrop-blur-sm mt-1 mb-2 overflow-hidden"
                                                >
                                                    {renderSubmenuContent(item.submenu)}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-[#ffffff] flex items-center justify-center"
                                >
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.ckabirlagroup.com/">
                                        <img src="logo.png" alt="" className="w-45" />
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
                        onClick={() => setMobileOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}