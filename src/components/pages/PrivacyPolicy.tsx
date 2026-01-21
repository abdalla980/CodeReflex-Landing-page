import { Link } from 'wouter';
import '../../styles/PolicyPages.css';

export default function PrivacyPolicy() {
    return (
        <div className="policy-page">
            <div className="policy-container">
                <Link href="/" className="back-link">← Back to Home</Link>
                <h1>Privacy Policy</h1>
                <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
                
                <section>
                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect information that you provide directly to us, including when you create an account, subscribe to our service, 
                        or contact us for support. This may include:
                    </p>
                    <ul>
                        <li>Name and email address</li>
                        <li>Payment information (processed securely through third-party providers)</li>
                        <li>Usage data and preferences</li>
                        <li>Device information and IP address</li>
                    </ul>
                </section>

                <section>
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process transactions and send related information</li>
                        <li>Send you technical notices and support messages</li>
                        <li>Respond to your comments and questions</li>
                        <li>Monitor and analyze trends and usage</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Information Sharing and Disclosure</h2>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties. We may share your information only in the 
                        following circumstances:
                    </p>
                    <ul>
                        <li>With service providers who assist us in operating our service</li>
                        <li>To comply with legal obligations</li>
                        <li>To protect our rights and safety</li>
                        <li>With your consent</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational security measures to protect your personal information. However, 
                        no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section>
                    <h2>5. Cookies and Tracking Technologies</h2>
                    <p>
                        We use cookies and similar tracking technologies to track activity on our service and hold certain information. 
                        For more details, please refer to our Cookie Policy.
                    </p>
                </section>

                <section>
                    <h2>6. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access and receive a copy of your personal data</li>
                        <li>Rectify inaccurate personal data</li>
                        <li>Request deletion of your personal data</li>
                        <li>Object to processing of your personal data</li>
                        <li>Request restriction of processing</li>
                        <li>Data portability</li>
                    </ul>
                </section>

                <section>
                    <h2>7. Children's Privacy</h2>
                    <p>
                        Our service is not intended for children under the age of 13. We do not knowingly collect personal information from 
                        children under 13. If you are a parent or guardian and believe your child has provided us with personal information, 
                        please contact us.
                    </p>
                </section>

                <section>
                    <h2>8. Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
                        on this page and updating the "Last updated" date.
                    </p>
                </section>

                <section>
                    <h2>9. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us through our support channels.
                    </p>
                </section>
            </div>
        </div>
    );
}

