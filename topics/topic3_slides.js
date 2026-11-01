window.IS237_TOPIC3_SLIDES = [
  {
    "title": "Arrays and Linked Lists",
    "kicker": "IS 237 · Topic 3",
    "body": "Two representations of ordered collections with different operation trade-offs.",
    "visual": "opening"
  },
  {
    "title": "From ADT to representation",
    "body": "Topic 2 defined behaviour. Topic 3 asks how the data should actually be organised.",
    "points": [
      "Same logical collection",
      "Different representation",
      "Different operation costs"
    ]
  },
  {
    "title": "What is an array?",
    "body": "An indexed sequence of logical positions. Knowing the index normally gives direct access to the corresponding element.",
    "visual": "array"
  },
  {
    "title": "Array operations overview",
    "body": "Access, update, traversal, search, insertion, deletion and append are the core operations.",
    "points": [
      "Access/update: known index",
      "Traversal/search: inspect elements",
      "Insert/delete: may shift values",
      "Append: cheap when capacity exists"
    ]
  },
  {
    "title": "Array access and update",
    "body": "A known index normally gives O(1) access or update.",
    "visual": "index"
  },
  {
    "title": "Array traversal and search",
    "body": "If every element may need inspection, work grows with n.",
    "visual": "linear"
  },
  {
    "title": "Array insertion",
    "body": "Inserting into the middle may require right-to-left shifts before the new value is written.",
    "visual": "shift"
  },
  {
    "title": "Array deletion",
    "body": "Deleting from the middle may require later elements to shift left to close the gap.",
    "points": [
      "Location matters",
      "Beginning/middle can move many values",
      "Logical size decreases"
    ]
  },
  {
    "title": "Fixed vs dynamic arrays",
    "body": "Dynamic arrays preserve indexed access while occasionally replacing their backing storage to grow.",
    "visual": "dynamic"
  },
  {
    "title": "What is a linked list?",
    "body": "A sequence of nodes connected by references rather than neighbouring indexed positions.",
    "visual": "linked"
  },
  {
    "title": "Three linked-list types",
    "body": "Singly, doubly and circular lists differ in what references each node stores and how traversal terminates.",
    "visual": "types"
  },
  {
    "title": "Singly linked list",
    "body": "Each node stores data and next. Traversal proceeds forward until null.",
    "visual": "singly"
  },
  {
    "title": "Singly linked operations",
    "body": "Search and positional access require traversal; front insertion/deletion can be O(1).",
    "points": [
      "Traverse/search O(n)",
      "Insert front O(1)",
      "Insert after known node O(1) relinking",
      "Delete value O(n) because search may dominate"
    ]
  },
  {
    "title": "Doubly linked list",
    "body": "Each node stores previous and next, enabling movement in both directions.",
    "visual": "doubly"
  },
  {
    "title": "How doubly-linked operations change",
    "body": "Insert/delete must maintain both directions, but a known node already reveals its predecessor and successor.",
    "points": [
      "More pointer updates",
      "More memory per node",
      "Backward traversal supported",
      "Known-node deletion can be local O(1)"
    ]
  },
  {
    "title": "Circular linked list",
    "body": "The last node links back to head instead of null. Traversal stops when the starting node is reached again.",
    "visual": "circular"
  },
  {
    "title": "How circular operations change",
    "body": "Changing head or tail must preserve the circular link.",
    "points": [
      "No null terminator",
      "Careful stopping condition",
      "With tail, front/end insertion can be O(1)",
      "Natural for round-robin processing"
    ]
  },
  {
    "title": "Insert after a known node",
    "body": "The relinking can be O(1), but finding that node may still cost O(n).",
    "points": [
      "Locate cost ≠ update cost",
      "Always state assumptions when giving complexity"
    ]
  },
  {
    "title": "Delete a linked node",
    "body": "Singly lists often need the predecessor; doubly linked nodes provide previous directly.",
    "visual": "delete"
  },
  {
    "title": "Array vs linked list",
    "body": "The right choice depends on the operations required most often.",
    "visual": "compare"
  },
  {
    "title": "Common misconceptions",
    "body": "Complexity statements must include the conditions under which they are true.",
    "points": [
      "'Linked insertion is O(1)' needs a known node",
      "Doubly is not automatically better",
      "Circular traversal must avoid infinite loops",
      "O(1) is growth, not instant time"
    ]
  },
  {
    "title": "Where these structures appear",
    "body": "Arrays dominate numerical and indexed data; linked variants are useful where structural navigation matches the problem.",
    "points": [
      "Arrays: images, matrices, tensors",
      "Doubly linked: two-way histories",
      "Circular: repeated cyclic scheduling"
    ]
  },
  {
    "title": "Topic 3 takeaway",
    "body": "The same operation must preserve different representation rules in different structures.",
    "points": [
      "Array operations preserve indexed layout",
      "Singly operations preserve next links",
      "Doubly operations preserve previous + next",
      "Circular operations preserve the cycle"
    ]
  }
];