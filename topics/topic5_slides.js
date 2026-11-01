window.IS237_TOPIC5_SLIDES = [
  {
    "title": "Recursion and Iteration",
    "kicker": "IS 237 · Topic 5",
    "body": "Two ways to express repetition: call a smaller version of the same problem, or update state inside a loop.",
    "visual": "opening"
  },
  {
    "title": "Why this topic follows stacks",
    "body": "Recursive calls are stored in a call stack. Topic 4 gives us the mechanism needed to see recursion clearly.",
    "visual": "stack"
  },
  {
    "title": "Recursion vs iteration",
    "body": "Recursion uses function calls; iteration uses loops. Both can often express the same computation.",
    "visual": "compare"
  },
  {
    "title": "What makes recursion work?",
    "body": "A recursive method needs a smaller subproblem, a base case, progress toward it, and a way to combine results.",
    "visual": "method"
  },
  {
    "title": "Factorial definition",
    "body": "n! can be defined using a smaller factorial: n! = n × (n−1)!, with 0! = 1.",
    "visual": "factorial"
  },
  {
    "title": "Recursive factorial",
    "body": "Each call waits for the result of a smaller call.",
    "points": [
      "factorial(4) waits for factorial(3)",
      "factorial(3) waits for factorial(2)",
      "base case starts unwinding"
    ]
  },
  {
    "title": "Iterative factorial",
    "body": "A loop stores progress explicitly in an accumulator.",
    "points": [
      "result starts at 1",
      "multiply as i increases",
      "no growing call stack"
    ]
  },
  {
    "title": "Call-stack growth",
    "body": "Every unfinished recursive call pushes a frame; returns pop frames in reverse order.",
    "visual": "frames"
  },
  {
    "title": "Base case and progress",
    "body": "Termination needs both: a reachable stopping case and recursive steps that move toward it.",
    "points": [
      "Missing base case → non-termination",
      "Wrong direction → base case unreachable"
    ]
  },
  {
    "title": "Recursive array sum",
    "body": "sum(n) = last element + sum(n−1). A simple recursive definition, but iteration is often more practical for a linear scan.",
    "visual": "sum"
  },
  {
    "title": "Recursive linear search",
    "body": "Check current position; if not found, search the remaining suffix.",
    "points": [
      "Base: end of array",
      "Progress: index + 1",
      "Worst-case time O(n)"
    ]
  },
  {
    "title": "Recursive binary search",
    "body": "Each call discards half the search interval.",
    "visual": "binary"
  },
  {
    "title": "Recursive vs iterative binary search",
    "body": "Both O(log n) time; recursive form uses call-stack depth O(log n), iterative form uses O(1) extra state.",
    "points": [
      "Same algorithmic idea",
      "Different representation of control state"
    ]
  },
  {
    "title": "Direct recursion",
    "body": "A function calls itself directly.",
    "visual": "direct"
  },
  {
    "title": "Indirect recursion",
    "body": "Function A calls B, and B eventually calls A.",
    "visual": "mutual"
  },
  {
    "title": "Tail recursion",
    "body": "The recursive call is the final action, with no pending work after it returns.",
    "visual": "tail"
  },
  {
    "title": "Non-tail recursion",
    "body": "Work remains after the recursive call. Ordinary factorial is non-tail because multiplication is pending.",
    "points": [
      "Pending work lives in stack frames"
    ]
  },
  {
    "title": "Multiple recursion",
    "body": "A call makes more than one recursive call, producing a branching recursion tree.",
    "visual": "tree"
  },
  {
    "title": "Naive Fibonacci",
    "body": "Elegant definition, but repeated subproblems make the naive algorithm exponentially expensive.",
    "points": [
      "fib(3) is recomputed",
      "fib(2) is recomputed many times",
      "approximately O(2^n) time"
    ]
  },
  {
    "title": "Memoisation",
    "body": "Remember subproblem results and reuse them instead of recomputing.",
    "visual": "memo"
  },
  {
    "title": "Tail-recursive factorial",
    "body": "Move accumulated state into a parameter so the recursive call is the final action.",
    "visual": "tailfact"
  },
  {
    "title": "Tail-call optimisation",
    "body": "Some runtimes reuse a frame for tail calls. Ordinary Java implementations do not guarantee general tail-call optimisation.",
    "points": [
      "Tail recursive ≠ automatically constant stack",
      "Language/runtime matters"
    ]
  },
  {
    "title": "Convert recursion to iteration",
    "body": "Move implicit call-stack state into explicit variables or an explicit Stack ADT.",
    "visual": "convert"
  },
  {
    "title": "When recursion is natural",
    "body": "Choose recursion when the problem structure recursively contains smaller versions of itself.",
    "points": [
      "Trees",
      "Divide and conquer",
      "Backtracking",
      "Nested syntax",
      "Recursive definitions"
    ]
  },
  {
    "title": "When iteration is preferable",
    "body": "Simple repeated scans and deep repetition are often clearer and safer as loops.",
    "points": [
      "Lower stack risk",
      "Often less overhead",
      "Explicit control state"
    ]
  },
  {
    "title": "Common mistakes",
    "body": "Most recursion errors are structural rather than syntactic.",
    "points": [
      "Unreachable base case",
      "No progress",
      "Repeated subproblems",
      "Assuming tail-call optimisation",
      "Confusing time and stack complexity"
    ]
  },
  {
    "title": "Topic 5 takeaway",
    "body": "Recursion and iteration are alternative ways to represent repeated computation and state.",
    "points": [
      "Understand the call stack",
      "Guarantee progress",
      "Choose the clearer representation",
      "Watch both time and space",
      "Prepare for recursive sorting"
    ]
  }
];