import React, { useEffect } from 'react';
import AOS from 'aos';

const FaqSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 100,
            easing: 'ease-in-out',
        });
    }, []);
    return (
        <div className="container py-16 px-4">
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
                {/* FAQ Accordion using Daisy UI with AOS animations */}
                <div className="collapse collapse-plus border-b border-gray-300" data-aos="fade-up">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium text-blue-500">
                        What is Study Buddy?
                    </div>
                    <div className="collapse-content text-gray-600 mt-2">
                        Study Buddy is a platform for online group study, where you and your friends can collaborate on assignments, complete tasks, and track each other’s progress.
                    </div>
                </div>

                <div className="collapse collapse-plus border-b border-gray-300" data-aos="fade-up" data-aos-delay="200">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium text-blue-500">
                        How do I create an assignment?
                    </div>
                    <div className="collapse-content text-gray-600 mt-2">
                        Simply click on the 'Create Assignment' button, fill in the details such as the title, description, and due date, and then publish it for your friends to join and work on.
                    </div>
                </div>

                <div className="collapse collapse-plus border-b border-gray-300" data-aos="fade-up" data-aos-delay="400">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium text-blue-500">
                        Can I work on assignments alone?
                    </div>
                    <div className="collapse-content text-gray-600 mt-2">
                        Yes! You can create and complete assignments on your own or invite friends to collaborate with you.
                    </div>
                </div>

                <div className="collapse collapse-plus border-b border-gray-300" data-aos="fade-up" data-aos-delay="600">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium text-blue-500">
                        Is my data secure?
                    </div>
                    <div className="collapse-content text-gray-600 mt-2">
                        Absolutely! We use top-notch security measures to protect your data and privacy.
                    </div>
                </div>

                <div className="collapse collapse-plus border-b border-gray-300" data-aos="fade-up" data-aos-delay="800">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium text-blue-500">
                        How can I check my friend's progress on an assignment?
                    </div>
                    <div className="collapse-content text-gray-600 mt-2">
                        You can view your friends' progress by visiting the assignment page where you can see who has completed which tasks and give them grades.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;