import AboutImg from "../../assets/about-nobg.png";
const About = () => {
  return (
    <div
      id="about"
      className="text-greyOpaque pl-5 pr-5 flex flex-col justify-center bg-white pt-[100px] pb-[100px]"
    >
      <h1 className="text-[52px] text-black">About Us</h1>
      <div className="flex justify-start items-start">
        <div>
          <p className="text-black text-left">
            At <b>Technitos</b>, we believe that success begins with the right
            people. As a premier staffing solution provider with deep expertise
            in IT, we specialize in connecting businesses with top talent across
            industries. Whether you're looking for dynamic IT professionals,
            skilled developers, or strategic project managers, we have the
            network and insight to find the perfect fit for your team.
          </p>
          <br />
          <p className="text-black text-left">
            Our mission is simple: to empower organizations by providing
            exceptional staffing solutions that drive innovation and business
            growth. We understand that in today’s fast-paced world, having the
            right talent at the right time is critical to staying ahead. That’s
            why we leverage cutting-edge technology, industry knowledge, and
            personalized service to ensure your business gets the support it
            needs to thrive.
          </p>
          <br />
          <p className="text-black text-left">
            But we don't stop at staffing. Our roots in IT excellence allow us
            to go beyond recruitment, offering insights and strategies to help
            you optimize your technology landscape and meet the demands of a
            rapidly changing digital world. At Technitos, we’re not just filling
            positions—we’re building lasting partnerships that drive results.
          </p>
          <br />
          <p className="text-black text-left">
            Let’s work together to shape a brighter, more innovative future. At
            Technitos, your success is our priority.
          </p>
        </div>
        <div className="hidden md:flex">
          <img src={AboutImg} />
        </div>
      </div>
    </div>
  );
};

export default About;
