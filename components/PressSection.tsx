import React from 'react';
import { Newspaper, Download, Share2, Mail, ExternalLink, Camera, FileBadge, Inbox } from 'lucide-react';

const PressSection: React.FC = () => {
  const pressReleases = [
    {
      date: 'Feb 06, 2026',
      title: 'Official Constitution Ratified',
      excerpt: 'The Buckeyes Mathematical Modeling and Simulation Society (BMMSS) has formally ratified its governing constitution, establishing the organizational framework and technical mandates for its Fall 2026 launch.',
      tag: 'Official'
    }
  ];

  // Media assets cleared as requested
  const mediaAssets: any[] = [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Press & Media</h1>
          <p className="text-xl text-gray-500">Official news, media assets, and communications for BMMSS.</p>
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          Newsroom Active
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main News Feed */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-[#BB0000] pb-2 mb-6 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-[#BB0000]" />
            Latest Releases
          </h2>
          
          <div className="space-y-6">
            {pressReleases.map((release, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-[#BB0000] bg-red-50 px-2 py-1 rounded uppercase tracking-wider">{release.tag}</span>
                  <span className="text-sm text-gray-400 font-mono">{release.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#BB0000] cursor-pointer transition-colors">
                  {release.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {release.excerpt}
                </p>
                <button className="text-sm font-bold text-gray-900 flex items-center gap-1 hover:gap-2 transition-all">
                  Read Full Release <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Camera className="w-5 h-5 text-gray-500" />
              In the News
            </h2>
            <p className="text-sm text-gray-500 italic mb-6">
              Coverage of BMMSS and its members in campus and national media.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                 <span className="text-[10px] font-bold text-gray-400 uppercase">The Lantern (Coming Soon)</span>
                 <p className="font-bold text-gray-800 text-sm mt-1">"New Society Aims to Solve Real-World Problems with Math"</p>
               </div>
               <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                 <span className="text-[10px] font-bold text-gray-400 uppercase">OSU Math Newsletter</span>
                 <p className="font-bold text-gray-800 text-sm mt-1">"BMMSS: A New Hub for Simulation and Competitive Modeling"</p>
               </div>
            </div>
          </div>
        </div>

        {/* Sidebar / Resources */}
        <div className="space-y-8">
          {/* Media Kit */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Download className="w-5 h-5 text-blue-500" />
              Media Kit
            </h2>
            <div className="space-y-4">
              {mediaAssets.length > 0 ? (
                mediaAssets.map((asset, idx) => (
                  <div key={idx} className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                    <div>
                      <p className="text-sm font-bold text-gray-800">{asset.name}</p>
                      <p className="text-[10px] text-gray-400 uppercase">{asset.format} &bull; {asset.size}</p>
                    </div>
                    <Download className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                  </div>
                ))
              ) : (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <Inbox className="w-8 h-8 text-gray-200 mb-2" />
                  <p className="text-sm text-gray-400 font-medium">Kit temporarily empty.</p>
                  <p className="text-[10px] text-gray-300 uppercase tracking-tight mt-1">Updating for 2026 session</p>
                </div>
              )}
            </div>
            {mediaAssets.length > 0 && (
              <button className="w-full mt-6 py-3 bg-gray-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                Download All Assets
              </button>
            )}
          </div>

          {/* Media Contact */}
          <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
            <h2 className="text-lg font-bold text-[#BB0000] mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Media Inquiries
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#BB0000] shadow-sm">
                  <FileBadge className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Director of PR</p>
                  <p className="text-sm font-bold text-gray-900">Qiuchengxi Su</p>
                </div>
              </div>
              <p className="text-xs text-red-700 leading-relaxed">
                For official statements, interview requests, or high-res assets, please contact our public relations department.
              </p>
              <a href="mailto:su.1568@osu.edu" className="block w-full text-center py-2 bg-white text-[#BB0000] border border-red-200 rounded-lg text-xs font-bold hover:bg-red-50 transition-colors">
                Contact Press Office
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-between px-4">
             <button className="flex items-center gap-2 text-gray-400 hover:text-[#BB0000] transition-colors">
               <Share2 className="w-4 h-4" /> <span className="text-xs font-bold uppercase">Share Hub</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressSection;