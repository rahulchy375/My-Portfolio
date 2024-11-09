import React, { useEffect } from "react";
import portfolio1 from "/images/portfolio1.webp";
import portfolioFeature1 from "/images/portfolioFeature1.webp";
import portfolioFeature2 from "/images/portfolioFeature2.webp";
import portfolioFeature3 from "/images/portfolioFeature3.webp";
import portfolioFeature4 from "/images/portfolioFeature4.webp";
import portfolioFeature5 from "/images/portfolioFeature5.webp";
import ServiceMain from "../reuse/ServiceMain";
import ServiceFeature from "../reuse/ServiceFeature";
import ServiceFSection from "../reuse/ServiceFSection";
import ServiceCosts from "../reuse/ServiceCosts";
import portfolio2 from "/images/portfolio2.webp";
import ServiceCost from "../reuse/ServiceCost";
import portfolio3 from "/images/portfolio3.webp";
import ServiceContact from "../reuse/ServiceContact";
import { useLocation } from "react-router-dom";

const Portfolio = () => {
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

  const scrollToPortfolioCost = () => {
    const element = document.getElementById("PortfolioCost");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPortfolioContact = () => {
    const element = document.getElementById("PortfolioContact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  return (
    <section>
      <div className="container mx-auto p-[10px]">
        <ServiceMain
          title="Portfolio Website"
          para="Looking for a professionally designed portfolio website that
            highlights your work and draws in potential clients? I specialize in
            creating custom portfolio websites tailored to your unique needs.
            Whether you're an artist, photographer, or freelancer, I'll help you
            build a visually stunning site that showcases your skills and makes
            a lasting impression."
          img={<img src={portfolio1} alt="" />}
          onClick={scrollToPortfolioCost}
        />

        <ServiceFSection
          title="I help clients define goals, choose the right technologies, and
            build effective, visually appealing portfolios."
        >
          <ServiceFeature
            img={<img src={portfolioFeature1} alt="" />}
            heading="Define Goals and Audience"
            para="I build successful websites by clearly defining their purpose and
              goals. I identify the target audience to tailor the design and
              content effectively. By researching competitors and industry trends,
              I ensure a strategic approach that drives engagement and success."
          />
          <ServiceFeature
            img={<img src={portfolioFeature2} alt="" />}
            heading="Create Layout and Design"
            para="I begin by creating wireframes and mockups to visualize the website's structure. Next, I select color schemes, typography, and images that reflect the brand identity for a cohesive look. I also ensure the design is responsive and optimized for all devices, providing a seamless user experience."
          />
          <ServiceFeature
            img={<img src={portfolioFeature3} alt="" />}
            heading="Choose Technologies"
            para="Choosing the right technologies based on my project needs is essential for success. I complete the task as the requirement of clients. Or I consider What types of technologies can be perfect for the project so that the can be completed perfectly."
          />
          <ServiceFeature
            img={<img src={portfolioFeature4} alt="" />}
            heading="Development and Testing"
            para="I start my task with JavaScript, React.js or Next.js, Redux for state management, Tailwind CSS or Bootstrap for styling, Firebase or MongoDB for database. Next, I enhance the user experience by integrating necessary features and functionalities. Finally, I ensure smooth performance by conducting thorough testing to identify and fix any bugs or compatibility issues."
          />
          <ServiceFeature
            img={<img src={portfolioFeature5} alt="" />}
            heading="Deployment and Support"
            para="I start by selecting a web hosting provider and deploying my website to a live server. Once the site is live, I configure the domain settings and install an SSL certificate for security. To keep everything running smoothly, I establish a maintenance plan that includes regular updates, backups, and technical support."
          />
        </ServiceFSection>

        <section className="" id="PortfolioCost">
          <ServiceCost
            title="The $200 initial cost for a portfolio website can fluctuate based on
            various factors, here are some of them:"
            img={<img src={portfolio2} alt="" />}
            onClick={scrollToPortfolioContact}
          >
            <ServiceCosts
              title="Design Complexity:"
              para="Complex designs require more time and expertise, increasing costs."
            />
            <ServiceCosts
              title="Number of Pages:"
              para="More pages mean more development time and effort, potentially raising costs."
            />
            <ServiceCosts
              title="Features:"
              para="Advanced features like contact forms or galleries may need extra coding, adding to expenses."
            />
            <ServiceCosts
              title="Content Creation:"
              para="Services like copywriting or graphic design add to the project's overall cost."
            />
            <ServiceCosts
              title="Responsive Design:"
              para="Optimizing for various devices may require extra development work and higher costs."
            />
            <ServiceCosts
              title="SEO Optimization:"
              para="Improving search engine visibility may involve ongoing expenses."
            />
            <ServiceCosts
              title="Domain and Hosting:"
              para="Additional features like SSL certificates can increase ongoing expenses."
            />
            <ServiceCosts
              title="Maintenance:"
              para="Regular updates and security measures require ongoing investment."
            />
          </ServiceCost>
        </section>

        <section id="PortfolioContact">
        <ServiceContact
          title="Interested in working together?"
          img={<img src={portfolio3} alt="" />}
          web="PortfolioClient"
        />
        </section>
      </div>
    </section>
  );
};

export default Portfolio;
