export interface Question {
  id: string;
  topic: string;
  questionText: string;
  placeholderText: string;
  correctAnswer: number; // For exact checking, we can also use strings if needed
  unit: string;
  decimalPlaces?: number;
  marks: number;
  hint: string;
  workingOutSteps: string[];
  explanation: string;
}

export const revisionQuestions: Question[] = [
  {
    id: "pct_amount_dennis",
    topic: "% of an Amount",
    questionText: "Dennis looks for a car to buy. There are 396 cars advertised. 25% of them are diesel cars. What is 25% of 396?",
    placeholderText: "e.g. 99",
    correctAnswer: 99,
    unit: "cars",
    marks: 2,
    hint: "To find 25%, you can find 10% + 10% + 5%, or simply divide the total by 4 (since 25% = 1/4). Alternatively, use the multiplier: 0.25 × 396.",
    workingOutSteps: [
      "Method 1 (Decimal Multiplier): 25% = 0.25. Calculate: 0.25 × 396 = 99",
      "Method 2 (Build-Up): 10% of 396 = 39.6. Another 10% = 39.6. 5% of 396 = 19.8. Sum = 39.6 + 39.6 + 19.8 = 99",
      "Method 3 (Fraction): 25% is 1/4. Calculate: 396 ÷ 4 = 99"
    ],
    explanation: "Excellent! 25% of 396 is exactly 99 cars. In an exam, you get 1 mark for demonstrating a correct method (like 396 × 0.25 or 396 ÷ 4) and 1 mark for the correct answer of 99."
  },
  {
    id: "pct_as_amount_sarah",
    topic: "% as an Amount",
    questionText: "Sarah sat a Science test and got a score of 64 marks out of 112 possible marks. What was her mark as a percentage? (Give your answer to 1 decimal place.)",
    placeholderText: "e.g. 57.1",
    correctAnswer: 57.1,
    unit: "%",
    decimalPlaces: 1,
    marks: 2,
    hint: "Write Sarah's score as a fraction: 64/112. Then multiply by 100 to change it to a percentage. Don't forget to round to 1 decimal place!",
    workingOutSteps: [
      "Step 1: Write as a fraction: 64 ÷ 112 ≈ 0.571428...",
      "Step 2: Multiply by 100: 0.571428... × 100 = 57.1428...%",
      "Step 3: Round to 1 decimal place: Look at the second decimal place (4). Since it is less than 5, we round down to 57.1%"
    ],
    explanation: "Perfect! 64 out of 112 equals 57.1%. Exams award 1 mark for the fraction division (64 ÷ 112 × 100) and 1 mark for correctly rounding to 1 decimal place."
  },
  {
    id: "pct_as_amount_boys",
    topic: "% as an Amount",
    questionText: "In a class of 32 students, 18 of them are boys. What percentage of the class are boys? (Give your answer to 1 decimal place.)",
    placeholderText: "e.g. 56.3",
    correctAnswer: 56.3,
    unit: "%",
    decimalPlaces: 1,
    marks: 2,
    hint: "Make a fraction of boys over total students: 18/32. Multiply by 100 and round to 1 decimal place.",
    workingOutSteps: [
      "Step 1: Write as fraction: 18 ÷ 32 = 0.5625",
      "Step 2: Multiply by 100: 0.5625 × 100 = 56.25%",
      "Step 3: Round to 1 decimal place: The digit after 2 is 5, so we round up: 56.3%"
    ],
    explanation: "Spot on! 18 out of 32 is exactly 56.25%, which rounds to 56.3% to one decimal place."
  },
  {
    id: "pct_as_amount_girls",
    topic: "% as an Amount",
    questionText: "In a French class there are 13 girls and 6 boys. What percentage of the class are girls? (Give your answer to 1 decimal place.)",
    placeholderText: "e.g. 68.4",
    correctAnswer: 68.4,
    unit: "%",
    decimalPlaces: 1,
    marks: 3,
    hint: "⚠️ WARNING: Trick question! The number 6 is the number of boys, NOT the total. First find the total number of students in the class by adding girls and boys!",
    workingOutSteps: [
      "Step 1: Calculate the total students: 13 girls + 6 boys = 19 students in total.",
      "Step 2: Write girls as fraction of total: 13 ÷ 19 ≈ 0.68421...",
      "Step 3: Multiply by 100: 0.68421... × 100 = 68.421...%",
      "Step 4: Round to 1 decimal place: 68.4%"
    ],
    explanation: "Brilliant! You avoided the exam trap. The total class size is 19. So we do 13 ÷ 19 × 100 = 68.4%. If you had used 6, you would get it wrong!"
  },
  {
    id: "inc_pct_oliver",
    topic: "Increase %",
    questionText: "Oliver's salary is £18,000 and he is due to get an increase of 4%. How much will this increase be?",
    placeholderText: "e.g. 720",
    correctAnswer: 720,
    unit: "£",
    marks: 2,
    hint: "The question only asks 'How much will this increase be?', NOT his new salary. So you just need to calculate 4% of £18,000.",
    workingOutSteps: [
      "Step 1: Convert 4% to decimal multiplier: 4% = 0.04",
      "Step 2: Multiply by salary: 0.04 × £18,000 = £720",
      "Alternative (Build-up): 1% of 18,000 = 180. Therefore, 4% = 180 × 4 = £720"
    ],
    explanation: "Correct! The increase amount is £720. If the question asked for his NEW salary, it would be £18,000 + £720 = £18,720. Always read the question carefully!"
  },
  {
    id: "dec_pct_tv",
    topic: "Decrease %",
    questionText: "A new TV is priced at £320. In a sale it is reduced by 45%. Calculate the sale price.",
    placeholderText: "e.g. 176",
    correctAnswer: 176,
    unit: "£",
    marks: 3,
    hint: "If a TV is reduced by 45%, the remaining sale price percentage is 100% - 45% = 55%. You can find 55% of £320 directly, or find 45% and subtract it.",
    workingOutSteps: [
      "Method 1 (Direct Multiplier): Remaining % = 100% - 45% = 55% = 0.55. Sale Price = 0.55 × £320 = £176",
      "Method 2 (Find & Subtract): 45% of £320 = 0.45 × 320 = £144. Sale Price = Original - Discount = £320 - £144 = £176"
    ],
    explanation: "Fantastic! The final sale price is £176. Using the multiplier method (0.55 × 320) is faster and less prone to errors on calculator papers!"
  },
  {
    id: "pct_change_puppy",
    topic: "Percentage Change",
    questionText: "A puppy weighed 2kg. Eight weeks later the puppy weighed 3.5kg. What was the percentage increase in the puppy's weight?",
    placeholderText: "e.g. 75",
    correctAnswer: 75,
    unit: "%",
    marks: 3,
    hint: "Use the Formula: (Actual Difference / Original Amount) × 100. First find the difference in weight, then divide by the original weight (2kg).",
    workingOutSteps: [
      "Step 1: Find actual difference (increase): 3.5kg - 2kg = 1.5kg",
      "Step 2: Divide difference by original weight: 1.5 ÷ 2 = 0.75",
      "Step 3: Multiply by 100 to get percentage: 0.75 × 100 = 75%"
    ],
    explanation: "Awesome! The weight increased by 75%. You get 1 mark for finding the difference (1.5), 1 mark for the fraction (1.5 / 2), and 1 mark for 75%."
  },
  {
    id: "pct_change_sofa",
    topic: "Percentage Change",
    questionText: "In a sale the price of a sofa is reduced from £2500 to £1840. What is the percentage decrease?",
    placeholderText: "e.g. 26.4",
    correctAnswer: 26.4,
    unit: "%",
    decimalPlaces: 1,
    marks: 3,
    hint: "First find the price reduction (difference) by subtracting £1840 from £2500. Then divide by the ORIGINAL price (£2500), multiply by 100, and round to 1 decimal place.",
    workingOutSteps: [
      "Step 1: Find actual difference (decrease): £2500 - £1840 = £660",
      "Step 2: Divide by original amount: 660 ÷ 2500 = 0.264",
      "Step 3: Multiply by 100 to get percentage: 0.264 × 100 = 26.4%"
    ],
    explanation: "Sensational! The price decreased by 26.4%. Always divide by the *original* price (before the reduction) to get the correct percentage change."
  },
  {
    id: "reverse_pct_jacob",
    topic: "Reverse Percentage",
    questionText: "Jacob answered 80% of the questions in a test correctly. He answered 32 of the questions correctly. Work out the total number of questions in the test.",
    placeholderText: "e.g. 40",
    correctAnswer: 40,
    unit: "questions",
    marks: 3,
    hint: "We know that 80% of the total questions is 32. Use the cross-multiplying or unitary method: If 80% = 32, find 1% by dividing by 80, then multiply by 100.",
    workingOutSteps: [
      "Step 1: Set up the equation: 80% = 32",
      "Step 2: Find 1% (divide both sides by 80): 1% = 32 ÷ 80 = 0.4",
      "Step 3: Find 100% (multiply by 100): 100% = 0.4 × 100 = 40"
    ],
    explanation: "Perfect! There were 40 questions in the test. You can check your answer: 80% of 40 = 0.8 × 40 = 32. It matches perfectly!"
  },
  {
    id: "simple_interest_meg",
    topic: "Simple Interest",
    questionText: "Meg has £1200 in her savings account. The account pays 5% simple interest per year. How much interest will she earn in 4 years?",
    placeholderText: "e.g. 240",
    correctAnswer: 240,
    unit: "£",
    marks: 3,
    hint: "Use the Simple Interest Formula: Interest = (P × R × T) / 100, where P = 1200, R = 5, and T = 4.",
    workingOutSteps: [
      "Step 1: Find interest for 1 year: 5% of £1200 = 0.05 × 1200 = £60",
      "Step 2: Multiply by the number of years (4 years): £60 × 4 = £240",
      "Formula method: (1200 × 5 × 4) ÷ 100 = 24000 ÷ 100 = £240"
    ],
    explanation: "Incredible! Meg will earn £240 in simple interest over 4 years. Note that simple interest stays the same every year!"
  },
  {
    id: "compound_interest_fiona",
    topic: "Compound Interest",
    questionText: "Fiona leaves £1600 in the bank for four years. It earns compound interest of 4% each year. Calculate the total amount Fiona has in the bank at the end of the four years. (Give your answer to 2 decimal places.)",
    placeholderText: "e.g. 1871.77",
    correctAnswer: 1871.77,
    unit: "£",
    decimalPlaces: 2,
    marks: 4,
    hint: "Use the Compound Interest formula: Initial × Multiplier^(time). The multiplier for 4% increase is 1.04. The time is 4 years. So, 1600 × (1.04)⁴.",
    workingOutSteps: [
      "Step 1: Find the multiplier: 100% + 4% = 104% = 1.04",
      "Step 2: Set up formula: Total = Initial × Multiplier⁴ = 1600 × (1.04)⁴",
      "Step 3: Calculate: 1.04⁴ ≈ 1.16985856. Total = 1600 × 1.16985856 ≈ 1871.773696...",
      "Step 4: Round to 2 decimal places for money: £1871.77"
    ],
    explanation: "Stellar work! Fiona will have £1871.77 in the bank after 4 years. In an exam, you get marks for: the multiplier 1.04, setting up the calculation, the intermediate answer, and rounding to 2 decimal places."
  }
];
