import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FluidSimulation from './components/LorenzAttractor';
import GeminiModeler from './components/GeminiModeler';
import EventsSection from './components/EventsSection';
import LeadershipSection from './components/LeadershipSection';
import Constitution from './components/Constitution';
import PressSection from './components/PressSection';
import { Mail, Github, Users, TrendingUp, BookOpen, Target, Code, Globe, ShieldCheck, FileText, Lock, Accessibility, Instagram, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error', message?: string }>({ type: 'idle' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-24 pb-20">
            {/* Hero Section */}
            <section className="relative bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                  <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Modeling the Future</span>{' '}
                        <span className="block text-[#BB0000] xl:inline">Simulating Reality</span>
                      </h1>
                      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Welcome to the Buckeyes Mathematical Modeling and Simulation Society (BMMSS). We are an interdisciplinary nexus bridging the gap between advanced mathematical theory and high-performance computational simulation.
                      </p>
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                         <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                           🚀 Launching Fall 2026
                         </div>
                      </div>
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                          <button
                            onClick={() => setActiveTab('contact')}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#BB0000] hover:bg-red-800 md:py-4 md:text-lg transition-colors"
                          >
                            Join Us
                          </button>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            onClick={() => setActiveTab('events')}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#BB0000] bg-red-100 hover:bg-red-200 md:py-4 md:text-lg transition-colors"
                          >
                            Future Events
                          </button>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center p-8">
                {/* Dynamic 3D Heatmap Visualization */}
                <div className="w-full h-full max-h-[600px] shadow-2xl rounded-2xl overflow-hidden border-4 border-white bg-white transform rotate-0 hover:scale-[1.01] transition-transform duration-500">
                  <FluidSimulation />
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-base text-[#BB0000] font-semibold tracking-wide uppercase">Core Objectives</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Analyze, Compute, Compete
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                  Our constitution defines four strategic pillars that guide our mission to transcend traditional classroom boundaries.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                 <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-800 text-center hover:-translate-y-1 transition-transform">
                   <div className="mx-auto w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-800">
                     <Target className="w-5 h-5"/>
                   </div>
                   <h3 className="text-md font-bold text-gray-900 mb-2">Rigorous Inquiry</h3>
                   <p className="text-sm text-gray-500">Moving beyond "toy problems" into stochastic processes and non-linear dynamics.</p>
                 </div>
                 <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#BB0000] text-center hover:-translate-y-1 transition-transform">
                   <div className="mx-auto w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-4 text-[#BB0000]">
                     <Code className="w-5 h-5"/>
                   </div>
                   <h3 className="text-md font-bold text-gray-900 mb-2">Technical Mastery</h3>
                   <p className="text-sm text-gray-500">Systematic training in MATLAB, Python (NumPy/SciPy), and LaTeX.</p>
                 </div>
                 <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-800 text-center hover:-translate-y-1 transition-transform">
                   <div className="mx-auto w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-800">
                     <Globe className="w-5 h-5"/>
                   </div>
                   <h3 className="text-md font-bold text-gray-900 mb-2">Global Presence</h3>
                   <p className="text-sm text-gray-500">Official training ground for the COMAP MCM/ICM and international symposiums.</p>
                 </div>
                 <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#BB0000] text-center hover:-translate-y-1 transition-transform">
                   <div className="mx-auto w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-4 text-[#BB0000]">
                     <TrendingUp className="w-5 h-5"/>
                   </div>
                   <h3 className="text-md font-bold text-gray-900 mb-2">Quant Leadership</h3>
                   <p className="text-sm text-gray-500">Translating complex physical phenomena into actionable mathematical insights.</p>
                 </div>
              </div>
            </section>
          </div>
        );
      case 'about':
        return (
           <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
             {/* Article I: Identity */}
             <section>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-l-8 border-[#BB0000] pl-4">Identity & Branding</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    The <strong>Buckeyes Mathematical Modeling and Simulation Society (BMMSS)</strong> is established as a premier student-led academic and professional society at The Ohio State University.
                  </p>
                  <p className="mb-4">
                    Our identity is defined by the rigorous synthesis of advanced mathematical theory, theoretical physics, and high-performance computational simulation. BMMSS operates as an interdisciplinary nexus, bridging the gap between the College of Arts and Sciences (specifically Mathematics and Physics) and the College of Engineering.
                  </p>
                  <p className="p-4 bg-gray-50 border-l-4 border-gray-400 text-sm italic">
                    "The official seal of BMMSS shall feature Brutus Buckeye at the center... surrounded by symbolic representations of modeling—such as phase-space trajectories, complex network nodes, or stylized atomic orbits." — Article I
                  </p>
                </div>
             </section>

             {/* Article II: Purpose */}
             <section>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-l-8 border-[#BB0000] pl-4">Mission & Core Pillars</h2>
                <div className="prose prose-lg text-gray-600 mb-8">
                  <p>
                    The mission of BMMSS is to establish a rigorous, high-level intellectual environment that empowers students to transcend traditional classroom boundaries. Our purpose is defined by four core strategic pillars:
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-[#BB0000] mb-3">1. Rigorous Academic Inquiry</h3>
                    <p className="text-gray-600 text-sm">
                      We aim to move beyond "toy problems" into the realm of stochastic processes, non-linear dynamics, and multi-scale modeling, developing the critical thinking necessary to handle real-world ambiguity.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-[#BB0000] mb-3">2. Technical Mastery</h3>
                    <p className="text-gray-600 text-sm">
                      We provide systematic, peer-led training in industry-standard tools (MATLAB, R, Mathematica) and programming stacks (Python: NumPy, SciPy; C++). We mandate the use of LaTeX for all formal publications.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-[#BB0000] mb-3">3. Global Competitive Presence</h3>
                    <p className="text-gray-600 text-sm">
                      BMMSS serves as the official training ground for OSU's participation in the COMAP Mathematical Contest in Modeling (MCM/ICM), fostering a year-round culture of simulation and white-paper drafting.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-[#BB0000] mb-3">4. Quantitative Leadership</h3>
                    <p className="text-gray-600 text-sm">
                      We champion data-driven decision-making. Our graduates are leaders who translate complex physical phenomena into actionable insights, prepared for roles in national laboratories and elite firms.
                    </p>
                  </div>
                </div>
             </section>

             {/* Article III: Membership */}
             <section>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-l-8 border-[#BB0000] pl-4">Membership</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Membership is open to all currently enrolled undergraduate and graduate students at OSU, regardless of major. While inherently technical, we value diversity of thought from the humanities and arts.
                  </p>
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-blue-900">Active Standing</h4>
                      <p className="text-sm text-blue-800 mt-1">
                        "Active Member" status requires attending 50% of General Assemblies and Workshops, plus contribution to at least one society-sanctioned research project or competition team.
                      </p>
                    </div>
                  </div>
                </div>
             </section>
           </div>
        );
      case 'leadership':
        return (
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 border-l-8 border-[#BB0000] pl-4">Leadership Hierarchy</h2>
            <p className="text-gray-500 mb-10 max-w-3xl">
              As defined in Article VI of the Constitution, the Executive Board consists of seven (7) core positions and one Faculty Advisor. We are actively recruiting for the vacant positions below for our Fall 2026 launch.
            </p>
            <LeadershipSection />
          </div>
        );
      case 'events':
        return (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-l-8 border-[#BB0000] pl-4">Events</h2>
            <p className="text-gray-500 mb-10 max-w-2xl">
              Our full programming will begin in Fall 2026. BMMSS operates on a bi-annual session basis, with a General Assembly in September (Autumn Session) and February (Spring Session).
            </p>
            <EventsSection />
          </div>
        );
      case 'press':
        return <PressSection />;
      case 'ai-lab':
        return (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 border-l-8 border-[#BB0000] pl-4">AI Modeling Lab</h2>
            <p className="text-gray-500 mb-10">
              Get a head start on your preparation. Leverage the power of Google's Gemini models to generate practice problems for future competitions.
            </p>
            <GeminiModeler />
          </div>
        );
      case 'contact':
        const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          setStatus({ type: 'loading' });

          try {
            const response = await fetch('/api/apply', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
            });

            if (response.ok) {
              setStatus({ type: 'success', message: 'Application submitted! Sicheng will be in touch soon.' });
              setFormData({ name: '', email: '', message: '' });
            } else {
              const data = await response.json();
              setStatus({ type: 'error', message: data.error || 'Failed to submit. Please try again.' });
            }
          } catch (error) {
            setStatus({ type: 'error', message: 'Network error. Please try again later.' });
          }
        };

        return (
          <div className="max-w-3xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-l-8 border-[#BB0000] pl-4">Get Involved</h2>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
               <div className="p-8">
                 <p className="text-lg text-gray-600 mb-8">
                   We are currently building our core team for the Fall 2026 launch. If you are interested in becoming a founding officer or member, please reach out!
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-center text-gray-700 p-4 bg-gray-50 rounded-lg">
                      <Mail className="w-6 h-6 mr-4 text-[#BB0000]" />
                      <div>
                        <span className="font-medium block">President: Sicheng Qian</span>
                        <a href="mailto:qian.917@osu.edu" className="text-gray-500 hover:text-[#BB0000]">qian.917@osu.edu</a>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700 p-4 bg-gray-50 rounded-lg">
                      <Github className="w-6 h-6 mr-4 text-[#BB0000]" />
                      <span className="font-medium">github.com/bmmss-osu</span>
                    </div>
                    <a 
                      href="https://www.google.com/maps/place/The+Ohio+State+University+Department+of+Mathematics/@40.0015687,-83.0171129,17z/data=!4m10!1m2!2m1!1sThe+Ohio+State+University+Department+of+Mathematics,+100+Math+Tower,+231+W+18th+Ave,+Columbus,+OH+43210!3m6!1s0x88388ebdfed94059:0xe193eba4e6959df4!8m2!3d40.0015037!4d-83.0146175!15sCmdUaGUgT2hpbyBTdGF0ZSBVbml2ZXJzaXR5IERlcGFydG1lbnQgb2YgTWF0aGVtYXRpY3MsIDEwMCBNYXRoIFRvd2VyLCAyMzEgVyAxOHRoIEF2ZSwgQ29sdW1idXMsIE9IIDQzMjEwkgEVdW5pdmVyc2l0eV9kZXBhcnRtZW504AEA!16s%2Fg%2F12hnzyf5x?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <MapPin className="w-6 h-6 mr-4 text-[#BB0000]" />
                      <div>
                        <span className="font-medium block">Mathematics Building</span>
                        <span className="text-gray-500 text-sm">231 W. 18th Ave., Columbus, OH 43210</span>
                      </div>
                    </a>
                 </div>
                 
                 <div className="mt-8 pt-8 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Application Form</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#BB0000] focus:ring-[#BB0000] p-3 border" 
                          placeholder="Brutus Buckeye" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#BB0000] focus:ring-[#BB0000] p-3 border" 
                          placeholder="name.#@osu.edu" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Additional Message / Background</label>
                        <textarea 
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#BB0000] focus:ring-[#BB0000] p-3 border" 
                          rows={4} 
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your technical background (e.g., Python, Math) and why you want to join..." 
                        />
                      </div>
                      
                      {status.type === 'success' && (
                        <div className="p-4 bg-green-50 text-green-700 rounded-md text-sm">
                          {status.message}
                        </div>
                      )}
                      
                      {status.type === 'error' && (
                        <div className="p-4 bg-red-50 text-red-700 rounded-md text-sm">
                          {status.message}
                        </div>
                      )}

                      <button 
                        type="submit" 
                        disabled={status.type === 'loading'}
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${status.type === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {status.type === 'loading' ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </form>
                 </div>
               </div>
            </div>
          </div>
        );
      case 'constitution':
        return <Constitution />;
      case 'terms':
        return (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Terms of Use & Disclaimers</h1>
              <FileText className="h-12 w-12 text-gray-400 mx-auto" />
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-8">
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. University Affiliation</h3>
                <p className="text-gray-700">
                  The Buckeyes Mathematical Modeling and Simulation Society (BMMSS) is a registered student organization at The Ohio State University. The views, opinions, and content expressed on this website are solely those of the student organization and do not necessarily reflect the official policies or positions of The Ohio State University.
                </p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Intellectual Property</h3>
                <p className="text-gray-700">
                  All content, including the BMMSS logo (featuring Brutus Buckeye), code repositories, and educational materials produced by the society, is the intellectual property of the organization, subject to University Student Organization guidelines.
                </p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Code of Conduct</h3>
                <p className="text-gray-700">
                  By accessing this website and participating in our events, you agree to adhere to The Ohio State University Code of Student Conduct. Harassment, discrimination, or academic misconduct (including plagiarism in modeling competitions) will not be tolerated.
                </p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Limitation of Liability</h3>
                <p className="text-gray-700">
                  The tools provided in the "AI Modeling Lab" are for educational purposes only. BMMSS is not responsible for the accuracy of AI-generated content or for any academic consequences resulting from its misuse.
                </p>
              </section>
            </div>
          </div>
        );
      case 'accessibility':
        return (
          <div className="max-w-4xl mx-auto px-4 py-12">
             <div className="text-center mb-12">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Accessibility Statement</h1>
              <Accessibility className="h-12 w-12 text-gray-400 mx-auto" />
            </div>
             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-8">
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Commitment</h3>
                <p className="text-gray-700">
                  The Buckeyes Mathematical Modeling and Simulation Society is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                </p>
              </section>
               <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Conformance Status</h3>
                <p className="text-gray-700">
                  We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Our website includes semantic HTML, high-contrast color modes (Technical Scarlet and Digital Gray), and keyboard navigability.
                </p>
              </section>
               <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Feedback</h3>
                <p className="text-gray-700">
                  We welcome your feedback on the accessibility of the BMMSS website. If you encounter accessibility barriers, please contact our Tech Admin - Webmaster or the Faculty Advisor.
                </p>
                <div className="mt-4">
                  <a href="mailto:lee.8222@osu.edu" className="text-[#BB0000] font-medium hover:underline">
                    Contact Faculty Advisor: lee.8222@osu.edu
                  </a>
                </div>
              </section>
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-grow pt-20">
        {renderContent()}
      </div>

      <footer className="bg-gray-900 text-white mt-auto border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold tracking-tighter text-white">BMMSS</span>
              <p className="text-gray-400 text-sm mt-2 max-w-xs mb-4">
                Buckeyes Mathematical Modeling and Simulation Society at The Ohio State University.
              </p>
              
              {/* Added Address Section */}
              <div className="mt-6">
                <a 
                  href="https://www.google.com/maps/place/The+Ohio+State+University+Department+of+Mathematics/@40.0015687,-83.0171129,17z/data=!4m10!1m2!2m1!1sThe+Ohio+State+University+Department+of+Mathematics,+100+Math+Tower,+231+W+18th+Ave,+Columbus,+OH+43210!3m6!1s0x88388ebdfed94059:0xe193eba4e6959df4!8m2!3d40.0015037!4d-83.0146175!15sCmdUaGUgT2hpbyBTdGF0ZSBVbml2ZXJzaXR5IERlcGFydG1lbnQgb2YgTWF0aGVtYXRpY3MsIDEwMCBNYXRoIFRvd2VyLCAyMzEgVyAxOHRoIEF2ZSwgQ29sdW1idXMsIE9IIDQzMjEwkgEVdW5pdmVyc2l0eV9kZXBhcnRtZW504AEA!16s%2Fg%2F12hnzyf5x?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start text-gray-400 text-sm hover:text-white transition-colors group"
                >
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-[#BB0000] group-hover:text-red-400" />
                  <div>
                    <p className="font-bold text-gray-200">Mathematics Building</p>
                    <p>231 W. 18th Ave., Columbus, OH 43210</p>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Organization</h3>
              <ul className="space-y-3">
                <li><button onClick={() => setActiveTab('about')} className="text-base text-gray-400 hover:text-white transition-colors text-left">About</button></li>
                <li><button onClick={() => setActiveTab('leadership')} className="text-base text-gray-400 hover:text-white transition-colors text-left">Leadership</button></li>
                <li><button onClick={() => setActiveTab('constitution')} className="text-base text-gray-400 hover:text-white transition-colors text-left">Constitution</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Legal & Support</h3>
              <ul className="space-y-3">
                <li><button onClick={() => setActiveTab('terms')} className="text-base text-gray-400 hover:text-white transition-colors text-left">Terms of Use</button></li>
                <li><button onClick={() => setActiveTab('accessibility')} className="text-base text-gray-400 hover:text-white transition-colors text-left">Accessibility</button></li>
                <li><button onClick={() => setActiveTab('contact')} className="text-base text-gray-400 hover:text-white transition-colors text-left">Contact</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              &copy; {new Date().getFullYear() < 2026 ? '2026' : new Date().getFullYear()} BMMSS at The Ohio State University. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://www.instagram.com/bmmss_osu?igsh=MXQyNW16dmZvMXplNQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="mailto:qian.917@osu.edu" className="text-gray-400 hover:text-white transition-colors">
                 <span className="sr-only">Email</span>
                 <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;