export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen bg-slate-900 text-white">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-6">
          <h1 className="text-2xl font-bold">
            Preeti Kuldeep
          </h1>

          <div className="flex gap-6">
            <a href="#about" className="hover:text-blue-400">
              About
            </a>

            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto px-10 pt-24">
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
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/preeti-kuldeep-1919872a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-900"
            >
              LinkedIn
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
        <h3 className="text-2xl font-semibold mb-4">
          📊 Data Analysis
        </h3>

        <p className="text-gray-700">
          SQL, Excel, Data Cleaning,
          Data Validation, Reporting,
          Dashboard Creation, EDA
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow">
        <h3 className="text-2xl font-semibold mb-4">
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
        <h3 className="text-2xl font-semibold mb-4">
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
    </main>
  );
}