import '../../styles/Hero.css';

export default function Hero() {
    return (
        <div className="heroSec">
            <h1 className="brandText">You already learned how to code. Don't forget it when it matters.</h1>
            <p className="subBrandText">
                Built for developers who already know the basics, but don't want to blank in interviews or exams.
            </p>

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
            <p className="trust-text">
                Join the waitlist. No spam, just updates.
            </p>
        </div>
    );
}

