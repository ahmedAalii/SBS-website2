import React from 'react';
import img1 from '../../assets/welcome.png'; // WHO ARE WE image
import img2 from '../../assets/mission.png'; // WHAT WE DO image
import img3 from '../../assets/vision.png'; // OUR MISSION icon
import img4 from '../../assets/about2.png'; // OUR VISION icon

const Home = () => {
    return (
        <div className="bg-[#1e1e1e] text-white px-6 md:px-16 py-12 space-y-24">

            {/* WHO ARE WE */}
            <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-yellow-400 text-2xl font-bold">WHO ARE WE</h2>
                    <p className="leading-relaxed text-gray-300">
                    SBS Student Activity is a dynamic organization driven by a passion for growth and learning. We aim to empower students across various universities by connecting them with real-world experiences and the latest professional trends. Through teamwork, commitment, and innovation, we strive to unlock potential and inspire action.
                    </p>
                </div>
                <img src={img1} alt="Who Are We" className="w-full md:w-1/2 rounded-lg" />
            </section>

            {/* WHAT WE DO */}
            <section className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-yellow-400 text-2xl font-bold">WHAT WE DO</h2>
                    <p className="leading-relaxed text-gray-300">
                    At SBS, we design an engaging seasonal journey packed with sessions that enhance both personal and technical skills. We organize simulations, training workshops, and collaborative projects that prepare students to transition smoothly into the workforce and tackle real-world challenges with confidence.
                    </p>
                </div>
                <img src={img4} alt="What We Do" className="w-full md:w-1/2 rounded-lg" />
            </section>
            {/* Our Vision */}
            <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-yellow-400 text-2xl font-bold">OUR VISION</h2>
                    <p className="leading-relaxed text-gray-300">
                    Our vision is to build a future where every student, regardless of background, has access to practical learning and leadership opportunities. We aim to expand our impact by building a strong community that fosters innovation, resilience, and purpose.
                    </p>
                </div>
                <img src={img3} alt="Who Are We" className="w-full md:w-1/2 rounded-lg" />
            </section>

            {/* Our Mission */}
            <section className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-yellow-400 text-2xl font-bold">Our Mission</h2>
                    <p className="leading-relaxed text-gray-300">
                    Our mission is to shape a generation of skilled, confident, and proactive individuals. By promoting knowledge-sharing, career readiness, and continuous improvement, we help students unlock their full potential and take meaningful steps toward their dreams.
                    </p>
                </div>
                <img src={img2} alt="What We Do" className="w-full md:w-1/2 rounded-lg" />
            </section>


            {/* FOLLOW US */}
            <section className="text-center space-y-4">
                <h3 className="text-yellow-400 text-xl font-bold">FOLLOW US</h3>
                <div className="flex justify-center space-x-6 text-2xl">
                    <a href="#"><i className="fab fa-youtube text-white hover:text-yellow-400"></i></a>
                    <a href="#"><i className="fab fa-instagram text-white hover:text-yellow-400"></i></a>
                    <a href="#"><i className="fab fa-facebook text-white hover:text-yellow-400"></i></a>
                    <a href="#"><i className="fab fa-linkedin text-white hover:text-yellow-400"></i></a>
                </div>
            </section>

        </div>
    );
};

export default Home;
