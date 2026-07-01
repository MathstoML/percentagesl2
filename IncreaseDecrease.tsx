import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDownRight, Calculator, Coins, Tag, RefreshCw } from "lucide-react";

export default function IncreaseDecrease() {
  const [calcType, setCalcType] = useState<"increase" | "decrease">("increase");
  const [originalValue, setOriginalValue] = useState<number>(320);
  const [percentRate, setPercentRate] = useState<number>(45);

  const multiplier = calcType === "increase" ? 1 + percentRate / 100 : 1 - percentRate / 100;
  const changeValue = (percentRate / 100) * originalValue;
  const finalValue = calcType === "increase" ? originalValue + changeValue : originalValue - changeValue;

  return (
    <div className="bg-slate-900 border-4 border-emerald-500 p-6 sm:p-8 text-white">
      <div className="mb-6">
        <span className="bg-emerald-500 text-black text-xs font-black px-3 py-1 uppercase tracking-wider border border-black inline-block">
          📈 Exam Essentials
        </span>
        <h2 className="text-3xl font-black font-display text-white mt-3 uppercase tracking-tight flex items-center gap-2">
          Increase & Decrease Percentages 💰
        </h2>
        <p className="text-slate-300 text-sm mt-2 font-bold leading-relaxed">
          Learn how to add or subtract a percentage from an amount. Using a single <span className="text-emerald-400 underline font-black">Decimal Multiplier</span> is the fastest way to get full marks on calculator papers!
        </p>
      </div>

      {/* Slide presentations (Page 8 & 9) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Increase % example */}
        <div className="bg-slate-950 p-5 border-2 border-slate-850 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-black text-xs uppercase tracking-wider mb-2">
              <ArrowUpRight className="h-5 w-5 bg-emerald-950 p-1 border border-emerald-500 shrink-0" />
              <span>Oliver's Salary Increase (Slide 8)</span>
            </div>
            <p className="text-slate-200 text-xs sm:text-sm italic leading-relaxed font-bold">
              &ldquo;Oliver's salary is <span className="text-white">£18,000</span> and he is due to get an increase of <span className="text-emerald-400 font-black">4%</span>. How much will this increase be?&rdquo;
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between">
            <div className="text-[11px] text-slate-400 font-mono font-bold">
              <div>• 1% of 18,000 = 180</div>
              <div>• 4% = 180 × 4 = <span className="text-white underline">£720</span></div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-2 text-center shrink-0">
              <span className="block text-[8px] uppercase tracking-widest text-slate-400 font-black">Increase</span>
              <span className="font-mono text-xs font-black text-emerald-400">£720</span>
            </div>
          </div>
        </div>

        {/* Decrease % example */}
        <div className="bg-slate-950 p-5 border-2 border-slate-850 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-400 font-black text-xs uppercase tracking-wider mb-2">
              <ArrowDownRight className="h-5 w-5 bg-rose-950 p-1 border border-rose-500 shrink-0" />
              <span>TV Sale Discount (Slide 9)</span>
            </div>
            <p className="text-slate-200 text-xs sm:text-sm italic leading-relaxed font-bold">
              &ldquo;A new TV is priced at <span className="text-white">£320</span>. In a sale it is reduced by <span className="text-rose-400 font-black">45%</span>. Calculate the sale price.&rdquo;
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between">
            <div className="text-[11px] text-slate-400 font-mono font-bold">
              <div>• Multiplier = 100% - 45% = 55% = 0.55</div>
              <div>• Sale Price = 320 × 0.55 = <span className="text-white underline">£176</span></div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-2 text-center shrink-0">
              <span className="block text-[8px] uppercase tracking-widest text-slate-400 font-black">Sale Price</span>
              <span className="font-mono text-xs font-black text-rose-400">£176</span>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Tool Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-slate-800">
        
        {/* Left column: Input controls */}
        <div className="space-y-5">
          <h3 className="font-black text-slate-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
            <span>⚙️ Configure Multiplier Solver</span>
          </h3>

          {/* Toggle Type */}
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-wide mb-2">Choose Calculation Type</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setCalcType("increase")}
                className={`py-3 px-4 font-black uppercase tracking-wider text-xs flex items-center justify-center gap-1.5 border-2 rounded-none transition-all ${
                  calcType === "increase"
                    ? "bg-emerald-500 border-white text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                    : "bg-slate-950 border-slate-850 text-slate-400 hover:bg-slate-900"
                }`}
              >
                <ArrowUpRight className="h-4 w-4 shrink-0" /> Increase (+%)
              </button>
              <button
                onClick={() => setCalcType("decrease")}
                className={`py-3 px-4 font-black uppercase tracking-wider text-xs flex items-center justify-center gap-1.5 border-2 rounded-none transition-all ${
                  calcType === "decrease"
                    ? "bg-rose-500 border-white text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                    : "bg-slate-950 border-slate-850 text-slate-400 hover:bg-slate-900"
                }`}
              >
                <ArrowDownRight className="h-4 w-4 shrink-0" /> Decrease (-%)
              </button>
            </div>
          </div>

          {/* Numeric fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-wide mb-2">Original Value (£)</label>
              <input
                type="number"
                value={originalValue}
                onChange={(e) => setOriginalValue(Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-sm text-white focus:outline-none focus:border-indigo-500 rounded-none"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-wide mb-2">Percentage Rate (%)</label>
              <input
                type="number"
                value={percentRate}
                onChange={(e) => setPercentRate(Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-sm text-white focus:outline-none focus:border-indigo-500 rounded-none"
              />
            </div>
          </div>

          {/* Preset Buttons for revision */}
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-wide mb-2">Quick Revision Presets</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCalcType("increase"); setOriginalValue(18000); setPercentRate(4); }}
                className="px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-black uppercase tracking-wider text-slate-300 transition-colors rounded-none"
              >
                💼 Oliver's Salary (+4%)
              </button>
              <button
                onClick={() => { setCalcType("decrease"); setOriginalValue(320); setPercentRate(45); }}
                className="px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-black uppercase tracking-wider text-slate-300 transition-colors rounded-none"
              >
                📺 TV Sale discount (-45%)
              </button>
              <button
                onClick={() => { setCalcType("increase"); setOriginalValue(65); setPercentRate(20); }}
                className="px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-black uppercase tracking-wider text-slate-300 transition-colors rounded-none"
              >
                🍲 Restaurant VAT (+20%)
              </button>
            </div>
          </div>
        </div>

        {/* Right column: Working Out & Visual output */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-black text-slate-400 text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span>🧮 Step-By-Step Solution</span>
            </h3>

            {/* Formula Block */}
            <div className="bg-slate-950 p-4 border-2 border-slate-850 space-y-4">
              
              {/* Step 1 */}
              <div>
                <span className="block text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1">Step 1: Determine Multiplier</span>
                <span className="font-mono text-xs font-black text-yellow-400">
                  {calcType === "increase" ? "100% + " : "100% - "} {percentRate}% = {calcType === "increase" ? 100 + percentRate : 100 - percentRate}% = <span className="text-white underline font-mono">{multiplier.toFixed(3).replace(/\.?0+$/, "")}</span>
                </span>
              </div>

              {/* Step 2 */}
              <div>
                <span className="block text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1">Step 2: Multiply by Original Amount</span>
                <span className="font-mono text-xs font-black text-yellow-400">
                  {originalValue} × {multiplier.toFixed(3).replace(/\.?0+$/, "")} = <span className="text-emerald-400 font-mono font-black text-base">£{finalValue.toFixed(2).replace(/\.00$/, "")}</span>
                </span>
              </div>

              {/* Step 3 (For reference) */}
              <div>
                <span className="block text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1">Breakdown of Change</span>
                <p className="text-xs text-slate-300 font-bold font-mono">
                  The actual {calcType === "increase" ? "increase amount" : "discount amount"} is <span className="text-white font-black underline">£{changeValue.toFixed(2).replace(/\.00$/, "")}</span>
                </p>
              </div>

            </div>
          </div>

          {/* Interactive visual representations (TV tags or Money pots) */}
          <div className="mt-6 pt-6 border-t border-slate-800 flex items-center gap-4">
            {calcType === "decrease" ? (
              <div className="bg-slate-950 border-2 border-white p-4 flex items-center gap-4 w-full">
                <div className="text-3xl p-2 bg-slate-900 border border-slate-800 shrink-0">🏷️</div>
                <div>
                  <span className="block text-[9px] uppercase font-black tracking-widest text-rose-400">TV Price Discounted</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="line-through text-slate-500 font-mono text-sm font-bold">£{originalValue}</span>
                    <span className="text-rose-400 font-black font-mono text-xl">£{finalValue.toFixed(2).replace(/\.00$/, "")}</span>
                  </div>
                  <span className="text-xs text-slate-300 font-bold mt-1 block">Saved {percentRate}%! (Save £{changeValue.toFixed(2).replace(/\.00$/, "")})</span>
                </div>
              </div>
            ) : (
              <div className="bg-slate-950 border-2 border-white p-4 flex items-center gap-4 w-full">
                <div className="text-3xl p-2 bg-slate-900 border border-slate-800 shrink-0">💼</div>
                <div>
                  <span className="block text-[9px] uppercase font-black tracking-widest text-emerald-400">Salary Raised</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-slate-500 font-mono text-sm font-bold">£{originalValue}</span>
                    <span className="text-emerald-400 font-black font-mono text-xl">£{finalValue.toFixed(2).replace(/\.00$/, "")}</span>
                  </div>
                  <span className="text-xs text-slate-300 font-bold mt-1 block">Increased by {percentRate}%! (+£{changeValue.toFixed(2).replace(/\.00$/, "")})</span>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
