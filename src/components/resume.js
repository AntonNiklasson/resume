import React from "react";
import Markdown from "react-markdown";

const Resume = ({ meta, experiences, educations }) => (
  <div className="wrapper">
    <header>
      <h1>{meta.title}</h1>
      <ul className="contacts">
        <li>{meta.contacts.phone}</li>
        <li>{meta.contacts.email}</li>
      </ul>
    </header>
    <main>
      <section>
        {experiences.map(experience => (
          <div key={experience.title} className="experience">
            <h3>
              {experience.title} at {experience.organization}
            </h3>
            <h4>
              {experience.time.from.month}.{experience.time.from.year}
              {experience.time.to
                ? ` - ${experience.time.to.month}.${experience.time.to.year}`
                : " -"}
            </h4>
            <Markdown source={experience.description} />
          </div>
        ))}
      </section>
      <section>
        <h2>Education</h2>
        {educations.map(education => (
          <div key={education} className="education">
            <h3>{education.title}</h3>
            <h4>
              {education.time.from} - {education.time.to}
            </h4>
          </div>
        ))}
      </section>
    </main>
  </div>
);

export default Resume;
