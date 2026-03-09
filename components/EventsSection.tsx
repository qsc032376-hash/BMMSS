import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, Sparkles, MapPin, Plus, Info } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  type: 'academic' | 'holiday' | 'registration' | 'exam' | 'society';
  description?: string;
}

const EventsSection: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Comprehensive OSU Academic Calendar Data + Special Aug 15 Marker + Final Exams
  const CALENDAR_DATA: CalendarEvent[] = [
    // August 15 Markers (Requested)
    { id: 'reg-23', title: 'Org Registration Open', date: new Date(2023, 7, 15), type: 'registration' },
    { id: 'reg-24', title: 'Org Registration Open', date: new Date(2024, 7, 15), type: 'registration' },
    { id: 'reg-25', title: 'Org Registration Open', date: new Date(2025, 7, 15), type: 'registration' },
    { id: 'reg-26', title: 'Org Registration Open', date: new Date(2026, 7, 15), type: 'registration' },
    { id: 'reg-27', title: 'Org Registration Open', date: new Date(2027, 7, 15), type: 'registration' },

    // Autumn Semester Starts
    { id: 'au23-start', title: 'Autumn Classes Begin', date: new Date(2023, 7, 22), type: 'academic' },
    { id: 'au24-start', title: 'Autumn Classes Begin', date: new Date(2024, 7, 20), type: 'academic' },
    { id: 'au25-start', title: 'Autumn Classes Begin', date: new Date(2025, 7, 26), type: 'academic' },
    { id: 'au26-start', title: 'Autumn Classes Begin', date: new Date(2026, 7, 25), type: 'academic' },
    { id: 'au27-start', title: 'Autumn Classes Begin', date: new Date(2027, 7, 24), type: 'academic' },

    // Final Examinations - Autumn
    ...[8, 11, 12, 13, 14].map(d => ({ id: `au23-exam-${d}`, title: 'Final Exam', date: new Date(2023, 11, d), type: 'exam' as const })),
    ...[6, 9, 10, 11, 12].map(d => ({ id: `au24-exam-${d}`, title: 'Final Exam', date: new Date(2024, 11, d), type: 'exam' as const })),
    ...[12, 15, 16, 17, 18].map(d => ({ id: `au25-exam-${d}`, title: 'Final Exam', date: new Date(2025, 11, d), type: 'exam' as const })),
    ...[11, 14, 15, 16, 17].map(d => ({ id: `au26-exam-${d}`, title: 'Final Exam', date: new Date(2026, 11, d), type: 'exam' as const })),
    ...[10, 13, 14, 15, 16].map(d => ({ id: `au27-exam-${d}`, title: 'Final Exam', date: new Date(2027, 11, d), type: 'exam' as const })),

    // Spring Semester Starts
    { id: 'sp24-start', title: 'Spring Classes Begin', date: new Date(2024, 0, 8), type: 'academic' },
    { id: 'sp25-start', title: 'Spring Classes Begin', date: new Date(2025, 0, 6), type: 'academic' },
    { id: 'sp26-start', title: 'Spring Classes Begin', date: new Date(2026, 0, 12), type: 'academic' },
    { id: 'sp27-start', title: 'Spring Classes Begin', date: new Date(2027, 0, 11), type: 'academic' },
    { id: 'sp28-start', title: 'Spring Classes Begin', date: new Date(2028, 0, 10), type: 'academic' },

    // Final Examinations - Spring
    ...[24, 25, 26, 29, 30].map(d => ({ id: `sp24-exam-${d}`, title: 'Final Exam', date: new Date(2024, 3, d), type: 'exam' as const })),
    ...[23, 24, 25, 28, 29].map(d => ({ id: `sp25-exam-${d}`, title: 'Final Exam', date: new Date(2025, 3, d), type: 'exam' as const })),
    ...[29, 30].map(d => ({ id: `sp26-exam-${d}`, title: 'Final Exam', date: new Date(2026, 3, d), type: 'exam' as const })),
    ...[1, 4, 5].map(d => ({ id: `sp26-exam-may-${d}`, title: 'Final Exam', date: new Date(2026, 4, d), type: 'exam' as const })),
    ...[28, 29, 30].map(d => ({ id: `sp27-exam-${d}`, title: 'Final Exam', date: new Date(2027, 3, d), type: 'exam' as const })),
    ...[3, 4].map(d => ({ id: `sp27-exam-may-${d}`, title: 'Final Exam', date: new Date(2027, 4, d), type: 'exam' as const })),
    ...[26, 27, 28].map(d => ({ id: `sp28-exam-${d}`, title: 'Final Exam', date: new Date(2028, 3, d), type: 'exam' as const })),
    ...[1, 2].map(d => ({ id: `sp28-exam-may-${d}`, title: 'Final Exam', date: new Date(2028, 4, d), type: 'exam' as const })),

    // Breaks & Holidays
    { id: 'mlk-26', title: 'MLK Jr. Day', date: new Date(2026, 0, 19), type: 'holiday' },
    { id: 'sb-26', title: 'Spring Break', date: new Date(2026, 2, 16), type: 'holiday' },
    { id: 'sb-27', title: 'Spring Break', date: new Date(2027, 2, 15), type: 'holiday' },
    { id: 'au-break-26', title: 'Autumn Break', date: new Date(2026, 9, 15), type: 'holiday' },
    { id: 'au-break-26b', title: 'Autumn Break', date: new Date(2026, 9, 16), type: 'holiday' },
  ];

  const getStartOfWeek = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day;
    return new Date(d.setDate(diff));
  };

  const startOfWeek = getStartOfWeek(currentDate);
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    d.setHours(0, 0, 0, 0);
    return d;
  });

  const timeSlots = Array.from({ length: 13 }, (_, i) => i + 8); // 8 AM to 8 PM

  const navigateWeek = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction * 7);
    setCurrentDate(newDate);
  };

  const monthYear = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const getEventsForDay = (day: Date) => {
    return CALENDAR_DATA.filter(e => e.date.toDateString() === day.toDateString());
  };

  return (
    <div className="space-y-8">
      {/* Header Info */}
      <div className="bg-red-50 border-l-4 border-[#BB0000] p-6 rounded-r-xl shadow-sm">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Sparkles className="h-6 w-6 text-[#BB0000]" aria-hidden="true" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-900">Academic & Society Roadmap</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              Tracking OSU academic milestones, final examinations, and BMMSS operations. 
              <strong> August 15th</strong> is marked for New Student Organization Registration.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Weekly Calendar */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden flex flex-col">
        {/* Calendar Header */}
        <div className="bg-gray-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#BB0000] flex items-center justify-center">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tight">{monthYear}</h2>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Multi-Year Academic Tracker</p>
            </div>
          </div>
          
          <div className="flex items-center bg-gray-800 rounded-xl p-1 border border-gray-700">
            <button 
              onClick={() => navigateWeek(-1)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Previous week"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setCurrentDate(new Date())}
              className="px-4 py-1 text-xs font-bold uppercase tracking-widest hover:text-[#BB0000] transition-colors"
            >
              Today
            </button>
            <button 
              onClick={() => navigateWeek(1)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Next week"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Days Row */}
            <div className="grid grid-cols-8 border-b border-gray-100">
              <div className="p-4 border-r border-gray-100 bg-gray-50/50 flex items-center justify-center">
                <Clock className="w-4 h-4 text-gray-300" />
              </div>
              {days.map((day, i) => {
                const isToday = day.toDateString() === new Date().toDateString();
                const isAug15 = day.getMonth() === 7 && day.getDate() === 15;
                return (
                  <div key={i} className={`p-4 text-center border-r border-gray-100 last:border-r-0 ${isToday ? 'bg-red-50/30' : ''} ${isAug15 ? 'bg-red-50/10' : ''}`}>
                    <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isToday || isAug15 ? 'text-[#BB0000]' : 'text-gray-400'}`}>
                      {day.toLocaleDateString('default', { weekday: 'short' })}
                    </p>
                    <p className={`text-xl font-bold ${isToday || isAug15 ? 'text-[#BB0000]' : 'text-gray-800'}`}>
                      {day.getDate()}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Time Grid */}
            <div className="relative">
              {timeSlots.map((hour) => (
                <div key={hour} className="grid grid-cols-8 border-b border-gray-50 last:border-b-0 group">
                  <div className="p-4 border-r border-gray-100 bg-gray-50/30 text-[10px] font-bold text-gray-400 text-right pr-4">
                    {hour > 12 ? `${hour - 12} PM` : hour === 12 ? '12 PM' : `${hour} AM`}
                  </div>
                  {days.map((day, i) => {
                    const dayEvents = getEventsForDay(day);
                    // Standardize positioning of academic/exam markers in early slots
                    const slotEvents = hour === 8 ? dayEvents : [];

                    return (
                      <div key={i} className="border-r border-gray-100 last:border-r-0 min-h-[5rem] relative hover:bg-gray-50/50 transition-colors p-1 overflow-hidden">
                        {slotEvents.map(event => (
                          <div 
                            key={event.id}
                            className={`mb-1 p-2 rounded-lg border text-[10px] font-bold leading-tight shadow-sm transition-transform hover:scale-[1.02] cursor-default
                              ${event.type === 'registration' ? 'bg-[#BB0000] text-white border-red-800' : ''}
                              ${event.type === 'academic' ? 'bg-slate-100 text-slate-700 border-slate-200' : ''}
                              ${event.type === 'exam' ? 'bg-purple-50 text-purple-700 border-purple-200' : ''}
                              ${event.type === 'holiday' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''}
                            `}
                          >
                            <div className="flex items-center gap-1 mb-0.5">
                              {(event.type === 'registration' || event.type === 'exam') && <Info className="w-2.5 h-2.5" />}
                              {event.title}
                            </div>
                            <span className="opacity-70 text-[8px] font-medium uppercase tracking-tighter">{event.type}</span>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="bg-gray-50 border-t border-gray-100 p-6 grid grid-cols-1 sm:grid-cols-5 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-slate-400"></div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">Academic</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">Final Exams</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">Break</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#BB0000]"></div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">Org Reg</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">BMMSS</span>
          </div>
        </div>
      </div>

      {/* Static Highlights Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
           <div>
             <span className="text-[10px] font-black text-[#BB0000] uppercase tracking-widest mb-2 block">Key Milestone</span>
             <h4 className="text-lg font-bold text-gray-900 mb-2">August 15: Registration Window</h4>
             <p className="text-sm text-gray-500 italic leading-relaxed">
               "New Student Organization Registration opens annually on this date. BMMSS compliance documentation must be submitted via the Student Org Management portal."
             </p>
           </div>
           <div className="mt-6 flex items-center gap-2 text-[#BB0000] font-bold text-sm">
             <MapPin className="w-4 h-4" /> 
             Ohio Union Online
           </div>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-sm text-white flex flex-col justify-between">
           <div>
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Examination Cycle</span>
             <h4 className="text-lg font-bold mb-2">Academic Rigor</h4>
             <p className="text-sm text-gray-400 leading-relaxed">
               Final exams are critical markers in our simulation labs. Society projects transition to documentation phase during these periods.
             </p>
           </div>
           <div className="mt-6 flex items-center gap-2 text-gray-400 font-bold text-sm">
             <Clock className="w-4 h-4" />
             Standard EST
           </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;