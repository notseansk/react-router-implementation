import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Skill Mandala</h1>
          <p>Soluton to all your programming needs.</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div className="home2-text">
          <h1>Why choose us?</h1>
          <p>
            We are your one and only solution to the tech problems yu face every
            day. We are leading tech company whose aim is to increase the
            problem solving abilty in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div className="home3-text">
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit a
            tenetur aspernatur vel nam iure ea est quibusdam repudiandae, quae,
            explicabo iusto reprehenderit quasi at aliquam asperiores incidunt
            eaque. Expedita, animi. Eaque voluptas id necessitatibus sed aliquid
            similique hic odio beatae tempore, nihil aspernatur vel,
            exercitationem accusamus earum quod quasi? Explicabo vel fugiat non
            quas dolorum quod deserunt. Eius sunt vel placeat natus ducimus
            sequi quidem delectus molestias iure nesciunt ad ipsam suscipit,
            sint a nobis praesentium distinctio consequatur. Eveniet eum odit
            doloremque fugit iure dolorem consequuntur libero placeat
            necessitatibus tenetur. Nulla amet laudantium, consectetur itaque
            iusto quod ut quis delectus? Rerum qui, aperiam eius voluptate esse
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1 className="h1-underline">Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
