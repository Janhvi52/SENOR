import './Journey.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool} from "react-icons/md";
import {FaUniversity} from "react-icons/fa";
import {MdWork} from "react-icons/md";

const Journey = () => {
  return (
    <div id="journey">
   <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1"
    iconStyle={{ background: 'var( --color-bg-variant)', color: 'var( --color-white)' }}
    icon={<MdWork/>}
  ><h3 className="vertical-timeline-element-title">TOKEN LENGTH</h3>
  {/* <h4 className="vertical-timeline-element-subtitle">SDE Intern</h4> */}
    <p>
    Users can adjust token length to control the length of generated responses, allowing for customization based on specific requirements or constraints.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2"
    iconStyle={{ background: 'var( --color-bg-variant)', color: 'var( --color-white)' }}
    icon={<FaUniversity/>}
  ><h3 className="vertical-timeline-element-title">TEMPERATURE</h3>
{/* <h4 className="vertical-timeline-element-subtitle">Bangalore, Karnataka</h4> */}
    <p>
    Users can adjust the temp to control response randomness. Higher values (e.g., 0.5) produce diverse but less focused responses, while low values (e.g., 0.1) result in more focused but less varied answers.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="3"
    iconStyle={{ background: 'var( --color-bg-variant)', color: 'var( --color-white)' }}
    icon={<MdSchool/>}
  ><h3 className="vertical-timeline-element-title">DATASET</h3>
  {/* <h4 className="vertical-timeline-element-subtitle">VisakhaPatnam,Andhra Pradesh</h4> */}
    <p>
    Empowering users with knowledge, our feature section utilizes a dataset of fundamental legal rights, ensuring comprehensive understanding and informed decision-making.
    </p>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018"
    iconStyle={{ background: 'var( --color-bg-variant)', color: 'var( --color-white)' }}
    icon={<MdSchool/>}
  ><h3 className="vertical-timeline-element-title">DAV Public School</h3>
  <h4 className="vertical-timeline-element-subtitle">Aurangabad, Bihar</h4>
    <p>
    High School | Percentage: 92.2%
    </p>
  </VerticalTimelineElement> */}
  </VerticalTimeline>
    </div>
  )
}

export default Journey