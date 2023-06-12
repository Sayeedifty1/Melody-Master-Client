
import Container from '../Shared/Container';
import { motion } from "framer-motion"

const Offer = () => {
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
    <Container>
      <motion.div
                    className="flex items-center justify-center -mx-4 lg:pl-8"
                    initial="initial"
                    whileInView="animate"
                    variants={PreviewAnimation}
                >
      <div className= "md:block bg-yellow-300 dark:bg-yellow-500 p-6 md:p-12 text-center space-y-6 rounded-lg"  data-aos="fade-up" >
        <h2 className="text-3xl md:text-4xl font-bold text-red-800 dark:text-red-600">
          Opening Offer
        </h2>
        <h1 className="text-3xl md:text-6xl font-bold text-slate-50 dark:text-orange-800">
          SURPRISE GIFT AFTER FIRST ENROLLMENT
        </h1>
        <p className="text-lg md:text-xl text-blue-950 dark:text-white">
          Bring your children to a trial lesson to find out how much they enjoy
          doing music or singing
        </p>
        <div>
          <button className="button-74" role="button">
            Get Started
          </button>
        </div>
      </div>
      </motion.div>
    </Container>

  );
};

export default Offer;
