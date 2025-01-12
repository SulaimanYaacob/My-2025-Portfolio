import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

//* Use useAnimation() hooks for chain animations
function dummy() {
  return (
    <div>
      <div className="flex h-screen w-full items-center justify-center bg-slate-800">
        <LazyMotion features={domAnimation}>
          <m.div
            animate={{ x: [-100, 100] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl text-yellow-50"
          >
            <p className="font-bold">One Two Three</p>
          </m.div>
        </LazyMotion>
      </div>
      <div className="flex h-screen w-full items-center justify-center bg-slate-800">
        <LazyMotion features={domAnimation}>
          <m.div
            // whileInView={{ scale: [1, 2, 2, 1, 1], opacity: [1, 0.2, 1] }}
            viewport={{ once: true, margin: "0px 0px -800px 0px" }}
            whileInView={{ scale: 0.5, opacity: 1, y: 0 }}
            whileHover={{ scale: 1.5 }}
            initial={{ opacity: 1, x: 0, y: -350 }}
            transition={{ duration: 0.5 }}
            className="text-4xl text-yellow-50"
          >
            <p className="font-bold transition-all">One Two Three</p>
          </m.div>
        </LazyMotion>
      </div>
    </div>
  );
}

export default dummy;
