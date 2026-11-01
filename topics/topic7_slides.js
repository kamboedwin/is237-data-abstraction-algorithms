window.IS237_TOPIC7_SLIDES = [
  {
    "title": "Trees, BSTs, Heaps and Hash Tables",
    "kicker": "IS 237 · Topic 7",
    "body": "Move beyond linear storage: hierarchy, ordered search, priority access and key-based lookup.",
    "visual": "opening"
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
    "title": "Why balancing exists",
    "body": "AVL and Red-Black trees restructure updates to keep height logarithmic.",
    "points": [
      "Concept only in this topic",
      "Goal: preserve O(log n) operations"
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
  }
];