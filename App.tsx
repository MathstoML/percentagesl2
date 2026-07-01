import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  CheckSquare, 
  Layers, 
  Percent, 
  Calculator, 
  TrendingUp, 
  TrendingDown, 
  CornerUpLeft, 
  Coins, 
  GraduationCap, 
  CheckCircle,
  HelpCircle,
  ChevronRight,
  Flame,
  Award
} from "lucide-react";

import BuildUpMethod from "./components/BuildUpMethod";
import MultiplierGame from "./components/MultiplierGame";
import PercentageAmount from "./components/PercentageAmount";
import IncreaseDecrease from "./components/IncreaseDecrease";
import PercentageChange from "./components/PercentageChange";
import ReversePercentage from "./components/ReversePercentage";
import InterestSections from "./components/InterestSections";
import QuizSection from "./components/QuizSection";

// Tab types
type ActiveTab = 
  | "buildup" 
  | "multipliers" 
  | "amount" 
  | "incdec" 
  | "change" 
  | "reverse" 
  | "interest" 
  | "quiz";

interface LearningOutcome {
  id: string;
  text: string;
  emoji: string;
}

const learningOutcomes: LearningOutcome[] = [
  { id: "lo_buildup", text: "Find % using build up method for non-calculator", emoji: "🧱" },
  { id: "lo_multipliers", text: "Find Decimal multiplier for Calculator paper", emoji: "🎯" },
  { id: "lo_amount_of", text: "% of an amount calculation", emoji: "🚗" },
  { id: "lo_amount_as", text: "% as an amount fraction conversion", emoji: "📊" },
  { id: "lo_incdec", text: "Increased / Decreased percentage value", emoji: "📈" },
  { id: "lo_change", text: "Percentage Change calculation", emoji: "⚖️" },
  { id: "lo_reverse", text: "Reverse percentage using cross multiplying", emoji: "🔄" },
  { id: "lo_simple", text: "Simple interest accumulation", emoji: "🐖" },
  { id: "lo_compound", text: "Compound interest exponential growth", emoji: "🧬" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("buildup");
  
  // Track checked Learning Outcomes in LocalStorage for persistence!
  const [checkedLOs, setCheckedLOs] = useState<{ [id: string]: boolean }>(() => {
    const saved = localStorage.getItem("edexcel_l2_pct_checked_los");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("edexcel_l2_pct_checked_los", JSON.stringify(checkedLOs));
  }, [checkedLOs]);

  const toggleLO = (id: string) => {
    setCheckedLOs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedLOs).filter(Boolean).length;
  const progressPct = (completedCount / learningOutcomes.length) * 100;

  // Help switch tabs easily
  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col selection:bg-yellow-400 selection:text-slate-950 select-none pb-12 font-sans">
      
      {/* Header Section */}
      <header className="max-w-6xl mx-auto w-full px-4 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end mb-6 border-b-4 border-yellow-400 pb-2 gap-4">
        <div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter leading-none uppercase">
            PERCENTAGE <span className="text-yellow-400">PRO</span>
          </h1>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-1">
            Edexcel Level 2 Functional Skills Revision Hub
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1">
          <span className="text-lg sm:text-2xl font-black bg-yellow-400 text-black px-4 py-1.5 border-2 border-black tracking-tighter uppercase shrink-0">🧠 L2 MATHS</span>
          <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mt-1">EDEXCEL FS L2 MATHS REV // HUB</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 mt-4 flex-grow space-y-8 w-full">
        
        {/* Welcome Hero Card */}
        <section className="bg-slate-900 border-4 border-white p-6 sm:p-8 flex flex-col lg:flex-row justify-between items-stretch gap-8 relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-10 blur-2xl pointer-events-none"></div>
          
          {/* Left intro text */}
          <div className="lg:w-7/12 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="bg-yellow-400 text-black text-xs font-black px-3 py-1 uppercase tracking-widest border border-black inline-block">
                👋 Welcome Students!
              </span>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tighter uppercase text-white">
                Master Percentages for your Edexcel Level 2 Exam! 🏆
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-bold">
                Welcome to your interactive revision notebook, designed specially by <span className="font-extrabold text-yellow-400 underline">Halima Khamisa</span>. We have converted your study slides into live step-by-step builders, calculators, match-up games, and practice tests. Have fun studying!
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs bg-slate-950 px-3.5 py-2 font-bold uppercase tracking-wider border-2 border-slate-700 text-slate-300">
                <span className="text-base">🧱</span>
                <span>Non-Calculator Bricks</span>
              </div>
              <div className="flex items-center gap-2 text-xs bg-slate-950 px-3.5 py-2 font-bold uppercase tracking-wider border-2 border-slate-700 text-slate-300">
                <span className="text-base">🎯</span>
                <span>Decimal Multipliers</span>
              </div>
              <div className="flex items-center gap-2 text-xs bg-slate-950 px-3.5 py-2 font-bold uppercase tracking-wider border-2 border-slate-700 text-slate-300">
                <span className="text-base">🐖</span>
                <span>Interest & Reverse %</span>
              </div>
            </div>
          </div>

          {/* Right illustration/stat cards */}
          <div className="lg:w-5/12 bg-slate-950 p-6 border-4 border-yellow-400 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-black text-sm uppercase tracking-wider text-yellow-400 flex items-center gap-2 mb-3">
                <CheckSquare className="h-4 w-4" />
                <span>LO Revision Progress</span>
              </h3>
              
              {/* Progress percentage bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-black text-white uppercase tracking-wider">
                  <span>Completed Outcomes:</span>
                  <span className="text-yellow-400 font-mono text-sm">{completedCount} / {learningOutcomes.length}</span>
                </div>
                <div className="w-full bg-slate-800 h-4 border-2 border-white overflow-hidden">
                  <div 
                    className="bg-yellow-400 h-full transition-all duration-300 border-r-2 border-white" 
                    style={{ width: `${progressPct}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Quick checkoff preview list */}
            <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
              {learningOutcomes.map((lo) => (
                <button
                  key={lo.id}
                  onClick={() => toggleLO(lo.id)}
                  className="w-full flex items-center gap-2.5 text-left text-xs font-bold text-slate-300 hover:text-white transition-all bg-slate-900 hover:bg-slate-800 py-2 px-3 border border-slate-800"
                >
                  <span className={`h-4 w-4 border flex items-center justify-center shrink-0 ${
                    checkedLOs[lo.id] ? "bg-yellow-400 border-black text-black font-black" : "border-slate-600 bg-slate-950"
                  }`}>
                    {checkedLOs[lo.id] ? "✓" : ""}
                  </span>
                  <span className="truncate uppercase text-[10px] tracking-wide">{lo.emoji} {lo.text}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Tabs Grid */}
        <section className="space-y-4">
          <h3 className="font-black text-xs text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <span>📚 SELECT STUDY LEVEL/TOPIC MODULE:</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {[
              { id: "buildup", label: "1. Build Up 🧱", emoji: "🧱", color: "bg-emerald-600" },
              { id: "multipliers", label: "2. Multipliers 🎯", emoji: "🎯", color: "bg-blue-600" },
              { id: "amount", label: "3. % Of / As 🚗", emoji: "🚗", color: "bg-pink-600" },
              { id: "incdec", label: "4. Inc & Dec 📈", emoji: "📈", color: "bg-orange-600" },
              { id: "change", label: "5. % Change ⚖️", emoji: "⚖️", color: "bg-purple-600" },
              { id: "reverse", label: "6. Reverse % 🔄", emoji: "🔄", color: "bg-indigo-600" },
              { id: "interest", label: "7. Interest 🐖", emoji: "🐖", color: "bg-rose-600" },
              { id: "quiz", label: "8. Exam Quiz ✏️", emoji: "✏️", color: "bg-yellow-500" }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as ActiveTab)}
                  className={`p-3.5 transition-all flex flex-col items-center justify-center gap-1 text-center border-4 select-none ${
                    isActive
                      ? "bg-yellow-400 text-black border-white font-black scale-105 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                      : "bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700 font-black"
                  }`}
                >
                  <span className="text-xl sm:text-2xl mb-1">{tab.emoji}</span>
                  <span className="text-[10px] tracking-tight uppercase leading-tight">
                    {tab.label.split(". ")[1] || tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Dynamic Interactive Component Panel */}
        <section className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "buildup" && <BuildUpMethod />}
              {activeTab === "multipliers" && <MultiplierGame />}
              {activeTab === "amount" && <PercentageAmount />}
              {activeTab === "incdec" && <IncreaseDecrease />}
              {activeTab === "change" && <PercentageChange />}
              {activeTab === "reverse" && <ReversePercentage />}
              {activeTab === "interest" && <InterestSections />}
              {activeTab === "quiz" && <QuizSection />}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Bottom review checklist matching slide 2 learning outcomes */}
        <section className="bg-slate-900 border-4 border-yellow-400 p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-slate-850">
            <div className="bg-yellow-400 text-black px-3 py-1 font-black text-2xl border-2 border-black">
              ✓
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                Are you fully revised? 🤔
              </h3>
              <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mt-0.5">
                Review your official Edexcel Learning Outcomes (LOs) list from the presentation slide deck:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {learningOutcomes.map((lo) => {
              const isChecked = checkedLOs[lo.id];
              return (
                <button
                  key={lo.id}
                  onClick={() => toggleLO(lo.id)}
                  className={`p-4 border-2 text-left flex items-start gap-3 transition-all ${
                    isChecked
                      ? "bg-slate-950 border-yellow-400 text-white"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className={`h-5 w-5 border flex items-center justify-center shrink-0 mt-0.5 ${
                    isChecked ? "bg-yellow-400 border-black text-black font-black text-xs" : "border-slate-600 bg-slate-900"
                  }`}>
                    {isChecked ? "✓" : ""}
                  </span>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wide flex items-center gap-1.5 text-yellow-400">
                      <span>{lo.emoji}</span>
                      <span>{lo.text.split(" ").slice(0, 3).join(" ")}</span>
                    </span>
                    <span className="block text-xs mt-1 text-slate-300 leading-normal font-medium">
                      {lo.text}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

      </main>

      {/* Footer copyright */}
      <footer className="mt-16 max-w-6xl mx-auto px-4 w-full border-t-4 border-yellow-400 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex space-x-4">
          <span className="px-3 py-1 bg-white text-black font-black text-xs uppercase border border-black">Calculators Ready? 🎯</span>
          <span className="px-3 py-1 bg-yellow-400 text-black font-black text-xs uppercase underline border border-black">Final Exam Practice</span>
        </div>
        <div className="text-center sm:text-right">
          <div className="text-xs text-slate-500 font-mono tracking-widest uppercase">
            EDEXCEL FS L2 MATHS REV // PAGE 1 OF 1
          </div>
          <p className="text-[10px] text-slate-600 uppercase font-bold tracking-wider mt-1">
            Developed specially for the students of Halima Khamisa
          </p>
        </div>
      </footer>

    </div>
  );
}
