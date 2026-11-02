window.IS237_TOPIC2_SLIDES = [
  {
    "title": "Data Abstraction and Abstract Data Types",
    "kicker": "IS 237 · Topic 2",
    "body": "Understand data, data types, structures and abstractions before separating what a component does from how it is built.",
    "visual": "layers"
  },
  {
    "title": "Why abstraction?",
    "body": "Large systems contain too much detail to reason about all at once. Abstraction lets us focus on the level relevant to the current task.",
    "points": [
      "Expose essential behaviour",
      "Hide unnecessary detail",
      "Reduce cognitive load",
      "Make change safer"
    ]
  },
  {
    "title": "Everyday analogy: driving a car",
    "body": "A driver uses controls without needing every internal engine detail.",
    "visual": "car"
  },
  {
    "title": "Key terms: data, type and structure",
    "body": "These terms are related, but they answer different questions.",
    "visual": "terms"
  },
  {
    "title": "What is a data type?",
    "body": "A data type classifies values and determines which operations are meaningful for those values.",
    "points": [
      "Integer → arithmetic",
      "Boolean → true/false logic",
      "String → text operations"
    ]
  },
  {
    "title": "Built-in data types",
    "body": "Built-in types are provided directly by the programming language.",
    "visual": "builtin"
  },
  {
    "title": "Derived / constructed types",
    "body": "Richer types and structures are formed by combining simpler values and associated operations.",
    "visual": "derived"
  },
  {
    "title": "Built-in vs derived: real-world analogy",
    "body": "Think of built-in values as basic ingredients and derived structures as organised combinations built for a purpose.",
    "visual": "ingredients"
  },
  {
    "title": "What is a data structure?",
    "body": "A data structure organises collections of data so required operations can be performed effectively.",
    "points": [
      "Organisation matters",
      "Operations matter",
      "Representation affects cost"
    ]
  },
  {
    "title": "Two useful classification questions",
    "body": "How are elements related? How is storage capacity managed?",
    "visual": "classify"
  },
  {
    "title": "Linear data structures",
    "body": "Elements follow a sequential or one-dimensional logical order.",
    "visual": "linear"
  },
  {
    "title": "Linear real-world examples",
    "body": "A queue at a bank, a playlist and a train of carriages all suggest sequential relationships.",
    "points": [
      "Array",
      "Linked list",
      "Stack",
      "Queue"
    ]
  },
  {
    "title": "Non-linear data structures",
    "body": "Elements can branch, form hierarchies or connect in many directions.",
    "visual": "nonlinear"
  },
  {
    "title": "Non-linear real-world examples",
    "body": "A family tree branches; a road network allows many connections between places.",
    "points": [
      "Tree → hierarchy",
      "Graph → network"
    ]
  },
  {
    "title": "Static data structures",
    "body": "Capacity is fixed or reserved in advance for the relevant execution period.",
    "visual": "static"
  },
  {
    "title": "Static real-world example",
    "body": "A classroom with exactly 40 numbered seats has a fixed capacity even if only 32 students are present.",
    "points": [
      "Predictable capacity",
      "Possible unused space",
      "Fixed-size array analogy"
    ]
  },
  {
    "title": "Dynamic data structures",
    "body": "Storage can grow or shrink as elements are added or removed.",
    "visual": "dynamic"
  },
  {
    "title": "Dynamic real-world example",
    "body": "A waiting list can add or remove names as demand changes.",
    "points": [
      "Flexible size",
      "Allocate as needed",
      "Linked-list analogy"
    ]
  },
  {
    "title": "Important nuance: ADT vs implementation",
    "body": "Stack and Queue describe behaviour. Their implementation can be static or dynamic.",
    "visual": "stackimpl"
  },
  {
    "title": "Where did abstraction come from?",
    "body": "As software grew larger, information hiding, modularity and ADTs became tools for controlling complexity.",
    "points": [
      "Behaviour separated from representation",
      "Clients depend on interfaces"
    ]
  },
  {
    "title": "What is an ADT?",
    "body": "A logical description of values, permitted operations and behavioural rules — independent of one specific representation.",
    "visual": "adt"
  },
  {
    "title": "ADT vs data structure",
    "body": "ADT asks WHAT behaviour is provided. Data structure asks HOW values are organised.",
    "visual": "compare"
  },
  {
    "title": "Real-world ADT: ATM account access",
    "body": "A customer sees withdraw, deposit and balance operations. Authentication, database records and transactions remain hidden.",
    "visual": "atm"
  },
  {
    "title": "Interface vs implementation",
    "body": "Clients use public operations. Internal representation remains hidden.",
    "visual": "interface"
  },
  {
    "title": "Why hide implementation?",
    "body": "If clients depend only on the interface, implementation can change without forcing client code to change.",
    "points": [
      "Representation independence",
      "Safer refactoring",
      "Easier testing",
      "Better reuse"
    ]
  },
  {
    "title": "Real-world interface: mobile contacts",
    "body": "Users add, search, edit and delete contacts without managing memory addresses or storage layout.",
    "visual": "contacts"
  },
  {
    "title": "Contracts",
    "body": "Good operations state what must be true before execution and what is guaranteed afterward.",
    "points": [
      "Preconditions",
      "Postconditions",
      "Return values",
      "Invalid cases",
      "State effects"
    ]
  },
  {
    "title": "Representation invariants",
    "body": "An invariant protects the validity of hidden internal state across operations.",
    "points": [
      "Count matches stored records",
      "Keys remain unique",
      "Internal references remain valid"
    ]
  },
  {
    "title": "Encapsulation",
    "body": "State and operations belong together; clients should not bypass the rules that protect the abstraction.",
    "visual": "encap"
  },
  {
    "title": "Modular design",
    "body": "Split a system into focused components with clear interfaces.",
    "points": [
      "High cohesion",
      "Low coupling",
      "Information hiding",
      "Independent change"
    ]
  },
  {
    "title": "Real-world module: university system",
    "body": "Registration, assessment, fee payment and reporting can be separate modules connected through defined interfaces.",
    "visual": "university"
  },
  {
    "title": "Designing an ADT",
    "body": "Start from the problem, define behaviour and contracts, then choose a suitable implementation.",
    "visual": "design"
  },
  {
    "title": "Choosing an implementation",
    "body": "The best representation depends on important operations, expected size and performance requirements.",
    "visual": "chooseimpl"
  },
  {
    "title": "Topic 2 takeaway",
    "body": "Classify the data, understand the required behaviour, then choose a representation that supports the important operations.",
    "points": [
      "Data type ≠ data structure",
      "Linear ≠ non-linear",
      "Static ≠ dynamic",
      "ADT = behaviour",
      "Implementation = representation"
    ]
  }
];
