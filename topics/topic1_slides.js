window.IS237_TOPIC1_SLIDES = [
  {
    "title": "Problem Solving and Introduction to Algorithms",
    "kicker": "IS 237 · Topic 1",
    "body": "Before code comes a problem. Before choosing an efficient programme comes a clear, correct and analysable procedure.",
    "visual": "pipeline"
  },
  {
    "title": "The question this topic answers",
    "kicker": "A simple learning journey",
    "body": "How do we move from a real problem to a procedure that is correct, clear and efficient enough to use?",
    "points": [
      "Understand the problem before coding",
      "Turn the solution idea into an algorithm",
      "Check that the algorithm is correct",
      "Compare alternatives and analyse efficiency",
      "Use what we learn to choose suitable data structures later"
    ]
  },
  {
    "title": "Why start with the problem?",
    "body": "Programming implements a solution. Problem solving decides what the solution must achieve, what information it receives, what constraints matter and how success will be checked.",
    "points": [
      "Understand the need",
      "Identify input and output",
      "State assumptions and constraints",
      "Design before coding"
    ]
  },
  {
    "title": "From problem to algorithm",
    "body": "Good problem solving is iterative: understand, model, design, verify, analyse and refine.",
    "visual": "cycle"
  },
  {
    "title": "What is an algorithm?",
    "body": "A finite, well-defined sequence of steps for solving a class of problems or performing a computation.",
    "points": [
      "Precise procedure",
      "Input → processing → output",
      "Independent of programming-language syntax"
    ]
  },
  {
    "title": "Characteristics of a good algorithm",
    "body": "A good algorithm should satisfy six core characteristics.",
    "points": [
      "Unambiguous — every step has one clear meaning",
      "Input — accepts zero or more clearly defined inputs",
      "Output — produces at least one clearly defined result",
      "Finite — terminates after a finite number of steps",
      "Feasible — every step can be carried out in practice",
      "Independent — the logic is not tied to a particular programming language"
    ],
    "visual": "characteristics"
  },
  {
    "title": "Common algorithm operations",
    "body": "Many data-structure algorithms repeatedly perform a familiar set of operations.",
    "visual": "operations"
  },
  {
    "title": "Where did the word come from?",
    "body": "The word algorithm is historically associated with the Latinised name of al-Khwarizmi, whose mathematical works helped spread systematic methods of calculation.",
    "points": [
      "History gives context",
      "Modern algorithms extend the idea to precise computational procedures"
    ]
  },
  {
    "title": "Algorithm ≠ Programme",
    "body": "The algorithm is the logic; the programme is an implementation of that logic in a specific language.",
    "visual": "compare"
  },
  {
    "title": "One problem, several algorithms",
    "body": "Correctness is necessary, but several correct algorithms may differ in speed, memory, clarity and suitability.",
    "visual": "multiple"
  },
  {
    "title": "Worked idea: find the maximum",
    "body": "Remember the best value seen so far. Compare each remaining item. Replace the remembered value whenever a larger one appears.",
    "visual": "max"
  },
  {
    "title": "Representing solutions",
    "body": "Natural language, flowcharts, pseudocode and programme code are different ways of expressing a procedure.",
    "points": [
      "Choose the representation for the audience and stage",
      "Pseudocode emphasises logic without language syntax"
    ]
  },
  {
    "title": "Verification and correctness",
    "body": "One successful example is not enough. Specify what should happen, trace the procedure, test meaningful cases, and justify why the logic works.",
    "visual": "verify"
  },
  {
    "title": "Problem-solving strategies",
    "body": "Algorithms often reuse general strategies.",
    "points": [
      "Brute force",
      "Divide and conquer",
      "Decrease and conquer",
      "Greedy choice",
      "Backtracking",
      "Transform and conquer"
    ]
  },
  {
    "title": "Checkpoint: we can design a solution — now how do we choose among several?",
    "body": "Different strategies can solve the same problem. The next step is to compare their resource requirements rather than judging them only by whether they produce the right answer.",
    "points": [
      "Correctness answers: Does it work?",
      "Analysis answers: How well does it scale?",
      "Both questions matter"
    ]
  },
  {
    "title": "Why analyse an algorithm?",
    "body": "When several correct solutions exist, analysis helps us choose the most suitable one for the problem and environment.",
    "visual": "analysis"
  },
  {
    "title": "Two stages of analysis",
    "body": "We can reason about an algorithm before implementation and measure it after implementation.",
    "visual": "priorposterior"
  },
  {
    "title": "A priori analysis",
    "body": "Theoretical analysis abstracts away a specific machine and studies operations, input size, memory and growth.",
    "points": [
      "Before / independent of implementation",
      "Count key operations",
      "Compare designs",
      "Machine-independent reasoning"
    ]
  },
  {
    "title": "A posteriori analysis",
    "body": "Empirical analysis implements the algorithm and measures actual behaviour on a target system.",
    "points": [
      "Elapsed or CPU time",
      "Memory measurements",
      "Depends on language, compiler, hardware and data",
      "Useful for benchmarking"
    ]
  },
  {
    "title": "What does n mean?",
    "body": "n represents the relevant input size. We then count a key operation such as comparisons, swaps, visits or recursive calls.",
    "visual": "inputsize"
  },
  {
    "title": "Time and space factors",
    "body": "Efficiency is not only speed. An algorithm can trade execution work for additional memory or vice versa.",
    "visual": "timespace"
  },
  {
    "title": "Best, average and worst cases",
    "body": "Inputs of the same size can require different amounts of work.",
    "visual": "cases"
  },
  {
    "title": "Linear search makes the cases visible",
    "body": "Searching from left to right may stop immediately, stop somewhere later, or inspect every item.",
    "visual": "linearcases"
  },
  {
    "title": "Asymptotic analysis",
    "body": "Instead of predicting exact seconds, compare how the cost grows as input size becomes large.",
    "visual": "asymptotic"
  },
  {
    "title": "Common growth classes",
    "body": "The shape of growth becomes more important as n increases.",
    "visual": "growth5"
  },
  {
    "title": "O, Ω and Θ — first view",
    "body": "O is an upper bound, Ω a lower bound, and Θ a tight bound. These are mathematical bounds, not synonyms for worst, best and average cases.",
    "visual": "bounds"
  },
  {
    "title": "Why the data structure matters",
    "body": "The structure should support the operations the application performs most often.",
    "visual": "structureops"
  },
  {
    "title": "Data structures and algorithms",
    "body": "A structure organises data. An algorithm operates on it. Good solutions depend on matching the two.",
    "visual": "formula"
  },
  {
    "title": "Where Topic 1 leads next",
    "body": "Once we know that representation affects algorithm cost, the next question is how to describe useful behaviour without committing too early to one representation. That is the role of abstraction and ADTs in Topic 2.",
    "points": [
      "Topic 1: design and analyse procedures",
      "Topic 2: separate behaviour from implementation",
      "Topic 3 onward: study concrete representations"
    ]
  },
  {
    "title": "Topic 1 takeaway",
    "body": "Understand the problem → design a correct procedure → compare alternatives → analyse time/space and cases → refine the solution.",
    "points": [
      "See it",
      "Manipulate it",
      "Explain it",
      "Trace it",
      "Then formalise it"
    ]
  }
];
