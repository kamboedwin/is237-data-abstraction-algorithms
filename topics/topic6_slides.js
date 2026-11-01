window.IS237_TOPIC6_SLIDES = [
  {
    "title": "Searching, Sorting and Algorithm Efficiency",
    "kicker": "IS 237 · Topic 6",
    "body": "Correctness is not enough: we also ask how work and memory grow as the input becomes large.",
    "visual": "opening"
  },
  {
    "title": "Why efficiency matters",
    "body": "Algorithms that feel equally fast on ten values can behave very differently on a million.",
    "points": [
      "Scale exposes growth",
      "Machine timing alone is not enough",
      "We compare growth with input size"
    ]
  },
  {
    "title": "Input size n",
    "body": "n represents the amount of input relevant to the problem.",
    "points": [
      "array length",
      "number of records",
      "characters in a string",
      "later: graph vertices/edges"
    ]
  },
  {
    "title": "Time vs space",
    "body": "Time complexity tracks growing work; space complexity tracks growing additional memory.",
    "visual": "timespace"
  },
  {
    "title": "Operation counting",
    "body": "We focus on the dominant repeated operation, then simplify its growth.",
    "visual": "count"
  },
  {
    "title": "Big-O intuition",
    "body": "Ignore constant multipliers and lower-order terms to focus on dominant growth.",
    "visual": "bigo"
  },
  {
    "title": "Common growth classes",
    "body": "O(1), O(log n), O(n), O(n log n), O(n²), O(2^n), O(n!).",
    "visual": "growth"
  },
  {
    "title": "Best, average and worst cases",
    "body": "The same algorithm may do different work for different arrangements of the same input size.",
    "points": [
      "Best: most favourable",
      "Average: expected under assumptions",
      "Worst: most expensive"
    ]
  },
  {
    "title": "Searching problem",
    "body": "Find whether a target exists and often return its position.",
    "visual": "search"
  },
  {
    "title": "Linear search",
    "body": "Check values one by one until the target is found or the collection ends.",
    "visual": "linear"
  },
  {
    "title": "Linear search complexity",
    "body": "Best O(1); average/worst O(n); extra space O(1).",
    "points": [
      "Works on unsorted data",
      "Very simple",
      "Good for small collections"
    ]
  },
  {
    "title": "Binary search",
    "body": "Compare with the middle of a sorted range, then discard half.",
    "visual": "binary"
  },
  {
    "title": "Binary search precondition",
    "body": "The collection must be sorted and efficient indexed access is highly desirable.",
    "points": [
      "Sorted array: ideal",
      "Linked list: middle access costs traversal"
    ]
  },
  {
    "title": "Binary search complexity",
    "body": "Each comparison halves the search interval: O(log n).",
    "visual": "halves"
  },
  {
    "title": "Search comparison",
    "body": "Binary search is faster asymptotically, but only when its preconditions are worthwhile.",
    "visual": "searchcompare"
  },
  {
    "title": "Why sort?",
    "body": "Sorting supports ranking, grouping, duplicate detection and faster repeated searching.",
    "points": [
      "ascending / descending",
      "single or multiple keys",
      "preparation for binary search"
    ]
  },
  {
    "title": "Sorting properties",
    "body": "Beyond Big-O, ask whether a sort is stable, in-place and adaptive.",
    "points": [
      "Stable preserves equal-key order",
      "In-place uses little extra memory",
      "Adaptive benefits from existing order"
    ]
  },
  {
    "title": "Bubble sort",
    "body": "Compare adjacent values and swap out-of-order pairs.",
    "visual": "bubble"
  },
  {
    "title": "Bubble sort behaviour",
    "body": "Optimised best case O(n); average/worst O(n²). Stable and in-place.",
    "points": [
      "Easy to visualise",
      "Mostly useful pedagogically"
    ]
  },
  {
    "title": "Selection sort",
    "body": "Find the minimum remaining value and place it next.",
    "visual": "selection"
  },
  {
    "title": "Selection sort behaviour",
    "body": "O(n²) in best, average and worst cases, but uses relatively few swaps.",
    "points": [
      "In-place",
      "Standard form not stable",
      "Input order barely changes comparisons"
    ]
  },
  {
    "title": "Insertion sort",
    "body": "Grow a sorted prefix by inserting each new key into its proper position.",
    "visual": "insertion"
  },
  {
    "title": "Insertion sort behaviour",
    "body": "Best O(n), average/worst O(n²). Stable, in-place and adaptive.",
    "points": [
      "Excellent for small inputs",
      "Good for nearly sorted data"
    ]
  },
  {
    "title": "Merge sort",
    "body": "Divide into halves, sort each half, then merge.",
    "visual": "merge"
  },
  {
    "title": "Why merge sort is O(n log n)",
    "body": "About log n levels × linear merge work per level.",
    "visual": "nlogn"
  },
  {
    "title": "Merge sort trade-off",
    "body": "Reliable O(n log n) and stable, but standard array implementation uses O(n) extra space.",
    "points": [
      "Predictable performance",
      "Good for stable sorting"
    ]
  },
  {
    "title": "Quick sort",
    "body": "Partition around a pivot; recursively sort each side.",
    "visual": "quick"
  },
  {
    "title": "Partitioning",
    "body": "After partition, the pivot is in its final position.",
    "visual": "partition"
  },
  {
    "title": "Quick sort complexity",
    "body": "Average O(n log n), worst O(n²) when partitions are repeatedly unbalanced.",
    "points": [
      "Usually in-place apart from recursion",
      "Standard form not stable"
    ]
  },
  {
    "title": "Selection vs Quick Sort",
    "body": "Selection repeatedly scans the unsorted remainder; quicksort tries to reduce the problem through partitions.",
    "visual": "race"
  },
  {
    "title": "Sorting comparison",
    "body": "There is no single winner for every situation.",
    "visual": "sortcompare"
  },
  {
    "title": "Stability matters",
    "body": "Equal-key records may need to preserve an earlier ordering.",
    "visual": "stable"
  },
  {
    "title": "Algorithm optimisation",
    "body": "Improve the strategy before tuning syntax.",
    "points": [
      "Choose the right structure",
      "Avoid repeated work",
      "Stop early",
      "Reduce the problem quickly",
      "Trade memory for time wisely"
    ]
  },
  {
    "title": "Common misconceptions",
    "body": "Big-O is growth, not exact seconds; quicksort is not always O(n log n); binary search is not automatically appropriate.",
    "points": [
      "Always state assumptions",
      "Time and space both matter"
    ]
  },
  {
    "title": "Topic 6 takeaway",
    "body": "See the data movement, count the work, then justify the algorithm.",
    "points": [
      "Search: linear vs binary",
      "Sort: quadratic vs n log n",
      "Consider stability/memory",
      "Prepare for trees, heaps and hashing"
    ]
  }
];