import React, { useEffect } from "react";
import blog1 from "/images/Blog1.webp";
import blog2 from "/images/blog2.webp";
import blog3 from "/images/blog3.webp";
import blogFeature1 from "/images/blogFeature1.webp";
import blogFeature2 from "/images/blogFeature2.webp";
import blogFeature3 from "/images/blogFeature3.webp";
import blogFeature4 from "/images/blogFeature4.webp";
import blogFeature5 from "/images/blogFeature5.webp";
import ServiceMain from "../reuse/ServiceMain";
import ServiceFSection from "../reuse/ServiceFSection";
import ServiceCost from "../reuse/ServiceCost";
import ServiceCosts from "../reuse/ServiceCosts";
import ServiceContact from "../reuse/ServiceContact";
import ServiceFeature from "../reuse/ServiceFeature";
import { useLocation } from "react-router-dom";

const BlogWeb = () => {
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

  const scrollToBlogCost = () => {
    const element = document.getElementById("BlogCost");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToBlogContact = () => {
    const element = document.getElementById("BlogContact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section>
      <div className="container mx-auto p-[10px]">
        <ServiceMain
          title="Blog Website"
          para="It refers to websites where individuals or organizations can create and publish their blogs. These sites provide tools and features for users to write and format blog posts, add media such as images and videos, and often include options for social sharing and interaction with readers through comments."
          img={<img src={blog1} alt="" />}
          onClick={scrollToBlogCost}
        />

        <ServiceFSection title="Crafting a successful blog is more than just stringing together words; it's about cultivating a space that connects with your readers, enriches their lives, and mirrors your distinctive voice and perspective. This journey commences with thoughtful planning and purposeful strides.">
          <ServiceFeature
            img={<img src={blogFeature1} alt="" />}
            heading="Define topic and audience"
            para="Determine a subject or theme that ignites your passion and aligns with your expertise. Next, identify your target audience by delving into their demographics, interests, and requirements. Finally, ensure that your chosen topic resonates with the interests and needs of your identified audience."
          />
          <ServiceFeature
            img={<img src={blogFeature2} alt="" />}
            heading="Create design and structure"
            para="Craft a visual concept for your blog's design, considering elements such as branding, color scheme, typography, and layout. Then, implement this concept into the layout and visual components of your blog. Establish a clear structure for your blog's content, incorporating categories, menus, and navigation elements."
          />
          <ServiceFeature
            img={<img src={blogFeature3} alt="" />}
            heading="Pick platform, host"
            para="Begin by exploring various blogging platforms like WordPress, Blogger, and Medium. Next, delve into researching hosting providers based on factors such as reliability, speed, security, and customer support. Choose a blogging platform and hosting provider that align with your goals, technical abilities, and budget."
          />
          <ServiceFeature
            img={<img src={blogFeature4} alt="" />}
            heading="Create and publish content"
            para="Craft a content strategy delineating topics, formats, and publishing schedule. Produce compelling, valuable content that resonates with your audience. Adhere to your predetermined publishing schedule. Foster community engagement by interacting with comments, feedback, and discussions."
          />
          <ServiceFeature
            img={<img src={blogFeature5} alt="" />}
            heading="Promote, profit"
            para="Utilize social media platforms, email marketing, SEO tactics, and collaborations with influencer or other bloggers to reach your target audience. Engage with your audience by responding to comments, encouraging discussion, and soliciting feedback. Explore various monetization strategies to generate revenue from your blog. Consider options such as affiliate marketing, sponsored content, selling digital products or services, or displaying advertisements."
          />
        </ServiceFSection>

        <section id="BlogCost">
        <ServiceCost
          title="The cost of a blog generally falls between $300 and $1000, contingent upon various elements such as:"
          img={<img src={blog2} alt="" />}
          onClick={scrollToBlogContact}
        >
          <ServiceCosts
            title="Length and Complexity:"
            para="Longer and more complex blogs typically require more research, writing, and editing, which can increase the price."
          />
          <ServiceCosts
            title="Research Requirements:"
            para=" If the topic of the blog requires extensive research or specialized knowledge, it may increase the price."
          />
          <ServiceCosts
            title="Writer's Expertise:"
            para="Experienced writers often charge higher rates for their services compared to beginners."
          />
          <ServiceCosts
            title="Turnaround Time:"
            para="If you need the blog to be completed within a short timeframe, you might have to pay a premium for expedited service."
          />
          <ServiceCosts
            title="Additional Services:"
            para="Some writers may offer additional services such as SEO optimization, image sourcing, or social media promotion, which can increase the overall cost."
          />
          <ServiceCosts
            title="Volume Discounts:"
            para="If you're ordering multiple blogs at once, some writers may offer discounts for bulk orders."
          />
          <ServiceCosts
            title="Client's Requirements:"
            para="Specific client requirements or customization requests can also impact the price. For example, if you need the blog to adhere to a particular style guide or tone, it might require additional effort from the writer"
          />
        </ServiceCost>
        </section>

        <section id="BlogContact">
        <ServiceContact
          title="Interested in working together?"
          img={<img src={blog3} alt="" />}
          web="BlogClient"
        />
        </section>
      </div>
    </section>
  );
};

export default BlogWeb;
