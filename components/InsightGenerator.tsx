import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { InsightTopic, InsightState } from '../types';
import { generateFinancialInsight } from '../services/geminiService';

const InsightGenerator: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<InsightTopic | null>(null);
  const [insightState, setInsightState] = useState<InsightState>({
    loading: false,
    content: null,
    error: null,
  });

  const handleTopicClick = async (topic: InsightTopic) => {
    setActiveTopic(topic);
    setInsightState({ loading: true, content: null, error: null });
    
    const result = await generateFinancialInsight(topic);
    
    setInsightState({
      loading: false,
      content: result,
      error: null // Basic error handling, service returns string in error case usually for this demo
    });
  };

  return (
    <section id="insights" className="py-20 bg-brand-light relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100 -skew-x-12 translate-x-20 opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Controls */}
          <div>
            <div className="flex items-center gap-2 text-brand-primary font-bold tracking-wider uppercase mb-4">
              <Sparkles className="w-5 h-5" />
              <span>AI-Powered Insights</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-brand-dark mb-6">
              Ask Our Intelligent <br /> 
              <span className="text-brand-primary">Knowledge Engine</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Leverage the power of Generative AI to get instant summaries on key financial trends affecting the global market. Select a topic to generate a real-time executive briefing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.values(InsightTopic).map((topic) => (
                <button
                  key={topic}
                  onClick={() => handleTopicClick(topic)}
                  className={`p-4 text-left rounded-lg border transition-all duration-300 flex items-center justify-between group ${
                    activeTopic === topic 
                      ? 'bg-brand-dark text-white border-brand-dark shadow-lg' 
                      : 'bg-white border-gray-200 text-gray-700 hover:border-brand-primary hover:shadow-md'
                  }`}
                >
                  <span className="font-medium">{topic}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    activeTopic === topic ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Output Card */}
          <div className="relative">
             <div className="bg-white rounded-2xl shadow-2xl p-8 min-h-[300px] border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-accent"></div>
                
                {!activeTopic ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4 py-12">
                    <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-gray-300" />
                    </div>
                    <p>Select a topic to generate an insight.</p>
                  </div>
                ) : (
                  <div className="animate-fade-in">
                    <h3 className="text-xl font-bold text-brand-dark mb-2 flex items-center gap-3">
                      {activeTopic}
                      {insightState.loading && <Loader2 className="w-5 h-5 animate-spin text-brand-primary" />}
                    </h3>
                    <div className="w-12 h-1 bg-brand-accent mb-6"></div>

                    {insightState.loading ? (
                       <div className="space-y-3 animate-pulse">
                         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                         <div className="h-4 bg-gray-200 rounded w-full"></div>
                         <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                         <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                       </div>
                    ) : (
                      <div className="prose text-gray-700 leading-relaxed">
                        <p className="text-lg">{insightState.content}</p>
                        <div className="mt-6 flex items-center gap-2 text-xs text-gray-400 font-mono border-t pt-4">
                          <span>GENERATED BY GEMINI 3 FLASH PREVIEW</span>
                          <span className="w-1 h-1 rounded-full bg-green-500"></span>
                          <span>LIVE</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
             </div>
             {/* Decorative blob */}
             <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InsightGenerator;