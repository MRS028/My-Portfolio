import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, center = true, color = "green" }) => {
  // Color variants
  const colorVariants = {
    green: {
      text: "text-green-600",
      accent: "text-green-500",
      line: "bg-green-500",
    },
    blue: {
      text: "text-blue-600",
      accent: "text-blue-500",
      line: "bg-blue-500",
    },
    purple: {
      text: "text-purple-600",
      accent: "text-purple-500",
      line: "bg-purple-500",
    },
    // Add more color options as needed
  };

  return (
    <motion.div 
      className={`${center ? "text-center" : "text-left"} my-8 mb-12`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className={`text-3xl md:text-5xl font-bold ${colorVariants[color].text} uppercase tracking-tight`}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`${colorVariants[color].accent} mt-3 text-lg italic font-medium`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        className={`w-1/2  md:w-[30%] mx-auto h-1 ${colorVariants[color].line} mt-4 rounded-full`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ originX: center ? 0.5 : 0 }}
      />
    </motion.div>
  );
};

export default SectionTitle;