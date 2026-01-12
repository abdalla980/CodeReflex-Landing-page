import '../../styles/TechStacks.css';

const techStacks = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'TypeScript',
    'Flutter',
    'CSS',
    'Tailwind CSS',
    'PHP',
    'Astro',
    'HTML'
];

export default function TechStacks() {
    return (
        <section className="tech-stacks-section">
            <div className="container">
                <h2 className="section-title">Available Tech Stacks</h2>
                <p className="section-subtitle">Choose what you want to revise. More stacks coming soon.</p>
                <div className="tech-stacks-grid">
                    {techStacks.map((stack, index) => (
                        <div key={index} className="tech-stack-tag">{stack}</div>
                    ))}
                </div>
            </div>
        </section>
    );
}

