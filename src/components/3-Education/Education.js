import React from 'react'

const Ed = ({ ed }) => {
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{ed.school}</h3>
        <div className="subheading mb-3">{ed.degree}</div>
        <div>{ed.subject}</div>
        <p>{ed.gpa}</p>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{ed.dates}</span>
      </div>
    </div>
  )
}


const educations = [
  {
    school: 'University of Colorado Boulder',
    degree: 'Bachelor of Science',
    subject: 'Computer Science - Web Development Track',
    gpa: 'GPA: 3.23',
    dates: 'August 2006 - May 2010'
  },
  {
    school: 'James Buchanan High School',
    degree: 'Technology Magnet Program',
    subject: '',
    gpa: 'GPA: 3.56',
    dates: 'August 2002 - May 2006'
  }
]

export default function Education() {
  return (

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div className="w-100">
        {
          educations.map((ed, index) => {
            return <Ed key={index} ed={ed} />
          })
        }
      </div>
    </section>

  )
}

