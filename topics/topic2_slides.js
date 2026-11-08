window.IS237_TOPIC2_SLIDES = [
  {
    "title": "Data Abstraction and Abstract Data Types",
    "kicker": "IS 237 · Topic 2",
    "body": "Follow one connected story: begin with individual data values, organise them into structures, then define the behaviour users need without exposing unnecessary implementation detail.",
    "visual": "layers"
  },
  {
    "title": "The story we will follow",
    "kicker": "Running example · Student Registration System",
    "body": "Imagine we are designing a university system that stores students and allows staff to register, find, update and remove records. Every concept in this topic will help us make one design decision in that system.",
    "points": [
      "What values describe one student?",
      "How do we organise many students?",
      "Which operations must the system provide?",
      "Which implementation details should users never need to know?"
    ]
  },
  {
    "title": "Step 1: start with one student",
    "kicker": "From a real problem to data",
    "body": "A student record contains values such as registration number, name, programme, GPA and registration status. Before discussing structures, we first identify the kinds of values we are storing.",
    "points": [
      "Registration number → text",
      "Name → text",
      "GPA → numeric value",
      "Registered? → true / false"
    ]
  },
  {
    "title": "Data, data type and data structure",
    "kicker": "Build the vocabulary in order",
    "body": "These terms answer different questions. Keeping them separate makes the rest of the topic much easier to follow.",
    "visual": "terms"
  },
  {
    "title": "What is a data type?",
    "body": "A data type classifies a value and determines which operations are meaningful for that value. The value 3.6 can be used in arithmetic; the text 'ST/2026/014' is treated differently.",
    "points": [
      "Integer / numeric types → arithmetic and comparison",
      "Boolean → true/false logic",
      "String → text storage, comparison and processing"
    ]
  },
  {
    "title": "Built-in data types in our student record",
    "kicker": "Start from simple values",
    "body": "Programming languages provide basic types directly. We combine them to represent a real object.",
    "visual": "builtin"
  },
  {
    "title": "From simple values to a student record",
    "kicker": "Built-in → derived / constructed",
    "body": "One student is not just one integer or one string. We combine several values into a richer record that represents a meaningful real-world entity.",
    "points": [
      "regNo: String",
      "name: String",
      "gpa: Number",
      "registered: Boolean"
    ],
    "visual": "derived"
  },
  {
    "title": "Built-in vs derived: think of ingredients",
    "body": "Built-in values are like basic ingredients. A student record is the organised combination created for a specific purpose.",
    "visual": "ingredients"
  },
  {
    "title": "Step 2: one record is not enough",
    "kicker": "From a student to a collection of students",
    "body": "The university has hundreds or thousands of students. We now need a way to organise many records so that operations such as searching, inserting and deleting can be performed effectively.",
    "points": [
      "This is where data structures become important",
      "Organisation affects the cost of operations",
      "Different problems favour different organisations"
    ]
  },
  {
    "title": "What is a data structure?",
    "body": "A data structure is a way of organising a collection of data so that the operations required by an application can be carried out effectively.",
    "points": [
      "The data are the student records",
      "The structure determines how the records relate and are stored",
      "The required operations help us decide which structure is appropriate"
    ]
  },
  {
    "title": "Two questions help us classify structures",
    "kicker": "Do not memorise names first — ask questions",
    "body": "First ask how elements are related. Then ask how storage capacity is managed. These are two different classification dimensions.",
    "visual": "classify"
  },
  {
    "title": "Linear structures: one main sequence",
    "body": "In a linear structure, elements follow a sequential logical order. We can think of moving from one position to the next along one main path.",
    "visual": "linear"
  },
  {
    "title": "Running example: students waiting for registration",
    "kicker": "Linear structure in the real world",
    "body": "Suppose students are served in the order they arrive at a registration desk. The relationship is naturally sequential: first, second, third and so on.",
    "points": [
      "A queue models the service order",
      "An array or linked representation could store the queue",
      "Linear describes the relationship between elements"
    ]
  },
  {
    "title": "Non-linear structures: relationships can branch",
    "body": "Not every problem fits one sequence. Some data form hierarchies or networks in which an element can be related to several others.",
    "visual": "nonlinear"
  },
  {
    "title": "University hierarchy and campus roads",
    "kicker": "Two non-linear examples",
    "body": "A university organisational structure branches from university to faculties, departments and programmes. A campus road network allows many routes between places.",
    "points": [
      "Hierarchy → tree-like structure",
      "Road connections → graph-like structure",
      "Non-linear structures support branching or many-to-many connections"
    ]
  },
  {
    "title": "Checkpoint: linear or non-linear?",
    "body": "The classification depends on the relationship we need to represent, not simply on how many values we have.",
    "points": [
      "Registration waiting line → linear",
      "Programme hierarchy → non-linear",
      "Campus route network → non-linear"
    ]
  },
  {
    "title": "Now ask a different question: is capacity fixed?",
    "kicker": "Relationship and capacity are separate ideas",
    "body": "Linear/non-linear describes organisation. Static/dynamic describes how storage capacity is managed while the programme runs.",
    "points": [
      "A structure can be linear and static",
      "A structure can be linear and dynamic",
      "Do not treat the two classifications as opposites of each other"
    ]
  },
  {
    "title": "Static data structures",
    "body": "A static structure uses capacity that is fixed or reserved in advance for the relevant period of execution.",
    "visual": "static"
  },
  {
    "title": "Running example: a class list with 40 places",
    "kicker": "Static-capacity thinking",
    "body": "Suppose a laboratory class has exactly 40 available places. A fixed-size array can reserve 40 positions even when only 32 students are currently registered.",
    "points": [
      "Capacity is predictable",
      "Unused positions may remain",
      "Growing beyond the reserved capacity requires another strategy"
    ]
  },
  {
    "title": "Dynamic data structures",
    "body": "A dynamic structure can grow or shrink as elements are added or removed while the programme is running.",
    "visual": "dynamic"
  },
  {
    "title": "Running example: an open waiting list",
    "kicker": "Dynamic-capacity thinking",
    "body": "If we do not know how many students will join a waiting list, a dynamically growing representation may be more appropriate than reserving a large fixed capacity in advance.",
    "points": [
      "Add storage as new elements arrive",
      "Release storage when elements are removed",
      "Linked structures provide a classic example"
    ]
  },
  {
    "title": "Important distinction: ADT is not the storage method",
    "body": "A Stack or Queue describes behaviour. It can be implemented using fixed-capacity storage or a dynamically growing representation.",
    "visual": "stackimpl"
  },
  {
    "title": "What have we established so far?",
    "kicker": "Values → records → structures",
    "body": "We can now describe the data and classify possible ways of organising it. The next question is more important for software design: what behaviour should users of the student registry be allowed to see?",
    "points": [
      "Data type tells us what kind of value",
      "Data structure tells us how a collection is organised",
      "Classification describes relationships and capacity",
      "Next: define behaviour without exposing representation"
    ]
  },
  {
    "title": "Step 3: move from representation to abstraction",
    "kicker": "Focus on what the user needs",
    "body": "A staff member using the registry should not need to know memory addresses, array resizing rules or node links. The user needs meaningful operations such as add, find and remove.",
    "visual": "car"
  },
  {
    "title": "Why abstraction?",
    "body": "Abstraction exposes the essential behaviour needed at one level while hiding lower-level details that do not belong to that user's task.",
    "points": [
      "Reduce unnecessary detail",
      "Make systems easier to reason about",
      "Allow internal implementation to change",
      "Protect users from accidental misuse"
    ]
  },
  {
    "title": "What is an Abstract Data Type (ADT)?",
    "body": "An ADT is a logical specification of values, permitted operations and behavioural rules, without requiring one particular physical representation.",
    "visual": "adt"
  },
  {
    "title": "Running example: Student Registry ADT",
    "kicker": "Describe behaviour before implementation",
    "body": "We can define what the registry must do before deciding whether students will be stored in an array, linked list, tree or hash table.",
    "points": [
      "add(student)",
      "find(registrationNumber)",
      "remove(registrationNumber)",
      "size()",
      "isEmpty()"
    ]
  },
  {
    "title": "ADT vs data structure",
    "body": "The ADT answers WHAT behaviour is promised. The data structure answers HOW the information is represented so that behaviour can be implemented.",
    "visual": "compare"
  },
  {
    "title": "Same Student Registry ADT, different implementations",
    "kicker": "The public behaviour can remain unchanged",
    "body": "Today the registry might use an array. Later it could use linked nodes or a hash table. If the interface contract remains the same, client code should not need to know that change occurred.",
    "points": [
      "Implementation A → array-like storage",
      "Implementation B → linked-node storage",
      "Same client operations → add, find, remove, size"
    ]
  },
  {
    "title": "Interface vs implementation",
    "body": "The interface is the public set of operations clients are allowed to use. The implementation is the hidden representation and procedures that make those operations work.",
    "visual": "interface"
  },
  {
    "title": "Step 4: define what each operation guarantees",
    "kicker": "Contracts make behaviour precise",
    "body": "Saying that the registry has an add() operation is not enough. We must state what inputs are valid, what changes after the operation and what happens when a rule is violated.",
    "points": [
      "Precondition → registration number is valid",
      "Postcondition → new student is stored and size increases",
      "Policy → duplicate registration numbers are rejected"
    ]
  },
  {
    "title": "Representation invariants protect valid state",
    "body": "Some rules must remain true after every operation, regardless of which implementation is used.",
    "points": [
      "Registration numbers remain unique",
      "Stored count matches the actual records",
      "Internal references remain valid",
      "Size can never be negative"
    ]
  },
  {
    "title": "Encapsulation prevents clients from breaking the rules",
    "body": "If clients can directly change internal fields, they can make the registry inconsistent. Controlled operations protect the state and its invariants.",
    "visual": "encap"
  },
  {
    "title": "Step 5: build larger systems from focused modules",
    "kicker": "Abstraction scales beyond one data structure",
    "body": "A university information system can separate registration, assessment, fee payment and reporting into modules. Each module exposes a clear interface and hides details that other modules do not need.",
    "visual": "university"
  },
  {
    "title": "Choosing the implementation comes last",
    "body": "Once behaviour is clear, choose the representation according to expected size, dominant operations and performance requirements.",
    "visual": "chooseimpl"
  },
  {
    "title": "Put the whole story together",
    "kicker": "One connected design path",
    "body": "Start with real data, classify the values, organise collections, define the behaviour users need, protect that behaviour with contracts and encapsulation, then choose the most suitable implementation.",
    "points": [
      "Values → data types",
      "Many values → data structure",
      "Required behaviour → ADT",
      "Public operations → interface",
      "Hidden representation → implementation"
    ],
    "visual": "layers"
  },
  {
    "title": "Transfer the idea to other systems",
    "body": "The same separation appears in many familiar systems: an ATM exposes account operations, and a contacts app exposes add/search/edit/delete without showing storage details.",
    "points": [
      "ATM: user operations hide authentication and database work",
      "Contacts app: user actions hide memory and storage organisation",
      "Good abstraction gives users the right level of detail"
    ],
    "visual": "atm"
  },
  {
    "title": "Topic 2 takeaway",
    "body": "Do not begin by memorising structure names. Begin with the problem, the data and the required operations, then move deliberately from behaviour to representation.",
    "points": [
      "Data type → what kind of value?",
      "Data structure → how is a collection organised?",
      "Linear/non-linear → how are elements related?",
      "Static/dynamic → how is capacity managed?",
      "ADT → what behaviour is promised?",
      "Implementation → how is that behaviour realised?"
    ]
  }
];

/*
  Student-experience enhancements loaded with Topic 2 slides.
  1. Adds Previous/Next navigation to the bottom of every topic's Notes iframe.
  2. Adds a Download PPT button to every topic.
  PowerPoint files are generated in the browser from the same slide data used by Presentation Mode.
*/
(function () {
  if (typeof document === "undefined") return;

  const topicNames = {
    1: "Problem Solving and Introduction to Algorithms",
    2: "Data Abstraction and Abstract Data Types",
    3: "Arrays and Linked Lists",
    4: "Stacks, Queues, Deques and Circular Queues",
    5: "Recursion and Iteration",
    6: "Searching, Sorting and Algorithm Efficiency",
    7: "Trees, Binary Search Trees, Heaps and Hash Tables",
    8: "Graphs and Graph Algorithms"
  };

  function goToView(view) {
    const button = document.querySelector('.nav-link[data-view="' + view + '"]');
    if (button) button.click();
  }

  function injectNotesNavigation(frame, topicNumber) {
    try {
      const doc = frame.contentDocument;
      if (!doc || !doc.body || doc.getElementById("is237-note-nav")) return;

      const style = doc.createElement("style");
      style.textContent = `
        .is237-note-nav{margin:3rem 0 .5rem;padding:1.4rem 0 .2rem;border-top:2px solid #dbe3ef;display:flex;gap:12px;justify-content:space-between;align-items:center;flex-wrap:wrap}
        .is237-note-nav button{border:0;border-radius:10px;padding:11px 16px;font:inherit;font-weight:800;cursor:pointer;background:#173a75;color:#fff}
        .is237-note-nav button.secondary{background:#eef3fa;color:#173a75;border:1px solid #c8d5e6}
        .is237-note-nav .nav-spacer{flex:1}
        @media(max-width:600px){.is237-note-nav{display:grid;grid-template-columns:1fr}.is237-note-nav button{width:100%}.is237-note-nav .nav-spacer{display:none}}
        @media print{.is237-note-nav{display:none!important}}
      `;
      doc.head.appendChild(style);

      const nav = doc.createElement("nav");
      nav.id = "is237-note-nav";
      nav.className = "is237-note-nav";
      nav.setAttribute("aria-label", "Topic navigation");

      function makeButton(label, className, handler) {
        const btn = doc.createElement("button");
        btn.type = "button";
        btn.className = className || "";
        btn.textContent = label;
        btn.addEventListener("click", handler);
        return btn;
      }

      if (topicNumber > 1) {
        nav.appendChild(makeButton("← Previous Topic", "secondary", function () {
          goToView("topic" + (topicNumber - 1));
        }));
      } else {
        nav.appendChild(makeButton("← Course Home", "secondary", function () {
          goToView("home");
        }));
      }

      const spacer = doc.createElement("span");
      spacer.className = "nav-spacer";
      nav.appendChild(spacer);

      if (topicNumber < 8) {
        nav.appendChild(makeButton("Next Topic →", "", function () {
          goToView("topic" + (topicNumber + 1));
        }));
      } else {
        nav.appendChild(makeButton("Course Home →", "", function () {
          goToView("home");
        }));
      }

      doc.body.appendChild(nav);
    } catch (err) {
      console.warn("Could not add note navigation", err);
    }
  }

  function setupNotesNavigation() {
    document.querySelectorAll('iframe.frame[src*="_notes.html"]').forEach(function (frame) {
      const match = (frame.getAttribute("src") || "").match(/topic(\d+)_notes\.html/);
      if (!match) return;
      const topicNumber = Number(match[1]);
      frame.addEventListener("load", function () {
        injectNotesNavigation(frame, topicNumber);
      });
      try {
        if (frame.contentDocument && frame.contentDocument.readyState === "complete") {
          injectNotesNavigation(frame, topicNumber);
        }
      } catch (err) {
        /* load listener will retry */
      }
    });
  }

  let pptxLoaderPromise = null;
  function ensurePptxGenJS() {
    if (window.PptxGenJS) return Promise.resolve();
    if (pptxLoaderPromise) return pptxLoaderPromise;

    pptxLoaderPromise = new Promise(function (resolve, reject) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/gitbrent/pptxgenjs/dist/pptxgen.bundle.js";
      script.async = true;
      script.onload = function () {
        window.PptxGenJS ? resolve() : reject(new Error("PowerPoint library did not initialise."));
      };
      script.onerror = function () {
        reject(new Error("PowerPoint library could not be loaded."));
      };
      document.head.appendChild(script);
    });
    return pptxLoaderPromise;
  }

  function plainText(value) {
    return String(value || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  }

  function safeFileName(value) {
    return String(value || "IS237")
      .replace(/[^a-zA-Z0-9 _-]+/g, "")
      .trim()
      .replace(/\s+/g, "_");
  }

  function addDeckSlide(pptx, item, index, total, topicNumber) {
    const slide = pptx.addSlide();
    slide.background = { color: "F7F9FC" };

    slide.addShape(pptx.ShapeType.rect, {
      x: 0, y: 0, w: 13.333, h: 0.16,
      line: { color: "173A75", transparency: 100 },
      fill: { color: "173A75" }
    });

    if (index === 0) {
      slide.addText("IS 237 · TOPIC " + topicNumber, {
        x: 0.8, y: 0.8, w: 11.7, h: 0.35,
        fontFace: "Aptos", fontSize: 15, bold: true, color: "2F5FA7",
        charSpacing: 1.5, margin: 0
      });
      slide.addText(plainText(item.title), {
        x: 0.8, y: 1.5, w: 11.7, h: 1.35,
        fontFace: "Aptos Display", fontSize: 30, bold: true,
        color: "173A75", margin: 0, breakLine: false
      });
      slide.addText(plainText(item.body), {
        x: 0.8, y: 3.1, w: 10.9, h: 1.25,
        fontFace: "Aptos", fontSize: 20, color: "40516A",
        margin: 0, valign: "mid"
      });
      slide.addText("Mkwawa University College of Education · BSc Data Science and Artificial Intelligence", {
        x: 0.8, y: 6.65, w: 11.6, h: 0.3,
        fontFace: "Aptos", fontSize: 10.5, color: "64748B", margin: 0
      });
      return;
    }

    if (item.kicker) {
      slide.addText(plainText(item.kicker), {
        x: 0.72, y: 0.48, w: 11.8, h: 0.3,
        fontFace: "Aptos", fontSize: 11.5, bold: true, color: "2F5FA7",
        charSpacing: 1, margin: 0
      });
    }

    slide.addText(plainText(item.title), {
      x: 0.72, y: item.kicker ? 0.9 : 0.62, w: 11.75, h: 0.78,
      fontFace: "Aptos Display", fontSize: 25, bold: true,
      color: "173A75", margin: 0
    });

    const bodyY = item.kicker ? 1.78 : 1.5;
    slide.addText(plainText(item.body), {
      x: 0.78, y: bodyY, w: 11.55, h: 1.15,
      fontFace: "Aptos", fontSize: 17.5, color: "334155",
      margin: 0.02, breakLine: false
    });

    const points = Array.isArray(item.points) ? item.points.map(plainText).filter(Boolean) : [];
    if (points.length) {
      slide.addText(points.map(function (p) { return "• " + p; }).join("\n"), {
        x: 1.02, y: bodyY + 1.35, w: 10.95, h: 3.35,
        fontFace: "Aptos", fontSize: points.length > 5 ? 15 : 17,
        color: "1F2937", breakLine: false, margin: 0.03,
        breakLineOnOverflow: false, valign: "top"
      });
    } else if (item.visual) {
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 1.35, y: bodyY + 1.55, w: 10.0, h: 2.3,
        rectRadius: 0.08,
        line: { color: "C8D5E6", width: 1.2 },
        fill: { color: "EEF4FB" }
      });
      slide.addText("Concept focus\n" + plainText(item.title), {
        x: 1.65, y: bodyY + 1.98, w: 9.4, h: 1.35,
        align: "center", valign: "mid",
        fontFace: "Aptos Display", fontSize: 20, bold: true,
        color: "294A7F", margin: 0
      });
    }

    slide.addText("IS 237 · Topic " + topicNumber + "     " + (index + 1) + " / " + total, {
      x: 0.72, y: 7.05, w: 11.9, h: 0.2,
      fontFace: "Aptos", fontSize: 9, color: "64748B",
      align: "right", margin: 0
    });
  }

  async function downloadTopicPpt(topicNumber, button) {
    const slides = window["IS237_TOPIC" + topicNumber + "_SLIDES"];
    if (!Array.isArray(slides) || !slides.length) {
      alert("Presentation content is not available for this topic.");
      return;
    }

    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = "Preparing PPT…";

    try {
      await ensurePptxGenJS();
      const pptx = new window.PptxGenJS();
      pptx.layout = "LAYOUT_WIDE";
      pptx.author = "Edwin John Kambo";
      pptx.company = "Mkwawa University College of Education";
      pptx.subject = "IS 237 Data Abstraction and Algorithms";
      pptx.title = "IS 237 Topic " + topicNumber + " - " + topicNames[topicNumber];
      pptx.lang = "en-GB";
      pptx.theme = {
        headFontFace: "Aptos Display",
        bodyFontFace: "Aptos",
        lang: "en-GB"
      };
      pptx.defineLayout({ name: "IS237_WIDE", width: 13.333, height: 7.5 });
      pptx.layout = "IS237_WIDE";

      slides.forEach(function (item, index) {
        addDeckSlide(pptx, item, index, slides.length, topicNumber);
      });

      const fileName = "IS237_Topic" + topicNumber + "_" + safeFileName(topicNames[topicNumber]) + ".pptx";
      await pptx.writeFile({ fileName: fileName });
    } catch (err) {
      console.error(err);
      alert("The PowerPoint could not be generated. Please make sure you are online and try again.");
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  }

  function setupPptButtons() {
    for (let topicNumber = 1; topicNumber <= 8; topicNumber += 1) {
      const row = document.querySelector("#view-topic" + topicNumber + " .topic-header .action-row");
      const presentButton = document.getElementById("present" + topicNumber);
      if (!row || !presentButton || document.getElementById("downloadPpt" + topicNumber)) continue;

      const button = document.createElement("button");
      button.type = "button";
      button.id = "downloadPpt" + topicNumber;
      button.className = "secondary";
      button.textContent = "⬇ Download PPT";
      button.addEventListener("click", function () {
        downloadTopicPpt(topicNumber, button);
      });
      presentButton.insertAdjacentElement("afterend", button);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupNotesNavigation();
    setupPptButtons();
  });
})();
