import '../../styles/Features.css';

const features = [
    {
        icon: '🎯',
        title: 'Weak-Spot Tracking',
        description: 'We identify what trips you up and focus on those areas. No more wasting time on what you already know.'
    },
    {
        icon: '📚',
        title: 'Multiple Tech Stacks',
        description: 'JavaScript, React, Node.js, Python, TypeScript, and more. Choose up to 2 stacks (free) or unlock all with Pro.'
    },
    {
        icon: '🔄',
        title: 'Smart Repetition',
        description: '1,500+ questions per stack with variations. No memorization—just genuine understanding that sticks.'
    },
    {
        icon: '⚡',
        title: 'Quick Sessions',
        description: '5–10 minute daily sessions. Stay sharp without the overwhelm. Perfect for busy schedules.'
    },
    {
        icon: '💬',
        title: 'Confidence Tracking',
        description: 'Rate your confidence after each answer. We use this to tailor your learning path.'
    },
    {
        icon: '📱',
        title: 'Push Notifications',
        description: 'Personalized reminders and weak-spot alerts. Never forget to practice again.'
    }
];

export default function Features() {
    return (
        <section id="features" className="features-section">
            <div className="container">
                <h2 className="section-title">Built for developers, by developers</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

