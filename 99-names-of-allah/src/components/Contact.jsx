import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Contact Us</h2>
                    <p>Have questions or feedback? We'd love to hear from you.</p>
                </motion.div>

                <motion.div
                    className="contact-form-wrapper glass-panel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required className="form-input" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required className="form-input" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required className="form-input"></textarea>
                        </div>
                        <button type="submit" className="submit-btn" onClick={() => alert('Feature coming soon!')}>
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
