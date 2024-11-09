import React, { useEffect } from 'react'
import ecom1 from "/images/e-com1.webp";
import ecom2 from "/images/ecom2.webp";
import ecom3 from "/images/ecom3.webp";
import ecomFeature1 from "/images/ecomFeature1.webp";
import ecomFeature2 from "/images/ecomFeature2.webp";
import ecomFeature3 from "/images/ecomFeature3.webp";
import ecomFeature4 from "/images/ecomFeature4.webp";
import ecomFeature5 from "/images/ecomFeature5.webp";
import ServiceMain from "../reuse/ServiceMain";
import ServiceFSection from "../reuse/ServiceFSection";
import ServiceCost from "../reuse/ServiceCost";
import ServiceCosts from "../reuse/ServiceCosts";
import ServiceContact from "../reuse/ServiceContact";
import ServiceFeature from "../reuse/ServiceFeature";
import { useLocation } from 'react-router-dom';

const Ecom = () => {
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

  const scrollToEcomCost = () => {
    const element = document.getElementById("EcomCost");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToEcomContact = () => {
    const element = document.getElementById("EcomContact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section>
      <div className="container mx-auto p-[10px]">
        <ServiceMain
          title="E-commerce Website"
          para="An e-commerce website is an online platform for buying and selling goods or services. It allows customers to browse products, make purchases, and interact with sellers or customer service electronically, without visiting a physical store. Features often include product catalogs, shopping carts, secure payment gateways, and order management systems. These websites can range from small independent stores to large marketplaces with millions of products."
          img={<img src={ecom1} alt="" />}
          onClick={scrollToEcomCost}
        />

        <ServiceFSection title="In today's digital landscape, my approach to business websites transcends mere online presence, transforming them into dynamic platforms crucial for success. With a keen understanding of the essential steps to craft a successful business website, I focus on creating engaging, user-friendly, and strategically designed sites that drive growth and achieve objectives. Here are key steps to craft a successful business website:">
          <ServiceFeature
            img={<img src={ecomFeature1} alt="" />}
            heading="Planning and Research"
            para="To ensure the success of your website, clearly outline your objectives, whether it's driving sales, generating leads, or increasing brand awareness. Additionally, conduct thorough research on your target audience's demographics, interests, and behaviors to tailor your website to their needs. Stay updated on industry trends and best practices to continuously inform and refine your website strategy and decision-making process."
          />
          <ServiceFeature
            img={<img src={ecomFeature2} alt="" />}
            heading="Design and Development"
            para="Clearly outline the design goals for your website, focusing on aesthetics, branding, and user experience. Develop wireframes or mockups to visualize the layout, structure, and design elements before implementation. Then, work closely with developers to translate your design vision into a functional website, ensuring it aligns with your goals and objectives."
          />
          <ServiceFeature
            img={<img src={ecomFeature3} alt="" />}
            heading="Platform Selection"
            para="Determine the features and functionality needed for your website. Next, explore platforms like WordPress, Shopify, and Squarespace to compare their features and pricing. To ensure the best fit, try out free trials or demos to evaluate their usability and compatibility before making a decision."
          />
          <ServiceFeature
            img={<img src={ecomFeature4} alt="" />}
            heading="Populate, launch"
            para="Create high-quality website content, including text, images, and videos, aligned with your brand and audience. Test your site's functionality, usability, and compatibility across devices and browsers for a smooth user experience. After content and testing, launch your site and promote it via social media, email marketing, and SEO."
          />
          <ServiceFeature
            img={<img src={ecomFeature5} alt="" />}
            heading="Marketing and Growth"
            para="Develop a comprehensive marketing strategy encompassing SEO, content, social media, email, and advertising. Monitor website analytics to track performance and make data-driven decisions for optimization. Continuously explore new opportunities and tactics to expand your reach, engage your audience, and drive business growth."
          />
        </ServiceFSection>

        <section id='EcomCost'>
        <ServiceCost
          title="With a budget of $2000, creating an e-commerce website involves considering several factors that influence pricing:"
          img={<img src={ecom2} alt="" />}
          onClick={scrollToEcomContact}
        >
          <ServiceCosts
            title="Design Complexity:"
            para="Custom designs and advanced functionalities increase costs."
          />
          <ServiceCosts
            title="Product Catalog Size:"
            para=" Larger inventories require more robust database management."
          />
          <ServiceCosts
            title="Payment Gateway Integration:"
            para="Complexity and number of payment options affect expenses."
          />
          <ServiceCosts
            title="Turnaround Time:"
            para=" If you need the blog to be completed within a short timeframe, you might have to pay a premium for expedited service."
          />
          <ServiceCosts
            title="SEO Optimization:"
            para="Implementing SEO practices impacts pricing."
          />
          <ServiceCosts
            title="Content Management System:"
            para="Choice of CMS affects both initial costs and maintenance."
          />
          <ServiceCosts
            title="Additional Features:"
            para="Integrations like inventory management or CRM systems can raise prices."
          />
          <ServiceCosts
            title="Mobile Responsiveness:"
            para="Optimizing for mobile devices may add to development costs."
          />
        </ServiceCost>
        </section>

        <section id='EcomContact'>
        <ServiceContact
          title="Interested in working together?"
          img={<img src={ecom3} alt="" />}
          web="EcomClient"
        />
        </section>
      </div>
    </section>
  )
}

export default Ecom