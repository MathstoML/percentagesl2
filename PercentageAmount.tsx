import React, { useState } from "react";
import { motion } from "motion/react";
import { Calculator, Percent, ShieldCheck } from "lucide-react";

export default function PercentageAmount() {
  // States for % of an amount calculator
  const [percentOf, setPercentOf] = useState<number>(25);
  const [amountOf, setAmountOf] = useState<number>(396);

  // States for % as an amount calculator
  const [partAmount, setPartAmount] = useState<number>(64);
  const [wholeAmount, setWholeAmount] = useState<number>(112);

  const percentOfResult = (percentOf / 100) * amountOf;
  const percentAsResult = wholeAmount > 0 ? (partAmount / wholeAmount) * 100 : 0;

  return (
    <div className="space-y-8">
      
      {/* SECTION 1: Percentage of an Amount */}
      <div className="bg-slate-900 border-4 border-blue-500 p-6 sm:p-8 text-white">
        <div className="mb-6">
          <span className="bg-blue-600 text-white text-xs font-black px-3 py-1 uppercase tracking-wider border border-black inline-block">
            🏷️ Standard Calculation
          </span>
          <h2 className="text-3xl font-black font-display text-white mt-3 uppercase tracking-tight flex items-center gap-2">
            Percentage of an Amount 🚗
          </h2>
          <p className="text-slate-300 text-sm mt-2 font-bold leading-relaxed">
            To find a percentage of any number, convert the percentage into a decimal multiplier (divide by 100), and then multiply by the amount.
          </p>
        </div>

        {/* formula banner */}
        <div className="bg-slate-950 p-4 border-2 border-slate-800 flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 text-lg font-black shrink-0 border border-black">
              f(x)
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest font-black text-blue-400">Standard Formula</span>
              <span className="font-mono text-sm sm:text-base font-black text-yellow-400">
                (Percentage ÷ 100) × Total Amount
              </span>
            </div>
          </div>
          <span className="text-2xl hidden sm:inline">📊</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Slide Wording & Example Details */}
          <div className="space-y-4">
            <h3 className="font-black text-slate-400 text-xs uppercase tracking-wider">
              📝 Exam Presentation & Wording
            </h3>
            
            <div className="bg-slate-950 p-5 border-2 border-slate-850 space-y-3">
              <div className="flex items-center gap-2 text-yellow-400 font-black text-sm uppercase tracking-wide">
                <span>🚘 Example (Slide 6)</span>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed italic font-bold">
                &ldquo;Dennis looks for a car to buy. There are 396 cars advertised. 25% of them are diesel cars. What is 25% of 396? <span className="text-yellow-400 underline">[2 marks]</span>&rdquo;
              </p>
              
              {/* Visual Grid representing cars */}
              <div className="pt-2">
                <span className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-wide">Visual representation of 25% (1 in 4 cars):</span>
                <div className="grid grid-cols-8 gap-2 max-w-xs">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-6 rounded-none border border-black flex items-center justify-center text-xs font-bold ${
                        i < 4 ? "bg-blue-500 text-white" : "bg-slate-800 text-slate-400"
                      }`}
                      title={i < 4 ? "Diesel Car (25%)" : "Other Car"}
                    >
                      🚗
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-3 text-xs font-bold">
                  <span className="flex items-center gap-1">
                    <span className="h-3 w-3 bg-blue-500 inline-block border border-black"></span> 
                    Diesel Cars (25%)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-3 w-3 bg-slate-800 inline-block border border-black"></span> 
                    Other Cars (75%)
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 font-bold">
                <span className="font-black text-yellow-400 uppercase tracking-wide block mb-1">Exam solution steps:</span>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>Convert 25% to a fraction (1/4) or multiplier (0.25) <span className="text-emerald-400">[Method Mark]</span></li>
                  <li>Perform the math: 396 ÷ 4 = <span className="text-white underline">99</span> <span className="text-emerald-400">[Accuracy Mark]</span></li>
                </ol>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <div className="bg-slate-950 p-6 border-2 border-slate-850 flex flex-col justify-between">
            <div>
              <h3 className="font-black text-slate-300 text-xs uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <Calculator className="h-4 w-4 text-blue-400" />
                <span>Live Amount Solver</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-wide mb-2">Enter Percentage (%)</label>
                  <input
                    type="number"
                    value={percentOf}
                    onChange={(e) => setPercentOf(Math.max(0, Number(e.target.value)))}
                    className="w-full px-4 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-wide mb-2">Enter Total Amount</label>
                  <input
                    type="number"
                    value={amountOf}
                    onChange={(e) => setAmountOf(Math.max(0, Number(e.target.value)))}
                    className="w-full px-4 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Working breakdown visualization */}
              <div className="mt-6 bg-slate-900 p-4 border border-slate-800 space-y-2">
                <span className="text-[10px] uppercase tracking-wider font-black text-slate-400 block">Working Out steps:</span>
                <div className="font-mono text-xs text-slate-300 space-y-1.5">
                  <p>1. Decimal multiplier = {percentOf} ÷ 100 = <span className="font-black text-yellow-400">{(percentOf / 100).toFixed(4).replace(/\.?0+$/, "")}</span></p>
                  <p>2. Multiply by amount = {(percentOf / 100).toFixed(4).replace(/\.?0+$/, "")} × {amountOf}</p>
                  <div className="border-t border-slate-850 pt-2 mt-2 flex justify-between items-center">
                    <span className="font-black uppercase tracking-wider text-[10px] text-slate-400">Resulting Value:</span>
                    <span className="text-xl font-black text-blue-400">£{percentOfResult.toFixed(2).replace(/\.00$/, "")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Progress ring bar */}
            <div className="mt-6 pt-4 border-t border-slate-850">
              <span className="block text-xs text-slate-400 font-bold mb-2 uppercase tracking-wider text-[10px]">Visual filling: {percentOf}% of {amountOf}</span>
              <div className="w-full bg-slate-900 h-4 border-2 border-white overflow-hidden">
                <div
                  className="bg-blue-500 h-full border-r-2 border-white"
                  style={{ width: `${Math.min(100, percentOf)}%` }}
                ></div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* SECTION 2: Percentage as an Amount */}
      <div className="bg-slate-900 border-4 border-indigo-500 p-6 sm:p-8 text-white">
        <div className="mb-6">
          <span className="bg-indigo-600 text-white text-xs font-black px-3 py-1 uppercase tracking-wider border border-black inline-block">
            📊 Fraction Conversion
          </span>
          <h2 className="text-3xl font-black font-display text-white mt-3 uppercase tracking-tight flex items-center gap-2">
            Percentage as an Amount 📈
          </h2>
          <p className="text-slate-300 text-sm mt-2 font-bold leading-relaxed">
            To write a value as a percentage of another, first write them as a fraction <span className="text-indigo-400 underline font-black">(Part ÷ Whole)</span>, and then multiply by <span className="text-indigo-400 underline font-black">100</span>.
          </p>
        </div>

        {/* formula banner */}
        <div className="bg-slate-950 p-4 border-2 border-slate-800 flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-2 text-lg font-black shrink-0 border border-black">
              %
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest font-black text-indigo-400">Standard Formula</span>
              <span className="font-mono text-sm sm:text-base font-black text-yellow-400">
                (Part Amount ÷ Whole Amount) × 100
              </span>
            </div>
          </div>
          <span className="text-2xl hidden sm:inline">📊</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Examples details (from Slide 7) */}
          <div className="space-y-4">
            <h3 className="font-black text-slate-400 text-xs uppercase tracking-wider">
              💡 Slide Examples (The 3 Classical exam Qs)
            </h3>

            <div className="space-y-3">
              {/* Example A */}
              <div className="bg-slate-950 p-4 border-2 border-slate-850 text-xs">
                <span className="font-black text-indigo-400 uppercase tracking-wider block mb-1">📝 Science Test Score</span>
                <p className="text-slate-300 font-bold mb-2">
                  &ldquo;Sarah sat a Science test and got a score of 64 marks out of 112 possible marks. What was her mark as a percentage? (1 decimal place)&rdquo;
                </p>
                <div className="bg-slate-900 p-2.5 font-mono text-yellow-400 border border-slate-800">
                  Calculation: (64 ÷ 112) × 100 ≈ 57.14% → <span className="font-black text-white underline">57.1%</span>
                </div>
              </div>

              {/* Example B */}
              <div className="bg-slate-950 p-4 border-2 border-slate-850 text-xs">
                <span className="font-black text-indigo-400 uppercase tracking-wider block mb-1">📝 Student Boys Ratio</span>
                <p className="text-slate-300 font-bold mb-2">
                  &ldquo;In a class of 32 students, 18 of them are boys. What percentage of the class are boys? (1 decimal place)&rdquo;
                </p>
                <div className="bg-slate-900 p-2.5 font-mono text-yellow-400 border border-slate-800">
                  Calculation: (18 ÷ 32) × 100 = 56.25% → <span className="font-black text-white underline">56.3%</span>
                </div>
              </div>

              {/* Example C (Trap Question) */}
              <div className="bg-rose-950/20 p-4 border-2 border-rose-500 text-xs">
                <span className="font-black text-rose-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                  ⚠️ WARNING Exam Trap! (The French Class)
                </span>
                <p className="text-slate-200 font-bold mb-2">
                  &ldquo;In a French class there are 13 girls and 6 boys. What percentage of the class are girls? (1 decimal place)&rdquo;
                </p>
                <div className="p-3 bg-slate-950 border border-rose-900/50 text-slate-300 leading-relaxed">
                  <span className="font-black text-rose-400 uppercase tracking-wide block mb-1">Trap explanation:</span> 
                  The whole class is not 6. The total class size is girls + boys = 13 + 6 = 19.
                  <br />
                  <span className="font-black text-rose-400 uppercase tracking-wide block mt-2 mb-1">Correct Calculation:</span> 
                  <span className="font-mono text-yellow-400">(13 ÷ 19) × 100 ≈ <span className="text-white underline font-black">68.4%</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Calculator */}
          <div className="bg-slate-950 p-6 border-2 border-slate-850 flex flex-col justify-between">
            <div>
              <h3 className="font-black text-slate-300 text-xs uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <Calculator className="h-4 w-4 text-indigo-400" />
                <span>Live Fraction Solver</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-wide mb-2">Enter Part Amount (Numerator)</label>
                  <input
                    type="number"
                    value={partAmount}
                    onChange={(e) => setPartAmount(Math.max(0, Number(e.target.value)))}
                    className="w-full px-4 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-wide mb-2">Enter Whole Amount (Denominator)</label>
                  <input
                    type="number"
                    value={wholeAmount}
                    onChange={(e) => setWholeAmount(Math.max(1, Number(e.target.value)))}
                    className="w-full px-4 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Working details */}
              <div className="mt-6 bg-slate-900 p-4 border border-slate-800 space-y-2">
                <span className="text-[10px] uppercase tracking-wider font-black text-slate-400 block">Working Out steps:</span>
                <div className="font-mono text-xs text-slate-300 space-y-1.5">
                  <p>1. Write as fraction = {partAmount} ÷ {wholeAmount} = <span className="font-black text-yellow-400">{(partAmount / wholeAmount).toFixed(4)}</span></p>
                  <p>2. Convert to percentage = {(partAmount / wholeAmount).toFixed(4)} × 100 = <span className="font-black text-yellow-400">{(percentAsResult).toFixed(2)}%</span></p>
                  <div className="border-t border-slate-850 pt-2 mt-2 flex justify-between items-center">
                    <span className="font-black uppercase tracking-wider text-[10px] text-slate-400">To 1 decimal place:</span>
                    <span className="text-xl font-black text-indigo-400">{percentAsResult.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual ratio comparison graph */}
            <div className="mt-6 pt-4 border-t border-slate-850 text-xs">
              <span className="block font-black text-[10px] uppercase tracking-wider text-slate-400 mb-2">Fraction Visualiser</span>
              <div className="flex border-2 border-white overflow-hidden h-7">
                <div
                  className="bg-indigo-500 text-white flex items-center justify-center font-black font-mono text-[10px] transition-all border-r border-white"
                  style={{ width: `${Math.min(100, percentAsResult)}%` }}
                >
                  {percentAsResult > 15 ? `${percentAsResult.toFixed(0)}%` : ""}
                </div>
                <div
                  className="bg-slate-800 text-slate-400 flex items-center justify-center font-black font-mono text-[10px] flex-1"
                >
                  {percentAsResult < 85 ? `${(100 - percentAsResult).toFixed(0)}%` : ""}
                </div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold uppercase tracking-wide">
                <span>Filled part ({partAmount})</span>
                <span>Unfilled part ({wholeAmount - partAmount})</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
