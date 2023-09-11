'use client'
import styles from './overViewSection.module.css';

export default function OverViewSection({ data }) {

    const Specifications = {} && data

    return(
        <>
            <div className="px-5 py-5">
                <h2 style={{fontSize: "24px"}}>Overview</h2>
                <h3 style={{fontSize: "20px", paddingTop: "10px"}}>Specifications</h3>
            
                <div className="Specifications">
                {Specifications && Object.entries(Specifications).map(([key, value], index) => (
                    <div className={styles.SpecificationsBox} key={index}>
                    <h4 style={{ fontSize: "20px" }}>{value.name}</h4>
                    {value.values && value.values.length > 0 ? (
                        
                        value.values.map((val, idx) => (
                        
                        <span key={idx}>{val}</span>
                        ))
                    ) : (
                        <span>No values found</span>
                    )}
                    </div>
                ))}
                </div>
            </div>
        </>
    )
};
