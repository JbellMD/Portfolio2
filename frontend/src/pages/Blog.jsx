import React from 'react';
import '../components/Blog.css';
import '../App.css';

const Blog = () => {
    const entries = [
        {
            date: "August 2024",
            content: "This month was a milestone, as I earned the IBM Full Stack Developer Professional Certificate! This certification has not only validated my skills but also given me confidence in my ability to navigate the full stack. I’m now looking forward to deepening my understanding of backend and cloud technologies as I prepare for more advanced projects. My next goal is to start working on containerization and orchestration with Kubernetes and Docker, aiming to master deployment strategies in cloud environments."
        },
        {
            date: "April 2024",
            content: "Exciting news: I’ve started the AWS Cloud Institute program full-time, committing myself to a year-long journey to become a certified Cloud Developer. The curriculum is challenging but engaging, with a focus on cloud infrastructure, serverless applications, and security fundamentals. Balancing the AWS program and continued studies in Python and system design has been tough, but the structured environment keeps me motivated. I look forward to hands-on labs and gaining practical skills in real-world cloud applications."
        },
        {
            date: "January 2024",
            content: "To kick off the new year, I’ve intensified my learning with Coursera courses covering cloud platforms from AWS, Microsoft, Google, and IBM. This multi-cloud approach helps me understand the nuances of each service. I’m also preparing to enter the AWS Cloud Institute and expect a steep learning curve, especially with new topics like IAM policies and Lambda functions. With full-time study, I’m ready to dive into cloud computing fundamentals and the intricacies of system design."
        },
        {
            date: "December 2023",
            content: "My studies reached a new high as I completed several advanced Udemy courses and took on projects that brought together JavaScript, TypeScript, and React. Working full-time on my studies, I practiced RESTful APIs, built basic front-end applications, and grew more confident in handling asynchronous code. These months of study solidified my understanding of JavaScript and taught me invaluable debugging techniques. Next, I’m excited to start delving into back-end development and expand my knowledge of frameworks like Express and Django."
        },
        {
            date: "August 2023",
            content: "After a few months of juggling work and study, I decided to quit my job to focus fully on my development journey. I resumed my learning with renewed dedication and more structured study plans from Udemy. JavaScript has become second nature to me, and I’m growing more comfortable with React. The biggest challenge has been staying disciplined and covering all aspects of full-stack development, but having a full-time schedule has been transformative. I look forward to mastering the art of front-end and eventually back-end development."
        },
        {
            date: "July 2023",
            content: "To re-energize my studies, I signed up for some highly-rated courses on Udemy. The structured curriculum and guided exercises have helped me better understand JavaScript, React, and even introduced me to TypeScript. Learning on a consistent basis has given me a sense of direction and purpose. While balancing study with a full-time job is still challenging, I’m optimistic that consistent progress will get me where I need to be. I’m particularly excited about building small projects as I work through each course."
        },
        {
            date: "March - June 2023",
            content: "These months were challenging as my full-time job took up most of my energy. Progress was slower than I’d hoped, with limited time for coding practice. Despite the slow pace, I kept up with JavaScript fundamentals and practiced a bit with TypeScript and React. This period taught me the importance of time management and resilience. I look forward to finding a more structured approach and taking advantage of any available free time to build my skills."
        },
        {
            date: "February 2023",
            content: "Building on my initial enthusiasm, I dove deeper into JavaScript and started experimenting with TypeScript. I also began learning React, which opened up a new world of possibilities for interactive web applications. Understanding the component-based structure of React was challenging but rewarding. I’m excited about building small projects to apply what I’ve learned, even though mastering the concepts is taking time. Next, I plan to work on consolidating my JavaScript skills and exploring more of React’s ecosystem."
        },
        {
            date: "January 2023",
            content: "This month marked the beginning of my coding journey as I took my first steps into JavaScript, HTML, and CSS, learning independently. Starting from scratch was daunting, but understanding the basics of web development was both exciting and empowering. The biggest challenge was figuring out where to start and how to approach self-study. My goal moving forward is to build a solid foundation in JavaScript, which will serve as a stepping stone for more advanced technologies."
        }
    ];

    return (
        <div className="page-background"> {/* Apply the background effect */}
            <div className="page-content blog"> {/* Content wrapper */}
                <h1>My Journey so far...</h1>
                {entries.map((entry, index) => (
                    <div key={index} className="blog-entry">
                        <h2>{entry.date}</h2>
                        <p>{entry.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
