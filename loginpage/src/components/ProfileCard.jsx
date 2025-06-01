import profileImage from '../assets/photo.jpg';
import './profile.css'

function ProfileCard() {
  return (
    <>
    <div className="resume">
         <header className="header">
           <h1>Vanshika Thakur</h1>
           <p>Email: <a href="mailto:vanshikathakur930@gmail.com">vanshikthakur930@@gmail.com</a></p>
           <p>Phone: +91 86299-02299 | Shivpuri, Madhya Pradesh</p>
           <div>
            <img src={profileImage} alt="photo" className="profile-img"></img>   
           </div>
         </header>
   
         <section>
           <h2 className="section-title">Summary</h2>
           <p>
             To work with an organization where I can learn new skills and use my abilities to achieve organizational goals as well as personal growth.
           </p>
         </section>
   
         <section>
           <h2 className="section-title">Training Experience</h2>
           <ul>
             <li>Web Developer – Indo German Tool Room, Indore (01–15 March 2023)</li>
             <li>AI For Future Workshop – Intel Digital Readiness (May 2024)</li>
             <li>Full Stack Developer – Ezulix Pvt. Ltd., Jaipur (24 July – 20 Sep 2024)</li>
           </ul>
         </section>
   
         <section>
           <h2 className="section-title">Education</h2>
           <ul>
             <li>B.Tech in CSE – UIT RGPV, Shivpuri (Nov 2021 – June 2025) | CGPA: 7.51</li>
             <li>Higher Secondary – Rangarh’s Rainbow H.S. School (2021) | 87.8%</li>
             <li>High School – Rangarh’s Rainbow H.S. School (2019) | 84.0%</li>
           </ul>
         </section>
   
         <section>
           <h2 className="section-title">Skills & Hobbies</h2>
           <div className="skills-grid">
             <div className="skill-item">Full Stack Development</div>
             <div className="skill-item">Basic Python</div>
             <div className="skill-item">C/C++</div>
             <div className="skill-item">SQL</div>
             <div className="skill-item">MS Office</div>
             <div className="skill-item">Leadership</div>
             <div className="skill-item">Teamwork</div>
             <div className="skill-item">Art & Craft</div>
           </div>
         </section>
   
         <section>
           <h2 className="section-title">Project</h2>
           <div className="project">
             <h3>Source Code Website</h3>
             <ul>
               <li>Offers a wide range of source codes and templates for website design</li>
               <li>Resources for HTML, CSS, JS, and various frameworks</li>
               <li>Responsive templates and search functionality</li>
               <li>Updated with trending elements</li>
             </ul>
           </div>
         </section>
   
         <section>
           <h2 className="section-title">Certifications</h2>
           <ul className="certifications">
             <li>Web Development – MSME, IGTR Indore (Mar 2021)</li>
             <li>C++ Programming – Vasureta-ULSA (June 2023)</li>
             <li>SQL – Udemy (April 2023)</li>
             <li>Python – GUVI, IITM R. Park (Aug 2023)</li>
             <li>TCS iON Career Edge – (May 2023)</li>
             <li>E-Science & E-Research – BVICAM, New Delhi (May 2023)</li>
             <li>Python Essentials 1 & 2 – Cisco (Aug 2023)</li>
           </ul>
         </section>
       </div>
    
    </>
  );
}
export default ProfileCard;