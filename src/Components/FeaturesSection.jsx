import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturesSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 100,
            easing: 'ease-out',
        });
    }, []);
    return (
        <section className="bg-gray-100 py-16 px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-blue-600 mb-12" data-aos="fade-up">
                    Our Amazing Features
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="text-blue-600 text-3xl mb-4">💡</div>
                        <h3 className="text-xl font-semibold mb-2">Innovative Ideas</h3>
                        <p className="text-gray-600">
                            We bring creative ideas to life with cutting-edge technology and thoughtful design.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="text-blue-600 text-3xl mb-4">🚀</div>
                        <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
                        <p className="text-gray-600">
                            Our platform is optimized for speed, providing an exceptional user experience.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="text-blue-600 text-3xl mb-4">🛡️</div>
                        <h3 className="text-xl font-semibold mb-2">Security First</h3>
                        <p className="text-gray-600">
                            We prioritize security, ensuring your data is protected with top-tier encryption.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="text-blue-600 text-3xl mb-4">📱</div>
                        <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
                        <p className="text-gray-600">
                            Our platform is fully responsive, ensuring a seamless experience across all devices.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <div className="text-blue-600 text-3xl mb-4">⚙️</div>
                        <h3 className="text-xl font-semibold mb-2">Customization</h3>
                        <p className="text-gray-600">
                            Tailor the platform to your needs with extensive customization options.
                        </p>
                    </div>
                    {/* Features 6 */}
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div className="text-blue-600 text-3xl mb-4">🌍</div>
                        <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                        <p className="text-gray-600">
                            Our platform connects users globally, allowing you to collaborate and learn from anywhere.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;