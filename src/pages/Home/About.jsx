

const About = () => {
    return (
        <div>
            <div className="hero my-20 ">
                <div className="hero-content flex-col lg:flex-row-reverse  md:gap-20 shadow-2xl rounded-lg">
                    <img src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2015/02/thumb_720_450_1410_f.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="w-1/2">
                        <h1 className="text-3xl font-bold">Pet Care Comprehensive Support for Your Pet's Well-Being </h1>
                        <p className="py-6 font-lg">Pet Care is a dedicated pet care organization offering a range of services, including veterinary care, grooming, and adoption support. They focus on the health and happiness of pets through expert medical care, nutrition advice, and community education programs. Their mission is to ensure every pet lives a healthy, happy life.</p>
                        <button className="btn btn-success text-white font-bold">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;