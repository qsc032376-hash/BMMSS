import React from 'react';
import { Scroll, Shield, Book, Gavel, FileText, Scale } from 'lucide-react';

const Constitution: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BB0000] to-gray-400 rounded-full blur opacity-25"></div>
            <div className="relative bg-white p-4 rounded-full shadow-lg">
              <Scroll className="h-10 w-10 text-[#BB0000]" />
            </div>
          </div>
        </div>
        <h1 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-2">
          Official Document
        </h1>
        <h2 className="text-4xl font-black text-gray-900 sm:text-5xl mb-4 tracking-tight">
          The Constitution
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          of the Buckeyes Mathematical Modeling and Simulation Society
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gray-200"></span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Effective 2026-2027 Academic Year</span>
          <span className="h-px w-12 bg-gray-200"></span>
        </div>
      </div>

      <div className="space-y-16">
        {/* Article I */}
        <section className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#BB0000] rounded-full opacity-20"></div>
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-[#BB0000]">Article I.</span> Name of Organization
          </h2>
          <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
            <p>
              The official name of this organization shall be the <strong>Buckeyes Mathematical Modeling and Simulation Society</strong>, hereafter referred to as <strong>BMMSS</strong>.
            </p>
          </div>
        </section>

        {/* Article II */}
        <section className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#BB0000] rounded-full opacity-20"></div>
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-[#BB0000]">Article II.</span> Organization Purpose
          </h2>
          <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              The purpose of BMMSS is to cultivate a community of "Real-World Problem Solvers" at The Ohio State University. The society aims to bridge the gap between theoretical mathematical education and practical industrial application by:
            </p>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-[#BB0000] flex items-center justify-center font-bold text-xs">1</span>
                <span>Developing computational models to solve tangible campus and community challenges.</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-[#BB0000] flex items-center justify-center font-bold text-xs">2</span>
                <span>Providing a collaborative platform for students of all levels (undergraduate and graduate) to master simulation tools and mathematical rigor.</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-[#BB0000] flex items-center justify-center font-bold text-xs">3</span>
                <span>Fostering interdisciplinary innovation through a mentorship-driven research environment.</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Article III */}
        <section className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#BB0000] rounded-full opacity-20"></div>
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-[#BB0000]">Article III.</span> University Regulations
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                Section 1 — Non-Discrimination Statement:
              </h3>
              <p>
                This organization does not discriminate on the basis of age, ancestry, color, disability, gender identity or expression, genetic information, HIV/AIDS status, military status, national origin, race, religion, sex, sexual orientation, protected veteran status, or any other bases under the law, in its activities, programs, admission, and employment.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                Section 2 — Sexual Misconduct Policy:
              </h3>
              <p>
                As a student organization at The Ohio State University, BMMSS expects its members to conduct themselves in a manner that maintains an environment free from sexual misconduct. All members are responsible for adhering to the University’s Policy on Sexual Misconduct.
              </p>
            </div>
          </div>
        </section>

        {/* Article IV */}
        <section className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#BB0000] rounded-full opacity-20"></div>
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-[#BB0000]">Article IV.</span> Membership
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Section 1 — Membership Eligibility:</h3>
              <p>
                Membership is open to all currently enrolled students at The Ohio State University. While the focus is on Mathematics, Engineering, and Data Science, BMMSS encourages interdisciplinary participation.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Section 2 — Member Selection:</h3>
              <p>
                While general membership is open, participation in specific Project Teams or Executive Leadership roles may require a separate application or selection process to ensure technical alignment and project continuity.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Section 3 — Membership Timeline:</h3>
              <p>
                General membership remains active as long as the student is enrolled at the University and adheres to the code of conduct.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Section 4 — Member Removal:</h3>
              <p>
                Members may be removed for conduct violating University regulations or for consistent failure to contribute to assigned projects. Removal requires a two-thirds (2/3) majority vote of the Executive Board after the member has been given an opportunity to address the concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Article V */}
        <section className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#BB0000] rounded-full opacity-20"></div>
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-[#BB0000]">Article V.</span> Advisor
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Section 1 — Advisor Duties and Responsibilities:</h3>
              <p>
                The Advisor shall provide general guidance, academic support, and mentorship to the organization. The Advisor serves as a resource for the technical direction of the society and ensures that activities align with the University’s educational mission. The Advisor’s role is strictly advisory and does not include voting rights in organizational decisions.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Section 2 — Advisor Term:</h3>
              <p>
                The Advisor shall serve an indefinite term, reviewed annually, as long as both the Advisor and the Executive Board find the partnership mutually beneficial.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Section 3 — Advisor Selection:</h3>
              <p>
                The Advisor must be a full-time member of the University faculty or Administrative & Professional staff. Selection is made by the President and confirmed by the Executive Board.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Section 4 — Advisor Replacement:</h3>
              <p>
                Should the Advisor be unable to fulfill their duties, the Executive Board will seek a replacement through the Mathematics Department or related STEM faculties.
              </p>
            </div>
          </div>
        </section>

        {/* Article VI */}
        <section className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#BB0000] rounded-full opacity-20"></div>
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-[#BB0000]">Article VI.</span> Organization Leadership
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Section 1 — Officer Positions:</h3>
              <p className="mb-6">
                The Executive Board shall consist of the following seven (7) core positions, each with distinct mandates to support the society’s operational and technical excellence.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#BB0000]" />
                    Primary Leader (President): *
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Serves as the visionary and legal head of BMMSS.</li>
                    <li>Leads strategic planning and acts as the primary liaison with the Faculty Advisor and corporate sponsors (e.g., Coke, Siemens).</li>
                    <li>Ensures all projects align with the "Real-World Problem Solver" mission.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#BB0000]" />
                    Secondary Leader (Vice President):
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Oversees internal operations and ensures project timelines are met.</li>
                    <li>Manages the recruitment and integration of new members.</li>
                    <li>Assumes the President's duties in their absence.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                    <Book className="w-4 h-4 text-[#BB0000]" />
                    Treasurer:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Handles all fiscal matters, including university funding requests, corporate sponsorships, and budget allocations.</li>
                    <li>Maintains the organization’s bank account and ensures financial transparency in accordance with OSU’s Council on Student Affairs (CSA) guidelines.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-[#BB0000]" />
                    Tech Leader: Modeling Leader:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Ensures the mathematical rigor and technical quality of all research projects.</li>
                    <li>Mentors junior members and coordinates the "Mentorship Model," connecting senior leads with underclassmen.</li>
                    <li>Oversees the technical stack (e.g., Python, MATLAB, SimPy).</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#BB0000]" />
                    Tech Leader: Webmaster:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Designs and maintains the official BMMSS digital platform and internal project database.</li>
                    <li>Manages the organization’s GitHub repository and digital project showcases.</li>
                    <li>Ensures the security and accessibility of internal modeling tools.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#BB0000]" />
                    Director of Public Relations (PR):
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Manages the BMMSS brand, social media presence, and campus outreach.</li>
                    <li>Drafts sponsorship decks and coordinates with the President on industry engagement.</li>
                    <li>Leads marketing efforts for recruitment and the annual symposium.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#BB0000]" />
                    Clerk:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Maintains all official records, including meeting minutes, membership rosters, and constitutional updates.</li>
                    <li>Manages the society’s calendar and coordinates logistics for weekly research workshops.</li>
                    <li>Ensures compliance with all university administrative deadlines.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Section 2 — Officer Eligibility:</h3>
              <p>
                To be eligible for an Executive Board position, a student must be a currently enrolled student at The Ohio State University and maintain a minimum cumulative GPA as required by the university. Candidates for Tech Leader positions must demonstrate proficiency in relevant modeling or digital tools.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Section 3 — Officer Selection Process:</h3>
              <p>
                Officers shall be elected annually during the Spring semester for the following academic year. Candidates must submit a "Project Vision Statement" detailing how they will advance the society's mission. Elections are conducted via a majority vote of active members. For the inaugural 2026-2027 year, the Founding Board shall be appointed by the President in consultation with the Advisor.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Section 4 — Officer Removal:</h3>
              <p>
                Any officer may be removed from their position for failure to fulfill their duties or for conduct detrimental to the organization. Removal requires a two-thirds (2/3) majority vote of the Executive Board and consultation with the Advisor.
              </p>
            </div>
          </div>
        </section>

        {/* Article VII */}
        <section className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#BB0000] rounded-full opacity-20"></div>
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-[#BB0000]">Article VII.</span> Organization Dissolution
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Section 1 — Dissolution Requirements:</h3>
              <p>
                Dissolution of BMMSS requires a unanimous vote of the Executive Board and consultation with the Advisor.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Section 2 — Dissolution Procedures, including Assets and Debts:</h3>
              <p>
                Upon dissolution, any remaining organizational funds shall be returned to the <strong>Department of Mathematics</strong> or the primary sponsoring department. All outstanding debts must be settled using the organization's current assets before the final closure of the account.
              </p>
            </div>
          </div>
        </section>

        {/* Article VIII */}
        <section className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#BB0000] rounded-full opacity-20"></div>
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-[#BB0000]">Article VIII.</span> Constitutional Amendments
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Section 1 — Amendment Process:</h3>
              <p className="mb-6">Proposed amendments must be submitted in writing to the Executive Board. Enacting an amendment requires:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded bg-red-50 text-[#BB0000] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold">●</span>
                  </div>
                  <div>
                    <span className="font-bold">Executive Approval:</span> A two-thirds (2/3) majority vote of the active Executive Board.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded bg-red-50 text-[#BB0000] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold">●</span>
                  </div>
                  <div>
                    <span className="font-bold">Membership Ratification:</span> A majority vote of the general membership present at a scheduled meeting, provided that a quorum of at least 25% of the total active membership is represented.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded bg-red-50 text-[#BB0000] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold">●</span>
                  </div>
                  <div>
                    <span className="font-bold">Advisor Concurrence:</span> Review and non-objection by the Advisor to ensure alignment with University and Departmental policies.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Signature Placeholder */}
      <div className="mt-24 pt-12 border-t border-gray-100 grid grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="h-px bg-gray-300 w-full"></div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Sicheng Qian, President</p>
        </div>
        <div className="space-y-4">
          <div className="h-px bg-gray-300 w-full"></div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Wonjun Lee, Faculty Advisor</p>
        </div>
      </div>
    </div>
  );
};

export default Constitution;