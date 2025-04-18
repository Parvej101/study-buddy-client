import React from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'What is Study Buddy?',
    answer:
      'Study Buddy is a platform for online group study, where you and your friends can collaborate on assignments, complete tasks, and track each other’s progress.',
  },
  {
    question: 'How do I create an assignment?',
    answer:
      "Simply click on the 'Create Assignment' button, fill in the details such as the title, description, and due date, and then publish it for your friends to join and work on.",
  },
  {
    question: 'Can I work on assignments alone?',
    answer:
      'Yes! You can create and complete assignments on your own or invite friends to collaborate with you.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely! We use top-notch security measures to protect your data and privacy.',
  },
  {
    question: "How can I check my friend's progress on an assignment?",
    answer:
      'You can view your friends\' progress by visiting the assignment page where you can see who has completed which tasks and give them grades.',
  },
];

const FaqSection = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="collapse collapse-plus border-b border-gray-300"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium text-blue-500">
              {faq.question}
            </div>
            <div className="collapse-content text-gray-600 mt-2">
              {faq.answer}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
