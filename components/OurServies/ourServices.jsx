"use client";

import styles from "./ourServices.module.css";
import ServiceCard from "./../ServiceCard/serviceCard";

export default function OurService() {
  return (
    <div className="m-5">
      <h3 style={{ 
                  fontSize: "36px", paddingLeft: "0.5rem" }} id="services">Our Services</h3>
      <div className={styles.services}>
        {/* <!-- Bootstrap Modal --> */}
        <ServiceCard
          icon="bi bi-pc-display-horizontal"
          title="3D Printing"
          paragraph="Scan any object with no limitation on Parameters and materials."
          dataTarget="1"
        />
        <ServiceCard
          icon="bi bi-gear"
          title="Rapid Prototyping"
          paragraph="Help you shorten the time needed to bring your product into the market"
          dataTarget="2"
        />
        <ServiceCard
          icon="bi bi-people"
          title="Training"
          paragraph="Reverse engineering, Mold Design , 3D Printer"
          dataTarget="3"
        />
        <ServiceCard
          icon="bi bi-pc-display-horizontal"
          title="R&D Projects"
          paragraph="Rapid Prototyping , Mock-up Crafting completely."
          dataTarget="4"
        />
        <ServiceCard
          icon="bi bi-hr"
          title="3D Scanning"
          paragraph="Rapid Prototyping , Mock-up Crafting completely."
          dataTarget="5"
        />
      </div>
    </div>
  );
}
