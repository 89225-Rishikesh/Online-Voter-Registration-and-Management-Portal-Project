// export default function VoterEducation() {
//   const educationContent = [
//     {
//       type: "video",
//       title: "How to Vote: Complete Guide",
//       description: "Step-by-step guide on the voting process",
//       icon: "📹",
//       content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     },
//     {
//       type: "case-study",
//       title: "2019 General Elections: A Case Study",
//       description: "Analysis of the largest democratic exercise",
//       icon: "📊",
//       content: "Detailed analysis of voter turnout, demographics, and electoral outcomes...",
//     },
//     {
//       type: "guidelines",
//       title: "Do's and Don'ts for Voters",
//       description: "Important guidelines for responsible voting",
//       icon: "📋",
//       content: "Essential rules and regulations every voter should know...",
//     },
//   ]

//   return (
//     <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
//       <div className="container">
//         <div className="text-center mb-5">
//           <h2 className="display-4 fw-bold mb-3" style={{ color: "#FF9933" }}>
//             Voter Education Center
//           </h2>
//           <p className="lead text-muted">Learn about voting process and electoral procedures</p>
//         </div>

//         <div className="row g-4">
//           {educationContent.map((content, index) => (
//             <div className="col-lg-4" key={index}>
//               <div className="card h-100 shadow-sm border-0">
//                 <div className="card-body text-center p-4">
//                   <div className="mb-3" style={{ fontSize: "3rem" }}>
//                     {content.icon}
//                   </div>
//                   <h5 className="card-title fw-bold" style={{ color: "#138808" }}>
//                     {content.title}
//                   </h5>
//                   <p className="card-text text-muted mb-4">{content.description}</p>

//                   {content.type === "video" && (
//                     <div className="ratio ratio-16x9 mb-3">
//                       <iframe
//                         src={content.content}
//                         title={content.title}
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         className="rounded"
//                       ></iframe>
//                     </div>
//                   )}

//                   <button className="btn btn-outline-primary">
//                     {content.type === "video" ? "Watch Video" : "Read More"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="row mt-5">
//           <div className="col-12">
//             <div className="card border-0 shadow-sm">
//               <div className="card-body p-5">
//                 <h3 className="fw-bold mb-4 text-center" style={{ color: "#FF9933" }}>
//                   Voting Guidelines
//                 </h3>
//                 <div className="row g-4">
//                   <div className="col-md-6">
//                     <h5 className="fw-bold text-success">✅ Do's</h5>
//                     <ul className="list-unstyled">
//                       <li className="mb-2">• Carry valid photo ID proof</li>
//                       <li className="mb-2">• Check your name in voter list</li>
//                       <li className="mb-2">• Vote during polling hours</li>
//                       <li className="mb-2">• Keep your vote secret</li>
//                       <li className="mb-2">• Follow COVID-19 protocols</li>
//                     </ul>
//                   </div>
//                   <div className="col-md-6">
//                     <h5 className="fw-bold text-danger">❌ Don'ts</h5>
//                     <ul className="list-unstyled">
//                       <li className="mb-2">• Don't carry mobile phones inside</li>
//                       <li className="mb-2">• Don't influence other voters</li>
//                       <li className="mb-2">• Don't take photos of ballot</li>
//                       <li className="mb-2">• Don't vote multiple times</li>
//                       <li className="mb-2">• Don't create disturbance</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

{
// export default function VoterEducation() {
//   const educationContent = [
//     {
//       type: "video",
//       title: "How to Vote: Complete Guide",
//       description: "Step-by-step guide on the voting process",
//       icon: "📹",
//       content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     },
//     {
//       type: "case-study",
//       title: "2019 General Elections: A Case Study",
//       description: "Analysis of the largest democratic exercise",
//       icon: "📊",
//       content: "Detailed analysis of voter turnout, demographics, and electoral outcomes...",
//     },
//     {
//       type: "guidelines",
//       title: "Do's and Don'ts for Voters",
//       description: "Important guidelines for responsible voting",
//       icon: "📋",
//       content: "Essential rules and regulations every voter should know...",
//     },
//   ];

//   const blogContent = {
//     title: "Understanding EVMs: The Backbone of Indian Elections",
//     date: "July 25, 2025, 12:20 PM IST",
//     content: "Electronic Voting Machines (EVMs) have revolutionized the electoral process in India since their introduction in 2000. These tamper-proof devices ensure faster counting and reduced human error, enhancing the integrity of elections. EVMs consist of two units: the Control Unit operated by the Presiding Officer and the Balloting Unit where voters cast their votes. Security features include a unique identification number, real-time monitoring, and post-election verification through Voter Verifiable Paper Audit Trail (VVPAT). Despite their reliability, myths about hacking persist, which the Election Commission addresses through public demonstrations and audits.",
//   };

//   const additionalVideo = {
//     type: "video",
//     title: "Democracy and Elections: The Indian Experience",
//     description: "Explore the evolution of democracy and elections in India",
//     icon: "📹",
//     content: "https://www.youtube.com/embed/3AtDnEC4zak",
//   };

//   return (
//     <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
//       <div className="container">
//         <div className="text-center mb-5">
//           <h2 className="display-4 fw-bold mb-3" style={{ color: "#FF9933" }}>
//             Voter Education Center
//           </h2>
//           <p className="lead text-muted">Learn about voting process and electoral procedures</p>
//         </div>

//         <div className="row g-4">
//           {educationContent.map((content, index) => (
//             <div className="col-lg-4" key={index}>
//               <div className="card h-100 shadow-sm border-0">
//                 <div className="card-body text-center p-4">
//                   <div className="mb-3" style={{ fontSize: "3rem" }}>
//                     {content.icon}
//                   </div>
//                   <h5 className="card-title fw-bold" style={{ color: "#138808" }}>
//                     {content.title}
//                   </h5>
//                   <p className="card-text text-muted mb-4">{content.description}</p>

//                   {content.type === "video" && (
//                     <div className="ratio ratio-16x9 mb-3">
//                       <iframe
//                         src={content.content}
//                         title={content.title}
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         className="rounded"
//                       ></iframe>
//                     </div>
//                   )}

//                   <button className="btn btn-outline-primary">
//                     {content.type === "video" ? "Watch Video" : "Read More"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//           {/* Additional Video Card */}
//           <div className="col-lg-4">
//             <div className="card h-100 shadow-sm border-0">
//               <div className="card-body text-center p-4">
//                 <div className="mb-3" style={{ fontSize: "3rem" }}>
//                   {additionalVideo.icon}
//                 </div>
//                 <h5 className="card-title fw-bold" style={{ color: "#138808" }}>
//                   {additionalVideo.title}
//                 </h5>
//                 <p className="card-text text-muted mb-4">{additionalVideo.description}</p>
//                 <div className="ratio ratio-16x9 mb-3">
//                   <iframe
//                     src={additionalVideo.content}
//                     title={additionalVideo.title}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="rounded"
//                   ></iframe>
//                 </div>
//                 <button className="btn btn-outline-primary">Watch Video</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row mt-5">
//           <div className="col-12">
//             <div className="card border-0 shadow-sm">
//               <div className="card-body p-5">
//                 <h3 className="fw-bold mb-4 text-center" style={{ color: "#FF9933" }}>
//                   Voting Guidelines
//                 </h3>
//                 <div className="row g-4">
//                   <div className="col-md-6">
//                     <h5 className="fw-bold text-success">✅ Do's</h5>
//                     <ul className="list-unstyled">
//                       <li className="mb-2">• Carry valid photo ID proof</li>
//                       <li className="mb-2">• Check your name in voter list</li>
//                       <li className="mb-2">• Vote during polling hours</li>
//                       <li className="mb-2">• Keep your vote secret</li>
//                       <li className="mb-2">• Follow COVID-19 protocols</li>
//                     </ul>
//                   </div>
//                   <div className="col-md-6">
//                     <h5 className="fw-bold text-danger">❌ Don'ts</h5>
//                     <ul className="list-unstyled">
//                       <li className="mb-2">• Don't carry mobile phones inside</li>
//                       <li className="mb-2">• Don't influence other voters</li>
//                       <li className="mb-2">• Don't take photos of ballot</li>
//                       <li className="mb-2">• Don't vote multiple times</li>
//                       <li className="mb-2">• Don't create disturbance</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Blog Section */}
//         <div className="row mt-5">
//           <div className="col-12">
//             <div className="card border-0 shadow-sm">
//               <div className="card-body p-5">
//                 <h3 className="fw-bold mb-3" style={{ color: "#FF9933" }}>
//                   Blog: {blogContent.title}
//                 </h3>
//                 <p className="text-muted mb-3">Published on {blogContent.date}</p>
//                 <p className="card-text">{blogContent.content}</p>
//                 <button className="btn btn-outline-primary mt-3">Read Full Article</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
}
export default function VoterEducation() {
  const educationContent = [
    {
      type: "video",
      title: "How to Vote: Complete Guide",
      description: "Step-by-step guide on the voting process",
      // icon: "📹",
      content: "https://www.youtube.com/embed/-ucLifzB3HM", // How To Vote In 5 Simple Steps | Lok Sabha
      link: "https://www.youtube.com/watch?v=-ucLifzB3HM"
    },
    {
      type: "case-study",
      title: "2019 General Elections: A Case Study",
      description: "Analysis of the largest democratic exercise",
      // icon: "📊",
      content:
        "Detailed analysis of voter turnout, demographics, and electoral outcomes...",
      link: "https://eci.gov.in/files/category/155-general-election-2019/"
    },
    {
      type: "guidelines",
      title: "Do's and Don'ts for Voters",
      description: "Important guidelines for responsible voting",
      // icon: "📋",
      content:
        "Essential rules and regulations every voter should know...",
      link: "https://eci.gov.in/voter/voter-guidelines/"
    }
  ];

  const blogContent = {
    title: "Understanding EVMs: The Backbone of Indian Elections",
    date: "July 25, 2025, 12:20 PM IST",
    content:
      "Electronic Voting Machines (EVMs) have revolutionized the electoral process in India since their introduction in 2000. These tamper-proof devices ensure faster counting and reduced human error, enhancing the integrity of elections. EVMs consist of two units: the Control Unit operated by the Presiding Officer and the Balloting Unit where voters cast their votes. Security features include a unique identification number, real-time monitoring, and post-election verification through Voter Verifiable Paper Audit Trail (VVPAT). Despite their reliability, myths about hacking persist, which the Election Commission addresses through public demonstrations and audits.",
    link: "https://eci.gov.in/evm/"
  };

const additionalVideo = {
    type: "video",
    title: "Indian Electoral Process Demystified",
    description: "Explains India's election process and why every vote matters.",
    // icon: "📹",
    content: "https://www.youtube.com/embed/cvm8wqoL4ZU", // For embedding in iframe
    link: "https://www.youtube.com/watch?v=cvm8wqoL4ZU" // Working video link
};


  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#FF9933" }}>
            Voter Education Center
          </h2>
          <p className="lead text-muted">Learn about voting process and electoral procedures</p>
        </div>

        <div className="row g-4">
          {[...educationContent, additionalVideo].map((content, index) => (
            <div className="col-lg-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center p-4">
                  <div className="mb-3" style={{ fontSize: "3rem" }}>
                    {content.icon}
                  </div>
                  <h5 className="card-title fw-bold" style={{ color: "#138808" }}>
                    {content.title}
                  </h5>
                  <p className="card-text text-muted mb-4">{content.description}</p>

                  {content.type === "video" && (
                    <div className="ratio ratio-16x9 mb-3">
                      <iframe
                        src={content.content}
                        title={content.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded"
                      ></iframe>
                    </div>
                  )}

                  <a
                    className="btn btn-outline-primary"
                    href={content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.type === "video" ? "Watch Video" : "Read More"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-5">
                <h3 className="fw-bold mb-4 text-center" style={{ color: "#FF9933" }}>
                  Voting Guidelines
                </h3>
                <div className="row g-4">
                  <div className="col-md-6">
                    <h5 className="fw-bold text-success">✅ Do's</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">• Carry valid photo ID proof</li>
                      <li className="mb-2">• Check your name in voter list</li>
                      <li className="mb-2">• Vote during polling hours</li>
                      <li className="mb-2">• Keep your vote secret</li>
                      <li className="mb-2">• Follow COVID-19 protocols</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5 className="fw-bold text-danger">❌ Don'ts</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">• Don't carry mobile phones inside</li>
                      <li className="mb-2">• Don't influence other voters</li>
                      <li className="mb-2">• Don't take photos of ballot</li>
                      <li className="mb-2">• Don't vote multiple times</li>
                      <li className="mb-2">• Don't create disturbance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-5">
                <h3 className="fw-bold mb-3" style={{ color: "#FF9933" }}>
                  Blog: {blogContent.title}
                </h3>
                <p className="text-muted mb-3">Published on {blogContent.date}</p>
                <p className="card-text">{blogContent.content}</p>
                <a
                  className="btn btn-outline-primary mt-3"
                  href={blogContent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
