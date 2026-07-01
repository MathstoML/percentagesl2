import React, { useState } from "react";
import { motion } from "motion/react";
import { Table, RefreshCw, Calculator, ArrowRight, Lightbulb } from "lucide-react";

export default function ReversePercentage() {
  const [currentPct, setCurrentPct] = useState<number>(80);
  const [currentVal, setCurrentVal] = useState<number>(320);

  const calculated1Pct = currentVal / currentPct;
  const calculated100Pct = calculated1Pct * 100;

  return (
    <div className="bg-slate-900 border-4 border-yellow-500 p-6 sm:p-8 text-white">
      <div className="mb-6">
        <span className="bg-yellow-500 text-black text-xs font-black px-3 py-1 uppercase tracking-wider border border-black inline-block">
          🔄 Advanced Skills
        </span>
        <h2 className="text-3xl font-black font-display text-white mt-3 uppercase tracking-tight flex items-center gap-2">
          Reverse Percentages (Cross-Multiplying) 🔁
        </h2>
        <p className="text-slate-300 text-sm mt-2 font-bold leading-relaxed">
          When you are given an amount *after* an increase or decrease, or when you are given a specific percentage part, you need to work backwards to find the original 100%!
        </p>
      </div>

      {/* Examples Grid representing pages 4 and 11 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Example 1: Jacob */}
        <div className="bg-slate-950 p-4 border-2 border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 block mb-1">📝 test questions</span>
            <p className="text-slate-200 text-xs italic leading-relaxed font-bold">
              &ldquo;Jacob answered <span className="text-white font-black">80%</span> of the questions correctly, which was <span className="text-indigo-400 font-black">32 questions</span>. Find the total questions.&rdquo;
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 font-mono text-[10px] text-slate-400 font-bold">
            <div>• 80% = 32</div>
            <div>• 1% = 32 ÷ 80 = 0.4</div>
            <div>• 100% = 0.4 × 100 = <span className="text-white underline">40 Qs</span></div>
          </div>
        </div>

        {/* Example 2: Ticket Inclusive of tax */}
        <div className="bg-slate-950 p-4 border-2 border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 block mb-1">🎟️ Ticket Tax</span>
            <p className="text-slate-200 text-xs italic leading-relaxed font-bold">
              &ldquo;A ticket costs <span className="text-white font-black">£30</span> inclusive of <span className="text-white font-black">12% tax</span>. What is the pre-tax cost?&rdquo;
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 font-mono text-[10px] text-slate-400 font-bold">
            <div>• 100% + 12% = 112% = £30</div>
            <div>• 1% = 30 ÷ 112 ≈ £0.2679</div>
            <div>• 100% = £26.79 × 100 = <span className="text-white underline">£26.79</span></div>
          </div>
        </div>

        {/* Example 3: Discount Jacket */}
        <div className="bg-slate-950 p-4 border-2 border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 block mb-1">🧥 Sale Jacket</span>
            <p className="text-slate-200 text-xs italic leading-relaxed font-bold">
              &ldquo;A jacket costs <span className="text-white font-black">£102</span> after a <span className="text-rose-400 font-black">15% discount</span>. What is the original price?&rdquo;
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 font-mono text-[10px] text-slate-400 font-bold">
            <div>• 100% - 15% = 85% = £102</div>
            <div>• 1% = 102 ÷ 85 = £1.20</div>
            <div>• 100% = £1.20 × 100 = <span className="text-white underline">£120</span></div>
          </div>
        </div>

      </div>

      {/* Cross-Multiplying Grid visual tool */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-slate-800">
        
        {/* inputs column */}
        <div className="space-y-4">
          <h3 className="font-black text-slate-400 text-xs uppercase tracking-wider mb-2">
            ⚙️ Configure Problem
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-wide mb-2">This Percentage (%)</label>
              <input
                type="number"
                value={currentPct}
                onChange={(e) => setCurrentPct(Math.max(1, Number(e.target.value)))}
                className="w-full px-4 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-sm text-white focus:outline-none focus:border-yellow-500 rounded-none"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-wide mb-2">Is equal to (£ or Unit)</label>
              <input
                type="number"
                value={currentVal}
                onChange={(e) => setCurrentVal(Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-sm text-white focus:outline-none focus:border-yellow-500 rounded-none"
              />
            </div>
          </div>

          {/* Presets buttons */}
          <div>
            <span className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-wide">Use PowerPoint templates:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCurrentPct(80); setCurrentVal(32); }}
                className="px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-black uppercase tracking-wider text-slate-300 transition-colors rounded-none"
              >
                🎓 Jacob's Test (80% = 32)
              </button>
              <button
                onClick={() => { setCurrentPct(112); setCurrentVal(30); }}
                className="px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-black uppercase tracking-wider text-slate-300 transition-colors rounded-none"
              >
                🎟️ Pre-Tax Ticket (112% = £30)
              </button>
              <button
                onClick={() => { setCurrentPct(85); setCurrentVal(102); }}
                className="px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-black uppercase tracking-wider text-slate-300 transition-colors rounded-none"
              >
                🧥 Sale Jacket (85% = £102)
              </button>
            </div>
          </div>

          <div className="bg-amber-950/20 border-2 border-yellow-500 p-4 text-xs text-yellow-100 mt-2 leading-relaxed font-bold flex gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-black uppercase tracking-wider text-[11px] block text-yellow-400 mb-1">Cross Multiplying Explained:</span>
              To go from <span className="text-white underline">{currentPct}%</span> to <span className="text-white underline">100%</span>:
              <br />
              1. Divide by <span className="text-white font-black">{currentPct}</span> to find <span className="text-white font-black">1%</span>.
              <br />
              2. Multiply by <span className="text-white font-black">100</span> to find <span className="text-white font-black">100%</span>.
            </div>
          </div>
        </div>

        {/* Cross Multiplying Visual Grid Column */}
        <div>
          <h3 className="font-black text-slate-400 text-xs uppercase tracking-wider mb-3">
            🎯 The Unitary / Cross Multiplying Table
          </h3>

          <div className="border-2 border-slate-800 bg-slate-950 p-4 rounded-none">
            <div className="grid grid-cols-3 gap-2.5 text-center text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
              <div>Percentage (%)</div>
              <div>Relationship</div>
              <div>Value (Amount)</div>
            </div>

            {/* Rows */}
            <div className="space-y-2">
              
              {/* Row 1 */}
              <div className="bg-slate-900 p-3 border border-slate-800 flex items-center justify-between text-center text-slate-300 rounded-none font-bold">
                <div className="w-1/3 font-black text-white">{currentPct}%</div>
                <div className="w-1/3 font-mono text-[10px] text-slate-500 uppercase tracking-tight">Starting state</div>
                <div className="w-1/3 font-black font-mono text-yellow-400">£{currentVal.toFixed(2).replace(/\.00$/, "")}</div>
              </div>

              {/* Division arrow */}
              <div className="text-center text-slate-500 py-1 text-[10px] font-mono uppercase tracking-wider font-bold">
                ↓ Divide both sides by {currentPct} ↓
              </div>

              {/* Row 2 */}
              <div className="bg-slate-900 p-3 border border-slate-800 flex items-center justify-between text-center text-slate-300 rounded-none font-bold">
                <div className="w-1/3 font-black text-white">1%</div>
                <div className="w-1/3 font-mono text-[10px] text-slate-500 uppercase tracking-tight">Unitary state</div>
                <div className="w-1/3 font-black font-mono text-yellow-400">£{calculated1Pct.toFixed(4).replace(/\.?0+$/, "")}</div>
              </div>

              {/* Multiplication arrow */}
              <div className="text-center text-slate-500 py-1 text-[10px] font-mono uppercase tracking-wider font-bold">
                ↓ Multiply both sides by 100 ↓
              </div>

              {/* Row 3 */}
              <div className="bg-yellow-400 text-black p-4 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] flex items-center justify-between text-center rounded-none font-black">
                <div className="w-1/3 uppercase tracking-tight text-xs">100% (Original)</div>
                <div className="w-1/3 font-mono text-[10px] uppercase tracking-tight">The Finished Output</div>
                <div className="w-1/3 font-black font-mono text-base">£{calculated100Pct.toFixed(2).replace(/\.00$/, "")}</div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
