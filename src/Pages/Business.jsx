import React, { useEffect } from "react";
import business1 from "/images/business1.webp";
import business2 from "/images/business2.webp";
import business3 from "/images/business3.webp";
import businessFeature1 from "/images/businessFeature1.webp";
import businessFeature2 from "/images/businessFeature2.webp";
import businessFeature3 from "/images/businessFeature3.webp";
import businessFeature4 from "/images/businessFeature4.webp";
import businessFeature5 from "/images/businessFeature5.webp";
import ServiceMain from "../reuse/ServiceMain";
import ServiceFSection from "../reuse/ServiceFSection";
import ServiceCost from "../reuse/ServiceCost";
import ServiceCosts from "../reuse/ServiceCosts";
import ServiceContact from "../reuse/ServiceContact";
import ServiceFeature from "../reuse/ServiceFeature";
import { useLocation } from "react-router-dom";

const Business = () => {
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

  const scrollToBusinessCost = () => {
    const element = document.getElementById("BusinessCost");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToBusinessContact = () => {
    const element = document.getElementById("BusinessContact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section>
      <div className="container mx-auto p-[10px]">
        <ServiceMain
          title="Business Website"
          para="A business website refers to an online platform where individuals or organizations establish their digital presence to promote their products or services, provide essential information to customers, and facilitate transactions. These websites serve as virtual storefronts and play a pivotal role in shaping a company's online identity, credibility, and engagement with its target audience. Business websites come in various forms, ranging from simple brochure-style sites to complex e-commerce platforms, depending on the nature of the business and its objectives. An effective website is essential for building trust."
          img={<img src={business1} alt="" />}
          onClick={scrollToBusinessCost}
        />

        <ServiceFSection title="In today's digital landscape, my approach to business websites transcends mere online presence, transforming them into dynamic platforms crucial for success. With a keen understanding of the essential steps to craft a successful business website, I focus on creating engaging, user-friendly, and strategically designed sites that drive growth and achieve objectives. Here are key steps to craft a successful business website:">
          <ServiceFeature
            img={<img src={businessFeature1} alt="" />}
            heading="Set goals, target audience"
            para="Start by outlining specific and measurable objectives for your website, such as increasing sales, generating leads, or boosting brand awareness, ensuring these goals are attainable within a realistic timeframe. To effectively achieve these objectives, develop detailed buyer personas to represent different segments of your target audience. Tailor your website goals and strategies to address the needs and preferences of these personas, ensuring a personalized and effective user experience."
          />
          <ServiceFeature
            img={<img src={businessFeature2} alt="" />}
            heading="Analyze, optimize"
            para="Implement website analytics tools such as Google Analytics to track key metrics like traffic, user behavior, and conversions. Using the insights gathered from these analytics, pinpoint areas where your website can be optimized. To further enhance performance, implement A/B testing and other experimentation methods to assess the impact of optimizations and refine strategies for maximum effectiveness."
          />
          <ServiceFeature
            img={<img src={businessFeature3} alt="" />}
            heading="Create profile and content"
            para="Clarify your brand's core values, mission, and unique selling points to establish a distinct identity. Building on this foundation, research your target audience's demographics, interests, and pain points to tailor content that resonates with them. With this understanding, create high-quality, relevant content, including articles, visuals, and videos, that provides value and fosters connections with your audience."
          />
          <ServiceFeature
            img={<img src={businessFeature4} alt="" />}
            heading="Promotion and advertising"
            para="Choose strategies such as search engine optimization (SEO), social media marketing, email campaigns, and online advertising to reach your audience effectively. To support these strategies, generate engaging content that resonates with your target audience and aligns with your marketing objectives. Finally, execute your marketing strategy by implementing these promotional tactics across the chosen channels, ensuring a cohesive and impactful approach."
          />
          <ServiceFeature
            img={<img src={businessFeature5} alt="" />}
            heading="Support and development"
            para="Offer various channels for customer support, such as live chat, email, or phone support, to assist visitors with inquiries and issues promptly. Additionally, schedule regular maintenance to ensure that your website remains secure, functional, and up-to-date with the latest software and security patches. Continuously evaluate user feedback, website analytics, and industry trends to identify opportunities for development and improvement. Invest in ongoing development initiatives to enhance functionality, usability, and overall performance based on evolving user needs and technological advancements, thus ensuring a seamless and optimized user experience across all touchpoints."
          />
        </ServiceFSection>

        <section id="BusinessCost">
        <ServiceCost
          title="The price of a landing page typically ranges from $350 to $1000, depending on factors such as:"
          img={<img src={business2} alt="" />}
          onClick={scrollToBusinessContact}
        >
          <ServiceCosts
            title="Digital Storefront:"
            para="A business website serves as a digital storefront, providing a platform for showcasing products or services, engaging with customers, and driving sales"
          />
          <ServiceCosts
            title="Website Design and Development:"
            para=" With a budget of $600, you may opt for a pre-designed template or a basic custom design."
          />
          <ServiceCosts
            title="Content Creation:"
            para="If you're creating content yourself, this won't incur additional costs."
          />
          <ServiceCosts
            title="Additional Features and Functionality:"
            para=" Consider your business needs carefully when adding features to your website."
          />
          <ServiceCosts
            title="Client's Requirements:"
            para="Specific client requirements or customization requests can also impact the price. For example, if you need the website to integrate specific functions or the design to adhere to a particular brand style, it may require additional time and resources from developers."
          />
          <ServiceCosts
            title="Volume Discounts:"
            para="When commissioning several blog posts simultaneously for your business blog, some writers may provide discounts for bulk orders."
          />
        </ServiceCost>
        </section>

        <section id="BusinessContact">
        <ServiceContact
          title="Interested in working together?"
          img={<img src={business3} alt="" />}
          web="BusinessClient"
        />
        </section>
      </div>
    </section>
  );
};

export default Business;
