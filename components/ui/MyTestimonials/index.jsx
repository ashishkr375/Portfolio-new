import React, { useState } from 'react';
import SectionWrapper from "../../SectionWrapper";

const TestimonialCard = ({ testimonial, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Different gradient styles for each card
    const gradients = [
        "from-blue-500 to-indigo-600",
        "from-pink-500 to-rose-500",
        "from-amber-500 to-orange-600", 
        "from-emerald-500 to-teal-600"
    ];
    
    const currentGradient = gradients[index % gradients.length];
    
    return (
        <div 
            className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${isHovered ? 'transform -translate-y-2' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`h-2 bg-gradient-to-r ${currentGradient}`}></div>
            <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentGradient} flex items-center justify-center text-white font-bold text-xl`}>
                        {testimonial.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                </div>
                
                <div className="relative">
                    <svg 
                        className="absolute top-0 left-0 w-10 h-10 text-gray-200 -mt-3 -ml-3 opacity-70" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                    </svg>
                    <p className="text-gray-700 mt-2 relative z-10 pl-4">
                        {testimonial.quote}
                    </p>
                </div>
                
                <div className="mt-6 flex justify-end">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg 
                                key={i} 
                                className={`w-5 h-5 ${isHovered ? 'animate-pulse' : ''}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const MyTestimonials = () => {
    const testimonials = [
        {
            name: "Mantu Kumar",
            title: "Director at LearnThose Institute",
            quote: "Ashish transformed our traditional coaching institute into a modern digital platform. His implementation of AI-generated timetables and comprehensive content management system exceeded our expectations. The platform has significantly improved our student engagement and administrative efficiency."
        },
        {
            name: "Mobile Phone Repair Specialist Team",
            title: "Owner of Sydney CBD Mobile Repairs",
            quote: "Working with Ashish was a game-changer for our mobile repair business. He developed a seamless online booking system that increased our customer base by 40%. The website perfectly showcases our services and pricing, making it easier for customers to find and book our services."
        },
        {
            name: "Rajesh Kumar",
            title: "CEO at Into Two (Ekah Retail)",
            quote: "Ashish delivered an exceptional e-commerce platform that perfectly aligned with our business needs. His technical expertise and attention to detail helped us create a robust online presence. The platform has significantly improved our sales and customer experience."
        },
        {
            name: "Sarah Williams",
            title: "Tech Lead at EtherSquad",
            quote: "As a collaborator on multiple projects, Ashish consistently demonstrates strong problem-solving abilities and technical expertise. His work on our platforms has been instrumental in delivering high-quality solutions that meet both user needs and business objectives."
        }
    ];

    return (
        <section id="testimonials" className="py-20">
            <div className="pb-0">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-2xl sm:text-center md:mx-auto">
                        <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                            Client Testimonials
                        </h2>
                        <div className="w-12 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mx-auto mt-4"></div>
                        <p className="text-gray-600 mt-4">
                            Here's what people are saying about working with me.
                        </p>
                    </div>
                    
                    <div className="mt-12">
                        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard 
                                    key={index} 
                                    testimonial={testimonial} 
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-16 text-center">
                        <p className="text-gray-600 mb-4">Want to share your experience working with me?</p>
                        <a 
                            href="#contact" 
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                        >
                            Contact Me
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyTestimonials;
