import { useState } from "react";
import '../styles/Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMenuOpen(false);
        }
    };

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <a className="logo" href="#" onClick={handleLogoClick}>
                    CodeReflex
                </a>
                
                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
                        Features
                    </a>
                    <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>
                        How it Works
                    </a>
                    <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>
                        Pricing
                    </a>
                </nav>

                <div className="header-actions">
                    <button 
                        className="btn-primary" 
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('cta');
                        }}
                    >
                        Get early access
                    </button>
                    
                    <button 
                        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

