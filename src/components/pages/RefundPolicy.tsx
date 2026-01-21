import { Link } from 'wouter';
import '../../styles/PolicyPages.css';

export default function RefundPolicy() {
    return (
        <div className="policy-page">
            <div className="policy-container">
                <Link href="/" className="back-link">← Back to Home</Link>
                <h1>Refund Policy</h1>
                <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
                
                <section>
                    <h2>1. Refund Eligibility</h2>
                    <p>
                        We offer refunds for paid subscriptions under the following circumstances:
                    </p>
                    <ul>
                        <li>Refund requests made within 14 days of the initial purchase</li>
                        <li>Technical issues that prevent you from using the service</li>
                        <li>Duplicate charges or billing errors</li>
                        <li>Service not as described</li>
                    </ul>
                </section>

                <section>
                    <h2>2. Refund Process</h2>
                    <p>
                        To request a refund, please contact our support team with the following information:
                    </p>
                    <ul>
                        <li>Your account email address</li>
                        <li>Date of purchase</li>
                        <li>Reason for refund request</li>
                        <li>Transaction ID or receipt</li>
                    </ul>
                    <p>
                        We will review your request and respond within 5-7 business days. Approved refunds will be processed to your 
                        original payment method within 10-14 business days.
                    </p>
                </section>

                <section>
                    <h2>3. Non-Refundable Items</h2>
                    <p>The following are not eligible for refunds:</p>
                    <ul>
                        <li>Refund requests made after 14 days from purchase</li>
                        <li>Partially used subscriptions</li>
                        <li>Free trial periods</li>
                        <li>Promotional or discounted purchases (unless otherwise stated)</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Subscription Cancellation</h2>
                    <p>
                        You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing period. 
                        You will continue to have access to paid features until the end of your paid period. No refunds will be provided for 
                        the remaining unused portion of your subscription.
                    </p>
                </section>

                <section>
                    <h2>5. Chargebacks</h2>
                    <p>
                        If you initiate a chargeback or dispute a charge, your account may be suspended or terminated. We encourage you to 
                        contact us first to resolve any billing issues before initiating a chargeback.
                    </p>
                </section>

                <section>
                    <h2>6. Refund Methods</h2>
                    <p>
                        Refunds will be issued to the original payment method used for the purchase. If the original payment method is no 
                        longer available, please contact us to arrange an alternative refund method.
                    </p>
                </section>

                <section>
                    <h2>7. Processing Time</h2>
                    <p>
                        Once your refund is approved, it may take 10-14 business days for the refund to appear in your account, depending on 
                        your payment provider. Please allow additional time for international transactions.
                    </p>
                </section>

                <section>
                    <h2>8. Changes to Refund Policy</h2>
                    <p>
                        We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting 
                        on this page. Continued use of our service after changes constitutes acceptance of the updated policy.
                    </p>
                </section>

                <section>
                    <h2>9. Contact Us</h2>
                    <p>
                        If you have any questions about our Refund Policy or need to request a refund, please contact us through our 
                        support channels.
                    </p>
                </section>
            </div>
        </div>
    );
}

