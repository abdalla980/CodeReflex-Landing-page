import '../../styles/CTA.css';

export default function CTA() {
    return (
        <section id="cta" className="cta-section">
            <div className="container">
                <h2 className="cta-title">Ready to stay sharp?</h2>
                <p className="cta-subtitle">Join the waitlist and be among the first to access CodeReflex when we launch.</p>
                <form 
                    className="email-form" 
                    name="landing-emails" 
                    method="POST" 
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.currentTarget;
                        const formData = new FormData(form);
                        
                        fetch('/', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            body: new URLSearchParams(formData as any).toString()
                        })
                        .then(() => {
                            alert('Thank you! You\'ve been added to the waitlist.');
                            form.reset();
                        })
                        .catch((error) => {
                            alert('Something went wrong. Please try again.');
                            console.error(error);
                        });
                    }}
                >
                    <input type="hidden" name="form-name" value="landing-emails" />
                    <p style={{ display: 'none' }}>
                        <label>
                            Don't fill this out if you're human: <input name="bot-field" />
                        </label>
                    </p>
                    <input type="email" name="email" placeholder="Enter your email" required />
                    <button type="submit">Get early access</button>
                </form>
                <p className="trust-text">We'll notify you when we launch. No spam, unsubscribe anytime.</p>
            </div>
        </section>
    );
}

