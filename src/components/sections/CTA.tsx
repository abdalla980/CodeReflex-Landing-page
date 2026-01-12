import '../../styles/CTA.css';

export default function CTA() {
    return (
        <section id="cta" className="cta-section">
            <div className="container">
                <h2 className="cta-title">Ready to stay sharp?</h2>
                <p className="cta-subtitle">Join the waitlist and be among the first to access CodeReflex when we launch.</p>
                <form className="email-form">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Get early access</button>
                </form>
                <p className="trust-text">We'll notify you when we launch. No spam, unsubscribe anytime.</p>
            </div>
        </section>
    );
}

