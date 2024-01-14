import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
                    Prince Allwin
                </h1>
                <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
                    I&apos;m a Smart Contract Engineer.
                </h2>
                <p className="text-[#c1c5ce] py-4 max-w-[700px]">
                    My primary focus is on creating secure and efficient Smart
                    Contracts. Prioritizing security is crucial to me.
                    Additionally, I develop full-stack applications to
                    facilitate communication with these Smart Contracts.
                </p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                        My Works
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3 " />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
