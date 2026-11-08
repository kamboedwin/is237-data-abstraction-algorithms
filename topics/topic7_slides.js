window.IS237_TOPIC7_SLIDES = [
  {
    "title": "Trees, BSTs, Heaps and Hash Tables",
    "kicker": "IS 237 · Topic 7",
    "body": "Move beyond linear storage: hierarchy, ordered search, priority access and key-based lookup.",
    "visual": "opening"
  },
  {
    "title": "One system, three different needs",
    "kicker": "Running example · University information system",
    "body": "Imagine the same university system now has three performance-critical tasks. Each task suggests a different advanced structure.",
    "points": [
      "Keep student IDs in searchable order → BST",
      "Always process the highest-priority request next → Heap / Priority Queue",
      "Find a record quickly from an exact key → Hash Table"
    ]
  },
  {
    "title": "Why non-linear structures?",
    "body": "Some relationships are hierarchical; some applications need priority; others need exact-key lookup without scanning.",
    "points": [
      "Tree → hierarchy",
      "Heap → priority",
      "Hash table → key lookup"
    ]
  },
  {
    "title": "Step 1: when a simple line is no longer enough",
    "body": "Arrays and linked lists organise data sequentially. Trees introduce hierarchy, allowing one element to lead to several substructures.",
    "points": [
      "Hierarchy is natural in folders and organisations",
      "Search decisions can eliminate whole subtrees",
      "Shape affects performance"
    ]
  },
  {
    "title": "Tree anatomy",
    "body": "Root, parent, child, sibling, leaf, ancestor, descendant, depth, height and subtree.",
    "visual": "tree"
  },
  {
    "title": "Binary tree",
    "body": "Each node has at most two children: left and right.",
    "points": [
      "Foundation for BSTs",
      "Foundation for binary heaps"
    ]
  },
  {
    "title": "Binary-tree shapes",
    "body": "Full, perfect, complete, balanced and skewed describe different structural properties.",
    "points": [
      "Complete matters for heaps",
      "Balanced height matters for BST efficiency"
    ]
  },
  {
    "title": "Preorder traversal",
    "body": "Root → Left → Right.",
    "visual": "preorder"
  },
  {
    "title": "Inorder traversal",
    "body": "Left → Root → Right. In a BST, this produces sorted keys.",
    "visual": "inorder"
  },
  {
    "title": "Postorder traversal",
    "body": "Left → Right → Root.",
    "visual": "postorder"
  },
  {
    "title": "Level-order traversal",
    "body": "Visit one depth at a time using a Queue.",
    "visual": "level"
  },
  {
    "title": "Binary Search Tree",
    "body": "Left subtree keys are smaller; right subtree keys are larger, recursively.",
    "visual": "bst"
  },
  {
    "title": "BST search",
    "body": "One comparison chooses the only subtree that can still contain the target.",
    "visual": "bstsearch"
  },
  {
    "title": "BST complexity depends on height",
    "body": "Search, insertion and deletion are O(h), not automatically O(log n).",
    "visual": "height"
  },
  {
    "title": "BST insertion",
    "body": "Follow search comparisons until the correct null child position is reached.",
    "visual": "bstinsert"
  },
  {
    "title": "BST deletion: three cases",
    "body": "Leaf, one child, or two children.",
    "visual": "deletecases"
  },
  {
    "title": "Delete a leaf",
    "body": "Disconnect it from its parent.",
    "points": [
      "No subtree must be reattached"
    ]
  },
  {
    "title": "Delete one-child node",
    "body": "Bypass the node and attach its parent directly to its only child.",
    "visual": "onechild"
  },
  {
    "title": "Delete two-child node",
    "body": "Use inorder successor/predecessor to preserve ordering.",
    "visual": "twochild"
  },
  {
    "title": "Balanced vs skewed BST",
    "body": "Insertion order can turn an ordinary BST into a linked-list-like structure.",
    "visual": "balanced"
  },
  {
    "title": "BST checkpoint: ordering helps only when the shape remains useful",
    "body": "A BST can provide efficient search, insertion and deletion when its height stays small. A skewed tree can behave much like a linked list.",
    "points": [
      "Ordering property enables directed search",
      "Height controls cost",
      "Balancing exists to protect that advantage"
    ]
  },
  {
    "title": "Why balancing exists",
    "body": "AVL and Red-Black trees restructure updates to keep height logarithmic.",
    "points": [
      "Concept only in this topic",
      "Goal: preserve O(log n) operations"
    ]
  },
  {
    "title": "Step 2: what if we do not need full ordering — only the highest priority?",
    "body": "A hospital request queue or job scheduler often needs one operation above all: repeatedly access the highest- or lowest-priority item. Maintaining a full BST ordering may be more than we need.",
    "points": [
      "Need: best-priority item quickly",
      "Heap keeps only the ordering necessary for that task",
      "This motivates the Priority Queue implementation"
    ]
  },
  {
    "title": "Binary heap",
    "body": "A complete binary tree plus a heap-order property.",
    "visual": "heap"
  },
  {
    "title": "Max-heap vs min-heap",
    "body": "Max-heap exposes the largest key at root; min-heap exposes the smallest.",
    "visual": "minmax"
  },
  {
    "title": "Heap array representation",
    "body": "Complete shape allows compact array storage with index formulas.",
    "visual": "heaparray"
  },
  {
    "title": "Heap insertion",
    "body": "Append, then sift up until heap order is restored.",
    "visual": "heapinsert"
  },
  {
    "title": "Heap peek",
    "body": "Highest/lowest priority is at root: O(1).",
    "visual": "heappeek"
  },
  {
    "title": "Extract root",
    "body": "Move last value to root, shrink, then heapify down.",
    "visual": "extract"
  },
  {
    "title": "Heapify down",
    "body": "Swap with the best child until parent-child order is restored.",
    "visual": "heapify"
  },
  {
    "title": "Build heap",
    "body": "Heapify internal nodes from the bottom upward.",
    "points": [
      "Bottom-up BuildHeap is O(n)",
      "Not O(n log n) despite repeated heapify"
    ]
  },
  {
    "title": "Priority Queue",
    "body": "Heap is a natural implementation when removal depends on priority.",
    "points": [
      "insert O(log n)",
      "peek O(1)",
      "extract O(log n)"
    ]
  },
  {
    "title": "Heap checkpoint: partial order is enough for priority",
    "body": "A heap does not keep every value globally sorted. It guarantees that the root has the highest or lowest priority, which is exactly what a priority queue needs.",
    "points": [
      "Peek root efficiently",
      "Insert while restoring heap order",
      "Extract root then heapify"
    ]
  },
  {
    "title": "Heap sort",
    "body": "Build a max-heap, repeatedly move root to the end, restore heap.",
    "visual": "heapsort"
  },
  {
    "title": "Heap is not BST",
    "body": "Heap gives priority order, not full search order.",
    "points": [
      "Arbitrary heap search can be O(n)",
      "Inorder heap traversal is not sorted"
    ]
  },
  {
    "title": "Step 3: what if the dominant task is exact key lookup?",
    "body": "Suppose we usually know a student's registration number and simply want the matching record. We may not need hierarchy or priority at all.",
    "points": [
      "Input: exact key",
      "Goal: map key directly toward a storage location",
      "This motivates hashing"
    ]
  },
  {
    "title": "Hash table",
    "body": "Hash a key to an array index or bucket.",
    "visual": "hash"
  },
  {
    "title": "Hash function",
    "body": "A good hash function distributes typical keys across the table.",
    "visual": "hashfunc"
  },
  {
    "title": "Collisions are normal",
    "body": "Different keys may map to the same initial index. The design must resolve them.",
    "visual": "collision"
  },
  {
    "title": "Hash-table checkpoint: fast lookup needs collision management",
    "body": "A hash function compresses many possible keys into a limited table. Different keys can therefore map to the same location, so collision handling is part of the design rather than an exceptional failure.",
    "points": [
      "Separate chaining stores multiple entries per bucket",
      "Open addressing searches for another slot",
      "Load factor influences performance"
    ]
  },
  {
    "title": "Separate chaining",
    "body": "Each bucket stores multiple colliding entries.",
    "visual": "chaining"
  },
  {
    "title": "Open addressing",
    "body": "All entries stay in the table; collisions trigger probing.",
    "visual": "probing"
  },
  {
    "title": "Linear probing",
    "body": "Try (start + i) mod tableSize until a matching or available slot is reached.",
    "visual": "linearprobe"
  },
  {
    "title": "Deletion and tombstones",
    "body": "EMPTY would break probe chains; DELETED preserves them.",
    "visual": "tombstone"
  },
  {
    "title": "Load factor",
    "body": "α = entries / slots. High load usually increases collision cost.",
    "visual": "load"
  },
  {
    "title": "Resizing and rehashing",
    "body": "Changing table size changes indexes, so active entries must be inserted again.",
    "visual": "rehash"
  },
  {
    "title": "Hash complexity",
    "body": "Average search/insert/delete can be O(1); worst case is O(n).",
    "points": [
      "Depends on distribution",
      "Depends on load factor",
      "O(1) is not absolute"
    ]
  },
  {
    "title": "BST vs Heap vs Hash Table",
    "body": "Choose according to the operation the application values most.",
    "visual": "compare"
  },
  {
    "title": "Return to the three university tasks",
    "body": "The structures are not competitors trying to win the same contest. Each preserves a different kind of organisation because each serves a different dominant operation.",
    "points": [
      "BST → ordered search and traversal",
      "Heap → repeated priority access",
      "Hash table → exact key lookup",
      "Choose from the operation, not from popularity"
    ]
  },
  {
    "title": "Application decisions",
    "body": "Ordered traversal → BST; highest priority → Heap; exact-key lookup → Hash Table.",
    "visual": "decide"
  },
  {
    "title": "Common misconceptions",
    "body": "A heap is not sorted, BST is not always logarithmic, and hash lookup is not guaranteed O(1).",
    "points": [
      "State structural assumptions",
      "State average vs worst-case claims"
    ]
  },
  {
    "title": "Topic 7 takeaway",
    "body": "Representation determines which operations become cheap.",
    "points": [
      "BST: ordered search",
      "Heap: priority",
      "Hash: exact key lookup",
      "All trade order, memory and update behaviour differently",
      "Prepare for graphs"
    ]
  },
  {
    "title": "Where Topic 7 leads next",
    "body": "Trees model hierarchy, but many real systems are not hierarchical: a place, person or device may connect to many others. Topic 8 generalises this idea using graphs.",
    "points": [
      "Tree → constrained connections",
      "Graph → arbitrary network connections",
      "Traversal ideas reappear as BFS and DFS"
    ]
  }
];
