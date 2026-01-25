import React, { useState } from 'react';
import { generateModelingProblem } from '../services/geminiService';
import { Sparkles, Brain, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const GeminiModeler: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setResult(null);
    try {
      const generatedText = await generateModelingProblem(topic);
      setResult(generatedText);
    } catch (err) {
      setResult("Sorry, we encountered an error connecting to the AI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
      <div className="bg-[#BB0000] px-6 py-4 flex items-center justify-between">
        <h2 className="text-white text-xl font-bold flex items-center gap-2">
          <Brain className="h-6 w-6" />
          AI Modeling Coach
        </h2>
        <span className="text-red-100 text-xs font-medium uppercase tracking-wider bg-red-800 px-2 py-1 rounded">
          Powered by Gemini
        </span>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6">
          Stuck on finding a topic for your next project or hackathon? Enter a subject, and our AI will formulate a competition-level mathematical modeling problem statement for you.
        </p>

        <form onSubmit={handleGenerate} className="flex gap-4 mb-8">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="E.g., Traffic Flow, Spread of Disease, Coffee Shops..."
            className="flex-1 rounded-lg border-gray-300 border px-4 py-3 focus:ring-2 focus:ring-[#BB0000] focus:border-transparent outline-none transition shadow-sm"
          />
          <button
            type="submit"
            disabled={loading || !topic}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
            Generate
          </button>
        </form>

        {result && (
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="prose prose-red max-w-none text-gray-800">
              {/* Assuming result is markdown */}
               <ReactMarkdown
                  components={{
                    h1: ({node, ...props}) => <h3 className="text-2xl font-bold text-[#BB0000] mb-4" {...props} />,
                    h2: ({node, ...props}) => <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3" {...props} />,
                    h3: ({node, ...props}) => <h5 className="text-lg font-semibold text-gray-900 mt-4 mb-2" {...props} />,
                    p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 space-y-1" {...props} />,
                    li: ({node, ...props}) => <li className="" {...props} />,
                  }}
               >
                 {result}
               </ReactMarkdown>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
               <button 
                onClick={() => setResult(null)}
                className="text-sm text-gray-500 hover:text-[#BB0000] font-medium"
               >
                 Clear Result
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiModeler;
