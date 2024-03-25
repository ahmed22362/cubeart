import DetailesSlider from "@/components/DetailesSlider/DetailesSlider";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9">
            <div className={`image`}>
              <DetailesSlider />

              <div className={`caption  detailes`}>
                <h3>Project Name : Cat Decor</h3>
                <div className="description mt-3">
                  <h4>Description</h4>
                  <p className={``}>
                    Lorem ipsum dolor sit amet consectetur. Vel sit pretium id
                    aliquam. Malesuada donec donec purus consectetur neque erat
                    neque viverra massa. Nibh dolor tellus in nunc aliquam
                    egestas morbi aliquam vel. Orci suscipit aliquet sed pretium
                    viverra est .Lorem ipsum dolor sit amet consectetur. Vel sit
                    pretium id aliquam. Malesuada donec donec purus consectetur
                    neque erat neque viverra massa. Nibh dolor tellus in nunc
                    aliquam egestas morbi aliquam vel. Orci suscipit aliquet sed
                    pretium viverra est Lorem ipsum dolor sit amet consectetur.
                    Vel sit pretium id aliquam. Malesuada donec
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default page;
