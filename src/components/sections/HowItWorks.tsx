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
        title: 'Get Better',
        description: 'We focus on what you struggle with. You get stronger.'
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="how-it-works-section">
            <div className="container">
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

