window.IS237_TOPIC2_SLIDES = [
  {
    "title": "Data Abstraction and Abstract Data Types",
    "kicker": "IS 237 · Topic 2",
    "body": "Manage complexity by separating what a component does from how it is built.",
    "visual": "layers"
  },
  {
    "title": "Why abstraction?",
    "body": "Large systems contain too much detail to reason about all at once. Abstraction lets us work at the level relevant to the current task.",
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
    "points": [
      "Controls = interface",
      "Engine/transmission = implementation",
      "Similar interfaces can hide different implementations"
    ]
  },
  {
    "title": "Where did the idea come from?",
    "body": "As software grew larger in the 1960s and 1970s, information hiding, modularity and abstract data types became important tools for controlling complexity.",
    "points": [
      "Modern ADT formulations developed strongly in the 1970s",
      "Behaviour can be specified separately from representation"
    ]
  },
  {
    "title": "What is an ADT?",
    "body": "A logical description of values, permitted operations and rules — independent of one specific representation.",
    "visual": "adt"
  },
  {
    "title": "ADT vs data structure",
    "body": "ADT asks WHAT behaviour is provided. Data structure asks HOW values are organised.",
    "visual": "compare"
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
    "title": "Designing an ADT",
    "body": "Start from the problem, define behaviour and contracts, then choose a suitable implementation.",
    "visual": "design"
  },
  {
    "title": "Topic 2 takeaway",
    "body": "Abstraction is not about ignoring detail forever — it is about revealing the right detail at the right level.",
    "points": [
      "ADT = behaviour contract",
      "Data structure = representation",
      "Interface ≠ implementation",
      "Design behaviour before representation"
    ]
  }
];