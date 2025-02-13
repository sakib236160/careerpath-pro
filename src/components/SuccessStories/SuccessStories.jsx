import { UserIcon } from "lucide-react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SuccessStories = () => {
    useEffect(() => {
    AOS.init({ duration: 3000, once: true }); 
  }, []);
  return (
    <div>
      <section className="bg-white p-6 my-12 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-start underline mb-4" data-aos="fade-up">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg " data-aos="fade-right">
            <h3 className="text-lg font-semibold mb-3">
              <span className="flex items-center gap-2 text-gray-700">
                <UserIcon size={20} className="text-blue-500" />
                Sakib Hossain
              </span>
            </h3>
            <p>
              "Success Story of a Software Engineer"---------- Once, a software
              engineer who was new to coding and technology started working at a
              small startup. In the beginning, he struggled to find the right
              solutions for various projects. However, he never gave up and
              learned something from every challenge.
            </p>
          </div>
          <div className="border p-4 rounded-lg" data-aos="fade-left">
            <h3 className="text-lg font-semibold mb-3">
              <span className="flex items-center gap-2 text-gray-700">
                <UserIcon size={20} className="text-blue-500" />
                Ety Khatun
              </span>
            </h3>
            <p>
              "Experience of Building a Career as a Digital Marketer"--------
              Building a career as a digital marketer involves a blend of
              continuous learning, hands-on experience, and adapting to the
              ever-evolving digital landscape. Here’s a general journey of a
              digital marketer: Starting from scratch, a digital marketer
              usually begins by gaining knowledge about online platforms, SEO,
              content marketing, paid ads, and social media strategies. In the
              beginning, the learning curve can be steep. However, it is
              essential to understand how each tool and strategy works, and more
              importantly, how they are interconnected to achieve a company’s
              goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;