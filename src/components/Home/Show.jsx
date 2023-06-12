import { motion } from "framer-motion"

const Show = () => {
    const PreviewAnimation = {
        initial: {
            y: 30,
            opacity: 0,
            scale: 0.9
        },
        animate: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 0.8,
            }
        }
    }
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">

                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-accent sm:text-4xl sm:leading-none">
                            Let us build
                            <br className="hidden md:block" />
                            the next{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                superstar
                            </span>
                        </h2>
                        <p className="text-base text-accent/70 md:text-lg">
                        Bring your children to a trial lesson to find out how much they enjoy doing music or singing
                        </p>
                    </div>
                    <div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-all duration-500 hover:underline underline-offset-4 hover:text-accent"
                        >
                            Learn more
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <motion.div
                    className="flex items-center justify-center -mx-4 lg:pl-8"
                    initial="initial"
                    whileInView="animate"
                    variants={PreviewAnimation}
                >
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://i.ibb.co/gV0Dy7W/long-hair-guitar-guy-singing-low-view.jpg"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://i.ibb.co/LvMT0q7/silhouette-young-caucasian-male-guitarist-isolated-blue-pink-gradient-studio-neon-light.jpg"
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://i.ibb.co/hXHQZ6N/long-hair-artist-singing-stage.jpg"
                            alt=""
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Show;


