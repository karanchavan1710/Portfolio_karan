import { motion } from "framer-motion";

const EntryLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        {/* Animated Name */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Karan{" "}
          <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            Chavan
          </span>
        </motion.h1>

        {/* Animated line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-[3px] bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-6 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 mt-6 text-sm tracking-widest"
        >
          FRONTEND DEVELOPER
        </motion.p>
      </div>
    </motion.div>
  );
};

export default EntryLoader;




  {/*
  import { ScatterBoxLoader } from "react-awesome-loaders";
export const ScatterBoxLoaderComponent = () => {
  return (
    <>
      <ScatterBoxLoader
        primaryColor={"#6366F1"}
        background={theme.colors["background"]}
      />
    </>
  );
}
  */}