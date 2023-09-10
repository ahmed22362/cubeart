'use client'
import styles from './overViewSection.module.css';

export default function OverViewSection() {
    const Specifications = {
        "Geometry": "polygonal_quads/tris",
        "Polygons": "55,114",
        "Vertices": "50,643",
        "Textures": "No",
        "Rigged": "No",
        "Animated": "No",
        "3D Printable Ready": "No",
        "Game Ready (low poly)": "No",
        "UV Mapped": "Yes",
        "Unwrapped UVs": "none",
    }
    return(
        <>
            <div className="px-5">
                <h2 style={{fontSize: "24px"}}>Overview</h2>
                <h3 style={{fontSize: "20px", paddingTop: "10px"}}>Specifications</h3>
            
                <div className="Specifications">
                {Object.entries(Specifications).map(([key, value]) => (
                    <div className={styles.SpecificationsBox} key={key}>
                        <h4 style={{fontSize: "20px"}}>{key}</h4>
                        {value === "No" ? (
                            <span>
                                {value} <div className="bg-danger"></div>
                            </span>
                            ) : value === "Yes" ? (
                            <span>
                                {value} <div className="bg-success"></div>
                            </span>
                            ) : (
                                <span>
                                {value}
                                </span>
                            )}
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
};
