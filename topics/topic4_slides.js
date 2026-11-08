window.IS237_TOPIC4_SLIDES = [
  {
    "title": "Stacks, Queues, Deques and Circular Queues",
    "kicker": "IS 237 · Topic 4",
    "body": "Simple access restrictions create powerful patterns used throughout computing.",
    "visual": "opening"
  },
  {
    "title": "The question this topic answers",
    "body": "Sometimes a collection is useful precisely because we restrict how items enter and leave. Those restrictions encode important real-world rules.",
    "points": [
      "Browser history needs most-recent-first behaviour",
      "A service line needs first-arrival-first-service behaviour",
      "Some applications need controlled access from both ends"
    ]
  },
  {
    "title": "Why restrict operations?",
    "body": "A structure becomes easier to reason about when we control where values enter and leave.",
    "points": [
      "Stack: one end",
      "Queue: rear → front",
      "Deque: both ends"
    ]
  },
  {
    "title": "Stack = LIFO",
    "body": "The most recently inserted value is the first one removed.",
    "visual": "stack"
  },
  {
    "title": "Stack operations",
    "body": "push, pop, peek/top, isEmpty and size define the core behaviour.",
    "points": [
      "push → add at top",
      "pop → remove top",
      "peek → inspect top"
    ]
  },
  {
    "title": "Array-based stack",
    "body": "An array plus a top index can implement the Stack ADT.",
    "visual": "arraystack"
  },
  {
    "title": "Array stack pseudocode",
    "body": "Push increments top; pop reads and decrements top. Capacity and underflow must be checked.",
    "points": [
      "push: O(1) without resize",
      "pop: O(1)",
      "peek: O(1)"
    ]
  },
  {
    "title": "Linked stack",
    "body": "Treat head as top: push inserts at head and pop removes head.",
    "visual": "linkedstack"
  },
  {
    "title": "Underflow and overflow",
    "body": "Good implementations define behaviour when a requested operation is impossible.",
    "points": [
      "Underflow: remove from empty stack",
      "Overflow: fixed capacity exhausted"
    ]
  },
  {
    "title": "Why stacks matter",
    "body": "Stacks model nested and most-recent-first behaviour.",
    "points": [
      "Function calls",
      "Recursion",
      "Undo",
      "Bracket matching",
      "Expression evaluation",
      "DFS"
    ]
  },
  {
    "title": "From 'most recent first' to 'first come first served'",
    "body": "A stack is ideal when the newest item should be handled first. But a printer queue or service desk needs the oldest waiting item first. That different rule motivates the Queue ADT.",
    "points": [
      "Stack → LIFO",
      "Queue → FIFO",
      "Same idea of restricted access, different rule"
    ]
  },
  {
    "title": "Balanced brackets",
    "body": "The next closing bracket must match the most recent unmatched opening bracket.",
    "visual": "brackets"
  },
  {
    "title": "Queue = FIFO",
    "body": "The earliest waiting item is the first one removed.",
    "visual": "queue"
  },
  {
    "title": "Queue operations",
    "body": "enqueue, dequeue, front, rear, isEmpty and size define Queue behaviour.",
    "points": [
      "enqueue at rear",
      "dequeue at front"
    ]
  },
  {
    "title": "Linear array queue",
    "body": "front and rear indexes work, but repeated dequeues can leave unused positions at the beginning.",
    "visual": "linearqueue"
  },
  {
    "title": "False overflow",
    "body": "rear can reach the final physical slot even while earlier positions are free.",
    "points": [
      "Shifting every time is wasteful",
      "Circular indexing gives a cleaner solution"
    ]
  },
  {
    "title": "Circular queue",
    "body": "Treat the end of the array as connected logically to the beginning.",
    "visual": "circular"
  },
  {
    "title": "Modulo wrap-around",
    "body": "The next index is computed as (index + 1) mod capacity.",
    "visual": "modulo"
  },
  {
    "title": "Circular enqueue",
    "body": "Advance rear by wrap-around, write the value and increase count.",
    "points": [
      "Check full state",
      "No shifting",
      "O(1)"
    ]
  },
  {
    "title": "Circular dequeue",
    "body": "Read front, advance front by wrap-around and decrease count.",
    "points": [
      "Check empty state",
      "Reset when final item leaves",
      "O(1)"
    ]
  },
  {
    "title": "Linked queue",
    "body": "Keep front and rear references: enqueue at rear, dequeue at front.",
    "visual": "linkedqueue"
  },
  {
    "title": "Checkpoint: a queue controls two different ends",
    "body": "Enqueue adds at the rear and dequeue removes at the front. Circular arrays and linked implementations are two ways to preserve the same FIFO behaviour.",
    "points": [
      "ADT behaviour stays the same",
      "Implementation can change",
      "Circular storage solves wasted-slot problems in arrays"
    ]
  },
  {
    "title": "Deque",
    "body": "A double-ended queue permits insertion and deletion at both ends.",
    "visual": "deque"
  },
  {
    "title": "What if the application needs both ends?",
    "body": "Some problems do not fit strict FIFO or LIFO. A deque generalises the idea by allowing controlled insertion and removal at both the front and rear.",
    "points": [
      "Can behave like a queue",
      "Can behave like a stack",
      "Can support sliding-window and scheduling problems"
    ]
  },
  {
    "title": "Deque variants",
    "body": "Input-restricted and output-restricted deques deliberately limit one class of operations.",
    "points": [
      "Input-restricted: one insertion end",
      "Output-restricted: one deletion end"
    ]
  },
  {
    "title": "Stack vs Queue vs Deque",
    "body": "Their key difference is where insertion and removal are permitted.",
    "visual": "compare"
  },
  {
    "title": "Applications of queues",
    "body": "FIFO is natural when earlier arrivals should normally be processed first.",
    "points": [
      "Task scheduling",
      "Print jobs",
      "Message queues",
      "BFS",
      "Service systems",
      "Buffers"
    ]
  },
  {
    "title": "Applications of deques",
    "body": "Both-end access supports sliding windows and flexible scheduling patterns.",
    "points": [
      "Sliding-window maximum/minimum",
      "Work stealing",
      "Flexible buffering"
    ]
  },
  {
    "title": "Implementation choice",
    "body": "The ADT remains the same even when the underlying representation changes.",
    "visual": "implement"
  },
  {
    "title": "Choose the ADT first, then choose its representation",
    "body": "First decide the access rule the problem requires. Only then decide whether an array, circular array or linked representation best implements that rule.",
    "points": [
      "Behaviour first",
      "Representation second",
      "Performance and capacity guide implementation"
    ]
  },
  {
    "title": "Connection to recursion",
    "body": "Recursive execution is managed by a call stack.",
    "points": [
      "Call → push frame",
      "Nested call → push another",
      "Return → pop",
      "LIFO explains return order"
    ]
  }
];
