import React, { useState } from "react";
import { motion } from "motion/react";
import { Coins, PiggyBank, Calculator, HelpCircle, ArrowUpRight, TrendingUp } from "lucide-react";

export default function InterestSections() {
  // Simple Interest States
  const [simpleP, setSimpleP] = useState<number>(1200);
  const [simpleR, setSimpleR] = useState<number>(5);
  const [simpleT, setSimpleT] = useState<number>(4);

  const simpleInterest = (simpleP * simpleR * simpleT) / 100;
  const simpleTotal = simpleP + simpleInterest;

  // Compound Interest States
  const [compP, setCompP] = useState<number>(1600);
  const [compR, setCompR] = useState<number>(4);
  const [compT, setCompT] = useState<number>(4);

  const compMultiplier = 1 + compR / 100;
  const compTotal = compP * Math.pow(compMultiplier, compT);
  const compInterest = compTotal - compP;

  // Yearly growth array for Fiona's compound interest
  const getYearlyCompoundGrowth = () => {
    const list = [];
    let current = compP;
    for (let i = 1; i <= Math.min(10, compT); i++) {
      const start = current;
      const earned = current * (compR / 100);
      current = current + earned;
      list.push({
        year: i,
        startBalance: start,
        interestEarned: earned,
        endBalance: current
      });
    }
    return list;
  };

  const compoundGrowth = getYearlyCompoundGrowth();

  return (
    <div className="space-y-8">
      
      {/* SECTION 1: Simple Interest */}
      <div className="bg-slate-900 border-4 border-emerald-500 p-6 sm:p-8 text-white">
        <div className="mb-6">
          <span className="bg-emerald-500 text-black text-xs font-black px-3 py-1 uppercase tracking-wider border border-black inline-block">
            💰 Linear Growth
          </span>
          <h2 className="text-3xl font-black font-display text-white mt-3 uppercase tracking-tight flex items-center gap-2">
            Simple Interest 🐖
          </h2>
          <p className="text-slate-300 text-sm mt-2 font-bold leading-relaxed">
            Simple Interest means the interest amount is calculated <span className="text-emerald-400 underline font-black">only once</span> on the original sum, and that exact same interest is added every year!
          </p>
        </div>

        {/* Formula Block from Slide 12 */}
        <div className="bg-slate-950 p-5 border-2 border-slate-850 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <span className="block text-[10px] font-black uppercase tracking-widest text-emerald-400">Slide Formula:</span>
            <div className="font-mono text-xl font-black text-yellow-400 mt-1.5 flex items-center gap-2">
              <span>I =</span>
              <div className="flex flex-col items-center">
                <span className="pb-1 border-b-2 border-yellow-400">P × R × T</span>
                <span className="pt-0.5">100</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-300 grid grid-cols-2 gap-x-4 gap-y-1.5 md:border-l md:pl-6 border-slate-800 font-bold">
            <div>• <span className="font-black text-white">P</span> = Principal (Original money)</div>
            <div>• <span className="font-black text-white">R</span> = Rate of interest per year (%)</div>
            <div>• <span className="font-black text-white">T</span> = Time in years</div>
            <div className="col-span-2 text-emerald-400 font-black uppercase tracking-wider text-[10px]">• All divided by 100!</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Example Page 12 */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="bg-slate-950 p-5 border-2 border-slate-850 space-y-3">
              <span className="text-xs font-black text-emerald-400 block uppercase tracking-wider">📝 Meg's savings example</span>
              <p className="text-slate-200 text-xs sm:text-sm italic leading-relaxed font-bold">
                &ldquo;Meg has <span className="text-white">£1200</span> in her savings account. The account pays <span className="text-emerald-400 font-black">5% simple interest</span> per year. How much interest will she earn in 4 years?&rdquo;
              </p>
              
              <div className="pt-2">
                <span className="block text-[10px] uppercase tracking-wider font-black text-slate-400 mb-2">Visual annual breakdown:</span>
                <div className="space-y-1.5">
                  {[1, 2, 3, 4].map((year) => (
                    <div key={year} className="bg-slate-900 px-3 py-1.5 border border-slate-800 flex justify-between text-xs font-mono font-bold">
                      <span>📅 Year {year} Interest</span>
                      <span className="text-slate-400">5% of £1200 = <span className="text-white font-black">£60.00</span></span>
                    </div>
                  ))}
                  <div className="bg-yellow-400 text-black border-2 border-white p-2.5 flex justify-between text-xs font-black uppercase tracking-wider mt-3 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                    <span>Total interest earned in 4 years:</span>
                    <span>£240.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live simple interest calculator */}
          <div className="bg-slate-950 p-6 border-2 border-slate-850 flex flex-col justify-between">
            <div>
              <h3 className="font-black text-slate-400 text-xs uppercase tracking-wider mb-4">
                ⚙️ Live Simple Solver
              </h3>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1.5">Principal (P)</label>
                  <input
                    type="number"
                    value={simpleP}
                    onChange={(e) => setSimpleP(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-xs text-white focus:outline-none focus:border-emerald-500 rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1.5">Rate % (R)</label>
                  <input
                    type="number"
                    value={simpleR}
                    onChange={(e) => setSimpleR(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-xs text-white focus:outline-none focus:border-emerald-500 rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1.5">Time (Yrs) (T)</label>
                  <input
                    type="number"
                    value={simpleT}
                    onChange={(e) => setSimpleT(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-xs text-white focus:outline-none focus:border-emerald-500 rounded-none"
                  />
                </div>
              </div>

              {/* Working detail */}
              <div className="mt-4 bg-slate-900 p-4 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5">
                <p>1. Find 1 year interest = {simpleP} × {simpleR}% = £{(simpleP * simpleR / 100).toFixed(2)}</p>
                <p>2. Multiply by years = £{(simpleP * simpleR / 100).toFixed(2)} × {simpleT} years</p>
                <div className="border-t border-slate-850 pt-2 mt-2 flex justify-between items-center font-bold">
                  <span className="uppercase tracking-wider text-[10px] text-slate-400">Interest Earned (I):</span>
                  <span className="text-emerald-400 font-black text-sm">£{simpleInterest.toFixed(2)}</span>
                </div>
                <div className="text-[10px] text-slate-400 flex justify-between font-bold">
                  <span>New Total Balance (P + I):</span>
                  <span>£{simpleTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2: Compound Interest */}
      <div className="bg-slate-900 border-4 border-indigo-500 p-6 sm:p-8 text-white mt-8">
        <div className="mb-6">
          <span className="bg-indigo-600 text-white text-xs font-black px-3 py-1 uppercase tracking-wider border border-black inline-block">
            📈 Exponential Growth
          </span>
          <h2 className="text-3xl font-black font-display text-white mt-3 uppercase tracking-tight flex items-center gap-2">
            Compound Interest 📈
          </h2>
          <p className="text-slate-300 text-sm mt-2 font-bold leading-relaxed">
            Compound Interest calculates interest on both the <span className="text-indigo-400 underline font-black">original amount AND the interest</span> that was already added in previous years. It grows faster and faster!
          </p>
        </div>

        {/* Formula Block from Slide 13 */}
        <div className="bg-slate-950 p-5 border-2 border-slate-850 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <span className="block text-[10px] font-black uppercase tracking-widest text-indigo-400">Slide Formula:</span>
            <div className="font-mono text-base sm:text-lg font-black text-yellow-400 mt-2 flex items-center gap-2">
              <span>Initial Amount × Multiplier <sup className="text-indigo-400 font-black text-[10px] uppercase">Time</sup></span>
            </div>
          </div>

          <div className="text-xs text-slate-300 grid grid-cols-1 gap-1.5 border-slate-800 md:border-l md:pl-6 font-bold">
            <div>• <span className="font-black text-white">Multiplier</span> = 1.00 + (Rate ÷ 100) (e.g. 4% increase is 1.04)</div>
            <div>• <span className="font-black text-white">Time</span> = exponent power of years</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Example Page 13 */}
          <div className="space-y-4">
            <div className="bg-slate-950 p-5 border-2 border-slate-850 space-y-3">
              <span className="text-xs font-black text-indigo-400 block uppercase tracking-wider">📝 Fiona's bank savings (Slide 13)</span>
              <p className="text-slate-200 text-xs sm:text-sm italic leading-relaxed font-bold">
                &ldquo;Fiona leaves <span className="text-white">£1600</span> in the bank for four years. It earns compound interest of <span className="text-indigo-400 font-black">4% each year</span>. Calculate the total amount Fiona has in the bank at the end of the four years. <span className="text-indigo-400 font-black">(Round to 2 decimal places)</span>&rdquo;
              </p>
              
              <div className="pt-2">
                <span className="block text-[10px] uppercase tracking-wider font-black text-slate-400 mb-2">Yearly Compounding details:</span>
                <div className="space-y-1">
                  <div className="bg-slate-900 px-3 py-1 border border-slate-850 flex justify-between text-[11px] font-mono font-bold">
                    <span>Year 1: £1600 × 1.04</span>
                    <span className="text-white">£1664.00</span>
                  </div>
                  <div className="bg-slate-900 px-3 py-1 border border-slate-850 flex justify-between text-[11px] font-mono font-bold">
                    <span>Year 2: £1664 × 1.04</span>
                    <span className="text-white">£1730.56</span>
                  </div>
                  <div className="bg-slate-900 px-3 py-1 border border-slate-850 flex justify-between text-[11px] font-mono font-bold">
                    <span>Year 3: £1730.56 × 1.04</span>
                    <span className="text-white">£1799.78</span>
                  </div>
                  <div className="bg-slate-900 px-3 py-1 border border-slate-850 flex justify-between text-[11px] font-mono font-bold">
                    <span>Year 4: £1799.78 × 1.04</span>
                    <span className="text-white underline font-black">£1871.77</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Compound solver */}
          <div className="bg-slate-950 p-6 border-2 border-slate-850 flex flex-col justify-between">
            <div>
              <h3 className="font-black text-slate-400 text-xs uppercase tracking-wider mb-4">
                ⚙️ Live Compound Solver
              </h3>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1.5">Initial (P)</label>
                  <input
                    type="number"
                    value={compP}
                    onChange={(e) => setCompP(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-xs text-white focus:outline-none focus:border-indigo-500 rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1.5">Rate % (R)</label>
                  <input
                    type="number"
                    value={compR}
                    onChange={(e) => setCompR(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-xs text-white focus:outline-none focus:border-indigo-500 rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1.5">Years (T)</label>
                  <input
                    type="number"
                    value={compT}
                    onChange={(e) => setCompT(Math.min(10, Math.max(1, Number(e.target.value))))}
                    className="w-full px-3 py-2 bg-slate-900 border-2 border-slate-700 font-mono text-xs text-white focus:outline-none focus:border-indigo-500 rounded-none"
                  />
                </div>
              </div>

              {/* Workings detail */}
              <div className="mt-4 bg-slate-900 p-4 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5">
                <p>1. Multiplier = 1.00 + ({compR} ÷ 100) = <span className="font-bold text-indigo-400">{compMultiplier.toFixed(3)}</span></p>
                <p>2. Raise to power of years = {compMultiplier.toFixed(3)}<sup>{compT}</sup> ≈ {Math.pow(compMultiplier, compT).toFixed(5)}</p>
                <p>3. Multiply by initial = {compP} × {Math.pow(compMultiplier, compT).toFixed(5)}</p>
                <div className="border-t border-slate-850 pt-2 mt-2 flex justify-between items-center font-bold">
                  <span className="uppercase tracking-wider text-[10px] text-slate-400">Ending Total:</span>
                  <span className="text-indigo-400 font-black text-sm">£{compTotal.toFixed(2)}</span>
                </div>
                <div className="text-[10px] text-slate-400 flex justify-between font-bold">
                  <span>Interest earned:</span>
                  <span>£{compInterest.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
