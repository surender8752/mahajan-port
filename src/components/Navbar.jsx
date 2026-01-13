import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a
                        href="#home"
                        className={`text-2xl md:text-3xl lg:text-4xl font-bold transition-all duration-300 hover:scale-110 group ${scrolled ? 'text-indigo-600' : 'text-white'
                            }`}
                    >
                        <span className="inline-block animate-pulse">A</span>
                        <span className="inline-block animate-pulse" style={{ animationDelay: '0.1s' }}>M</span>
                        <span className="text-purple-400 inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${scrolled
                                        ? 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                                        : 'text-white/90 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${scrolled
                                ? 'text-gray-700 hover:bg-gray-100'
                                : 'text-white hover:bg-white/10'
                            }`}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`block h-0.5 w-full transition-all duration-300 ${scrolled ? 'bg-gray-700' : 'bg-white'
                                    } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                            />
                            <span
                                className={`block h-0.5 w-full transition-all duration-300 ${scrolled ? 'bg-gray-700' : 'bg-white'
                                    } ${isOpen ? 'opacity-0' : ''}`}
                            />
                            <span
                                className={`block h-0.5 w-full transition-all duration-300 ${scrolled ? 'bg-gray-700' : 'bg-white'
                                    } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'
                        }`}
                >
                    <div
                        className={`flex flex-col space-y-1 rounded-xl p-2 ${scrolled ? 'bg-gray-50' : 'bg-white/10 backdrop-blur-md'
                            }`}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={handleLinkClick}
                                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${scrolled
                                        ? 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                                        : 'text-white hover:bg-white/20'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
