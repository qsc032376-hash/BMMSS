import React from 'react';
import { User, Mail, GraduationCap, Briefcase } from 'lucide-react';

interface LeaderProps {
  name: string;
  role: string;
  email?: string;
  desc?: string;
  isVacant?: boolean;
}

const LeaderCard: React.FC<LeaderProps> = ({ name, role, email, desc, isVacant }) => {
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
          <h3 className={`font-bold text-lg ${isVacant ? 'text-gray-500 italic' : 'text-gray-900'}`}>
            {name}
          </h3>
          <p className="text-[#BB0000] font-medium text-sm uppercase tracking-wide mb-2">{role}</p>
          
          {desc && (
            <p className="text-gray-600 text-sm mb-3 text-sm leading-relaxed">{desc}</p>
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
            name="Wonjon Lee" 
            role="Faculty Advisor" 
            email="lee.8222@osu.edu"
            desc="Functions as the 'Permanent Secretary' providing institutional memory. Acts as the final signatory for official documents and holds Consultative Veto Power over actions risking the society's standing."
          />
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Executive Board (E-Board)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <LeaderCard 
              name="Sicheng Qian" 
              role="President (CEO)" 
              email="qian.917@osu.edu"
              desc="Chief Executive Officer. Responsible for long-term strategic vision, presiding over General Assembly sessions, and acting as the primary representative to the Mathematics Department."
            />
             <LeaderCard 
               name="Renee Cai" 
               role="VP - Internal (COO)" 
               desc="Chief Operations Officer. Manages the 'Internal Ecosystem,' including member retention, project team formations, and the member-to-project matching system. (College of Engineering - CSE)"
             />
             <LeaderCard 
               name="Xingji Tao" 
               role="VP - External (CRO)" 
               email="tao.673@osu.edu"
               desc="Chief Relations Officer. Manages partnerships with other departments (Physics, CSE), industrial sponsors, and guest speakers. Coordinates site visits and alumni networks. (Department of Mathematics)"
             />
             <LeaderCard 
               name="Qiuchengxi Su (Ashley)" 
               role="Minister of Propaganda" 
               desc="Chief Communications Officer. Directs the visual identity and narrative of BMMSS. Responsible for high-fidelity graphic design and large-scale recruitment campaigns. (School of Health and Rehabilitation Science)"
             />
             <LeaderCard 
               name="Jiangcheng Wang (Rick)" 
               role="Treasurer (CFO)" 
               email="wang.20190@osu.edu"
               desc="Chief Financial Officer. Manages the bank account and USG funding. Prepares the 'Annual Financial Forecast' and provides monthly transparency reports. (Fisher College of Business)"
             />
             <LeaderCard 
               name="Vacant" 
               role="Tech Admin - Programmer" 
               isVacant 
               desc="Lead Architect. Curates the technical curriculum, leads workshops on modeling algorithms (Python/MATLAB), and manages the society’s GitHub repository."
             />
             <LeaderCard 
               name="Vacant" 
               role="Tech Admin - Webmaster" 
               isVacant 
               desc="Chief Digital Officer. Responsible for the architecture and security of the BMMSS website, simulation visualization hosting, and digital communication tools."
             />
             <LeaderCard 
               name="Zihan Yao (Kelly)" 
               role="Human Resources Director (HRD)" 
               email="yao.1254@osu.edu"
               desc="Chief People Officer. Responsible for the internal well-being of the society, mediating conflicts, fostering diversity, and managing recruitment pipelines. (Department of Sociology)"
             />
             <LeaderCard 
               name="Audrey Mathes" 
               role="Secretary (CIO)" 
               email="mathes.47@osu.edu"
               desc="Chief Information Officer. Maintains the official roster, records meeting minutes, manages room reservations, and oversees the 'Weekly Simulation Dispatch' newsletter. (College of Engineering - BME)"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;