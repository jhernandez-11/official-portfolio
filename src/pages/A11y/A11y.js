import React from "react";
import "./A11y.css";
import ScrollToTop from "../../components/ScrollTop";

const A11y = () => {
  return (
    <div className="a11y-cont w-full flex flex-col sm:flex-row items-center place-items-start">
      <ScrollToTop />
      <div className="grid w-full sm:w-60 sm:place-content-center text-5xl mb-6 sm:text-7xl font-bold font-sans uppercase">
        <p className="heading-text sm:rotate-[-90deg] w-max">A11y</p>
      </div>
      <div>
        <div className="border-solid border-b-4 pb-6 w-10/12">
          <h1 className="font-mono text-3xl mb-3">
            A11y (which stands for "accessibility" with 11 letters between the A
            and Y)
          </h1>
          <p>
            It's all about making sure digital products—like websites, apps, and
            tools—are usable by everyone, including people with disabilities.
            It’s about designing with things like screen readers, keyboard
            navigation, or color contrast in mind, so no one is left out or
            frustrated when trying to use something online. When you focus on
            A11y, you’re making sure that everyone, no matter their abilities,
            can have a smooth, enjoyable experience. In the end, it’s about
            creating a more welcoming and inclusive digital space for all!
          </p>
        </div>
        <h1 className="font-serif text-2xl mt-6 mb-6">
          How I Strive For Equity-focused Design -{" "}
        </h1>
        <div className="w-10/12">
          <img
            className="w-4/6"
            src={`${process.env.PUBLIC_URL}/id.png`}
            alt="inclusive design"
          />
          <h1 className="font-bold">Inclusive design:</h1>
          <p>
            Matters in UX/UI because it makes sure that everyone can use and
            enjoy a product, no matter their background or abilities. It's about
            thinking of all kinds of users, whether they have disabilities,
            different language preferences, or varying levels of tech know-how.
            By designing with everyone in mind, we can create experiences that
            are easy and enjoyable for all. Not only does this mean more people
            can access and love the product, but it also shows a commitment to
            building a fairer and more inclusive digital world. Plus, it just
            feels good to know you're helping everyone feel included!
          </p>
        </div>
        <div className="w-10/12">
          <img
            className="w-4/6"
            src={`${process.env.PUBLIC_URL}/rd.png`}
            alt="responsive design"
          />
          <h1 className="font-bold">Responsive web design:</h1>
          <p>
            Websites look and work great on any device—whether you're using a
            phone, tablet, or computer. Instead of building separate versions
            for each screen size, responsive design allows the website to
            automatically adjust, so it fits perfectly and functions smoothly no
            matter what. It’s like having a website that “flexes” to fit the
            screen you’re on! This ensures that users have a seamless experience
            whether they're scrolling on a small smartphone or browsing on a
            large desktop, making it more convenient and enjoyable for everyone.
          </p>
        </div>
        <div className="w-10/12 mt-6 lg:mb-24">
          <img
            className="w-4/6 mt-12"
            src={`${process.env.PUBLIC_URL}/ucd.png`}
            alt="user-centered design"
          />
          <h1 className="font-bold mt-6">User-centered design:</h1>
          <p>
            Putting people first when creating products like apps or websites.
            It means really understanding what users need, what challenges they
            face, and what will make their experience as smooth and enjoyable as
            possible. Instead of designing based on assumptions, user-centered
            design involves asking questions, testing ideas, and constantly
            improving based on feedback. When you keep the users at the heart of
            the process, you end up with a product that not only looks good but
            also works well for the people who use it—making their lives easier
            and more enjoyable!
          </p>
        </div>
      </div>
    </div>
  );
};

export default A11y;
