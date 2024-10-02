import React from "react"
import Typed from "react-typed" // Import the react-typed component

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                {" "}
                {/* Added flex */}
                <p className="uppercase text-[#00df9a] font-bold p-2">
                    Growing with data analysis
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6">
                    Grow with data.
                </h1>
                <div>
                    <p className="md:text-5xl sm:text-4xl text-xl">
                        Fast, flexible financing for
                    </p>
                    <Typed
                        strings={["BTB", "BTC", "SASS"]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
