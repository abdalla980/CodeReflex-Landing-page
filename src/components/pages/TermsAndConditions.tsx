import { Link } from 'wouter';
import './styles/PolicyPages.css';

export default function TermsAndConditions() {
    return (
        <div className="policy-page">
            <div className="policy-container">
                <Link href="/" className="back-link">← Back to Home</Link>
                <h1>Terms and Conditions</h1>
                <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
                
                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using CodeReflex, you accept and agree to be bound by the terms and provision of this agreement. 
                        If you do not agree to abide by the above, please do not use this service.
                    </p>
                </section>

                <section>
                    <h2>2. Use License</h2>
                    <p>
                        Permission is granted to temporarily use CodeReflex for personal, non-commercial transitory viewing only. 
                        This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul>
                        <li>Modify or copy the materials</li>
                        <li>Use the materials for any commercial purpose or for any public display</li>
                        <li>Attempt to reverse engineer any software contained in CodeReflex</li>
                        <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                </section>

                <section>
                    <h2>3. User Accounts</h2>
                    <p>
                        When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                        You are responsible for safeguarding the password and for all activities that occur under your account.
                    </p>
                </section>

                <section>
                    <h2>4. Subscription and Payment</h2>
                    <p>
                        Some features of CodeReflex may require a paid subscription. By subscribing, you agree to pay the fees associated 
                        with your chosen plan. All fees are charged in advance on a monthly or annual basis. Subscriptions automatically renew 
                        unless cancelled before the renewal date.
                    </p>
                </section>

                <section>
                    <h2>5. Refund Policy</h2>
                    <p>
                        Refunds are handled according to our Refund Policy. Please refer to that document for details on eligibility and 
                        the refund process.
                    </p>
                </section>

                <section>
                    <h2>6. Intellectual Property</h2>
                    <p>
                        The service and its original content, features, and functionality are and will remain the exclusive property of 
                        CodeReflex and its licensors. The service is protected by copyright, trademark, and other laws.
                    </p>
                </section>

                <section>
                    <h2>7. Limitation of Liability</h2>
                    <p>
                        In no event shall CodeReflex, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable 
                        for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, 
                        data, use, goodwill, or other intangible losses.
                    </p>
                </section>

                <section>
                    <h2>8. Changes to Terms</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
                        we will provide at least 30 days notice prior to any new terms taking effect.
                    </p>
                </section>

                <section>
                    <h2>9. Contact Information</h2>
                    <p>
                        If you have any questions about these Terms and Conditions, please contact us through our support channels.
                    </p>
                </section>
            </div>
        </div>
    );
}

