import '../../styles/Hero.css';

export default function Hero() {
    return (
        <div className="heroSec">
            <h1 className="brandText">You already learned how to code. Don't forget it when it matters.</h1>
            <p className="subBrandText">
                Built for developers who already know the basics, but don't want to blank in interviews or exams.
            </p>

            <form className="email-form" name="landing-emails" method="POST" data-netlify="true">
                <input type="email" name={"email"} placeholder="Enter your email" required />
                <button type="submit">Get early access</button>
            </form>
            <p className="trust-text">
                Join the waitlist. No spam, just updates.
            </p>
        </div>
    );
}

