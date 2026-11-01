window.IS237_TOPIC8_SLIDES = [
  {
    "title": "Graphs and Graph Algorithms",
    "kicker": "IS 237 · Topic 8",
    "body": "Model relationships, traverse networks and find paths using data structures from across the course.",
    "visual": "opening"
  },
  {
    "title": "Why graphs?",
    "body": "Many systems contain multiple connections, alternative routes and cycles that are not naturally linear or hierarchical.",
    "points": [
      "roads",
      "social networks",
      "computer networks",
      "web links",
      "dependencies"
    ]
  },
  {
    "title": "Historical origin",
    "body": "Euler's 1736 Königsberg bridges solution showed the power of abstracting places into vertices and bridges into edges.",
    "visual": "euler"
  },
  {
    "title": "Graph notation",
    "body": "A graph is written G = (V,E): vertices plus edges.",
    "visual": "ge"
  },
  {
    "title": "Core terminology",
    "body": "Vertex, edge, adjacency, degree, path, cycle, component and connectivity.",
    "points": [
      "Directed graphs also use indegree/outdegree"
    ]
  },
  {
    "title": "Undirected vs directed",
    "body": "Undirected connections work both ways; directed edges have orientation.",
    "visual": "direction"
  },
  {
    "title": "Weighted vs unweighted",
    "body": "Weights encode distance, cost, time or another edge quantity.",
    "visual": "weight"
  },
  {
    "title": "Trees are graphs",
    "body": "A tree is a connected acyclic graph.",
    "points": [
      "Every tree is a graph",
      "Not every graph is a tree"
    ]
  },
  {
    "title": "Representing graphs",
    "body": "Two core representations: adjacency matrix and adjacency list.",
    "visual": "represent"
  },
  {
    "title": "Adjacency matrix",
    "body": "A V×V table gives O(1) direct edge lookup but uses O(V²) space.",
    "visual": "matrix"
  },
  {
    "title": "Adjacency list",
    "body": "Each vertex stores its neighbours; space is O(V+E).",
    "visual": "list"
  },
  {
    "title": "Sparse vs dense",
    "body": "Graph density helps determine which representation is attractive.",
    "points": [
      "Sparse → adjacency list",
      "Dense → matrix may be reasonable"
    ]
  },
  {
    "title": "Why traversal needs visited tracking",
    "body": "Graphs can contain cycles and multiple paths to the same vertex.",
    "visual": "visited"
  },
  {
    "title": "Breadth-First Search",
    "body": "BFS explores level by level using a Queue.",
    "visual": "bfs"
  },
  {
    "title": "BFS queue evolution",
    "body": "Discover neighbours, mark them visited immediately, and enqueue them.",
    "visual": "queue"
  },
  {
    "title": "BFS pseudocode",
    "body": "Dequeue one vertex, process it, enqueue every newly discovered neighbour.",
    "points": [
      "Queue controls frontier",
      "Visited prevents duplicates"
    ]
  },
  {
    "title": "BFS complexity",
    "body": "Adjacency-list BFS is O(V+E). Matrix-based traversal can be O(V²).",
    "visual": "complexity"
  },
  {
    "title": "BFS shortest paths",
    "body": "In an unweighted graph, the first discovery gives a shortest path by number of edges.",
    "visual": "shortest"
  },
  {
    "title": "Predecessor map",
    "body": "Remember who discovered each vertex so a path can be reconstructed later.",
    "visual": "pred"
  },
  {
    "title": "Depth-First Search",
    "body": "DFS follows one branch deeply before backtracking.",
    "visual": "dfs"
  },
  {
    "title": "Recursive DFS",
    "body": "The call stack remembers where to return after exploring a neighbour.",
    "visual": "recursion"
  },
  {
    "title": "Iterative DFS",
    "body": "An explicit Stack ADT stores the frontier.",
    "visual": "stack"
  },
  {
    "title": "DFS complexity",
    "body": "With adjacency lists, DFS is O(V+E).",
    "visual": "complexity"
  },
  {
    "title": "BFS vs DFS",
    "body": "Both visit reachable vertices; their frontier structures create different exploration orders.",
    "visual": "bfsdfs"
  },
  {
    "title": "Disconnected graphs",
    "body": "One traversal reaches only one component. Restart from every unvisited vertex to cover the whole graph.",
    "visual": "components"
  },
  {
    "title": "Cycles",
    "body": "Visited tracking prevents endless repetition; DFS is often used for structural cycle detection.",
    "visual": "cycle"
  },
  {
    "title": "Directed degree",
    "body": "Indegree counts entering edges; outdegree counts leaving edges.",
    "visual": "degree"
  },
  {
    "title": "Why BFS is not enough for weighted paths",
    "body": "Fewest edges may not mean lowest total weight.",
    "visual": "weightedpath"
  },
  {
    "title": "Dijkstra's algorithm",
    "body": "For non-negative weights, repeatedly settle the unsettled vertex with smallest tentative distance.",
    "visual": "dijkstra"
  },
  {
    "title": "Initial distances",
    "body": "source = 0; every other vertex = ∞.",
    "visual": "distance"
  },
  {
    "title": "Relaxation",
    "body": "If distance[u] + w(u,v) improves distance[v], update it and remember predecessor u.",
    "visual": "relax"
  },
  {
    "title": "Why a heap appears",
    "body": "A min-priority queue efficiently selects the next smallest tentative distance.",
    "visual": "heap"
  },
  {
    "title": "Dijkstra complexity",
    "body": "With adjacency lists and a binary heap: O((V+E) log V).",
    "visual": "dcomplexity"
  },
  {
    "title": "Dijkstra limitation",
    "body": "Negative edge weights violate the algorithm's settled-distance assumption.",
    "points": [
      "Use only when weights are non-negative"
    ]
  },
  {
    "title": "BFS vs Dijkstra",
    "body": "BFS for equal/unit costs; Dijkstra for differing non-negative weights.",
    "visual": "bfsdijkstra"
  },
  {
    "title": "Graph applications",
    "body": "Routing, recommendations, social networks, web links, dependencies, communication and knowledge graphs.",
    "points": [
      "Same abstraction, many domains"
    ]
  },
  {
    "title": "How the course connects",
    "body": "Queue → BFS; Stack/recursion → DFS; Heap → Dijkstra; Big-O → graph complexity.",
    "visual": "course"
  },
  {
    "title": "Choosing an algorithm",
    "body": "Representation and algorithm follow the problem's dominant requirement.",
    "points": [
      "unweighted shortest path → BFS",
      "deep structural exploration → DFS",
      "weighted non-negative shortest path → Dijkstra"
    ]
  },
  {
    "title": "Final course takeaway",
    "body": "Data structure and algorithm are not separate choices: each representation makes particular operations easier or harder.",
    "visual": "final"
  }
];