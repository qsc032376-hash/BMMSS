import React from 'react';
import { Scroll, Shield, Book, Gavel } from 'lucide-react';

const Constitution: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
          The Constitution
        </h1>
        <p className="text-xl text-gray-500">
          of the Buckeyes Mathematical Modeling and Simulation Society
        </p>
        <div className="mt-6 flex justify-center">
          <Scroll className="h-12 w-12 text-[#BB0000]" />
        </div>
      </div>

      <div className="space-y-12">
        {/* Article I */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-[#BB0000] pb-2 mb-6 flex items-center">
            Article I: Name, Identity, and Official Branding
          </h2>
          <div className="prose prose-red text-gray-700">
            <p className="mb-4">
              The official name of this organization shall be the <strong>Buckeyes Mathematical Modeling and Simulation Society</strong>, hereafter referred to as <strong>BMMSS</strong>. The organization is established as a premier student-led academic and professional society at The Ohio State University (OSU). Its identity is defined by the rigorous synthesis of advanced mathematical theory, theoretical physics, and high-performance computational simulation. BMMSS operates as an interdisciplinary nexus, bridging the gap between the College of Arts and Sciences (specifically the Department of Mathematics and Department of Physics) and the College of Engineering.
            </p>
            <p>
              The society shall maintain a distinct visual identity that reflects its commitment to both the university’s heritage and the precision of the mathematical sciences. The official seal of BMMSS shall feature <strong>Brutus Buckeye</strong> at the center, signifying our pride as Buckeyes, surrounded by symbolic representations of modeling—such as phase-space trajectories, complex network nodes, or stylized atomic orbits. This branding, alongside the acronym BMMSS, remains the intellectual property of the organization under the guidelines provided by the OSU Student Organization Services. All official communications, including digital publications, research papers, and competition entries, must utilize standardized BMMSS headers to ensure a professional and unified representation of the university. The society shall utilize a "Technical Scarlet" and "Digital Gray" color palette to signify the intersection of Ohio State tradition and modern technological innovation.
            </p>
          </div>
        </section>

        {/* Article II */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-[#BB0000] pb-2 mb-6">
            Article II: Purpose, Mission, and Core Objectives
          </h2>
          <div className="prose prose-red text-gray-700">
            <p className="mb-4">
              The mission of BMMSS is to establish a rigorous, high-level intellectual environment that empowers students to transcend traditional classroom boundaries. Our purpose is defined by four core strategic pillars:
            </p>
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>Rigorous Academic Inquiry:</strong> BMMSS exists to provide a laboratory for students to apply abstract mathematical theorems to complex, open-ended, real-world problems. We aim to move beyond "toy problems" into the realm of stochastic processes, non-linear dynamics, and multi-scale modeling. By engaging with these challenges, members develop the critical thinking skills necessary to handle the ambiguity of real-world data and physical systems.
              </li>
              <li>
                <strong>Technical Mastery and Software Literacy:</strong> We recognize that modern modeling is inseparable from computation. Therefore, a primary objective of BMMSS is to provide systematic, peer-led training in industry-standard tools such as MATLAB, Mathematica, and R, alongside programming languages including Python (specifically the NumPy, SciPy, and Matplotlib stacks) and C++. Furthermore, the society mandates the use of LaTeX for all formal publications to ensure that our members are prepared for the standards of professional academia.
              </li>
              <li>
                <strong>Global Competitive Presence:</strong> BMMSS serves as the official training ground for Ohio State’s participation in the COMAP Mathematical Contest in Modeling (MCM/ICM) and other international research symposiums. We aim to elevate the university’s global ranking in these competitions by fostering a year-round culture of simulation and white-paper drafting.
              </li>
              <li>
                <strong>Quantitative Leadership:</strong> We champion a culture of data-driven decision-making across the university. BMMSS graduates should be recognized as leaders who can translate complex physical phenomena into actionable mathematical insights, preparing them for elite roles in national laboratories and advanced engineering firms.
              </li>
            </ol>
          </div>
        </section>

        {/* Article III */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-[#BB0000] pb-2 mb-6">
            Article III: Membership, Standing, and University Compliance
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold text-lg mb-2">Section 1: Eligibility and Inclusion</h3>
              <p>
                Membership in BMMSS is open to all currently enrolled undergraduate and graduate students at The Ohio State University, regardless of their major, department, or prior experience level. While the society is inherently technical, we value diversity of thought and encourage students from the humanities, social sciences, and arts to join if they possess an interest in the quantitative modeling of complex systems. There are no initial GPA requirements for general membership, though certain competition teams may implement merit-based selection criteria for elite divisions.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Section 2: Active Standing and Participation</h3>
              <p>
                To ensure the society remains a vibrant community, "Active Member" status is defined by rigorous participation requirements. An Active Member must attend a minimum of 50% of the General Assemblies and 50% of the Technical Workshops held during a single academic semester. Furthermore, Active Members must contribute to at least one society-sanctioned research project, simulation group, or competition team. Only Active Members in good standing with the university are permitted to vote in the General Assembly, hold executive office, or receive society funding for competition fees and travel subsidies.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Section 3: Mandatory University Clauses</h3>
              <p>
                BMMSS strictly adheres to the University Non-Discrimination and Sexual Misconduct policies. We are committed to maintaining a safe, inclusive, and professional environment free of harassment and discrimination. As a STEM-focused organization, we proactively work to ensure that all students, regardless of age, ancestry, color, disability, gender identity or expression, genetic information, HIV/AIDS status, military status, national origin, race, religion, sex, sexual orientation, or protected veteran status, have equitable access to our computational resources, leadership roles, and educational workshops. Any member found in violation of the Ohio State Student Code of Conduct will be subject to immediate review and potential expulsion from the society.
              </p>
            </div>
          </div>
        </section>

        {/* Article IV */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-[#BB0000] pb-2 mb-6">
            Article IV: The Leadership Hierarchy (Executive Board & Advisor)
          </h2>
          <p className="mb-4 text-gray-700">The leadership of BMMSS consists of an Executive Board (E-Board) of nine student officers and one Faculty Advisor, each tasked with maintaining the society’s operational integrity.</p>
          <ul className="space-y-4 text-gray-700">
            <li><strong>1. Faculty Advisor (1):</strong> Must be a full-time OSU faculty/staff member. They serve as the "Permanent Secretary," providing institutional memory. They review technical accuracy, assist in navigating university bureaucracy (securing Math Tower labs), and act as the final signatory for official funding and registration documents. They possess "Consultative Veto Power" over actions risking the society’s legal or academic standing.</li>
            <li><strong>2. President (1):</strong> Chief Executive Officer. Responsible for long-term strategic vision, presiding over E-Board and GA sessions, and acting as the primary representative to the Mathematics Department. The President holds tie-breaking authority in E-Board votes and oversees officer performance.</li>
            <li><strong>3. Vice President - Internal (1):</strong> Chief Operations Officer. Manages the "Internal Ecosystem," including member retention, project team formations, and intra-club conflict resolution. They oversee the "Member-to-Project" matching system.</li>
            <li><strong>4. Vice President - External (1):</strong> Chief Relations Officer. Manages partnerships with other departments (Physics, CSE, Engineering), industrial sponsors, and guest speakers. They coordinate site visits to research facilities and manage the alumni network.</li>
            <li><strong>5. Secretary (1):</strong> Chief Information Officer. Maintains the official roster, records detailed meeting minutes, manages room reservations via the University Registrar, and oversees the "Weekly Simulation Dispatch" newsletter.</li>
            <li><strong>6. Treasurer (1):</strong> Chief Financial Officer. Manages the bank account, USG funding applications, and prepares the "Annual Financial Forecast." They must audit all expenditures and provide monthly transparency reports to the E-Board.</li>
            <li><strong>7. Tech Admin - Programmer (1):</strong> Lead Architect. Curates the technical curriculum, leads workshops on modeling algorithms (Python/MATLAB), and manages the society’s GitHub repository and documentation standards.</li>
            <li><strong>8. Tech Admin - Webmaster (1):</strong> Chief Digital Officer. Responsible for the architecture and security of the BMMSS website, simulation visualization hosting, and digital communication tools (Discord/Slack).</li>
            <li><strong>9. Human Resources Director (1):</strong> Chief People Officer. Responsible for the internal well-being of the society, mediating conflicts, fostering diversity, and managing recruitment pipelines to ensure interdisciplinary integration (e.g., Sociology and Humanities).</li>
            <li><strong>10. Minister of Propaganda (1):</strong> Chief Communications Officer. Directs the visual identity and narrative of BMMSS. Responsible for high-fidelity graphic design, social media growth, and large-scale recruitment campaigns (e.g., Involvement Fair).</li>
          </ul>
        </section>

        {/* Article V */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-[#BB0000] pb-2 mb-6">
            Article V: The General Assembly (The Bi-Annual Session)
          </h2>
          <p className="mb-4 text-gray-700">The General Assembly (GA) is the supreme governing body of BMMSS, consisting of all Active Members.</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-700">
            <li><strong>Frequency and Timing:</strong> The GA shall convene twice per academic year: once in September (Autumn Session) to ratify the annual roadmap and project groups, and once in February (Spring Session) to review competition performance and budget status.</li>
            <li><strong>Mandatory Reporting:</strong> Every member of the Executive Board must deliver a formal work report to the GA. These reports must be quantifiable (e.g., number of workshops held, funds raised, code repositories updated). This ensures absolute transparency between leadership and the general body.</li>
            <li><strong>Deliberation and Oversight:</strong> The GA shall debate the performance of each officer. Members reserve the constitutional right to question officers on their adherence to the society’s mission. Following the reports, a mandatory Q&A session allows Active Members to challenge E-Board decisions. The GA concludes with a vote to accept or reject the reports; a rejection triggers a mandatory review of that officer’s role by the Faculty Advisor.</li>
          </ol>
        </section>

        {/* Article VI */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-[#BB0000] pb-2 mb-6">
            Article VI: Accountability and Impeachment
          </h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-700">
            <li><strong>Review of Duty:</strong> Any Active Member may introduce a motion of "No Confidence" if an officer is found to be in dereliction of duty, mismanaging funds, or failing to meet the reporting standards of the General Assembly.</li>
            <li><strong>Impeachment Process:</strong> Once a motion is seconded by five Active Members, a judicial hearing is scheduled within seven days, presided over by the Advisor. The officer in question is granted the "Right of Defense" to present evidence and respond to grievances.</li>
            <li><strong>Final Vote:</strong> An officer may be removed from their position if a motion for impeachment is supported by a two-thirds (2/3) majority vote of the General Assembly via secret ballot. Grounds for removal include, but are not limited to: financial negligence, failure to attend three consecutive E-Board meetings without notice, or violation of the University Code of Student Conduct. This process ensures that leadership positions are treated as a high-stakes responsibility.</li>
          </ol>
        </section>

        {/* Article VII */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-[#BB0000] pb-2 mb-6">
            Article VII: Mid-Term Appointments and Vacancies
          </h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-700">
            <li><strong>Vacancies:</strong> Should a position become vacant due to resignation or impeachment, the President must announce the vacancy to the entire membership within 48 hours. If the Presidency is vacated, the VP-Internal shall immediately assume the role of "Acting President."</li>
            <li><strong>By-Elections:</strong> A special session of the General Assembly shall be called within 14 days to fill the vacancy. All candidates must undergo a "Technical Competency Review" by the remaining E-Board to ensure they possess the skills required for the specific role (especially for Tech Admin and Treasurer roles).</li>
            <li><strong>Interim Governance:</strong> The President may appoint an "Acting Officer" for a maximum of 14 days to maintain essential services (e.g., website hosting or treasury access) until the GA vote is concluded. This ensures that the society's infrastructure remains operational during leadership transitions.</li>
          </ol>
        </section>

        {/* Article VIII */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-[#BB0000] pb-2 mb-6">
            Article VIII: Project Standards and Technical Ethics
          </h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-700">
            <li><strong>Code of Ethics:</strong> All models and simulations produced under the BMMSS name must adhere to strict academic integrity standards. Plagiarism in code or mathematical theory results in immediate expulsion and a report to the OSU Committee on Academic Misconduct (COAM).</li>
            <li><strong>Open Source and Documentation:</strong> To benefit the OSU community, the Tech Admin - Programmer shall ensure project code is documented and stored in the BMMSS Open Repository. This initiative democratizes knowledge and ensures the society’s work survives long-term.</li>
            <li><strong>Competition Preparation:</strong> The society shall dedicate the period from November to February specifically to "Competitive Modeling Mode." This includes intensive 48-hour mock sessions and rigorous peer-review of paper drafts to ensure BMMSS maintains its reputation as a global competitor in the MCM/ICM.</li>
          </ol>
        </section>

        {/* Article IX */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-[#BB0000] pb-2 mb-6">
            Article IX: Financial Governance and Transparency
          </h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-700">
            <li><strong>Transparency:</strong> The Treasurer must maintain a "Live Ledger" accessible to the E-Board. A condensed version, the "Quarterly Financial Snapshot," must be presented to the GA bi-annually. This ensures members know exactly how their dues and USG grants are utilized.</li>
            <li><strong>Expenditure Authority:</strong> We implement a tiered approval system. Routine spends under $50 require Treasurer approval. Spends between $50 and $200 require joint President-Treasurer approval. Any capital expenditure exceeding $200 (e.g., server hardware or high-end licenses) requires a majority vote of the full E-Board and a "Value Assessment."</li>
            <li><strong>Audit:</strong> At the end of each Spring semester, the Faculty Advisor shall conduct a formal audit of the society’s accounts. The audit report must be filed with the OSU Student Organization Finance Office (SOFO) to ensure compliance with university regulations and to facilitate a smooth handover to the next Treasurer.</li>
          </ol>
        </section>

        {/* Article X */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-[#BB0000] pb-2 mb-6">
            Article X: Amendments and Dissolution
          </h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-700">
            <li><strong>Amendments:</strong> This constitution is a living document. Amendments may be proposed by any Active Member and require a written rationale. Adoption requires a two-thirds (2/3) majority vote of the General Assembly during the September or February sessions.</li>
            <li><strong>Dissolution Protocol:</strong> Dissolution requires a three-fourths (3/4) vote of the GA and must follow all OSU exit procedures. In the event of dissolution, all physical assets purchased with university funds shall be returned to the OSU Department of Mathematics. Digital repositories shall be placed into a public "Legacy Archive" to ensure the scientific community can continue to benefit from BMMSS research. Remaining private funds shall be donated to a scholarship fund within the Department of Mathematics.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Constitution;