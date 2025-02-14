import { motion } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const CareerTips = () => {
  const tips = [
    "Evaluate yourself to choose the right career path.",
    "Take specific training and courses to acquire necessary skills.",
    "Regularly update your CV and build a professional network.",
    "Stay confident while preparing for interviews.",
    "Gain hands-on experience through internships or freelance projects.",
    "Keep yourself updated with industry trends and new technologies.",
    "Develop soft skills like communication, teamwork, and problem-solving.",
    "Set clear short-term and long-term career goals.",
    "Seek mentorship from professionals in your desired field.",
    "Maintain a strong online presence through LinkedIn and personal projects.",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white p-6 my-12 shadow-xl rounded-lg border border-gray-200"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-start underline mb-4"
      >
        Career Tips
      </motion.h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        {tips.map((tip, index) => (
          <motion.li
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={listVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            {tip}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default CareerTips;
