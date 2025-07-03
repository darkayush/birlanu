import React, { useState } from 'react';
import { Mail, ChevronDown, ChevronUp, Download } from 'lucide-react';
import { FaLinkedin, FaXTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa6'
import { Link } from 'react-router-dom';

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAccordion = (accordionName) => {
    setOpenAccordion(openAccordion === accordionName ? null : accordionName);
  };

  const statutoryReports = [
    { name: "Board's Report & its Annexures", url: "/reports/boards-report-annexures.pdf" },
    { name: "Management Discussion and Analysis", url: "/reports/management-discussion-analysis.pdf" },
    { name: "Corporate Governance Report", url: "/reports/corporate-governance-report.pdf" },
    { name: "Business Responsibility & Sustainability Report", url: "/reports/business-responsibility-sustainability-report.pdf" }
  ];

  const financialStatements = [
    { name: "Standalone Financial Statements", url: "/reports/standalone-financial-statements.pdf" },
    { name: "Consolidated Financial Statements", url: "/reports/consolidated-financial-statements.pdf" },
    { name: "Independent Auditor's Report", url: "/reports/independent-auditor-report.pdf" },
    { name: "Balance Sheet", url: "/reports/balance-sheet.pdf" },
    { name: "Statement of Profit and Loss", url: "/reports/statement-profit-loss.pdf" },
    { name: "Statement of Cash Flows", url: "/reports/statement-cash-flows.pdf" },
    { name: "Statement of Changes in Equity", url: "/reports/statement-changes-equity.pdf" },
    { name: "Notes to the Financial Statements", url: "/reports/notes-financial-statements.pdf" }
  ];

  return (
    <footer className="w-full bg-neutral-800 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Company Logo and Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <a href="/" className="block">
                <img
                  src="logo.png"
                  alt="BirlaNu Logo"
                  className="w-40 object-contain filter brightness-0 invert"
                />
              </a>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-white">
                BirlaNu Limited
              </h3>
              <p className="text-sm text-neutral-400 max-w-md">
                A leading company in the CK Birla Group, committed to innovation, 
                sustainability, and excellence in all our endeavors.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4 pt-2">
                <a 
                  href="#" 
                  className="p-2 bg-neutral-700 hover:bg-blue-600 rounded-lg transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-neutral-700 hover:bg-gray-900 rounded-lg transition-colors duration-200"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#" 
                  className="p-2 bg-neutral-700 hover:bg-red-600 rounded-lg transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@birlanu.com" 
                  className="p-2 bg-neutral-700 hover:bg-blue-500 rounded-lg transition-colors duration-200"
                  aria-label="Email"
                >
                  <FaEnvelope className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-medium text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li>
                <Link to="/the_ckabirla_group" className="hover:text-white transition-colors duration-200">
                  The CKABirla Group
                </Link>
              </li>
              <li>
                <Link to="/about_birlanu" className="hover:text-white transition-colors duration-200">
                  About BirlaNu
                </Link>
              </li>
              <li>
                <Link to="/chairmans_message" className="hover:text-white transition-colors duration-200">
                  Chairman's Message
                </Link>
              </li>
              <li>
                <Link to="/md_ceos_message" className="hover:text-white transition-colors duration-200">
                  MD & CEO's Message
                </Link>
              </li>
              <li>
                <Link to="/board_of_directors" className="hover:text-white transition-colors duration-200">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-white transition-colors duration-200">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/awards_achievements" className="hover:text-white transition-colors duration-200">
                  Awards & Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Download Documents Accordions */}
          <div className="space-y-4">
            <h4 className="text-base font-medium text-white">Download Documents</h4>
            
            {/* Statutory Reports Accordion */}
            <div className="border border-neutral-600 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion('statutory')}
                className="w-full px-4 py-3 bg-neutral-700 hover:bg-neutral-600 flex items-center justify-between transition-colors duration-200"
              >
                <span className="text-sm font-medium text-white">Statutory Reports</span>
                {openAccordion === 'statutory' ? (
                  <ChevronUp className="w-4 h-4 text-neutral-300" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-300" />
                )}
              </button>
              {openAccordion === 'statutory' && (
                <div className="bg-neutral-750 border-t border-neutral-600">
                  <ul className="py-2">
                    {statutoryReports.map((report, index) => (
                      <li key={index}>
                        <a
                          href={report.url}
                          download
                          className="flex items-center px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-neutral-600 transition-colors duration-200"
                        >
                          <Download className="w-3 h-3 mr-2" />
                          {report.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Financial Statements Accordion */}
            <div className="border border-neutral-600 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion('financial')}
                className="w-full px-4 py-3 bg-neutral-700 hover:bg-neutral-600 flex items-center justify-between transition-colors duration-200"
              >
                <span className="text-sm font-medium text-white">Financial Statements</span>
                {openAccordion === 'financial' ? (
                  <ChevronUp className="w-4 h-4 text-neutral-300" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-300" />
                )}
              </button>
              {openAccordion === 'financial' && (
                <div className="bg-neutral-750 border-t border-neutral-600">
                  <ul className="py-2">
                    {financialStatements.map((statement, index) => (
                      <li key={index}>
                        <a
                          href={statement.url}
                          download
                          className="flex items-center px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-neutral-600 transition-colors duration-200"
                        >
                          <Download className="w-3 h-3 mr-2" />
                          {statement.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-neutral-900 border-t border-neutral-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              © {new Date().getFullYear()} BirlaNu Limited. All rights reserved.
            </div>
            
            {/* Developer Credit */}
            <div className="flex items-center space-x-2 text-sm text-neutral-400">
              <span>Website by</span>
              <a
                href="https://kalolwala.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 hover:text-neutral-300 transition-colors duration-200"
              >
                <img
                  src="/k&a logo.svg"
                  alt="K&A Developer Logo"
                  className="w-4 h-4 object-contain"
                />
                <span>Kalolwala & Associates</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;