import React from 'react';
import { User, Mail, GraduationCap, Briefcase, MapPin } from 'lucide-react';

interface LeaderProps {
  name: string;
  role: string;
  email?: string;
  desc?: string;
  isVacant?: boolean;
  affiliation?: string;
}

const LeaderCard: React.FC<LeaderProps> = ({ name, role, email, desc, isVacant, affiliation }) => {
  return (
    <div className={`rounded-xl p-6 shadow-sm border transition-all duration-300 ${
      isVacant 
        ? 'bg-gray-50 border-dashed border-gray-300 opacity-80 hover:opacity-100 hover:bg-gray-100' 
        : 'bg-white border-gray-100 shadow-md hover:shadow-lg'
    }`}>
      <div className="flex items-start space-x-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
          isVacant ? 'bg-gray-200 text-gray-400' : 'bg-red-50 text-[#BB0000]'
        }`}>
          {isVacant ? <User className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className={`font-bold text-lg ${isVacant ? 'text-gray-500 italic' : 'text-gray-900'}`}>
              {name}
            </h3>
          </div>
          <p className="text-[#BB0000] font-medium text-sm uppercase tracking-wide mb-1">{role}</p>
          
          {affiliation && (
            <div className="flex items-center text-[11px] text-gray-500 font-bold uppercase tracking-tighter mb-2">
              <MapPin className="w-3 h-3 mr-1 text-gray-400" />
              {affiliation}
            </div>
          )}

          {desc && (
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{desc}</p>
          )}

          {email && (
            <a href={`mailto:${email}`} className="flex items-center text-sm text-gray-500 hover:text-[#BB0000] transition-colors">
              <Mail className="w-4 h-4 mr-1.5" />
              {email}
            </a>
          )}
          
          {isVacant && (
            <div className="mt-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Open Position - Apply Fall 2026
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const LeadershipSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Faculty Advisor</h3>
          <LeaderCard 
            name="Wonjun Lee" 
            role="Faculty Advisor (Associate Professor)" 
            email="lee.8222@osu.edu"
            affiliation="College of Arts and Sciences, Dept. of Mathematics"
            desc="Functions as the 'Permanent Secretary' providing institutional memory. Acts as the final signatory for official documents and holds Consultative Veto Power over actions risking the society's standing."
          />
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Executive Board (E-Board)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <LeaderCard 
              name="Sicheng Qian" 
              role="Primary Leader (President)" 
              email="qian.917@osu.edu"
              affiliation="College of Arts and Sciences, Dept. of Mathematics"
              desc="Serves as the visionary and legal head of BMMSS. Leads strategic planning and acts as the primary liaison with the Faculty Advisor and corporate sponsors."
            />
             <LeaderCard 
               name="Xingji Tao" 
               role="Secondary Leader (Vice President)" 
               email="tao.673@osu.edu"
               affiliation="College of Arts and Sciences, Dept. of Mathematics"
               desc="Oversees internal operations, ensures project timelines are met, and manages the recruitment and integration of new members."
             />
             <LeaderCard 
               name="Renee Cai" 
               role="Secondary Leader (Vice President)" 
               email="cai.1374@osu.edu"
               affiliation="College of Engineering, Dept. of Computer Science and Engineering"
               desc="Supports organizational expansion and technical integration between simulation projects and software infrastructure."
             />
             <LeaderCard 
               name="Junrui Yu" 
               role="Treasurer" 
               email="yu.4547@osu.edu"
               affiliation="College of Arts and Sciences, Dept. of Mathematics"
               desc="Handles all fiscal matters, including university funding requests, corporate sponsorships, and budget allocations. Maintains the organization's bank account."
             />
             <LeaderCard 
               name="Areeb Chowdhury" 
               role="Director of Engineering Simulation" 
               email="chowdhury.263@osu.edu"
               affiliation="College of Engineering, TBD"
               desc="Leads the society's engineering-focused simulation initiatives, bridging high-level physics with computational engineering models."
             />
             <LeaderCard 
               name="Xi Wang" 
               role="Tech Leader: Webmaster" 
               email="wang.20299@osu.edu"
               affiliation="College of Engineering, Dept. of Computer Science and Engineering"
               desc="Designs and maintains the official BMMSS digital platform, internal project database, organization GitHub repository, and manages the society's official email."
             />
             <LeaderCard 
               name="Leo Sun" 
               role="Tech Leader: Modeling Leader" 
               email="sun.3936@osu.edu"
               affiliation="College of Engineering, Dept. of Electrical and Computer Engineering"
               desc="Ensures mathematical rigor and technical quality of projects. Mentors members and coordinates the Mentorship Model. Oversees stack (Python, MATLAB)."
             />
             <LeaderCard 
               name="Ashley Su" 
               role="Director of PR & HR" 
               email="su.1289@osu.edu"
               affiliation="School of Health and Rehabilitation Science"
               desc="Manages the BMMSS brand, social media presence, and campus outreach. Leads marketing efforts for recruitment and oversees internal human resources and member integration."
             />
             <LeaderCard 
               name="Audrey Mathes" 
               role="Clerk" 
               email="mathes.47@osu.edu"
               affiliation="College of Engineering, Dept. of Biomedical Engineering"
               desc="Maintains all official records, records meeting minutes, manages membership rosters, and coordinates logistics for weekly research workshops."
             />
          </div>
        </div>

        {/* Extended Leadership Section */}
        <div className="md:col-span-2 mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-2">Extended Leadership & Working Groups</h3>
          
          <div className="space-y-12">
            {/* 1. Technical & Research Group */}
            <section>
              <div className="flex items-center mb-4">
                <div className="h-8 w-1 bg-[#BB0000] mr-3"></div>
                <h4 className="text-lg font-bold text-gray-800">1. Technical & Research Group <span className="text-gray-400 font-normal text-sm ml-2">(Tech)</span></h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <LeaderCard name="Leo Sun" role="Modeling Division Lead" desc="Leads the core modeling initiatives and technical mentorship." />
                <LeaderCard name="TBD" role="Technical Analyst" isVacant desc="Involved in mathematical scripting and simulation validation." />
              </div>
            </section>

            {/* 2. Engineering Simulation Group */}
            <section>
              <div className="flex items-center mb-4">
                <div className="h-8 w-1 bg-[#BB0000] mr-3"></div>
                <h4 className="text-lg font-bold text-gray-800">2. Engineering Simulation Group <span className="text-gray-400 font-normal text-sm ml-2">(Engineering)</span></h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <LeaderCard name="Areeb Chowdhury" role="Engineering Simulation Lead" desc="Coordinates high-fidelity physical engineering simulations." />
                <LeaderCard name="TBD" role="Systems Integrator" isVacant desc="Integrating CAD models into simulation environments." />
              </div>
            </section>

            {/* 3. Web Division */}
            <section>
              <div className="flex items-center mb-4">
                <div className="h-8 w-1 bg-[#BB0000] mr-3"></div>
                <h4 className="text-lg font-bold text-gray-800">3. Web Division <span className="text-gray-400 font-normal text-sm ml-2">(Web)</span></h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <LeaderCard name="Xi Wang" role="Web Division Lead" desc="Oversees digital infrastructure, platform development, and manages the society's official email." />
                <LeaderCard name="TBD" role="Web Developer" isVacant desc="Assists in platform optimization and internal database management." />
              </div>
            </section>

            {/* 4. Finance & Resources Group */}
            <section>
              <div className="flex items-center mb-4">
                <div className="h-8 w-1 bg-[#BB0000] mr-3"></div>
                <h4 className="text-lg font-bold text-gray-800">4. Finance & Resources Group <span className="text-gray-400 font-normal text-sm ml-2">(Finance)</span></h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <LeaderCard name="Junrui Yu" role="Finance Lead" desc="Manages the society's financial health and resource allocation." />
                <LeaderCard 
                  name="Kalvin Chen" 
                  role="Funding Strategist" 
                  email="chen.15317@buckeyemail.osu.edu"
                  desc="Drafting grant proposals and tracking organization assets." 
                />
              </div>
            </section>

            {/* 5. Public Relations & Outreach Group */}
            <section>
              <div className="flex items-center mb-4">
                <div className="h-8 w-1 bg-[#BB0000] mr-3"></div>
                <h4 className="text-lg font-bold text-gray-800">5. Public Relations & Outreach Group <span className="text-gray-400 font-normal text-sm ml-2">(PR)</span></h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <LeaderCard name="Ashley Su" role="PR & HR Lead" desc="Directs the society's public image, external collaborations, and internal human resources." />
                <LeaderCard name="TBD" role="Outreach Specialist" isVacant desc="Manages social media presence and inter-society communications." />
              </div>
            </section>

            {/* 6. Administrative & Records Group */}
            <section>
              <div className="flex items-center mb-4">
                <div className="h-8 w-1 bg-[#BB0000] mr-3"></div>
                <h4 className="text-lg font-bold text-gray-800">6. Administrative & Records Group <span className="text-gray-400 font-normal text-sm ml-2">(Admin)</span></h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <LeaderCard name="Audrey Mathes" role="Admin Lead" desc="Ensures organizational compliance and maintains official records." />
                <LeaderCard name="TBD" role="Admin Assistant" isVacant desc="Archiving meeting minutes and managing membership rosters." />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;