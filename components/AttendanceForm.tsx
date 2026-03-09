import React, { useState } from 'react';
import { ClipboardCheck, Users, AlertCircle, CalendarRange, Lock } from 'lucide-react';

interface AttendanceRecord {
  date: string;
  type: 'GA' | 'Workshop' | 'Social';
  present: boolean;
}

interface Member {
  id: string;
  name: string;
  role: string;
  email: string;
  isEBoard: boolean;
  history: AttendanceRecord[];
  isPresentToday: boolean;
}

// Updated roster matching Article VI Leadership structure and affiliations
const INITIAL_ROSTER: Member[] = [
  { id: '1', name: 'Sicheng Qian', role: 'President', isEBoard: true, email: 'qian.917@osu.edu', history: [], isPresentToday: false },
  { id: '2', name: 'Xingji Tao', role: 'Vice President', isEBoard: true, email: 'tao.673@osu.edu', history: [], isPresentToday: false },
  { id: '3', name: 'Junrui Yu', role: 'Treasurer', isEBoard: true, email: '', history: [], isPresentToday: false },
  { id: '4', name: 'Leo Sun', role: 'Modeling Leader', isEBoard: true, email: '', history: [], isPresentToday: false },
  { id: '5', name: 'Jason Wang', role: 'Webmaster', isEBoard: true, email: '', history: [], isPresentToday: false },
  { id: '6', name: 'Qiuchengxi Su', role: 'Director of PR', isEBoard: true, email: '', history: [], isPresentToday: false },
  { id: '7', name: 'Audrey Mathes', role: 'Clerk', isEBoard: true, email: 'mathes.47@osu.edu', history: [], isPresentToday: false },
  { id: '8', name: 'Wonjun Lee', role: 'Faculty Advisor', isEBoard: true, email: 'lee.8222@osu.edu', history: [], isPresentToday: false },
];

const AttendanceForm: React.FC = () => {
  const [roster] = useState<Member[]>(INITIAL_ROSTER);
  const [sessionDate, setSessionDate] = useState(new Date().toISOString().split('T')[0]);

  // Determine Semester Range based on input date
  const getSemesterBounds = (dateString: string) => {
    const d = new Date(dateString);
    const year = d.getFullYear();
    const isSpring = d.getMonth() < 6;

    if (isSpring) {
        return { name: 'Spring', start: new Date(`${year}-01-11`), end: new Date(`${year}-04-26`) };
    } else {
        return { name: 'Autumn', start: new Date(`${year}-08-25`), end: new Date(`${year}-12-09`) }; 
    }
  };

  const calculateStats = (member: Member) => {
    const pastRecords = member.history; 
    const pastPresent = pastRecords.filter(r => r.present).length;
    const pastTotal = pastRecords.length;

    // Currently read-only, so "Today" is not toggleable
    const totalSessions = Math.max(1, pastTotal);
    const totalAttended = pastPresent;
    
    const rate = totalSessions > 0 ? totalAttended / totalSessions : 0;
    
    return {
      rate,
      totalSessions,
      totalAttended
    };
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-gray-200 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
            <ClipboardCheck className="h-8 w-8 text-[#BB0000]" />
            Attendance Roster
          </h1>
          <div className="mt-2 flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wider">
              <Lock className="w-3 h-3" /> Registry Status: Public View
            </span>
          </div>
        </div>
        
        <div className="flex flex-col items-end">
          <input 
            type="date" 
            value={sessionDate}
            onChange={(e) => setSessionDate(e.target.value)}
            className="font-mono text-gray-900 bg-transparent border-none focus:ring-0 p-0 text-sm text-right"
          />
          <span className="text-xs text-gray-400 font-medium">
            {getSemesterBounds(sessionDate).name} Semester
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
           <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden relative">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                 <h2 className="font-bold text-gray-800 flex items-center gap-2">
                   <Users className="w-5 h-5 text-gray-500" />
                   Active Registry
                 </h2>
                 <div className="text-xs text-gray-500 italic">
                   Article III Compliance
                 </div>
              </div>
              
              <div className="divide-y divide-gray-100">
                 {roster.map((member) => {
                   const stats = calculateStats(member);
                   const isFaculty = member.role === 'Faculty Advisor';
                   const isActive = isFaculty || stats.rate >= 0.5;
                   const isAtRisk = !isActive && !isFaculty;

                   return (
                     <div 
                       key={member.id} 
                       className="flex items-center p-4 bg-white"
                     >
                       <div className="mr-6 flex-shrink-0">
                          <div className="w-6 h-6 flex items-center justify-center">
                             {isActive ? (
                               <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm" title="Active Standing"></div>
                             ) : (
                               <div className="w-2.5 h-2.5 rounded-full bg-gray-300" title="Pending/Inactive"></div>
                             )}
                          </div>
                       </div>

                       <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`font-bold text-base truncate ${isAtRisk ? 'text-gray-500' : 'text-gray-900'}`}>
                              {member.name}
                            </span>
                            {member.isEBoard && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-600 uppercase tracking-wider">
                                {isFaculty ? 'Advisor' : 'Officer'}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500 truncate">
                            {member.role}{member.email ? ` · ${member.email}` : ''}
                          </div>
                       </div>

                       <div className="flex items-center gap-6">
                          <div className="text-right">
                             <div className={`text-lg font-mono font-bold ${isActive ? 'text-green-600' : 'text-gray-400'}`}>
                               {(stats.rate * 100).toFixed(0)}%
                             </div>
                             <div className="text-[10px] text-gray-400 uppercase tracking-wide">
                               Attended
                             </div>
                          </div>
                          
                          <div className="w-24 text-right">
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tight ${isActive ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                              {isActive ? 'Active' : 'Pending'}
                            </span>
                          </div>
                       </div>
                     </div>
                   );
                 })}
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CalendarRange className="w-5 h-5 text-[#BB0000]" />
                Academic Calendar
              </h3>
              <div className="space-y-4 text-sm">
                 <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                    <span className="block font-bold text-[#BB0000] text-xs uppercase mb-1">Autumn Semester</span>
                    <span className="text-gray-800 font-mono">Aug 25 &ndash; Dec 09</span>
                 </div>
                 <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="block font-bold text-gray-500 text-xs uppercase mb-1">Spring Semester</span>
                    <span className="text-gray-800 font-mono">Jan 11 &ndash; Apr 26</span>
                 </div>
                 <p className="text-xs text-gray-500 mt-2 leading-relaxed italic">
                   Official tracking commences with the Autumn 2026 session. Current records shown are illustrative.
                 </p>
              </div>
           </div>

           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                Constitution Article III
              </h3>
              <div className="prose prose-sm text-gray-600">
                <p className="text-xs leading-relaxed">
                  An Active Member must attend a minimum of <strong>50%</strong> of General Assemblies and Workshops to maintain voting rights and society eligibility.
                </p>
                <div className="mt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-green-600">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    &ge; 50% Active
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    &lt; 50% Inactive
                  </span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceForm;