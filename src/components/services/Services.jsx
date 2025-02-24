import React from 'react'
import './services.css'
import ServicesList from './ServicesList'

// @TODO - add larger blurb that outlines my technically responsibilities in the role.
const data = [
  {
    header: "NN Group",
    position: "Software Developer",
    timeframe: "May 2024 - December 2024",
    location: "Shibuya-ku, Tokyo, Japan (in-person)",
    blurb: "Software Developer for insurance calculation policies and various financial web applications",
    items: [
      "Developed and maintained a full-stack internal dashboard with Python (Flask), React, and SQL, removing reliance on third-party vendors",
      "Deployed high-performance web apps on Azure using Databricks, PySpark, Pandas, NumPy, and C#/.NET (Razor), optimizing policy calculations",
      "Automated manual tasks and improved efficiency with Azure Pipelines (YAML), Salesforce Flows, Azure Data Factory, and SQL Server Management Studio"
    ]
  },
  {
    header: "Geotab",
    position: "Software Developer",
    timeframe: "January 2023 - April 2023, September 2023 - December 2023",
    location: "Oakville & Waterloo, Ontario (in-person)",
    blurb: "Backend Junior Software Developer on a Fleet Management Data Ingestion System (and related)",
    items: [
      "Developed data-ingestion services as part of a highly distributed system processing vehicle data from Geotab’s GO Devices",
      "Improved distributed data ingestion by optimizing concurrent handling of malformed records, eliminating bloated BigQuery metrics and reducing failed retries by 10%",
      "Created a Postgres pool size setter regularly used to resolve on-call cases for Geotab’s largest customers",
      "Filled 75% of upcoming intern positions by reviewing resumes, leading behavioral and technical interviews, and creating candidate profiles in Lever",
      "Wrote and optimized 6+ SQL queries in Redash/Superset, visualizing 100M+ daily logs per database for debugging, on-call monitoring, and operational analysis",
    ]
  },
  {
    header: "Infor",
    position: "Software Developer",
    timeframe: "May 2022 - August 2022",
    location: "Toronto, Ontario (remote)",
    blurb: "Full-stack Junior Software Developer on the Workforce Management product",
    items: [
      "Developed features using a full tech-stack of Angular, Java, SQL, Cucumber, Crucible, Jenkins, and more",
      "Led multiple sprint activities in bi-weekly sprints to complete tasks and team goals",
      "Contributed angular, CSS, HTMl improvements to the IDS Enterprise open-source library",
      "Utilized self-management abilities to learn new technologies including: Kotlin, Angular, Jenkins, Cucumber, SVN, SQL",
    ]
  },
  {
    header: "eSolutions",
    position: "Website Configuration Specialist",
    timeframe: "May 2021 - August 2021",
    location: "Waterloo, Ontario (remote)",
    blurb: "iCreate Content Management System Configurer",
    items: [
      "Configured iCreate modules and data migrations for public-sector clients",
      "Corrected websites to meet WCAG level A and level AA accessibility requirements",
      "Created succinct and clear internal documentation applicable for all audiences",
      "Succeeded on concurrent remote-work projects with little supervision",
    ]
  },
  {
    header: "Peel District School Board",
    position: "Camp Explore Leader",
    timeframe: "July 2019 - August 2019",
    location: "Mississauga, Ontario (in-person)",
    blurb: "Teaching assistant helping to build 21st century-skills in middle-school students through mathematical and literary activities.",
    items: [
      "Led students and developed their critical thinking and collaborative abilities",
      "Weekly group planning of student activities through Google Docs and meetings",
      "Supervision of students during off-time; fostered an inclusive play environment",
    ]
  },
]
const Services = () => {
  return (
    // technically, this would be services provided by a freelancer.
    <section id="services">
      <h5>My Past Employment</h5>
      <h2>Experience</h2>

      <div className="container services__container">
        {
          data.map(({header, position, timeframe, location, blurb, items}) => {
            return (
              <ServicesList header={header} position={position} timeframe={timeframe} location={location} blurb={blurb} items={items}></ServicesList>
            )
          })
        }

      </div>
    </section>
  )
}

export default Services