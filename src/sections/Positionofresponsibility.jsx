import { LinearGradient } from "react-text-gradients";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workExperiences } from "../constants/data";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const PositionofresponsibilityCard = ({ Position_of_responsibility }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#32303a", color: "fff" }}
      contentArrowStyle={{ borderRight: "7px solid #32303a" }}
      date={experience.duration}
      dateClassName="text-white"
      iconStyle={{ background: "#32303a", color: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      {/* Position of responsibility */}
      <div>
        <h3 className="text-white text-base font-bold">
          {Positionofresponsibility.position}
        </h3>
        <p className="text-gray-300 text-base font-mono" style={{ margin: 0 }}>
          {Positionofresponsibility.company}
        </p>
      </div>

    </VerticalTimelineElement>
  );
};

const Positionofresponsibility = () => {
  return (
    <>
      <section
        className="w-full flex justify-center mb-20 px-4"
        id="Positionofresponsibility"
      >
        <div className="flex flex-col w-full max-w-7xl items-center justify-start">
          {/* Title */}
          <div className="w-full">
            <motion.h2
              className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
                Position of responsibility
              </LinearGradient>
            </motion.h2>
          </div>

          {/* Timeline */}
          <VerticalTimeline lineColor={"#fff"}>
            {workExperiences.map((experience, index) => (
              <PositionofresponsibilityCard
                key={index}
                experience={experience}
              ></PositionofresponsibilityCard>
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default Positionofresponsibility;

PositionofresponsibilityCard.propTypes = {
  Positionofresponsibility: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    duties: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        link: PropTypes.string,
      })
    ),
  }).isRequired,
};
