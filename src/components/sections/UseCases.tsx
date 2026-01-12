import '../../styles/UseCases.css';

const useCases = [
    {
        emoji: '🎓',
        title: 'CS Students',
        description: 'Preparing for exams? Don\'t blank on concepts you learned months ago.'
    },
    {
        emoji: '🧑‍💼',
        title: 'Interview Candidates',
        description: 'Brush up before the big interview. Stay sharp on fundamentals.'
    },
    {
        emoji: '🔁',
        title: 'Stack Switchers',
        description: 'Moving to a new stack? Refresh your memory on the essentials.'
    },
    {
        emoji: '😬',
        title: 'Bootcamp Grads',
        description: 'Afraid of forgetting fundamentals? Keep your skills fresh daily.'
    }
];

export default function UseCases() {
    return (
        <section className="use-cases-section">
            <div className="container">
                <h2 className="section-title">Perfect for</h2>
                <div className="use-cases-grid">
                    {useCases.map((useCase, index) => (
                        <div key={index} className="use-case-card">
                            <div className="use-case-emoji">{useCase.emoji}</div>
                            <h3>{useCase.title}</h3>
                            <p>{useCase.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

