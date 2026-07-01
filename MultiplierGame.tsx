import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, AlertCircle, RefreshCw, Trophy, Flame, HelpCircle } from "lucide-react";

interface MultiplierItem {
  id: string;
  phrase: string;
  multiplier: string;
  explanation: string;
  category: "increase" | "decrease";
}

const multiplierData: MultiplierItem[] = [
  { id: "1", phrase: "Interest 20%", multiplier: "1.20", explanation: "100% + 20% = 120% = 1.20", category: "increase" },
  { id: "2", phrase: "Depreciation of 8%", multiplier: "0.92", explanation: "100% - 8% = 92% = 0.92", category: "decrease" },
  { id: "3", phrase: "Raise of 50%", multiplier: "1.50", explanation: "100% + 50% = 150% = 1.50", category: "increase" },
  { id: "4", phrase: "Decrease by 1.5%", multiplier: "0.985", explanation: "100% - 1.5% = 98.5% = 0.985", category: "decrease" },
  { id: "5", phrase: "Increase by 120%", multiplier: "2.20", explanation: "100% + 120% = 220% = 2.20", category: "increase" },
  { id: "6", phrase: "VAT 5%", multiplier: "1.05", explanation: "100% + 5% = 105% = 1.05", category: "increase" },
  { id: "7", phrase: "Reduce by 2%", multiplier: "0.98", explanation: "100% - 2% = 98% = 0.98", category: "decrease" },
  { id: "8", phrase: "Add 25%", multiplier: "1.25", explanation: "100% + 25% = 125% = 1.25", category: "increase" },
  { id: "9", phrase: "Discount of 35%", multiplier: "0.65", explanation: "100% - 35% = 65% = 0.65", category: "decrease" },
  { id: "10", phrase: "Increment of 11.5%", multiplier: "1.115", explanation: "100% + 11.5% = 111.5% = 1.115", category: "increase" },
  { id: "11", phrase: "Cut by 18%", multiplier: "0.82", explanation: "100% - 18% = 82% = 0.82", category: "decrease" }
];

export default function MultiplierGame() {
  const [selectedPhraseId, setSelectedPhraseId] = useState<string | null>(null);
  const [selectedMultiplierValue, setSelectedMultiplierValue] = useState<string | null>(null);
  const [matches, setMatches] = useState<{ [phraseId: string]: string }>({}); // phraseId -> multiplierValue
  const [feedback, setFeedback] = useState<{ text: string; isCorrect: boolean } | null>(null);
  const [streak, setStreak] = useState<number>(0);

  // Get current randomized items for phrases and multipliers
  const [shuffledPhrases] = useState(() => [...multiplierData].sort(() => Math.random() - 0.5));
  const [shuffledMultipliers] = useState(() => [...multiplierData].map(d => d.multiplier).sort(() => Math.random() - 0.5));

  const handlePhraseSelect = (id: string) => {
    if (matches[id]) return; // already matched
    setSelectedPhraseId(id);
    setFeedback(null);

    // If multiplier is already selected, check match
    if (selectedMultiplierValue) {
      checkMatch(id, selectedMultiplierValue);
    }
  };

  const handleMultiplierSelect = (multiplier: string) => {
    // If already matched, ignore
    if (Object.values(matches).includes(multiplier)) return;
    setSelectedMultiplierValue(multiplier);
    setFeedback(null);

    // If phrase is already selected, check match
    if (selectedPhraseId) {
      checkMatch(selectedPhraseId, multiplier);
    }
  };

  const checkMatch = (phraseId: string, multiplierValue: string) => {
    const item = multiplierData.find(d => d.id === phraseId);
    if (item && item.multiplier === multiplierValue) {
      // Correct Match!
      setMatches(prev => ({ ...prev, [phraseId]: multiplierValue }));
      setStreak(prev => prev + 1);
      setFeedback({
        text: `Correct! 🎉 ${item.phrase} is indeed multiplier ${item.multiplier} (${item.explanation})`,
        isCorrect: true
      });
      setSelectedPhraseId(null);
      setSelectedMultiplierValue(null);
    } else {
      // Wrong Match
      setStreak(0);
      setFeedback({
        text: `Oops! ❌ That multiplier doesn't match. Remember: for Increases add to 100%, for Decreases subtract from 100%, then divide by 100!`,
        isCorrect: false
      });
      setSelectedPhraseId(null);
      setSelectedMultiplierValue(null);
    }
  };

  const resetGame = () => {
    setMatches({});
    setSelectedPhraseId(null);
    setSelectedMultiplierValue(null);
    setFeedback(null);
    setStreak(0);
  };

  const totalItems = multiplierData.length;
  const matchedCount = Object.keys(matches).length;
  const isCompleted = matchedCount === totalItems;

  return (
    <div className="bg-slate-900 border-4 border-blue-500 p-6 sm:p-8 text-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <span className="bg-blue-600 text-white text-xs font-black px-3 py-1 uppercase tracking-wider border border-black inline-block">
            🎮 Calculator Paper Challenge
          </span>
          <h2 className="text-3xl font-black font-display text-white mt-3 uppercase tracking-tight flex items-center gap-2">
            Decimal Multiplier Match-Up! 🎯
          </h2>
          <p className="text-slate-300 text-sm mt-2 font-bold leading-relaxed">
            Match each percentage change with its correct decimal multiplier. Tap a green card, then tap its blue multiplier match!
          </p>
        </div>

        <div className="flex items-center gap-4 bg-slate-950 p-4 border-2 border-slate-800 self-start md:self-auto">
          <div className="text-center px-2">
            <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">Score</span>
            <span className="text-lg font-black font-mono text-yellow-400">{matchedCount} / {totalItems}</span>
          </div>
          <div className="h-8 w-[1px] bg-slate-800"></div>
          <div className="text-center px-2 flex items-center gap-1.5">
            <Flame className={`h-5 w-5 ${streak > 0 ? "text-yellow-400 animate-pulse" : "text-slate-600"}`} />
            <div>
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">Streak</span>
              <span className="text-lg font-black font-mono text-white">{streak}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Progress Bar */}
      <div className="w-full bg-slate-950 h-4 border-2 border-white overflow-hidden mb-8">
        <motion.div 
          className="bg-yellow-400 h-full border-r-2 border-white"
          initial={{ width: 0 }}
          animate={{ width: `${(matchedCount / totalItems) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Explanatory visual banner */}
      <div className="bg-yellow-950/20 p-5 border-2 border-yellow-500 mb-8 flex items-start gap-3 rounded-none">
        <div className="text-2xl p-1 shrink-0">💡</div>
        <div>
          <h4 className="font-black text-yellow-400 text-xs uppercase tracking-wider">How to easily find any Decimal Multiplier:</h4>
          <p className="text-xs text-slate-200 mt-1 leading-relaxed font-bold">
            • 📈 <span className="text-emerald-400 underline uppercase">Increases (Interest, VAT, Raise, Add)</span>: Start at <span className="text-white">100%</span>, <span className="text-white">ADD</span> the percentage, then divide by <span className="text-white">100</span>. (e.g. VAT 5% → 105% → <span className="text-yellow-400 underline font-black">1.05</span>)
            <br />
            • 📉 <span className="text-rose-400 underline uppercase">Decreases (Depreciation, Reduce, Cut, Discount)</span>: Start at <span className="text-white">100%</span>, <span className="text-white">SUBTRACT</span> the percentage, then divide by <span className="text-white">100</span>. (e.g. Discount 35% → 65% → <span className="text-yellow-400 underline font-black">0.65</span>)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Phrases Column */}
        <div className="space-y-3">
          <h3 className="font-black text-xs text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span>🟢 Percentage Change Scenario</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {shuffledPhrases.map((item) => {
              const isMatched = matches[item.id] !== undefined;
              const isSelected = selectedPhraseId === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handlePhraseSelect(item.id)}
                  disabled={isMatched}
                  className={`w-full p-4 text-left border-2 transition-all flex items-center justify-between rounded-none ${
                    isMatched
                      ? "bg-slate-950 border-slate-900 text-slate-500 opacity-60 line-through"
                      : isSelected
                      ? "bg-emerald-500 border-white text-black font-black scale-[1.02] shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                      : "bg-slate-950 hover:bg-slate-900 border-slate-800 text-slate-300 font-black"
                  }`}
                  whileHover={!isMatched ? { scale: 1.01 } : {}}
                  whileTap={!isMatched ? { scale: 0.99 } : {}}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">
                      {item.category === "increase" ? "📈" : "📉"}
                    </span>
                    <span className="text-sm sm:text-base uppercase tracking-tight text-[11px] sm:text-xs">{item.phrase}</span>
                  </div>
                  {isMatched ? (
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                  ) : (
                    <span className={`h-5 w-5 border flex items-center justify-center text-xs ${
                      isSelected ? "border-black text-black" : "border-slate-700 text-slate-500"
                    }`}>
                      {isSelected ? "●" : ""}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Multipliers Column */}
        <div className="space-y-3">
          <h3 className="font-black text-xs text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span>🔵 Decimal Multiplier (Multiplier × Original)</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2.5">
            {shuffledMultipliers.map((multValue) => {
              const isMatched = Object.values(matches).includes(multValue);
              const isSelected = selectedMultiplierValue === multValue;
              
              return (
                <motion.button
                  key={multValue}
                  onClick={() => handleMultiplierSelect(multValue)}
                  disabled={isMatched}
                  className={`p-4 text-center border-2 transition-all rounded-none ${
                    isMatched
                      ? "bg-slate-950 border-slate-900 text-slate-700 opacity-40 cursor-default"
                      : isSelected
                      ? "bg-blue-600 border-white text-white font-black scale-[1.02] shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                      : "bg-slate-950 hover:bg-slate-900 border-slate-800 text-blue-400 font-black"
                  }`}
                  whileHover={!isMatched ? { scale: 1.02 } : {}}
                  whileTap={!isMatched ? { scale: 0.98 } : {}}
                >
                  <span className="font-mono text-base tracking-wide">{multValue}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dynamic Feedback Banner */}
      <AnimatePresence mode="wait">
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-8 p-4 border-2 flex items-start gap-3 rounded-none ${
              feedback.isCorrect
                ? "bg-emerald-950/20 border-emerald-500 text-emerald-200"
                : "bg-rose-950/20 border-rose-500 text-rose-200"
            }`}
          >
            {feedback.isCorrect ? (
              <CheckCircle className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="h-6 w-6 text-rose-400 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-black text-sm uppercase tracking-wider">{feedback.isCorrect ? "Splendid Match!" : "No Match Yet!"}</p>
              <p className="text-xs sm:text-sm mt-0.5 font-bold leading-relaxed">{feedback.text}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Celebration Overlay when Completed */}
      {isCompleted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 bg-yellow-400 text-black p-6 sm:p-8 text-center border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] relative overflow-hidden"
        >
          <Trophy className="h-16 w-16 text-black mx-auto mb-4 animate-bounce" />
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Incredible Job! You're a Multiplier Master! 👑</h3>
          <p className="text-black text-sm font-bold mt-2 max-w-xl mx-auto uppercase tracking-wide">
            You matched all {totalItems} decimal multipliers correctly! You are fully prepared to tackle any calculator percentage problem in your Edexcel L2 exam.
          </p>
          <button
            onClick={resetGame}
            className="mt-6 bg-black hover:bg-slate-900 text-white font-black uppercase tracking-wider px-6 py-2.5 rounded-none border-2 border-white transition-all flex items-center gap-2 mx-auto shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
          >
            <RefreshCw className="h-4 w-4" /> Play Again
          </button>
        </motion.div>
      )}

      {/* Quick Play Reset Button when NOT finished */}
      {!isCompleted && matchedCount > 0 && (
        <div className="flex justify-end mt-6">
          <button
            onClick={resetGame}
            className="text-slate-500 hover:text-white text-xs font-black uppercase tracking-wider flex items-center gap-1 transition-colors"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Reset Board
          </button>
        </div>
      )}
    </div>
  );
}
