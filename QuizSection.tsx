import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { revisionQuestions, Question } from "../data/questions";
import { CheckCircle2, XCircle, ChevronLeft, ChevronRight, HelpCircle, Trophy, RefreshCw, Edit3, Award } from "lucide-react";

export default function QuizSection() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [qId: string]: string }>({});
  const [submitted, setSubmitted] = useState<{ [qId: string]: boolean }>({});
  const [scratchpads, setScratchpads] = useState<{ [qId: string]: string }>({});
  const [showHint, setShowHint] = useState<{ [qId: string]: boolean }>({});
  const [score, setScore] = useState<number>(0);

  const currentQuestion = revisionQuestions[currentIdx];

  const handleAnswerChange = (val: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: val }));
  };

  const handleScratchpadChange = (val: string) => {
    setScratchpads(prev => ({ ...prev, [currentQuestion.id]: val }));
  };

  const toggleHint = () => {
    setShowHint(prev => ({ ...prev, [currentQuestion.id]: !prev[currentQuestion.id] }));
  };

  const submitAnswer = () => {
    if (submitted[currentQuestion.id]) return;

    const userAns = parseFloat(answers[currentQuestion.id] || "");
    const correctAns = currentQuestion.correctAnswer;
    const isCorrect = userAns === correctAns;

    if (isCorrect) {
      setScore(prev => prev + currentQuestion.marks);
    }

    setSubmitted(prev => ({ ...prev, [currentQuestion.id]: true }));
  };

  const resetQuiz = () => {
    setAnswers({});
    setSubmitted({});
    setScratchpads({});
    setShowHint({});
    setScore(0);
    setCurrentIdx(0);
  };

  const totalQuestions = revisionQuestions.length;
  const isCorrect = (q: Question) => {
    const user = parseFloat(answers[q.id] || "");
    return user === q.correctAnswer;
  };

  return (
    <div className="bg-slate-900 border-4 border-indigo-500 p-6 sm:p-8 text-white">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
        <div>
          <span className="bg-indigo-600 text-white text-xs font-black px-3 py-1 uppercase tracking-wider border border-black inline-block">
            ✏️ Practice & Review
          </span>
          <h2 className="text-3xl font-black font-display text-white mt-3 uppercase tracking-tight flex items-center gap-2">
            Interactive Edexcel Exam Practice 📝
          </h2>
          <p className="text-slate-300 text-sm mt-2 font-bold leading-relaxed">
            Test your knowledge with 1 real exam-style question for each percentages topic from the slide deck!
          </p>
        </div>

        {/* Score indicator */}
        <div className="bg-slate-950 px-4 py-3 border-2 border-slate-800 flex items-center gap-2.5 self-start md:self-auto">
          <Award className="h-5 w-5 text-indigo-400" />
          <div>
            <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Marks</span>
            <span className="text-sm font-black text-yellow-400 font-mono">
              {score} / {revisionQuestions.reduce((acc, q) => acc + q.marks, 0)} pts
            </span>
          </div>
        </div>
      </div>

      {/* Grid selector of questions */}
      <div className="flex flex-wrap gap-2 mb-6">
        {revisionQuestions.map((q, idx) => {
          const isQSubmitted = submitted[q.id];
          const isQCorrect = isQSubmitted && isCorrect(q);
          const isCurrent = idx === currentIdx;

          return (
            <button
              key={q.id}
              onClick={() => setCurrentIdx(idx)}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 border-2 rounded-none ${
                isCurrent
                  ? "bg-indigo-600 border-white text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                  : isQSubmitted
                  ? isQCorrect
                    ? "bg-emerald-500 border-white text-black"
                    : "bg-rose-500 border-white text-black"
                  : "bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900"
              }`}
            >
              <span>Q{idx + 1}</span>
              {isQSubmitted && (
                <span className="text-[10px]">{isQCorrect ? "✅" : "❌"}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Question Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col (8 cols): Question text, inputs, hint, working out */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-slate-950 p-6 border-2 border-slate-850 relative overflow-hidden">
            <span className="text-[10px] uppercase tracking-wider font-black text-indigo-400 bg-slate-900 px-2.5 py-1 border border-slate-800">
              {currentQuestion.topic} • {currentQuestion.marks} Marks
            </span>
            <h3 className="text-lg font-black text-white mt-4 leading-relaxed">
              {currentQuestion.questionText}
            </h3>

            {/* Answer input row */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-sm font-bold">
                  {currentQuestion.unit === "£" ? "£" : ""}
                </span>
                <input
                  type="number"
                  step="any"
                  placeholder={currentQuestion.placeholderText}
                  value={answers[currentQuestion.id] || ""}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  disabled={submitted[currentQuestion.id]}
                  className="w-full pl-8 pr-12 py-3 bg-slate-900 border-2 border-slate-700 font-mono text-sm text-white focus:outline-none focus:border-indigo-500 disabled:opacity-50"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-black text-slate-400 font-mono">
                  {currentQuestion.unit !== "£" ? currentQuestion.unit : ""}
                </span>
              </div>

              <button
                onClick={submitAnswer}
                disabled={submitted[currentQuestion.id] || !answers[currentQuestion.id]}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-wider px-6 py-3 rounded-none border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] text-sm transition-all disabled:opacity-40 shrink-0"
              >
                Submit Answer 🚀
              </button>
            </div>

            {/* Hint Button */}
            <div className="mt-5">
              <button
                onClick={toggleHint}
                className="text-yellow-400 hover:text-yellow-300 text-xs font-black uppercase tracking-wider flex items-center gap-1"
              >
                <HelpCircle className="h-4 w-4" /> {showHint[currentQuestion.id] ? "Hide Hint" : "Need a Hint? 💡"}
              </button>

              <AnimatePresence>
                {showHint[currentQuestion.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-yellow-950/20 p-4 border-2 border-yellow-500 text-xs text-yellow-100 mt-2 leading-relaxed font-bold"
                  >
                    {currentQuestion.hint}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Feedback & Working Out steps */}
          <AnimatePresence mode="wait">
            {submitted[currentQuestion.id] && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-4"
              >
                {/* Result Block */}
                <div className={`p-5 border-2 flex items-start gap-4 ${
                  isCorrect(currentQuestion)
                    ? "bg-emerald-950/20 border-emerald-500 text-emerald-200"
                    : "bg-rose-950/20 border-rose-500 text-rose-200"
                }`}>
                  <div className="mt-0.5">
                    {isCorrect(currentQuestion) ? (
                      <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
                    ) : (
                      <XCircle className="h-6 w-6 text-rose-400 shrink-0" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-wider text-sm sm:text-base">
                      {isCorrect(currentQuestion) ? "Incredible! Full Marks! 🎉" : "Not quite! Let's check the workings. 🔍"}
                    </h4>
                    <p className="text-xs sm:text-sm mt-1 font-bold leading-relaxed">
                      {isCorrect(currentQuestion)
                        ? currentQuestion.explanation
                        : `Your answer was ${answers[currentQuestion.id]} ${currentQuestion.unit}. The correct exam answer is ${currentQuestion.correctAnswer} ${currentQuestion.unit}.`}
                    </p>
                  </div>
                </div>

                {/* detailed workings breakdown */}
                <div className="bg-slate-950 p-6 border-2 border-slate-850">
                  <h4 className="font-black text-yellow-400 text-xs uppercase tracking-wider mb-3">
                    📐 Official Edexcel Marking Scheme & Steps:
                  </h4>
                  <div className="space-y-2.5">
                    {currentQuestion.workingOutSteps.map((step, idx) => (
                      <div key={idx} className="bg-slate-900 p-3 border border-slate-800 flex items-start gap-2.5">
                        <span className="h-5 w-5 bg-indigo-600 text-white rounded-none flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs font-mono text-slate-300 leading-relaxed font-bold">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 italic font-semibold">
                    💡 <span className="font-bold text-slate-300">Edexcel Examiner Note:</span> In your Functional Skills Level 2 exam, always state your answer clearly with the correct units (e.g., &quot;£&quot;, &quot;%&quot; or &quot;cars&quot;) to avoid losing easy marks!
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex justify-between items-center pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                setCurrentIdx(prev => Math.max(0, prev - 1));
              }}
              disabled={currentIdx === 0}
              className="px-4 py-2 bg-slate-950 border-2 border-slate-800 text-slate-300 text-xs font-black uppercase tracking-wider flex items-center gap-1 hover:bg-slate-900 disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>

            <span className="text-xs font-black text-slate-400 font-mono">
              {currentIdx + 1} / {totalQuestions}
            </span>

            {currentIdx < totalQuestions - 1 ? (
              <button
                onClick={() => {
                  setCurrentIdx(prev => Math.min(totalQuestions - 1, prev + 1));
                }}
                className="px-4 py-2 bg-indigo-600 border-2 border-white text-white text-xs font-black uppercase tracking-wider flex items-center gap-1 hover:bg-indigo-700 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={resetQuiz}
                className="px-4 py-2 bg-emerald-600 border-2 border-white text-white text-xs font-black uppercase tracking-wider flex items-center gap-1 hover:bg-emerald-700 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
              >
                <RefreshCw className="h-4 w-4" /> Restart Test
              </button>
            )}
          </div>
        </div>

        {/* Right Col (4 cols): Working Scratchpad / On-screen revision assistance */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-950 p-5 border-2 border-slate-850">
            <h4 className="font-black text-yellow-400 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Edit3 className="h-4 w-4 text-indigo-400" />
              <span>Scribble Scratchpad 📝</span>
            </h4>
            <p className="text-slate-300 text-[11px] font-bold leading-relaxed mb-3">
              Write down your intermediate steps or calculations here as you work through the problem!
            </p>
            <textarea
              value={scratchpads[currentQuestion.id] || ""}
              onChange={(e) => handleScratchpadChange(e.target.value)}
              placeholder="e.g. 25% of 396 means 396 divided by 4... Let me try..."
              className="w-full h-40 p-3 bg-slate-900 border-2 border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-indigo-500 rounded-none"
            />
          </div>

          <div className="bg-slate-950 p-4 border-2 border-slate-850 text-xs space-y-2.5">
            <span className="font-black text-slate-400 uppercase tracking-wider text-[10px] block">💡 Topic Learning Outcomes:</span>
            <ul className="space-y-1.5 text-slate-300 font-bold uppercase tracking-tight text-[11px]">
              <li>• Build Up Non-Calculator</li>
              <li>• Decimal Multipliers</li>
              <li>• Standard Percentage Amount</li>
              <li>• Percentage Change</li>
              <li>• Reverse Unitary Percentage</li>
              <li>• Simple & Compound Interest</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}
