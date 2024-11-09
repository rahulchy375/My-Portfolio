import React, { useEffect } from "react";
import landing1 from "/images/landing1.webp";
import landing2 from "/images/landing2.webp";
import landingFeature1 from "/images/landingFeature1.webp";
import landingFeature2 from "/images/landingFeature2.webp";
import landingFeature3 from "/images/landingFeature3.webp";
import landingFeature4 from "/images/landingFeature4.webp";
import landingFeature5 from "/images/landingFeature5.webp";
import landing3 from "/images/landing3.webp";
import ServiceMain from "../reuse/ServiceMain";
import ServiceFSection from "../reuse/ServiceFSection";
import ServiceCost from "../reuse/ServiceCost";
import ServiceCosts from "../reuse/ServiceCosts";
import ServiceContact from "../reuse/ServiceContact";
import ServiceFeature from "../reuse/ServiceFeature";
import { useLocation, useNavigate } from "react-router-dom";

const Landing = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to the corresponding section
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const scrollToLandingCost = () => {
    const element = document.getElementById("LandingCost");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToLandingContact = () => {
    const element = document.getElementById("LandingContact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section>
      <div className="container mx-auto p-[10px]">
        <ServiceMain
          title="Landing Page"
          para="A landing page is a standalone web page designed specifically for a marketing or advertising campaign. It's typically where a visitor 'lands' after clicking on a link in an email, advertisement, or search engine result. The main purpose of a landing page is to convert visitors into leads or customers by encouraging them to take a specific action, such as making a purchase, signing up for a newsletter, or filling out a contact form. Landing pages are often tailored to a specific audience or demographic.These pages align with the advertisement or link, ensuring a cohesive user experience and higher conversion rates."
          img={<img src={landing1} alt="" />}
          onClick={scrollToLandingCost}
        />

        <ServiceFSection title="Beginning the process of crafting an impactful landing page involves careful consideration and foresight. From outlining the page's objectives to understanding the target audience and designing compelling visuals, each subsequent step is pivotal in ensuring its success. Let's delve into the forthcoming stages of developing a dynamic landing page, shedding light on the critical factors to be addressed at each juncture. Through my expertise and meticulous approach, I aim to guide you in creating a landing page that not only captivates but also converts visitors effectively.">
          <ServiceFeature
            img={<img src={landingFeature1} alt="" />}
            heading="Clarify goals and audience"
            para="To create an effective landing page, it is essential to clearly define the website's purpose and objectives. Tailoring the design and content to cater to the identified target audience ensures that the page resonates with its visitors. Additionally, researching competitors and industry trends is crucial for maintaining relevance and competitiveness in the market."
          />
          <ServiceFeature
            img={<img src={landingFeature2} alt="" />}
            heading="Create content"
            para="Effective landing page creation involves aligning content with website goals and resonating with the target audience. Tailoring content to address audience interests and needs ensures better engagement. Additionally, well-researched, accurate content optimized for SEO enhances the page's visibility and relevance."
          />
          <ServiceFeature
            img={<img src={landingFeature3} alt="" />}
            heading="Select elements, design"
            para="Creating an effective landing page requires clearly outlining the purpose and objectives of the website. Customizing the design and content to meet the needs of the identified target audience ensures greater effectiveness. Additionally, conducting research on competitors and industry trends helps maintain relevance and competitiveness."
          />
          <ServiceFeature
            img={<img src={landingFeature4} alt="" />}
            heading="Layout and development"
            para="Designing the website layout with user experience in mind is crucial. Developing the site using suitable technologies ensures functionality and reliability. Additionally, testing and refining the website helps achieve optimal performance and user experience."
          />
          <ServiceFeature
            img={<img src={landingFeature5} alt="" />}
            heading="Testing and optimization"
            para="Website functionality, usability, and performance must be checked across devices and browsers. Identified issues and bugs should be addressed for a seamless user experience. Feedback, analytics, and best practices should guide continuous optimization to achieve business goals."
          />
        </ServiceFSection>

        <section id="LandingCost">
        <ServiceCost
          title="The price of a landing page typically ranges from $350 to $1000, depending on factors such as:"
          img={<img src={landing2} alt="" />}
          onClick={scrollToLandingContact}
        >
          <ServiceCosts
            title="Scope of the project:"
            para="The size and complexity of the landing page, including the number of sections, forms, or interactive elements, can impact the price."
          />
          <ServiceCosts
            title="Customization and branding:"
            para=" If you require custom design elements, branding integration, or specific visual aesthetics, this can increase the cost."
          />
          <ServiceCosts
            title="Integration requirements:"
            para="If the landing page needs to integrate with other systems or platforms, such as CRM software or email marketing tools, it may require additional development work, affecting the price."
          />
          <ServiceCosts
            title="Responsive design:"
            para="Ensuring the landing page functions well across various devices and screen sizes may involve additional development effort, which can impact the price."
          />
          <ServiceCosts
            title="Revision and iteration:"
            para="The number of revisions or iterations requested during the development process can affect the overall cost, especially if they require significant changes to the initial design or functionality."
          />
          <ServiceCosts
            title="Additional services:"
            para="Any supplementary services, such as content writing, photography, or video production, can add to the total cost of the project."
          />
        </ServiceCost>
        </section>

        <section id="LandingContact">
        <ServiceContact
          title="Interested in working together?"
          img={<img src={landing3} alt="" />}
          web="LandingClient"
          />
          </section>
      </div>
    </section>
  );
};

export default Landing;
