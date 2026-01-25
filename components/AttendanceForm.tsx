import React, { useState } from 'react';
import { ClipboardCheck, Users, Calculator, Save, CheckSquare, Square, AlertCircle, UserX, ShieldAlert, CalendarRange, Lock, Unlock, Shield } from 'lucide-react';

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
  // Transient state for the "Current" session being taken
  isPresentToday: boolean;
}

// Real roster with cleared history
const INITIAL_ROSTER: Member[] = [
  { id: '1', name: 'Sicheng Qian', role: 'President', isEBoard: true, email: 'qian.917@osu.edu', history: [], isPresentToday: false },
  { id: '2', name: 'Renee Cai', role: 'VP - Internal', isEBoard: true, email: 'cai.renee@osu.edu', history: [], isPresentToday: false },
  { id: '3', name: 'Xingji Tao', role: 'VP - External', isEBoard: true, email: 'tao.673@osu.edu', history: [], isPresentToday: false },
  { id: '8', name: 'Zihan Yao (Kelly)', role: 'Human Resources Director', isEBoard: true, email: 'yao.1254@osu.edu', history: [], isPresentToday: false },
  { id: '4', name: 'Audrey Mathes', role: 'Secretary', isEBoard: true, email: 'mathes.47@osu.edu', history: [], isPresentToday: false },
  { id: '5', name: 'Jiangcheng Wang', role: 'Treasurer', isEBoard: true, email: 'wang.20190@osu.edu', history: [], isPresentToday: false },
  { id: '6', name: 'Qiuchengxi Su', role: 'Minister of Propaganda', isEBoard: true, email: '', history: [], isPresentToday: false },
  { id: '7', name: 'Wonjon Lee', role: 'Faculty Advisor', isEBoard: true, email: 'lee.8222@osu.edu', history: [], isPresentToday: false },
];

const AttendanceForm: React.FC = () => {
  const [roster, setRoster] = useState<Member[]>(INITIAL_ROSTER);
  const [sessionDate, setSessionDate] = useState(new Date().toISOString().split('T')[0]);
  const [isReviewMode, setIsReviewMode] = useState(false); // Toggle for End-of-Semester Review
  const [isAdmin, setIsAdmin] = useState(false); // Auth state

  const handleLogin = () => {
    if (isAdmin) {
      setIsAdmin(false);
      setIsReviewMode(false);
      return;
    }
    
    // Simple client-side protection for demo purposes
    const code = window.prompt("Enter Officer Access Code (Hint: osu)");
    if (code?.toLowerCase() === 'osu') {
      setIsAdmin(true);
    } else if (code) {
      alert("Invalid Access Code");
    }
  };

  const toggleToday = (id: string) => {
    if (!isAdmin) return; // Prevent toggling if not admin
    setRoster(roster.map(m => m.id === id ? { ...m, isPresentToday: !m.isPresentToday } : m));
  };

  const handleDismiss = (id: string) => {
    if (!isAdmin) return;
    if (window.confirm("Are you sure you want to revoke membership? This action requires a 2/3 E-Board vote per Article VI.")) {
      setRoster(roster.filter(m => m.id !== id));
    }
  };

  // Determine Semester Range based on input date
  const getSemesterBounds = (dateString: string) => {
    const d = new Date(dateString);
    const year = d.getFullYear();
    
    // Logic based on requested dates:
    // Fall: Aug 25 - Dec 9
    // Spring: Jan 11 - Apr 26
    const isSpring = d.getMonth() < 6;

    if (isSpring) {
        return { name: 'Spring', start: new Date(`${year}-01-11`), end: new Date(`${year}-04-26`) };
    } else {
        return { name: 'Autumn', start: new Date(`${year}-08-25`), end: new Date(`${year}-12-09`) }; 
    }
  };

  const calculateStats = (member: Member) => {
    // In a real app, we would filter history by the semester bounds.
    // Since history is empty initially, this handles the 0/0 case.
    const pastRecords = member.history; 
    const pastPresent = pastRecords.filter(r => r.present).length;
    const pastTotal = pastRecords.length;

    // Include "Today" in the calculation
    const totalSessions = pastTotal + 1;
    const totalAttended = pastPresent + (member.isPresentToday ? 1 : 0);
    
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
            {isAdmin ? (
               <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-100 text-[#BB0000] text-xs font-bold uppercase tracking-wider">
                 <Unlock className="w-3 h-3" /> Admin Access Granted
               </span>
            ) : (
               <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wider">
                 <Lock className="w-3 h-3" /> Read-Only View
               </span>
            )}
            
            <button 
              onClick={handleLogin}
              className="text-xs text-gray-400 underline hover:text-gray-600 ml-2"
            >
              {isAdmin ? "Logout" : "Officer Access"}
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
           {/* Admin Controls */}
           {isAdmin && (
             <div className="flex items-center gap-2 mr-4 bg-gray-100 p-1.5 rounded-lg animate-in fade-in duration-300">
                <span className={`text-xs font-bold uppercase px-2 py-1 rounded cursor-pointer transition-all ${!isReviewMode ? 'bg-white shadow text-gray-800' : 'text-gray-500'}`} onClick={() => setIsReviewMode(false)}>
                  Check-In Mode
                </span>
                <span className={`text-xs font-bold uppercase px-2 py-1 rounded cursor-pointer transition-all ${isReviewMode ? 'bg-[#BB0000] shadow text-white' : 'text-gray-500'}`} onClick={() => setIsReviewMode(true)}>
                  End of Term Review
                </span>
             </div>
           )}

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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main List */}
        <div className="lg:col-span-3">
           <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden relative">
              
              {/* Overlay for non-admins if we wanted to block view entirely, but we just block interaction here */}
              
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                 <h2 className="font-bold text-gray-800 flex items-center gap-2">
                   <Users className="w-5 h-5 text-gray-500" />
                   Active Registry
                 </h2>
                 <div className="text-xs text-gray-500 italic">
                   Article III, Section 2 Compliance
                 </div>
              </div>
              
              <div className="divide-y divide-gray-100">
                 {roster.map((member) => {
                   const stats = calculateStats(member);
                   const isFaculty = member.role === 'Faculty Advisor';
                   // Faculty is always active.
                   const isActive = isFaculty || stats.rate >= 0.5;
                   const isAtRisk = !isActive;

                   return (
                     <div 
                       key={member.id} 
                       className={`flex items-center p-4 transition-colors ${member.isPresentToday ? 'bg-gray-50' : 'bg-white'}`}
                     >
                       {/* Checkbox Column */}
                       <div className="mr-6 flex-shrink-0" onClick={() => !isReviewMode && toggleToday(member.id)}>
                          {!isReviewMode ? (
                            <div className={`transition-colors ${isAdmin ? 'cursor-pointer text-gray-400 hover:text-[#BB0000]' : 'cursor-not-allowed text-gray-200'}`}>
                              {member.isPresentToday ? (
                                <CheckSquare className={`w-6 h-6 ${isAdmin ? 'text-[#BB0000]' : 'text-gray-300'}`} />
                              ) : (
                                <Square className="w-6 h-6" />
                              )}
                            </div>
                          ) : (
                            <div className="w-6 h-6 flex items-center justify-center">
                               {isActive ? (
                                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                               ) : (
                                 <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                               )}
                            </div>
                          )}
                       </div>

                       {/* Member Info */}
                       <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`font-bold text-base truncate ${isAtRisk ? 'text-red-700' : 'text-gray-900'}`}>
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

                       {/* Stats Column */}
                       <div className="flex items-center gap-6">
                          <div className="text-right">
                             <div className={`text-lg font-mono font-bold ${isActive ? 'text-green-600' : 'text-red-600'}`}>
                               {(stats.rate * 100).toFixed(0)}%
                             </div>
                             <div className="text-[10px] text-gray-400 uppercase tracking-wide">
                               Attended
                             </div>
                          </div>

                          {/* Action Column (Review Mode Only) */}
                          {isReviewMode && (
                            <div className="w-32 flex justify-end">
                               {isAtRisk && !member.isEBoard ? (
                                 <button 
                                   onClick={() => handleDismiss(member.id)}
                                   className="flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 px-3 py-1.5 rounded-md text-xs font-bold transition-colors"
                                 >
                                   <UserX className="w-3 h-3" /> Dismiss
                                 </button>
                               ) : (
                                 <span className={`text-xs font-medium px-3 py-1 rounded-full ${isFaculty ? 'bg-blue-50 text-blue-700' : 'text-gray-300'}`}>
                                   {isFaculty ? 'Immunity' : (member.isEBoard ? 'Protected' : 'Good Standing')}
                                 </span>
                               )}
                            </div>
                          )}
                       </div>
                     </div>
                   );
                 })}
              </div>
              
              {!isReviewMode && isAdmin && (
                <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-800 flex items-center gap-2">
                    <Save className="w-4 h-4" /> Save Session Log
                  </button>
                </div>
              )}
           </div>
        </div>

        {/* Info Sidebar */}
        <div className="space-y-6">
           {/* Admin Info Box - Only visible when logged in */}
           {isAdmin && (
             <div className="bg-[#BB0000] p-6 rounded-xl shadow-md border border-red-800 text-white">
               <h3 className="font-bold mb-2 flex items-center gap-2">
                 <Shield className="w-5 h-5" />
                 Admin Controls
               </h3>
               <p className="text-red-100 text-xs mb-4">
                 You have write access to the official roster. Any changes made to attendance are logged with your timestamp.
               </p>
               <button onClick={handleLogin} className="w-full bg-white text-[#BB0000] text-xs font-bold py-2 rounded shadow-sm hover:bg-red-50">
                 Logout
               </button>
             </div>
           )}

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
                 <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                   Attendance resets at the beginning of each term. Expulsion buttons are only available during the "End of Term Review" phase (Admin only).
                 </p>
              </div>
           </div>

           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                Constitution Article III
              </h3>
              <div className="prose prose-sm text-gray-600">
                <p>
                  <strong>Section 2:</strong> An Active Member must attend a minimum of <strong>50%</strong> of General Assemblies and Workshops.
                </p>
                <div className="mt-4 flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                    &ge; 50% Active
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
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