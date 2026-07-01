import React, { useState } from "react";
import { motion } from "motion/react";
import { HelpCircle, Layers, Plus, ArrowRight, Lightbulb, Play } from "lucide-react";

export default function BuildUpMethod() {
  const [amount, setAmount] = useState<number>(240);
  const [pct, setPct] = useState<number>(15);

  const tenPctVal = amount / 10;
  const fivePctVal = tenPctVal / 2;
  const onePctVal = amount / 100;

  // Let's explain how the user can build up to the chosen percentage
  // We'll write specific formulas for common non-calculator exam percentages:
  // 15% (10% + 5%), 17.5% (10% + 5% + 2.5%), 35% (3 * 10% + 5%), 7.5% (5% + 2.5%), 2.5% (5% ÷ 2)
  const getBuildUpSteps = () => {
    if (pct === 15) {
      return {
        blocks: [
          { label: "10%", value: tenPctVal, formula: `£${amount} ÷ 10` },
          { label: "5%", value: fivePctVal, formula: `10% value ÷ 2` }
        ],
        sumText: `10% value (£${tenPctVal}) + 5% value (£${fivePctVal})`,
        result: tenPctVal + fivePctVal
      };
    } else if (pct === 17.5) {
      const twoPointFivePctVal = fivePctVal / 2;
      return {
        blocks: [
          { label: "10%", value: tenPctVal, formula: `£${amount} ÷ 10` },
          { label: "5%", value: fivePctVal, formula: `10% value ÷ 2` },
          { label: "2.5%", value: twoPointFivePctVal, formula: `5% value ÷ 2` }
        ],
        sumText: `10% value (£${tenPctVal}) + 5% value (£${fivePctVal}) + 2.5% value (£${twoPointFivePctVal})`,
        result: tenPctVal + fivePctVal + twoPointFivePctVal
      };
    } else if (pct === 35) {
      return {
        blocks: [
          { label: "10% × 3", value: tenPctVal * 3, formula: `(£${amount} ÷ 10) × 3` },
          { label: "5%", value: fivePctVal, formula: `10% value ÷ 2` }
        ],
        sumText: `30% value (£${tenPctVal * 3}) + 5% value (£${fivePctVal})`,
        result: tenPctVal * 3 + fivePctVal
      };
    } else {
      // General fall-back unitary build up
      return {
        blocks: [
          { label: `1% × ${pct}`, value: onePctVal * pct, formula: `(£${amount} ÷ 100) × ${pct}` }
        ],
        sumText: `${pct} × 1% value (£${onePctVal})`,
        result: onePctVal * pct
      };
    }
  };

  const stepsInfo = getBuildUpSteps();

  return (
    <div className="bg-slate-900 border-4 border-emerald-500 p-6 sm:p-8 text-white">
      <div className="mb-6">
        <span className="bg-emerald-500 text-black text-xs font-black px-3 py-1 uppercase tracking-wider border border-black inline-block">
          🛠️ Non-Calculator Method
        </span>
        <h2 className="text-3xl font-black font-display text-white mt-3 uppercase tracking-tight flex items-center gap-2">
          The Build Up Method Simulator 🧱
        </h2>
        <p className="text-slate-300 text-sm mt-2 font-bold leading-relaxed">
          When you don't have a calculator, finding complex percentages is simple! Build them up from basic bricks: <span className="text-emerald-400 underline font-black">10%</span>, <span className="text-emerald-400 underline font-black">5%</span>, or <span className="text-emerald-400 underline font-black">1%</span>.
        </p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Side: Interactive Input & Building Blocks */}
        <div className="bg-slate-950 p-6 border-2 border-slate-850 flex flex-col justify-between">
          <div>
            <h3 className="font-black text-slate-300 text-xs uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <span>🎛️ Configure Your Problem</span>
            </h3>

            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">1. Choose Amount (£)</label>
                <div className="flex gap-3">
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-24 px-3 py-1.5 bg-slate-900 border-2 border-slate-700 font-mono text-center text-sm font-black text-emerald-400 rounded-none focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">2. Select Revision Percentage</label>
                <div className="grid grid-cols-4 gap-2">
                  {[15, 17.5, 35, 12].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPct(p)}
                      className={`py-2 text-center text-xs font-black uppercase tracking-wider transition-all rounded-none border-2 ${
                        pct === p
                          ? "bg-emerald-500 text-black border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                          : "bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {p}%
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 mt-2 font-semibold uppercase tracking-wide">
                  💡 Note: 15%, 17.5%, and 35% are highly common in non-calculator papers!
                </p>
              </div>
            </div>

            {/* Core Basic Bricks */}
            <div className="mt-6">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">Your Base Bricks:</h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-900 p-3 border border-slate-800 text-center">
                  <span className="block text-[10px] font-black text-slate-400 uppercase">10% (÷10)</span>
                  <span className="text-base sm:text-lg font-black font-mono text-emerald-400">£{tenPctVal.toFixed(2)}</span>
                </div>
                <div className="bg-slate-900 p-3 border border-slate-800 text-center">
                  <span className="block text-[10px] font-black text-slate-400 uppercase">5% (Half 10%)</span>
                  <span className="text-base sm:text-lg font-black font-mono text-emerald-400">£{fivePctVal.toFixed(2)}</span>
                </div>
                <div className="bg-slate-900 p-3 border border-slate-800 text-center">
                  <span className="block text-[10px] font-black text-slate-400 uppercase">1% (÷100)</span>
                  <span className="text-base sm:text-lg font-black font-mono text-emerald-400">£{onePctVal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-850">
            <div className="bg-emerald-900/20 p-4 border-2 border-emerald-500 flex items-start gap-2.5">
              <Lightbulb className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-200 leading-relaxed font-bold">
                <span className="text-yellow-400 uppercase font-black tracking-wider block mb-0.5">Exam Tip:</span> Edexcel marks show you get working-out credit even if you make a calculation slip later. Always write down your base brick steps clearly on your answer sheet!
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Brick Builder */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-black text-slate-300 text-xs uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <span>🧱 Stacking up to {pct}%</span>
            </h3>

            {/* Stack Visualizer */}
            <div className="space-y-3 bg-slate-950 p-4 border-2 border-slate-850 min-h-[220px] flex flex-col justify-end">
              
              {/* Display blocks stacking */}
              {stepsInfo.blocks.map((block, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-emerald-500 text-black border-2 border-white p-3 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-black text-white text-[10px] px-2 py-0.5 font-black uppercase">
                      {block.label}
                    </span>
                    <span className="text-xs font-black italic">({block.formula})</span>
                  </div>
                  <span className="font-black text-base sm:text-lg font-mono">£{block.value.toFixed(2)}</span>
                </motion.div>
              ))}

              {/* Total Separator */}
              <div className="flex items-center justify-center gap-2 py-1.5">
                <Plus className="h-4 w-4 text-slate-500" />
              </div>

              {/* Total Sum block */}
              <div className="bg-yellow-400 text-black border-4 border-white p-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] text-center">
                <span className="block text-xs uppercase tracking-widest font-black text-black">
                  Total Build Up ({pct}%)
                </span>
                <span className="text-2xl sm:text-3xl font-black font-mono block mt-1">
                  £{stepsInfo.result.toFixed(2)}
                </span>
                <p className="text-[10px] text-black font-bold uppercase mt-1 tracking-wider">
                  Calculated as: {stepsInfo.sumText}
                </p>
              </div>
            </div>
          </div>

          {/* Text-based explanation matching slide deck wording */}
          <div className="mt-6 space-y-3 bg-slate-950 p-4 border-2 border-slate-850">
            <h4 className="font-black text-yellow-400 text-xs uppercase tracking-wider">Slide Presentation Guide:</h4>
            <div className="bg-slate-900 p-3 font-mono text-xs text-slate-300 space-y-1.5 border border-slate-800">
              <p className="font-black text-white uppercase tracking-tight">15% = Find 10%, half to get 5%.</p>
              <p className="font-bold">Add the 2 amounts together, since 15% = 10% + 5%</p>
              <div className="border-t border-dashed border-slate-700 my-2"></div>
              <p className="font-black text-white uppercase tracking-tight">OR</p>
              <p className="font-bold">15% = Find 1% and then multiply by 15</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
