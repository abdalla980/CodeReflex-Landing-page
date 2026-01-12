import '../../styles/Pricing.css';

const pricingPlans = [
    {
        name: 'Free',
        price: null,
        priceNote: null,
        features: [
            '✓ 5 questions / day',
            '✓ 2 tech stacks',
            '✓ Core concepts'
        ],
        featured: false
    },
    {
        name: 'Pro',
        price: '$11',
        priceNote: 'One-time payment',
        features: [
            '✓ 1,000 questions total',
            '✓ 2 tech stacks',
            '✓ Weak-spot focus',
            '✓ Interview mode'
        ],
        featured: true
    },
    {
        name: 'Pro+',
        price: '$19',
        priceNote: 'per month',
        features: [
            '✓ Unlimited questions',
            '✓ All tech stacks',
            '✓ Exam mode',
            '✓ Smart repetition',
            '✓ Priority new stacks'
        ],
        featured: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="pricing-preview-section">
            <div className="container">
                <h2 className="section-title">Simple, honest pricing</h2>
                <div className="pricing-grid">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                            {plan.featured && <div className="pricing-badge">Popular</div>}
                            <h3>{plan.name}</h3>
                            {plan.price && <div className="pricing-price">{plan.price}</div>}
                            {plan.priceNote && <div className="pricing-price-note">{plan.priceNote}</div>}
                            <div className="pricing-features">
                                {plan.features.map((feature, featureIndex) => (
                                    <p key={featureIndex}>{feature}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="pricing-note">* Pricing details subject to change. Early access users get special pricing.</p>
            </div>
        </section>
    );
}

