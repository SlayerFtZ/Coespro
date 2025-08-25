import { motion } from "framer-motion";
import AnimatedCard from "../../components/generals/promo";
import ServicesCarousel from "../components/generals/servicios";
import CardSection from "../components/generals/cardsInfo";
import EquiposSection from "../../components/generals/equipo"
export default function HomeBody() {
  const fadeInFrom = (direction = "up") => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  });

  return (
    <div className="space-y-16">
      {/* Promo */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInFrom("left")}
      >
        <h1 className="mb-6 text-4xl font-bold text-gray-800"></h1>
        <AnimatedCard
          videoSrc={`${import.meta.env.BASE_URL}/video/promo.mp4`}
          title="Promo del mes"
          description={["Precios sujetos a cambios"]}
        />
      </motion.div>

      {/* Carrusel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInFrom("right")}
      >
        <h2 className="mt-12 mb-6 text-3xl font-bold text-gray-800">
        </h2>
        <ServicesCarousel />
      </motion.div>

      {/* Cards */}
        <h2 className="mt-12 mb-6 text-3xl font-bold text-gray-800">
        </h2>
        <CardSection />

        <EquiposSection></EquiposSection>
    </div>
  );
}
