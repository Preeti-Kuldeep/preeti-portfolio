"use client";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload
} from "react-icons/fa";
import Link from "next/link";

import {useState,useEffect} from "react";

import{ FaBars, FaTimes} from "react-icons/fa";

export default function Home() {

  const [activeSection, setActiveSection] = useState("home");
  const[menuOpen, setMenuOpen]=useState(false);
  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);

  return (
    <main>

      {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md text-white flex justify-between items-center px-10 py-6 z-50">
          <h1 className="text-2xl font-bold">
            Preeti Kuldeep
          </h1>

          <div className="hidden md:flex gap-6 items-center"> 

            <a
                href="#home"
                className={`${
                activeSection === "home"
                ? "text-blue-400 font-semibold"
                : "text-white"
            } hover:text-blue-400 transition-colors duration-300`}
           >
              Home
           </a>

            <a
              href="#about"
              className={`${
              activeSection === "about"
              ? "text-blue-400 font-semibold"
              : "text-white"
              } hover:text-blue-400 transition-colors duration-300`}
            >
             About
            </a>

            <a
              href="#projects"
              className={`${
                activeSection === "projects"
                  ? "text-blue-400 font-semibold"
                  : "text-white"
              } hover:text-blue-400 transition-colors duration-300`}
            >
              Projects
            </a>

            <a
              href="#education"
              className={`${
                activeSection === "education"
                  ? "text-blue-400 font-semibold"
                  : "text-white"
              } hover:text-blue-400 transition-colors duration-300`}
            >
              Career
            </a>

            <a
              href="#contact"
              className={`${
                activeSection === "contact"
                  ? "text-blue-400 font-semibold"
                  : "text-white"
              } hover:text-blue-400 transition-colors duration-300`}
            >
              Contact
            </a>

          </div>

          {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl"
        >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

        </nav>

        {/* Mobile Navigation Menu */}
<div
  className={`fixed top-0 right-0 h-full w-64 bg-slate-900 text-white transform transition-transform duration-300 z-40 ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  } md:hidden`}
>
  <div className="flex flex-col mt-24 px-8 gap-10">

    <a
      href="#home"
      onClick={() => setMenuOpen(false)}
      className={`text-lg py-3 px-4 rounded-lg transition ${
      activeSection === "home"
      ? "text-blue-400 font-semibold"
      : "text-white hover:text-blue-400"
      }`}
    >
      🏠 Home
    </a>

    <a 
    href="#about"
    onClick={()=>setMenuOpen(false)}
    className={`text-lg py-3 px-4 rounded-lg transition ${
      activeSection === "about"
        ? "text-blue-400 font-semibold"
        : "text-white hover:text-blue-400"
    }`}
    >
      👤 About
    </a>

    <a 
    href="#projects"
    onClick={()=>setMenuOpen(false)}
    className={`text-lg py-3 px-4 rounded-lg transition ${
      activeSection === "projects"
        ? "text-blue-400 font-semibold"
        : "text-white hover:text-blue-400"
    }`}
    >
      📁 Projects
    </a>

    <a 
    href="#education"
    onClick={()=>setMenuOpen(false)}
    className={`text-lg py-3 px-4 rounded-lg transition ${
      activeSection === "education"
        ? "text-blue-400 font-semibold"
        : "text-white hover:text-blue-400"
    }`}
    >
      🎓 Career
    </a>

    <a 
    href="#contact"
    onClick={()=>setMenuOpen(false)}
    className={`text-lg py-3 px-4 rounded-lg transition ${
      activeSection === "contact"
        ? "text-blue-400 font-semibold"
        : "text-white hover:text-blue-400"
    }`}
    >
      📞 Contact
    </a>

    <a href="/Resume.pdf" target="_blank" onClick={()=>setMenuOpen(false)} 
    className={`text-lg py-3 px-4 rounded-lg transition ${
      activeSection === "resume"
        ? "text-blue-400 font-semibold"
        : "text-white hover:text-blue-400"
    }`}>
       📄 Resume
    </a>

  </div>
</div>

      {/* Hero Section */}
      <section 
      id="home"
      className="min-h-screen bg-slate-900 text-white"
      >
        

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto px-10 pt-40">
          <p className="text-blue-400 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mt-4">
            Preeti Kuldeep
          </h1>

          <h2 className="text-3xl mt-6 text-gray-300">
            Data Analyst Passionate About Solving Business Problems
          </h2>

          <p className="mt-8 max-w-2xl text-lg text-gray-400">
            SQL • Python • Excel • Oracle Database • Data Analytics
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="https://github.com/Preeti-Kuldeep"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              <div className="flex items-center gap-2">
                <FaGithub />
                GitHub
              </div>

            </a>

            <a
              href="https://www.linkedin.com/in/preeti-kuldeep-1919872a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-900"
            >
              <div className="flex items-center gap-2">
                <FaLinkedin />
                LinkedIn
              </div>

            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              <div className="flex items-center gap-2">
               <FaDownload />
                Resume
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-10 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900">
            About Me
          </h2>

          <p className="mt-8 text-lg text-gray-700 leading-8">
            I'm Preeti, an MCA student and aspiring Data Analyst
            with a strong interest in data analytics,
            business intelligence, and database technologies.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            I enjoy transforming raw data into meaningful
            insights through SQL, Python, Excel, and
            dashboard-driven reporting.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            Currently, I am building real-world analytics
            projects including a Customer Churn Analysis &
            Retention System to strengthen my analytical,
            technical, and problem-solving skills.
          </p>
        </div>
      </section>

      {/* Skills Section */}
<section className="py-24 px-10 bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-slate-900 mb-12">
      Skills & Technologies
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-8 rounded-xl shadow">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          📊 Data Analysis
        </h3>

        <p className="text-gray-700">
          SQL, Excel, Data Cleaning,
          Data Validation, Reporting,
          Dashboard Creation, EDA
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          🗄 Database
        </h3>

        <p className="text-gray-700">
          Oracle 19c, MySQL,
          Data Migration,
          RMAN, Data Pump,
          SQL Loader
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          💻 Programming
        </h3>

        <p className="text-gray-700">
          Python, Pandas,
          NumPy, Core Java,
          Automation Concepts
        </p>
      </div>

    </div>
  </div>
</section>

{/* Featured Project Section */}
<section 
id="projects"
className="py-24 px-10 bg-slate-900 text-white"
>
  <div className="max-w-6xl mx-auto">
    <p className="text-blue-400 font-medium mb-6">
      Projects
    </p>

    <h2 className="text-5xl font-bold mb-8">
      Customer Churn Analysis &
      Retention System
    </h2>

    <p className="text-xl text-gray-300 max-w-4xl leading-8">
      Developed a data-driven customer churn analysis system
      to identify customers at risk of leaving and provide
      actionable business insights to improve retention
      strategies and reduce revenue loss.
    </p>

    {/* Technology Tags */}
    <div className="flex flex-wrap gap-3 mt-10">
      <span className="bg-blue-600 px-4 py-2 rounded-full">
        SQL
      </span>

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        Python
      </span>

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        Excel
      </span>

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        MySQL
      </span>

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        Pandas
      </span>

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        NumPy
      </span>
    </div>

    {/* Project Grid */}
    <div className="grid md:grid-cols-2 gap-8 mt-16">

      <div className="bg-slate-800 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">
          Business Problem
        </h3>

        <p className="text-gray-300">
          Businesses often lose customers due to poor
          retention strategies, resulting in revenue loss
          and reduced customer satisfaction.
        </p>
      </div>

      <div className="bg-slate-800 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">
          Solution
        </h3>

        <p className="text-gray-300">
          Built a customer churn analytics system that
          analyzes customer behavior patterns and helps
          identify customers likely to discontinue services.
        </p>
      </div>

    </div>

    {/* Key Highlights */}
    <div className="mt-16">
      <h3 className="text-3xl font-bold mb-8">
        Key Highlights
      </h3>

      <div className="grid md:grid-cols-2 gap-4">

        <div>✓ Data Cleaning</div>
        <div>✓ Data Migration</div>
        <div>✓ Data Validation</div>
        <div>✓ SQL Query Analysis</div>
        <div>✓ Dashboard Creation</div>
        <div>✓ Customer Segmentation</div>
        <div>✓ Churn Trend Analysis</div>
        <div>✓ Business Insight Generation</div>

      </div>
    </div>

    {/* Buttons */}
    <div className="mt-12 flex gap-4">
      <a
        href="https://github.com/Preeti-Kuldeep/Customer-Churn-Analysis-Retention-System"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
      >
        GitHub
      </a>

      <a
      href="https://github.com/Preeti-Kuldeep/Customer-Churn-Analysis-Retention-System/tree/main/Documentation"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-900 "
      >
        Documentation
      </a>
    </div>
  </div>
</section>

{/* ART HUB Project */}
<section className="py-24 px-10 bg-white">
  <div className="max-w-6xl mx-auto">
   
    <h2 className="text-5xl font-bold text-slate-900 mt-4">
      ART HUB
    </h2>
    <p className="text-xl text-blue-600 font-medium mt-2">
      Multi-Vendor Art Marketplace 
    </p>

    <p className="mt-8 text-xl text-gray-700 leading-8">
      Developed a full-stack multi-vendor art marketplace that 
      enables artists to showcase artwork, buyers to discover and
      purchase products, and sellers to manage listings through a centralized platform.
    </p>

    <div className="flex flex-wrap gap-3 mt-10">
      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
        Django
      </span>

      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
        MySQL
      </span>

      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
        HTML
      </span>

      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
        CSS
      </span>

      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
        JavaScript
      </span>
    </div>

    <div className="grid md:grid-cols-4 gap-4 mt-2">

  <div className="bg-white shadow rounded-xl p-4 text-center">
    <h3 className="text-2xl font-bold text-blue-600">3</h3>
    <p className="text-gray-600 font-medium">User Roles</p>
  </div>

  <div className="bg-white shadow rounded-xl p-4 text-center">
    <h3 className="text-2xl font-bold text-blue-600">6+</h3>
    <p className="text-gray-600 font-medium">Modules</p>
  </div>

  <div className="bg-white shadow rounded-xl p-4 text-center">
    <h3 className="text-2xl font-bold text-blue-600">Cart</h3>
    <p className="text-gray-600 font-medium">System</p>
  </div>

  <div className="bg-white shadow rounded-xl p-4 text-center">
    <h3 className="text-2xl font-bold text-blue-600">Order</h3>
    <p className="text-gray-600 font-medium">Tracking</p>
  </div>

</div>

    <div className="grid md:grid-cols-2 gap-8 mt-16">

      <div className="bg-gray-100 p-8 rounded-xl hover:shodow-xl hover:-translate-y-2 transition duration-300">
        <h3 className="text-2xl font-bold text-slate-900">
          Core Features
        </h3>

        <ul className="space-y-2 text-gray-700">
          <li>✓ User Authentication</li>
          <li>✓ Product Listings</li>
          <li>✓ Shopping Cart</li>
          <li>✓ Artist Profiles</li>
          <li>✓ Order Management</li>
          <li>✓ Multi-User Roles</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-8 rounded-xl hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <h3 className="text-2xl font-bold text-slate-900">
          Technical Implementation
        </h3>

        <ul className="space-y-2 text-gray-700">
          <li>✓ Database Design</li>
          <li>✓ SQL Query Development</li>
          <li>✓ Backend Development</li>
          <li>✓ Frontend Integration</li>
          <li>✓ CRUD Operations</li>
          <li>✓ Responsive Design</li>
        </ul>
      </div>

    </div>

    <div className="mt-12 flex gap-4">
  <Link
    href="/art-hub"
    className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition"
  >
    Project Gallery
  </Link>
</div>

    {/* Buttons */}
    <div className="mt-12 flex gap-4">
      <a
        href="https://github.com/Preeti-Kuldeep/ART-HUB"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
      >
        GitHub
      </a>

      <a
       href="#"
       className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
>
        Live Demo (Coming Soon)
      </a>
    </div>

    

  </div>
</section>

{/* Experience Section */}
<section
  id="education"
  className="py-24 px-10 bg-white"
>

    <p className="text-blue-600 font-medium">
      Professional Experience
    </p>

    <h2 className="text-5xl font-bold text-slate-900 mt-4">
      My Journey
    </h2>

    <div className="mt-16 border-l-4 border-blue-600 pl-8">

      <div className="mb-16">
        <p className="text-blue-600 font-semibold">
          Dec 2025 - May 2026
        </p>

        <h3 className="text-black text-3xl font-bold mt-2">
          Oracle Apps DBA Trainee
        </h3>

        <p className="text-xl text-gray-600 mt-2">
          Cognizant Technology Solutions
        </p>

        <ul className="mt-6 space-y-3 text-gray-700">
          <li>
            ✓ Executed SQL queries for data extraction,
            validation, and troubleshooting.
          </li>

          <li>
            ✓ Supported database monitoring and data
            integrity validation across Oracle environments.
          </li>

          <li>
            ✓ Worked with Oracle utilities including
            RMAN, Data Pump, and SQL*Loader.
          </li>

          <li>
            ✓ Assisted in backup, recovery, and archive
            log management activities.
          </li>

          <li>
            ✓ Created operational documentation and
            supported issue resolution processes.
          </li>
        </ul>
      </div>
    </div>

  
</section>

{/* Education Section */}
<section
  id="education"
  className="py-24 px-10 bg-white"
>
    <p className="text-blue-600 font-medium">
      Education
    </p>

    <h2 className="text-5xl font-bold text-slate-900 mt-4">
      Academic Journey
    </h2>

    <div className="mt-16 border-l-4 border-blue-600 pl-8">

      <div className="mb-16">
        <p className="text-blue-600 font-semibold">
          2026 - 2028
        </p>

        <h3 className="text-3xl text-gray-600 font-bold mt-2">
          Master of Computer Applications (MCA)
        </h3>

        <p className="text-xl text-gray-600 mt-2">
          Manipal University Jaipur
        </p>

        <p className="mt-4 text-gray-700">
          Specializing in Computer Applications with
          focus on Data Analytics, Databases,
          Software Development, and Business Intelligence.
        </p>
      </div>

      <div className="mb-16">
        <p className="text-blue-600 font-semibold">
          2022 - 2025
        </p>

        <h3 className="text-3xl text-gray-600 font-bold mt-2">
          Bachelor of Computer Applications (BCA)
        </h3>

        <p className="text-xl text-gray-600 mt-2">
          KLS Gogte College of Commerce, Belagavi
        </p>

        <p className="mt-4 text-gray-700">
          Built strong foundations in programming,
          databases, software engineering, and computer science.
        </p>
      </div>

      <div className="mb-16">
        <p className="text-blue-600 font-semibold">
          2020 - 2021
        </p>

        <h3 className="text-3xl text-gray-600 font-bold mt-2">
          PUC
        </h3>

        <p className="text-xl text-gray-600 mt-2">
          Jain College of Science and Commerce
        </p>
      </div>

      <div>
        <p className="text-blue-600 font-semibold">
          2019
        </p>

        <h3 className="text-3xl text-gray-600 font-bold mt-2">
          SSLC
        </h3>

        <p className="text-xl text-gray-600 mt-2">
          Muktangana Vidyalaya English Medium School
        </p>
      </div>

    </div>

  
</section>

{/* Certifications Section */}
<section className="py-24 px-10 bg-slate-100">
  <div className="max-w-6xl mx-auto">

    <p className="text-blue-600 font-medium">
      Certifications
    </p>

    <h2 className="text-5xl font-bold text-slate-900 mt-4">
      Certifications & Learning
    </h2>

    <div className="grid md:grid-cols-2 gap-8 mt-16">

      <div className="bg-white p-8 rounded-xl shadow">
        <h3 className="text-2xl text-gray-700 font-bold">
          Oracle Database 19c Administration
        </h3>

        <p className="mt-4 text-gray-700">
          Learned Oracle database administration,
          backup & recovery, RMAN, Data Pump,
          monitoring, and database maintenance.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow">
        <h3 className="text-2xl text-gray-700 font-bold">
          Oracle Apps DBA Concepts
        </h3>

        <p className="mt-4 text-gray-700">
          Gained knowledge of Oracle E-Business Suite,
          application architecture, patching,
          cloning, and administration concepts.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow">
        <h3 className="text-2xl text-gray-700 font-bold">
          Linux Administration for Oracle DBA
        </h3>

        <p className="mt-4 text-gray-700">
          Worked with Linux commands, file systems,
          user management, and server administration
          required for Oracle environments.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow">
        <h3 className="text-2xl text-gray-700 font-bold">
          Tata Data Analytics Virtual Experience
        </h3>

        <p className="mt-4 text-gray-700">
          Completed data analysis tasks involving
          business insights, reporting,
          and analytical problem solving.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow md:col-span-2">
        <h3 className="text-2xl text-gray-700 font-bold">
          UI/UX Design Certification
        </h3>

        <p className="mt-4 text-gray-700">
          Learned user experience principles,
          wireframing, design thinking,
          and interface design fundamentals.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Contact Section */}
<section 
id="contact"
className="py-24 px-10 bg-slate-900 text-white"
>
  <div className="max-w-6xl mx-auto text-center">

    <p className="text-blue-400 font-medium">
      Contact
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Let's Connect
    </h2>

    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
      I'm always interested in discussing data analytics,
      technology, projects, internships, and career
      opportunities.
    </p>

    <div className="mt-12 space-y-4">

      <p className="text-xl flex items-center justify-center gap-3">
        <FaEnvelope />
        preetikuldeep042@gmail.com
      </p>

      <p className="text-xl flex items-center justify-center gap-3">
       <FaPhone />
        +91 8618707724
      </p>

      <p className="text-xl flex items-center justify-center gap-3">
        <FaMapMarkerAlt />
        Belagavi, Karnataka, India
      </p>

    </div>

    <div className="flex justify-center gap-6 mt-10">

      <a
        href="https://github.com/Preeti-Kuldeep"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        <div className="flex items-center gap-2">
          <FaGithub />
           GitHub
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/preeti-kuldeep-1919872a5/"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-900"
      >
        <div className="flex items-center gap-2 ">
          <FaLinkedin />
          LinkedIn
        </div>
      </a>

    </div>

  </div>
</section>

{/* Footer */}
<footer className="bg-black text-gray-400 py-8">
  <div className="max-w-6xl mx-auto text-center">

    <p>
      © 2026 Preeti Kuldeep. All Rights Reserved.
    </p>

    <p className="mt-2">
      Built with Next.js, TypeScript & Tailwind CSS
    </p>

  </div>
</footer>
    </main>
  );
}