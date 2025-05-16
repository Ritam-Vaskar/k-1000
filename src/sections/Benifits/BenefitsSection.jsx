import React from "react";
import Card from "../../components/Card/Card";
import styles from "../styles/sections.module.scss";
import { benefits } from "../../../public/data.json";
import {
  BookOpen,
  Star,
  Award,
  Globe,
  Rocket,
  FileText,
  Lightbulb,
  Users,
} from "lucide-react";

// Map icon names from JSON to Lucide components
const iconMap = {
  Rocket: Rocket,
  FileText: FileText,
  BookOpen: BookOpen,
  Star: Star,
  Award: Award,
  Globe: Globe,
  Lightbulb: Lightbulb,
  Users: Users,
};

const BenefitsSection = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Benefits and Perks</h2>
      <div className={styles.cardsGrid}>
        {benefits.map((benefit, index) => {
          const IconComponent = iconMap[benefit.icon] || Lightbulb;
          return (
            <Card
              key={index}
              icon={IconComponent}
              title={benefit.title}
              description={benefit.description}
            />
          );
        })}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
