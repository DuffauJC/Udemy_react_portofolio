import React from 'react'

const Exp = ({ exp }) => {
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{exp.title}</h3>
        <div className="subheading mb-3">{exp.heading}</div>
        <p>{exp.description}',</p>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{exp.dates}</span>
      </div>
    </div>
  )
}

const experiences = [
  {
    title: 'Senior Web Developer',
    heading: 'Intelitec Solutions',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
    dates: 'March 2013 - Present'
  },
  {
    title: 'Web Developer',
    heading: 'Intelitec Solutions',
    description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
    dates: 'December 2011 - March 2013'
  },
  {
    title: 'Junior Web Designer',
    heading: 'Shout! Media Productions',
    description: 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.',
    dates: 'July 2010 - December 2011'
  },
  {
    title: 'Web Design Intern',
    heading: 'Shout! Media Productions',
    description: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    dates: 'September 2008 - June 2010'
  }
]

export default function Experience() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div className="w-100">
        {
          experiences.map((exp, index) => {
            return <Exp key={index} exp={exp} />
          })
        }
      </div>
    </section>

  )
}

