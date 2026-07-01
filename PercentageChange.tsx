import React, { useState } from "react";
import { motion } from "motion/react";
import { Scale, ArrowRight, HelpCircle, Calculator, Percent } from "lucide-react";

export default function PercentageChange() {
  const [origVal, setOrigVal] = useState<number>(2);
  const [newVal, setNewVal] = useState<number>(3.5);

  const diff = Math.abs(newVal - origVal);
  const pctChange = origVal > 0 ? (diff / origVal) * 100 : 0;
  const isIncrease = newVal > origVal;

  return (
    <div className="bg-slate-900 border-4 border-indigo-500 p-6 sm:p-8 text-white">
      <div className="mb-6">
        <span className="bg-indigo-600 text-white text-xs font-black px-3 py-1 uppercase tracking-wider border border-black inline-block">
          ⚖️ Comparatives
        </span>
        <h2 className="text-3xl font-black font-display text-white mt-3 uppercase tracking-tight flex items-center gap-2">
          Percentage Change Calculations 📈
        </h2>
        <p className="text-slate-300 text-sm mt-2 font-bold leading-relaxed">
          When an item grows, shrinks, increases, or decreases in value, we calculate the percentage change based on its <span className="text-indigo-400 underline font-black">Original starting value</span>.
        </p>
      </div>

      {/* Formula yellow highlighted display matching slide deck page 10 */}
      <div className="bg-yellow-400 text-black border-4 border-white p-5 text-center mb-8 max-w-xl mx-auto shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-none">
        <span className="block text-[10px] font-black uppercase tracking-widest text-black mb-3">
          Formula from Slide Presentation:
        </span>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-display">
          <div className="flex flex-col items-center">
            <span className="text-base font-black text-black pb-1 border-b-2 border-black font-mono uppercase tracking-tight">
              actual difference
            </span>
            <span className="text-base font-black text-black pt-1 font-mono uppercase tracking-tight">
              original amount
            </span>
          </div>
          <span className="text-xl font-black text-black font-mono">× 100</span>
        </div>
      </div>

      {/* Slides Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Puppy Weight Increase */}
        <div className="bg-slate-950 p-5 border-2 border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-xs font-black text-indigo-400 block uppercase tracking-wider mb-2">🐶 Example A: Puppy Growth</span>
            <p className="text-slate-200 text-xs sm:text-sm italic leading-relaxed font-bold">
              &ldquo;A puppy weighed <span className="text-white">2kg</span>. Eight weeks later the puppy weighed <span className="text-indigo-400">3.5kg</span>. What was the percentage increase in the puppy's weight?&rdquo;
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-850 text-[11px] font-mono text-slate-400 space-y-1 font-bold">
            <p>• Diff = 3.5kg - 2kg = 1.5kg</p>
            <p>• Formula: (1.5 ÷ 2) × 100 = <span className="text-yellow-400 font-mono">75% Increase</span></p>
          </div>
        </div>

        {/* Sofa Price Reduction */}
        <div className="bg-slate-950 p-5 border-2 border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-xs font-black text-indigo-400 block uppercase tracking-wider mb-2">🛋️ Example B: Sofa Sale</span>
            <p className="text-slate-200 text-xs sm:text-sm italic leading-relaxed font-bold">
              &ldquo;In a sale the price of a sofa is reduced from <span className="text-white">£2500</span> to <span className="text-rose-400">£1840</span>. What is the percentage decrease?&rdquo;
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-850 text-[11px] font-mono text-slate-400 space-y-1 font-bold">
            <p>• Diff = 2500 - 1840 = £660</p>
            <p>• Formula: (660 ÷ 2500) × 100 = <span className="text-rose-400 font-mono">26.4% Decrease</span></p>
          </div>
        </div>

      </div>

      {/* Calculator tool */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-slate-800">
        
        {/* inputs */}
        <div className="space-y-4">
          <h3 className="font-black text-slate-400 text-xs uppercase tracking-wider mb-2">
            ⚙️ Configure Live Solver
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-wide mb-2">Original Amount (Old)</label>
              <input
                type="number"
                value={origVal}
                onChange={(e) => setOrigVal(Math.max(0.1, Number(e.target.value)))}
                className="w-full px-4 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-sm text-white focus:outline-none focus:border-indigo-500 rounded-none"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-wide mb-2">New Amount (Current)</label>
              <input
                type="number"
                value={newVal}
                onChange={(e) => setNewVal(Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-sm text-white focus:outline-none focus:border-indigo-500 rounded-none"
              />
            </div>
          </div>

          {/* Quick toggle presets */}
          <div>
            <span className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-wide">Load Slide Presets:</span>
            <div className="flex gap-2">
              <button
                onClick={() => { setOrigVal(2); setNewVal(3.5); }}
                className="px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-black uppercase tracking-wider text-slate-300 transition-colors rounded-none"
              >
                🐶 Puppy Weight
              </button>
              <button
                onClick={() => { setOrigVal(2500); setNewVal(1840); }}
                className="px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-black uppercase tracking-wider text-slate-300 transition-colors rounded-none"
              >
                🛋️ Sofa Price
              </button>
            </div>
          </div>
        </div>

        {/* Right Workings Panel */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-black text-slate-400 text-xs uppercase tracking-wider mb-3">
              🧮 Interactive Workings
            </h3>

            <div className="bg-slate-950 p-5 border-2 border-slate-850 font-mono text-xs text-slate-300 space-y-2.5 rounded-none">
              <p className="font-bold">
                1. Find actual difference:
                <br />
                <span className="text-yellow-400">
                  | {newVal} - {origVal} | = {diff.toFixed(3).replace(/\.?0+$/, "")}
                </span>
              </p>
              
              <p className="font-bold">
                2. Divide difference by Original:
                <br />
                <span className="text-yellow-400">
                  {diff.toFixed(3).replace(/\.?0+$/, "")} ÷ {origVal} = {(diff / origVal).toFixed(4)}
                </span>
              </p>

              <p className="font-bold">
                3. Multiply by 100:
                <br />
                <span className="text-yellow-400">
                  {(diff / origVal).toFixed(4)} × 100 = {pctChange.toFixed(2).replace(/\.00$/, "")}%
                </span>
              </p>

              <div className="border-t border-slate-850 pt-3 mt-3 flex items-center justify-between gap-2">
                <span className="font-sans font-black uppercase tracking-wider text-[10px] text-slate-400">Percentage Change Outcome:</span>
                <span className={`font-sans font-black uppercase tracking-wider text-[10px] border-2 px-3 py-1 ${
                  isIncrease ? "bg-emerald-500 border-white text-black" : "bg-rose-500 border-white text-black"
                }`}>
                  {isIncrease ? "📈 Increase" : "📉 Decrease"} of {pctChange.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Quick Visual Slider / Representation */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Visual:</span>
            <div className="flex-1 bg-slate-900 h-4 border-2 border-white overflow-hidden flex">
              <div
                className="bg-indigo-600 border-r border-white transition-all"
                style={{ width: "45%" }}
                title={`Original: ${origVal}`}
              ></div>
              <div
                className={`transition-all ${isIncrease ? "bg-emerald-500" : "bg-rose-500"}`}
                style={{ width: `${Math.min(50, (pctChange / 100) * 45)}%` }}
                title={`Difference: ${diff}`}
              ></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
