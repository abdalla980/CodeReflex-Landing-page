import '../../styles/HowItWorks.css';

const steps = [
    {
        number: '1',
        title: 'Quick Onboarding',
        description: 'Tell us what you\'re revising and your goal. Takes 60 seconds.'
    },
    {
        number: '2',
        title: 'Answer Questions',
        description: 'One question per screen. Dark, minimal UI. No distractions.'
    },
    {
        number: '3',
        title: 'Track Confidence',
        description: 'Rate how confident you were. We learn your weak spots.'
    },
    {
        number: '4',
        title: 'Focus on Weak Spots',
        description: 'Wrong answers + low confidence = higher frequency. We prioritize what you struggle with.'
    },
    {
        number: '5',
        title: 'Smart Repetition',
        description: '1,500+ question variations per stack. No memorization—just genuine understanding that sticks.'
    },
    {
        number: '6',
        title: 'Stay Sharp Daily',
        description: 'Quick 5-10 minute sessions. Personalized reminders help you never forget to practice.'
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="how-it-works-section">
            <div className="container3">
                <h2 className="section-title">How it works</h2>
                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step">
                            <div className="step-number">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

