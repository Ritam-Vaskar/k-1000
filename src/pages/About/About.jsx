import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./About.module.scss";

const members = [
  {
    name: "Prof. Dr. Saranjit Singh",
    position: "Vice Chancellor",
    image: "/About Page/member-1.jpg",
    description:
      "Prof. (Dr.) Saranjit Singh received his Ph.D. in Production Engineering from BIT Mesra, M.Tech. from IIT Varanasi (formerly IT-BHU), and B.E. in Mechanical Engineering from Savitribai Phule Pune University. With extensive teaching and research experience, his interests span material processing technologies, metal forming of advanced materials like sintered and foam composites, cleaner manufacturing, DFX methodologies, and quality management. He has guided 5 Ph.D. scholars and 25 Master's dissertations and published over 100 research papers in reputed national and international journals and conferences. He has authored three books in the area of material processing and is a Fellow of the Institution of Engineers (India). At KIIT, he has held several senior administrative roles, including Dean (Training & Placements), Director (Industry Engagements), and Dean of the School of Mechanical Engineering. Prior to joining KIIT, he served as Associate Professor in the Department of Production Engineering at BIT Mesra. He is currently a Professor at the School of Mechanical Engineering, KIIT, where he continues to contribute actively to research and academic development.",
  },
  {
    name: "Prof. Dr. Jnyana Ranjan Mohanty",
    position: "Registrar",
    image: "/About Page/member-2.jpg",
    description:
      "Dr. Jnyana Ranjan Mohanty received his Ph.D. degree in Computer Science from Utkal University, Bhubaneswar in the year 2008. He has more than 28 years of teaching experience (UG & PG levels). He joined KIIT Deemed to be University, Bhubaneswar in July 1997 and has served KIIT  in different administrative capacities too (as Associate Dean &amp; Controller of Examinations). Presently, he is the Registrar of KIIT Deemed to be University. He is actively engaged in research work and has a number of Ph.D. scholars under his guidance. He has authored books and has to his credit innumerable publications in reputed International Scopus/ SCI indexed journals and in International Conference proceedings. He has also edited books published by Springer and  IJCA Volumes. He has conducted several conferences and workshops as the organizing chair/ program chair. His research interests include Queuing Theory, Computational Intelligence, and Cloud Computing.",
  },
  {
    name: "Dr. Ajit Kumar Pasayat",
    position: "Faculty Incharge",
    image: "/About Page/member-3.jpg",
    description:
      "Dr. Ajit Kumar Pasayat is an Assistant Professor at the School of Computer Engineering, KIIT Deemed to be University, Bhubaneswar, India. He holds a Ph.D. and M.Tech in Computer Science and Engineering from IIT Kharagpur. His research interests include Machine Learning, Data Analytics, and Artificial Intelligence. Dr. Pasayat has published extensively in reputed international journals and conferences and is actively involved in interdisciplinary research projects. He also serves as a reviewer for leading journals and conferences, contributing to the advancement of computing technologies through both academic research and practical, real-world applications.",
  },
];

const stats = [
  {
    count: "500",
    label: "Students Selected Annually",
  },
  {
    count: "100+",
    label: "Faculty Mentors",
  },
  {
    count: "50+",
    label: "Research Collaborations",
  },
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showExpandedContent, setShowExpandedContent] = useState(false);
  const [coreTeamData, setCoreTeamData] = useState(null);
  const [isLoadingCoreTeam, setIsLoadingCoreTeam] = useState(true);

  // Fetch core team data
  useEffect(() => {
    fetch("/core-team.json")
      .then((response) => response.json())
      .then((data) => {
        setCoreTeamData(data);
        setIsLoadingCoreTeam(false);
      })
      .catch((error) => {
        console.error("Error fetching core team data:", error);
        setIsLoadingCoreTeam(false);
      });
  }, []);

  // Handle card click: show expanded card immediately, fade out others, then show content
  const handleCardClick = (index) => {
    setSelectedMember(index);
    setShowExpandedContent(false);
    setTimeout(() => setShowExpandedContent(true), 400); // show content after others fade out
  };

  // Handle collapse: hide content, then remove expanded card
  const handleCollapse = () => {
    setShowExpandedContent(false);
    setTimeout(() => setSelectedMember(null), 250); // match exit duration
  };

  return (
    <div className={styles.about}>
      <div className={styles.overlay} />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${styles.content} flex w-full bg-[url(/About%20Page/KIIT.jpg)] bg-cover bg-center bg-no-repeat`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start justify-center pt-20 px-8 w-full bg-gradient-to-r from-[#121212] to-[#121212]/60 via-[#121212]/85"
        >
          <motion.h1
            className={`${styles.title} md:ml-4 mt-10`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About <span>KIIT</span>
          </motion.h1>

          <motion.p
            className={`${styles.description} md:mx-4 mt-7 pb-6 text-balance text-left w-full mb-[2rem] max-w-2xl`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Kalinga Institute of Industrial Technology (KIIT), a household name
            in the education sector, has become a sought-after destination in
            India for professional studies. It is admired all over for the
            quality of its academic courses, its community outreach work and as
            a university of compassion and humanitarianism. It has become a case
            study because no other educational institution in India has grown in
            its scope and scale as much as KIIT has in a short span of 25 years.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Founder Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap items-center justify-evenly mt-6 min-[800px]:px-12 mb-10 px-8"
      >
        <motion.div
          className="min-[800px]:w-[50%] flex items-center justify-start z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="/About Page/Founder.png"
            alt="Founder"
            className="w-[100%] max-w-[550px]"
          />
        </motion.div>

        <motion.div
          className="min-[800px]:w-[50%] flex flex-col items-center justify-center z-10 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1
            className={`text-2xl ${styles.title} mb-5 min-[800px]:text-left text-center w-full`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About our <span>Founder</span>
          </motion.h1>

          <motion.p
            className={`${styles.description} min-[800px]:text-left text-center text-balance`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Prof. Dr. Achyuta Samanta's life story reads like a powerful saga of
            grit, determination, and social responsibility. Born and brought up
            in poverty in a remote village in Odisha, he was dealt a cruel blow
            at the tender age of four when he lost his father, after which his
            life became a struggle for food and education for 15 long years.
            However, he persevered, and at the age of 22, joined teaching. At
            25, he embarked on a journey that would change his own life, and the
            lives of thousands of people. With just Rs 5000 in his pocket, he
            started KIIT (Kalinga Institute of Industrial Technology) and KISS
            (Kalinga Institute of Social Sciences) in two rented houses.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Members Section */}
      <motion.h1
        className={`text-2xl ${styles.title} text-center w-full tracking-wide z-10 mt-4 px-4 text-balance`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Notable <span>Board Members</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap items-start justify-evenly mt-11 min-[800px]:px-12 mb-16 px-5 w-full z-10 gap-4"
        style={{ minHeight: selectedMember === null ? undefined : 0 }}
      >
        {selectedMember === null ? (
          members.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center p-4 group cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.22 } }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              layout
              onClick={() => handleCardClick(index)}
            >
              <motion.div
                className="flex flex-col items-center justify-center"
                layoutId={`member-image-container-${index}`}
                layout
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="max-w-[150px] aspect-square rounded-full mb-2 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out group-hover:shadow-[#17d059] group-hover:shadow-md"
                  layoutId={`member-image-${index}`}
                />
              </motion.div>
              <h3 className="text-lg font-bold mt-2">{member.name}</h3>
              <p className="text-md font-semibold">{member.position}</p>
            </motion.div>
          ))
        ) : (
          <motion.div
            key={selectedMember}
            className="w-full flex flex-col md:flex-row items-center justify-evenly bg-white/5 rounded-2xl shadow-xl py-8 min-[800px]:px-12 px-5 cursor-pointer min-[800px]:gap-20 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
            onClick={handleCollapse}
          >
            <div className="flex flex-col items-center mb-1 min-[800px]:mb-0 justify-center">
              <motion.div
                className="flex flex-col items-center mb-6 md:mb-0 justify-center"
                layoutId={`member-image-container-${selectedMember}`}
                layout
              >
                <motion.img
                  src={members[selectedMember].image}
                  alt={members[selectedMember].name}
                  className="max-w-[160px] rounded-full object-cover shadow-lg aspect-square"
                  layoutId={`member-image-${selectedMember}`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 80, damping: 18 }}
                />
                <span className="mt-4 text-balance text-xl font-bold text-white text-center w-full">
                  {members[selectedMember].name}
                </span>
              </motion.div>
            </div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{
                opacity: showExpandedContent ? 1 : 0,
                x: showExpandedContent ? 0 : 40,
              }}
              transition={{
                delay: showExpandedContent ? 0.1 : 0,
                duration: 0.4,
              }}
            >
              <h3 className="min-[800px]:text-4xl text-3xl font-extrabold mb-5 text-white min-[800px]:text-left w-full text-balance">
                About Our{" "}
                <span className="text-[#17d059]">
                  {members[selectedMember].position}
                </span>
              </h3>
              <p className="text-base text-gray-200 w-full min-[800px]:text-left">
                {members[selectedMember].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      {/* Core Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full px-6 md:px-12 mb-16 z-10"
      >
        <motion.h1
          className={`text-2xl ${styles.title} text-center w-full tracking-wide mb-12`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Our <span>Core Team</span>
        </motion.h1>

        {isLoadingCoreTeam ? (
          // Loading skeleton
          <div className="space-y-16">
            {[1, 2, 3, 4].map((level) => (
              <div key={level} className="mb-16">
                <div className="h-8 bg-white/10 rounded-lg mb-8 max-w-xs mx-auto animate-pulse"></div>
                <div
                  className={`grid gap-6 ${
                    level <= 2
                      ? "grid-cols-1 md:grid-cols-2 justify-items-center max-w-4xl mx-auto"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  }`}
                >
                  {Array.from({ length: level <= 2 ? 2 : 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white/5 rounded-xl p-6 w-full max-w-sm animate-pulse"
                    >
                      <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4"></div>
                      <div className="h-4 bg-white/10 rounded mb-2"></div>
                      <div className="h-3 bg-white/10 rounded mb-2 w-3/4 mx-auto"></div>
                      <div className="h-3 bg-white/10 rounded w-1/2 mx-auto"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : coreTeamData ? (
          // Actual content
          coreTeamData.hierarchy.map((level, levelIndex) => (
            <motion.div
              key={levelIndex}
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * levelIndex }}
            >
              <motion.h2
                className={`${styles.levelTitle}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + 0.1 * levelIndex }}
              >
                {level.title}
              </motion.h2>

              <div
                className={`${styles.coreTeamGrid} ${
                  styles[`level${level.level}`]
                }`}
              >
                {level.members.map((member, memberIndex) => (
                  <motion.div
                    key={memberIndex}
                    className={`${styles.coreTeamCard} ${
                      level.level === 1 || level.level === 2
                        ? "w-full max-w-sm"
                        : "w-full"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + 0.1 * memberIndex }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Profile Image */}
                      <img
                        src={member.image.replace(
                          "upload",
                          "upload/w_1024,ar_1:1,c_auto,g_auto,f_auto"
                        )}
                        alt={member.name}
                        className={`${styles.coreTeamAvatar} ${styles.coreTeamImage}`}
                        style={{
                          width: "110px",
                          height: "110px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          backgroundColor: "#2a2a2a",
                        }}
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />

                      {/* Fallback avatar with initials */}
                      <div
                        className={styles.coreTeamAvatar}
                        style={{
                          display: "none",
                          width: "110px",
                          height: "110px",
                          fontSize: "1.8rem",
                        }}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .substring(0, 2)}
                      </div>

                      <h3 className="font-bold text-lg mb-2 text-white">
                        {member.name}
                      </h3>

                      <p className="text-[#17d059] font-bold mb-2">
                        {member.position}
                      </p>

                      {member.branch && (
                        <p className="text-gray-300 text-md font-medium">
                          {member.branch}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))
        ) : (
          // Error state
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Unable to load core team data
            </p>
          </div>
        )}
      </motion.div>

      {/* About K-1000 Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${styles.content} flex w-full bg-[url(/About%20Page/K-1000.jpg)] bg-cover bg-center bg-no-repeat mt-5 md:mt-10 mb-20`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start justify-center w-full bg-gradient-to-t from-[#121212] to-[#121212]/40 via-[#121212]/90"
        >
          <img
            src="/About Page/K-1000.jpg"
            alt="About K-1000"
            className={`w-full opacity-0`}
          />
        </motion.div>
      </motion.div>

      {/* About K-1000 Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center px-6 md:px-20 mb-10 md:mb-20 z-10"
      >
        <motion.h1
          className={`${styles.title} -mt-48 md:-mt-[500px] w-full text-left`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          About <span>K-1000</span>
        </motion.h1>

        <motion.p
          className={`${styles.description} mt-7 text-left w-full mb-[2rem]`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          K-1000 is KIIT's official Research and Development (R&D) organization,
          aimed at supporting 1000 exceptional students in cutting-edge
          research. It focuses on skill development in a competitive environment
          and encourages building projects that solve real-world problems across
          various domains.
        </motion.p>

        <motion.div
          className={`my-7 w-full flex flex-wrap items-center justify-evenly gap-10`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <h3 className="text-4xl font-black text-[#17d059]">
                {stat.count}
              </h3>
              <p className="text-lg font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className={`${styles.description} mt-7 w-full mb-[2rem] text-center`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Students are selected based on academic performance, research
          inclination, and alignment with program goals. The program supports
          students from their first year, ensuring early exposure to
          interdisciplinary research opportunities.
        </motion.p>
      </motion.div>

      {/* Apply Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${styles.content} flex w-full bg-[url(/About%20Page/Apply.jpg)] bg-cover bg-center bg-no-repeat`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center w-full bg-gradient-to-t from-[#0A0A0A] to-[#0A0A0A]/40 -mb-1"
        >
          <a
            href="/apply"
            className="hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="my-14 rounded-3xl overflow-hidden py-4 px-10 backdrop-blur-sm border-white border-1.5 text-[#17d059] font-extrabold text-xl shadow-sm shadow-white"
            >
              Apply Now
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
