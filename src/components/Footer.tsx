import { Link } from 'wouter';
import '../styles/Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-logo"><span className="logo-code">Code</span><span className="logo-reflex">Reflex</span></h3>
                        <p className="footer-description">
                            Built for developers who already know the basics, but don't want to blank in interviews or exams.
                        </p>
                    </div>
                    
                    <div className="footer-section">
                        <h4 className="footer-heading">Product</h4>
                        <ul className="footer-links">
                            <li><a href="#features">Features</a></li>
                            <li><a href="#how-it-works">How it Works</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#cta">Get Early Access</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4 className="footer-heading">Legal</h4>
                        <ul className="footer-links">
                            <li><Link href="/TermsAndConditions">Terms & Conditions</Link></li>
                            <li><Link href="/PrivPolicy">Privacy Policy</Link></li>
                            <li><Link href="/CookiePolicy">Cookie Policy</Link></li>
                            <li><Link href="/refundPolicy">Refund Policy</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4 className="footer-heading">Support</h4>
                        <ul className="footer-links">
                            <li><a href="https://www.linkedin.com/in/abdallaizzeldin/" target={"_blank"} aria-label="LinkedIn">Contact Us</a></li>

                        </ul>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} CodeReflex. All rights reserved.
                    </p>
                    <div className="footer-social">
                        <a href="#" aria-label="Twitter">Instagram</a>
                        <a href="https://www.linkedin.com/in/abdallaizzeldin/" target={"_blank"} aria-label="LinkedIn">LinkedIn</a>
                        <a href="https://github.com/abdalla980/CodeReflex-Landing-pagehttps://github.com/abdalla980/Coco-s-Mobile-application" target={"_blank"} aria-label="GitHub">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

