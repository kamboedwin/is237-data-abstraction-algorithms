const quizData=[{"q":"Which activity should normally happen before programming begins?","opts":["Selecting a programming language","Understanding the problem and requirements","Optimising machine code","Choosing a compiler"],"a":1},{"q":"Which description best defines an algorithm?","opts":["Any source code that compiles","A finite, well-defined procedure for solving a class of problems","A computer hardware component","A diagram that always contains loops"],"a":1},{"q":"Which is a required characteristic of a useful algorithm?","opts":["It must use Python","It must terminate after a finite number of steps","It must contain recursion","It must use an array"],"a":1},{"q":"Why might one problem have several acceptable algorithms?","opts":["Every algorithm must use different hardware","Different procedures can produce the same correct result with different costs or trade-offs","Only syntax changes","Correctness is optional"],"a":1},{"q":"What is a priori analysis?","opts":["Measuring an implementation after deployment","Theoretical analysis before or independently of a specific implementation","Deleting test results","Choosing a user interface"],"a":1},{"q":"What is a posteriori analysis?","opts":["Empirical measurement of an implemented algorithm on a target system","A proof that ignores implementation","Only counting input values","Writing pseudocode before implementation"],"a":0},{"q":"What does input size n represent?","opts":["Always the number of source-code lines","A relevant measure of problem size","Processor speed","The final answer"],"a":1},{"q":"For linear search, what is the best case?","opts":["The target is absent","The target is the first inspected element","The target is always in the middle","The array is very large"],"a":1},{"q":"Why must average-case analysis state an assumption?","opts":["Because average cost depends on how likely different inputs are","Because worst case is unknown","Because Big-O cannot be used","Because memory has no units"],"a":0},{"q":"Which statement best distinguishes time and space complexity?","opts":["Time concerns growth in work; space concerns growth in memory","Time means seconds only; space means disk only","They are exactly the same","Space is never relevant"],"a":0},{"q":"Which statement about Big-O is most accurate?","opts":["It always means exact runtime in seconds","It is an asymptotic upper bound; worst-case cost is often expressed using it","It is identical to average case","It proves correctness"],"a":1},{"q":"Which statement best summarises the course relationship?","opts":["Algorithm + syntax = hardware","Data structure + algorithm = solution","Input + output = compiler","Memory + CPU = pseudocode"],"a":1}];
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
function showView(name){$$(".view").forEach(v=>v.classList.remove("active")); const t=$("#view-"+name); if(t)t.classList.add("active"); $$(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.view===name)); $("#topTitle").textContent={home:"Course Home",overview:"Course Roadmap",topic1:"Topic 1",topic2:"Topic 2",topic3:"Topic 3",topic4:"Topic 4",topic5:"Topic 5",topic6:"Topic 6",topic7:"Topic 7",topic8:"Topic 8",future:"Course Complete"}[name]||"IS 237"; window.scrollTo(0,0)}
$$(".nav-link").forEach(b=>b.onclick=()=>showView(b.dataset.view)); $$("[data-go]").forEach(b=>b.onclick=()=>showView(b.dataset.go));
$$("[data-tabs]").forEach(w=>{w.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{w.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")); b.classList.add("active"); const section=w.parentElement; section.querySelectorAll(".tab-panel").forEach(p=>p.classList.remove("active")); $("#"+b.dataset.tab).classList.add("active")})});

// Completion
const completeKey="is237_topic1_complete", assKey="is237_assignment1_complete", quizKey="is237_topic1_quiz_score";
function syncComplete(){$("#mark1").textContent=localStorage.getItem(completeKey)==="1"?"✓ Topic Complete":"✓ Mark Topic Complete"; $("#markA1").textContent=localStorage.getItem(assKey)==="1"?"✓ Task Complete":"Mark Task Complete"}
$("#mark1").onclick=()=>{localStorage.setItem(completeKey,localStorage.getItem(completeKey)==="1"?"0":"1");syncComplete()};
$("#markA1").onclick=()=>{localStorage.setItem(assKey,localStorage.getItem(assKey)==="1"?"0":"1");syncComplete()}; syncComplete();

// Maximum animator
const arr=[4,9,2,7,5]; let idx=1,best=0,finished=false;
function drawMax(msg){$("#maxArray").innerHTML=arr.map((v,i)=>`<div class="cell ${i===best?"best":""} ${!finished&&i===idx?"current":""}">${v}</div>`).join(""); $("#maxTrace").innerHTML=msg}
function resetMax(){idx=1;best=0;finished=false;drawMax(`Start by remembering the first value: <strong>${arr[0]}</strong> is the current maximum.`)}
$("#maxNext").onclick=()=>{if(finished)return resetMax(); const v=arr[idx]; const before=arr[best]; let msg=`Compare ${v} with current maximum ${before}. `; if(v>before){best=idx;msg+=`Since ${v} is larger, update the current maximum to <strong>${v}</strong>.`}else msg+=`Keep <strong>${before}</strong> as the current maximum.`; idx++; if(idx>=arr.length){finished=true;msg+=`<br><strong>Finished:</strong> the maximum is ${arr[best]}.`} drawMax(msg)};
$("#maxReset").onclick=resetMax;resetMax();

// Scenario specification
const scenarios={scores:["Input: list of exam scores","Output: largest score","Constraints: list should be non-empty; scores must be valid","Strategy idea: scan and remember the largest seen so far"],search:["Input: list of registration numbers + target","Output: position/found-not-found","Question: is the list sorted?","Strategy choice depends on representation and ordering"],route:["Input: places, connections and perhaps distances","Output: a valid or preferred route","Constraints may include distance, time or accessibility","Representation will later lead naturally to graphs"]};
function scenario(){$("#scenarioOut").innerHTML="<ul>"+scenarios[$("#scenarioSelect").value].map(x=>`<li>${x}</li>`).join("")+"</ul>"} $("#scenarioSelect").onchange=scenario;scenario();

// Verify
$("#verifyBtn").onclick=()=>{const vals=$$(".verifyCase:checked").map(x=>x.value); const out=$("#verifyOut"); if(vals.length===4){out.className="feedback ok";out.textContent="Strong test selection: you included typical, boundary, negative-value and repeated-value behaviour. Tests are evidence; they still do not replace a correctness argument."}else{out.className="feedback no";out.textContent="Choose all four. Each probes a different possible weakness in the procedure."}};

// Growth
function growth(){const n=+$("#nSlider").value; $("#nVal").textContent=n; const vals=[1,n,n*n]; const max=2500; [$("#bar1"),$("#barN"),$("#barN2")].forEach((b,i)=>b.style.height=Math.max(4,175*vals[i]/max)+"px"); $("#op1").textContent="1";$("#opN").textContent=n;$("#opN2").textContent=n*n} $("#nSlider").oninput=growth;growth();

// Best / average / worst case explorer
const caseValues=[4,9,2,7,5]; let caseIndex=0,caseDone=false;
function drawCaseExplorer(msg){
  const target=+$("#caseTarget").value;
  $("#caseArray").innerHTML=caseValues.map((v,i)=>{
    let cls="";
    if(i<caseIndex) cls=v===target?"case-found":"case-checked";
    if(!caseDone&&i===caseIndex) cls=v===target?"case-found":"current";
    return `<div class="cell ${cls}">${v}</div>`;
  }).join("");
  const targetPos=caseValues.indexOf(target);
  const label=targetPos===0?"best-case example":(targetPos===-1||targetPos===caseValues.length-1?"worst-case example":"an intermediate successful case");
  $("#caseTrace").innerHTML=msg||`Target = <strong>${target}</strong>. This is <strong>${label}</strong>. Start at the first item.`;
}
function resetCaseExplorer(){caseIndex=0;caseDone=false;drawCaseExplorer()}
$("#caseTarget").onchange=resetCaseExplorer;
$("#caseNext").onclick=()=>{
  if(caseDone)return resetCaseExplorer();
  const target=+$("#caseTarget").value,v=caseValues[caseIndex];
  if(v===target){
    caseDone=true;caseIndex++;
    drawCaseExplorer(`Comparison ${caseIndex}: ${v} = ${target}. <strong>Found.</strong> Search stops after ${caseIndex} comparison${caseIndex===1?"":"s"}.`);
    return;
  }
  caseIndex++;
  if(caseIndex>=caseValues.length){
    caseDone=true;
    drawCaseExplorer(`All ${caseValues.length} items were compared and ${target} was not found. This requires <strong>n comparisons</strong> — a worst-case linear-search outcome.`);
  }else{
    drawCaseExplorer(`Comparison ${caseIndex}: ${v} ≠ ${target}. Continue to the next item.`);
  }
};
$("#caseReset").onclick=resetCaseExplorer;resetCaseExplorer();

// Quick checks
$$(".qc").forEach(b=>b.onclick=()=>{const f=b.nextElementSibling;f.textContent=b.dataset.answer;f.className="feedback ok"});

// Quiz
$("#quizContainer").innerHTML=quizData.map((q,i)=>`<div class="quiz-q"><strong>${i+1}. ${q.q}</strong>${q.opts.map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join("")}</div>`).join("");
$("#gradeQuiz").onclick=()=>{let score=0;quizData.forEach((q,i)=>{const s=document.querySelector(`input[name=q${i}]:checked`);if(s&&+s.value===q.a)score++});localStorage.setItem(quizKey,score);const r=$("#quizResult");r.className="result "+(score>=9?"good":"");r.textContent=`Score: ${score}/12. ${score>=9?"Good foundation — review any missed concepts.":"Review the notes and animations, then try again."}`};

// Presentation
let si=0; const slides=window.IS237_TOPIC1_SLIDES||[];
function renderSlide(){
  const s=slides[si]||{}; let visual="";
  if(s.visual==="pipeline") visual='<div class="mini-flow"><span>Problem</span><b>→</b><span>Design</span><b>→</b><span>Algorithm</span><b>→</b><span>Verify</span><b>→</b><span>Analyse</span></div>';
  if(s.visual==="cycle") visual='<div class="mini-flow"><span>Understand</span><b>→</b><span>Model</span><b>→</b><span>Design</span><b>→</b><span>Test</span><b>→</b><span>Analyse</span><b>→</b><span>Refine</span></div>';
  if(s.visual==="characteristics") visual='<div class="grid"><div class="card"><h3>Clear</h3><p>unambiguous steps</p></div><div class="card"><h3>Finite</h3><p>must terminate</p></div><div class="card"><h3>Feasible</h3><p>steps can be executed</p></div></div>';
  if(s.visual==="operations") visual='<div class="mini-flow"><span>Traverse</span><span>Search</span><span>Sort</span><span>Insert</span><span>Update</span><span>Delete</span><span>Merge</span></div>';
  if(s.visual==="compare") visual='<div class="grid"><div class="card"><h3>Algorithm</h3><p>Language-independent logic</p></div><div class="card"><h3>Programme</h3><p>Implementation in a language</p></div></div>';
  if(s.visual==="multiple") visual='<div class="grid"><div class="card"><h3>Algorithm A</h3><p>correct · lower memory · more work</p></div><div class="card"><h3>Algorithm B</h3><p>correct · more memory · less work</p></div></div>';
  if(s.visual==="max") visual='<div class="big-formula">[4, 9, 2, 7, 5] → remember the best seen so far → 9</div>';
  if(s.visual==="verify") visual='<div class="mini-flow"><span>Specify</span><b>→</b><span>Trace</span><b>→</b><span>Test</span><b>→</b><span>Justify</span></div>';
  if(s.visual==="analysis") visual='<div class="mini-flow"><span>Several correct solutions</span><b>→ compare</b><span>time · space · constraints</span><b>→ choose</b><span>suitable algorithm</span></div>';
  if(s.visual==="priorposterior") visual='<div class="grid"><div class="card"><h3>A priori</h3><p>Theoretical · before implementation · operation/growth analysis</p></div><div class="card"><h3>A posteriori</h3><p>Empirical · after implementation · measured runtime/memory</p></div></div>';
  if(s.visual==="inputsize") visual='<div class="big-formula">input size n + key operation → cost function T(n)</div>';
  if(s.visual==="timespace") visual='<div class="grid"><div class="card"><h3>Time</h3><p>How does computational work grow?</p></div><div class="card"><h3>Space</h3><p>How does memory requirement grow?</p></div></div>';
  if(s.visual==="cases") visual='<div class="grid"><div class="card"><h3>Best</h3><p>minimum work</p></div><div class="card"><h3>Average</h3><p>expected work under assumptions</p></div><div class="card"><h3>Worst</h3><p>maximum work</p></div></div>';
  if(s.visual==="linearcases") visual='<div class="big-formula">first → 1 comparison &nbsp; | &nbsp; typical successful position → about n/2 &nbsp; | &nbsp; last/absent → n</div>';
  if(s.visual==="asymptotic") visual='<div class="mini-flow"><span>exact seconds</span><b>depend on machine</b><span>growth with n</span><b>reveals scalability</b></div>';
  if(s.visual==="growth5") visual='<div class="big-formula">O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²)</div>';
  if(s.visual==="bounds") visual='<div class="grid"><div class="card"><h3>O</h3><p>upper bound</p></div><div class="card"><h3>Ω</h3><p>lower bound</p></div><div class="card"><h3>Θ</h3><p>tight bound</p></div></div>';
  if(s.visual==="structureops") visual='<div class="mini-flow"><span>frequent operations</span><b>→</b><span>choose structure</span><b>→</b><span>algorithm cost</span></div>';
  if(s.visual==="formula") visual='<div class="big-formula">Data Structure + Algorithm → Solution</div>';
  $("#slideContent").innerHTML=`${s.kicker?`<div class="kicker">${s.kicker}</div>`:""}<h1>${s.title||""}</h1>${s.body?`<p>${s.body}</p>`:""}${s.points?`<ul>${s.points.map(x=>`<li>${x}</li>`).join("")}</ul>`:""}${visual}`;
  $("#slideCount").textContent=`${si+1} / ${slides.length}`;
}
$("#present1").onclick=()=>{si=0;renderSlide();$("#slideOverlay").classList.add("open")};$("#closeSlide").onclick=()=>$("#slideOverlay").classList.remove("open");$("#prevSlide").onclick=()=>{si=(si-1+slides.length)%slides.length;renderSlide()};$("#nextSlide").onclick=()=>{si=(si+1)%slides.length;renderSlide()};document.addEventListener("keydown",e=>{if(!$("#slideOverlay").classList.contains("open"))return;if(e.key==="Escape")$("#closeSlide").click();if(e.key==="ArrowRight")$("#nextSlide").click();if(e.key==="ArrowLeft")$("#prevSlide").click()});

// ---------------- Topic 2 ----------------
const topic2CompleteKey="is237_topic2_complete",topic2AssKey="is237_assignment2_complete",topic2QuizKey="is237_topic2_quiz_score";
function syncTopic2(){const m=$("#mark2"),a=$("#markA2");if(m)m.textContent=localStorage.getItem(topic2CompleteKey)==="1"?"✓ Topic Complete":"✓ Mark Topic Complete";if(a)a.textContent=localStorage.getItem(topic2AssKey)==="1"?"✓ Task Complete":"Mark Task Complete"}
if($("#mark2"))$("#mark2").onclick=()=>{localStorage.setItem(topic2CompleteKey,localStorage.getItem(topic2CompleteKey)==="1"?"0":"1");syncTopic2()};
if($("#markA2"))$("#markA2").onclick=()=>{localStorage.setItem(topic2AssKey,localStorage.getItem(topic2AssKey)==="1"?"0":"1");syncTopic2()};syncTopic2();

const absText={app:"<strong>Application:</strong> exposes user goals and domain actions. It hides ADT contracts, representation and memory details.",adt:"<strong>ADT:</strong> exposes logical operations and behaviour. It hides the concrete structure used to realise them.",ds:"<strong>Data structure:</strong> exposes concrete organisation such as indexed slots or links. It hides raw addresses and lower-level storage mechanics.",mem:"<strong>Memory/storage:</strong> deals with low-level addresses and references. Higher layers normally should not depend on these details."};
$$(".absLayer").forEach(b=>b.onclick=()=>{$$(".absLayer").forEach(x=>x.classList.remove("layer-active"));b.classList.add("layer-active");$("#absOut").innerHTML=absText[b.dataset.layer]});if($(".absLayer"))$(".absLayer").click();

let registry=["ST01","ST02"];
function renderRegistry(msg="The public interface is unchanged even when the hidden representation changes."){const mode=$("#implSelect").value;$("#implVisual").innerHTML=registry.map((x,i)=>mode==="array"?`<div class="slot"><small>${i}</small>${x}</div>`:`<div class="node">${x}</div>`).join("");$("#implTrace").innerHTML=`<strong>${mode==="array"?"Array-like implementation":"Linked-node implementation"}</strong><br>${msg}`}
$("#implSelect").onchange=()=>renderRegistry("Implementation changed; the client still sees add(), find(), remove() and size().");
$$(".regOp").forEach(b=>b.onclick=()=>{let msg="";if(b.dataset.op==="add"){if(!registry.includes("ST03"))registry.push("ST03");msg='add("ST03") completed through the ADT interface.'}if(b.dataset.op==="find")msg=registry.includes("ST02")?'find("ST02") → found':'find("ST02") → not found';if(b.dataset.op==="remove"){registry=registry.filter(x=>x!=="ST01");msg='remove("ST01") completed. The representation changed internally.'}renderRegistry(msg)});$("#regReset").onclick=()=>{registry=["ST01","ST02"];renderRegistry("Reset to initial valid state.")};renderRegistry();

const classItems=[["add(item)","interface"],["resize the internal array","implementation"],["size()","interface"],["head pointer","implementation"],["find(key)","interface"],["relink internal nodes","implementation"]];let ci=0;
function showClassify(){$("#classifyPrompt").innerHTML=`Classify: <strong>${classItems[ci][0]}</strong>`;$("#classifyFeedback").textContent=""}
$$(".classifyBtn").forEach(b=>b.onclick=()=>{const ok=b.dataset.choice===classItems[ci][1];$("#classifyFeedback").className="feedback "+(ok?"ok":"no");$("#classifyFeedback").textContent=ok?"Correct.":"Not this time — ask whether a client must know this.";setTimeout(()=>{ci=(ci+1)%classItems.length;showClassify()},650)});showClassify();

$("#publicCheck").onclick=()=>{const vals=$$(".pubChoice:checked").map(x=>x.value).sort().join(",");const out=$("#publicFeedback"),good=vals==="add,get,size";out.className="feedback "+(good?"ok":"no");out.textContent=good?"Good design: add(), get() and size() are public; resizing and internal pointers remain private.":"Reconsider which details the client really needs. Internal resizing and pointers should normally be hidden."};
$$(".qc2").forEach(b=>b.onclick=()=>{const f=b.nextElementSibling;f.textContent=b.dataset.answer;f.className="feedback ok"});

const quiz2Data=[{"q": "What is the main purpose of abstraction?", "opts": ["Expose every internal detail", "Hide unnecessary detail while preserving essential behaviour", "Eliminate all data structures", "Replace algorithms with hardware"], "a": 1}, {"q": "Which statement best describes an ADT?", "opts": ["A specific memory layout", "A logical specification of values and operations", "A programming language keyword", "A CPU instruction"], "a": 1}, {"q": "Which is a concrete data structure?", "opts": ["List ADT", "Set ADT", "Array", "Queue ADT"], "a": 2}, {"q": "What is an interface?", "opts": ["The public operations clients can use", "All private fields", "A memory address", "A compiler optimisation"], "a": 0}, {"q": "Why is representation independence useful?", "opts": ["It guarantees O(1) operations", "It allows internal implementation changes without changing clients", "It eliminates testing", "It exposes all fields"], "a": 1}, {"q": "What is a precondition?", "opts": ["A condition required before a valid operation call", "A result after execution", "An internal pointer", "A module name"], "a": 0}, {"q": "What is a representation invariant?", "opts": ["A property that must remain true for valid internal state", "A user-interface colour rule", "A language syntax rule", "A network protocol"], "a": 0}, {"q": "Which practice best supports encapsulation?", "opts": ["Make all fields public", "Require state changes through controlled operations", "Let clients modify counters directly", "Duplicate internal code in every client"], "a": 1}, {"q": "What does low coupling mean?", "opts": ["A module has no purpose", "Modules depend on minimal details of one another", "All modules share the same internal state", "Every function is public"], "a": 1}, {"q": "When should the concrete implementation of an ADT normally be chosen?", "opts": ["Before understanding the problem", "After behaviour and important operations are clear", "Only after deployment", "Never"], "a": 1}];
$("#quiz2Container").innerHTML=quiz2Data.map((q,i)=>`<div class="quiz-q"><strong>${i+1}. ${q.q}</strong>${q.opts.map((o,j)=>`<label><input type="radio" name="t2q${i}" value="${j}"> ${o}</label>`).join("")}</div>`).join("");
$("#gradeQuiz2").onclick=()=>{let score=0;quiz2Data.forEach((q,i)=>{const s=document.querySelector(`input[name=t2q${i}]:checked`);if(s&&+s.value===q.a)score++});localStorage.setItem(topic2QuizKey,score);const r=$("#quiz2Result");r.className="result "+(score>=7?"good":"");r.textContent=`Score: ${score}/10. ${score>=7?"Good understanding of abstraction and ADTs.":"Review interface, implementation, contracts and encapsulation, then try again."}`};

let s2i=0;const slides2=window.IS237_TOPIC2_SLIDES||[];
function renderSlide2(){const s=slides2[s2i]||{};let visual="";if(s.visual==="layers")visual='<div class="mini-flow"><span>Application</span><b>↓</b><span>ADT</span><b>↓</b><span>Data Structure</span><b>↓</b><span>Memory</span></div>';if(s.visual==="adt")visual='<div class="big-formula">ADT = Values + Operations + Behavioural Rules</div>';if(s.visual==="compare")visual='<div class="grid"><div class="card"><h3>ADT</h3><p>WHAT behaviour?</p></div><div class="card"><h3>Data Structure</h3><p>HOW represented?</p></div></div>';if(s.visual==="interface")visual='<div class="mini-flow"><span>Client</span><b>→</b><span>Public Interface</span><b>→</b><span>Hidden Implementation A / B</span></div>';if(s.visual==="encap")visual='<div class="big-formula">Public operations protect private state</div>';if(s.visual==="design")visual='<div class="mini-flow"><span>Problem</span><b>→</b><span>State</span><b>→</b><span>Operations</span><b>→</b><span>Contracts</span><b>→</b><span>Implementation</span></div>';$("#slideContent").innerHTML=`${s.kicker?`<div class="kicker">${s.kicker}</div>`:""}<h1>${s.title||""}</h1>${s.body?`<p>${s.body}</p>`:""}${s.points?`<ul>${s.points.map(x=>`<li>${x}</li>`).join("")}</ul>`:""}${visual}`;$("#slideCount").textContent=`${s2i+1} / ${slides2.length}`}
function bindTopic1Slides(){si=0;renderSlide();$("#slideOverlay").classList.add("open");$("#prevSlide").onclick=()=>{si=(si-1+slides.length)%slides.length;renderSlide()};$("#nextSlide").onclick=()=>{si=(si+1)%slides.length;renderSlide()}}
$("#present1").onclick=bindTopic1Slides;
$("#present2").onclick=()=>{s2i=0;renderSlide2();$("#slideOverlay").classList.add("open");$("#prevSlide").onclick=()=>{s2i=(s2i-1+slides2.length)%slides2.length;renderSlide2()};$("#nextSlide").onclick=()=>{s2i=(s2i+1)%slides2.length;renderSlide2()}};

// ---------------- Topic 3 ----------------
const topic3CompleteKey="is237_topic3_complete",topic3AssKey="is237_assignment3_complete",topic3QuizKey="is237_topic3_quiz_score";
function syncTopic3(){const m=$("#mark3"),a=$("#markA3");if(m)m.textContent=localStorage.getItem(topic3CompleteKey)==="1"?"✓ Topic Complete":"✓ Mark Topic Complete";if(a)a.textContent=localStorage.getItem(topic3AssKey)==="1"?"✓ Task Complete":"Mark Task Complete"}
$("#mark3").onclick=()=>{localStorage.setItem(topic3CompleteKey,localStorage.getItem(topic3CompleteKey)==="1"?"0":"1");syncTopic3()};
$("#markA3").onclick=()=>{localStorage.setItem(topic3AssKey,localStorage.getItem(topic3AssKey)==="1"?"0":"1");syncTopic3()};syncTopic3();

// Array insertion animator
let aiStep=0;const aiStart=[10,20,30,40,50],aiStates=[
{a:[10,20,30,40,50,"_"],focus:4,msg:"Start with one free slot. Insert 25 at index 2. To avoid overwriting values, shift from the right."},
{a:[10,20,30,40,50,50],focus:4,msg:"Copy 50 from index 4 to index 5."},
{a:[10,20,30,40,40,50],focus:3,msg:"Copy 40 from index 3 to index 4."},
{a:[10,20,30,30,40,50],focus:2,msg:"Copy 30 from index 2 to index 3."},
{a:[10,20,25,30,40,50],focus:2,newv:true,msg:"Write 25 into index 2. Insertion is complete."}
];
function drawAI(){const s=aiStates[aiStep];$("#arrInsertVisual").innerHTML=s.a.map((v,i)=>`<div class="cell ${v==="_"?"gap":""} ${i===s.focus?(s.newv?"newval":"moving"):""}">${v}</div>`).join("");$("#arrInsertTrace").innerHTML=`Step ${aiStep+1}/${aiStates.length}: ${s.msg}`}
$("#arrInsertNext").onclick=()=>{aiStep=Math.min(aiStep+1,aiStates.length-1);drawAI()};$("#arrInsertReset").onclick=()=>{aiStep=0;drawAI()};drawAI();

// Array deletion animator
let adStep=0;const adStates=[
{a:[10,20,30,40,50],focus:1,msg:"Delete the value at index 1 (20). This creates a logical gap."},
{a:[10,30,30,40,50],focus:2,msg:"Shift 30 left into index 1."},
{a:[10,30,40,40,50],focus:3,msg:"Shift 40 left into index 2."},
{a:[10,30,40,50,50],focus:4,msg:"Shift 50 left into index 3."},
{a:[10,30,40,50],focus:3,msg:"Reduce the logical size. Deletion is complete."}
];
function drawAD(){const s=adStates[adStep];$("#arrDeleteVisual").innerHTML=s.a.map((v,i)=>`<div class="cell ${i===s.focus?"moving":""}">${v}</div>`).join("");$("#arrDeleteTrace").innerHTML=`Step ${adStep+1}/${adStates.length}: ${s.msg}`}
$("#arrDeleteNext").onclick=()=>{adStep=Math.min(adStep+1,adStates.length-1);drawAD()};$("#arrDeleteReset").onclick=()=>{adStep=0;drawAD()};drawAD();

// Linked insert animator
let liStep=0;
function drawList(vals,focus=-1,newIndex=-1,target="#listInsertVisual"){$(target).innerHTML=vals.map((v,i)=>`<div class="list-node ${i===focus?"focus":""} ${i===newIndex?"newnode":""}">${v}</div>`).join("")}
const liMsgs=["Initial list. Assume we already know the node containing 20.","Create a new node containing 25. It is not yet connected.","Set new.next to the old successor (30).","Set 20.next to the new node. The local insertion is complete."];
function drawLI(){if(liStep===0)drawList([10,20,30,40],1);if(liStep===1)$("#listInsertVisual").innerHTML='<div class="list-node">10</div><div class="list-node focus">20</div><div class="list-node">30</div><div class="list-node">40</div><div class="list-node newnode">25 (new)</div>';if(liStep===2)$("#listInsertVisual").innerHTML='<div class="list-node">10</div><div class="list-node focus">20</div><div class="list-node newnode">25 → 30</div><div class="list-node">30</div><div class="list-node">40</div>';if(liStep===3)drawList([10,20,25,30,40],2,2);$("#listInsertTrace").innerHTML=`Step ${liStep+1}/4: ${liMsgs[liStep]}`}
$("#listInsertNext").onclick=()=>{liStep=Math.min(liStep+1,3);drawLI()};$("#listInsertReset").onclick=()=>{liStep=0;drawLI()};drawLI();

// Linked delete animator
let ldStep=0;const ldMsgs=["Initial list. The predecessor 20 is already known; target is 30.","Read target.next so we know that 40 follows 30.","Change 20.next so that it points directly to 40, bypassing 30.","The node 30 is no longer part of the list. Local relinking is complete."];
function drawLD(){if(ldStep===0)drawList([10,20,30,40],2,-1,"#listDeleteVisual");if(ldStep===1)$("#listDeleteVisual").innerHTML='<div class="list-node">10</div><div class="list-node">20</div><div class="list-node focus">30 → 40</div><div class="list-node">40</div>';if(ldStep===2)$("#listDeleteVisual").innerHTML='<div class="list-node">10</div><div class="list-node focus">20 → 40</div><div class="list-node">40</div><div class="list-node focus" style="opacity:.45">30</div>';if(ldStep===3)drawList([10,20,40],1,-1,"#listDeleteVisual");$("#listDeleteTrace").innerHTML=`Step ${ldStep+1}/4: ${ldMsgs[ldStep]}`}
$("#listDeleteNext").onclick=()=>{ldStep=Math.min(ldStep+1,3);drawLD()};$("#listDeleteReset").onclick=()=>{ldStep=0;drawLD()};drawLD();

// Access comparison
function accessCompare(){const i=+$("#accessIndex").value;$("#accessIndexVal").textContent=i;$("#accessCompare").innerHTML=`<strong>Array:</strong> use index ${i} directly → conceptual access cost O(1).<br><strong>Linked list:</strong> start at head and visit ${i+1} node${i?"s":""} to reach index ${i} → general access cost grows with position, O(n).`}$("#accessIndex").oninput=accessCompare;accessCompare();

// Structure choice scenarios
const structureCases=[
{t:"You repeatedly read image pixels by row and column position.",a:"array",why:"Indexed access and regular numeric layout strongly favour an array-like representation."},
{t:"You repeatedly insert a record immediately after a node that the programme already holds.",a:"linked",why:"When the node is already known, local relinking can avoid shifting a large block of values."},
{t:"You store a machine-learning feature vector and frequently access feature i.",a:"array",why:"The problem is index-oriented and benefits from compact numeric storage."},
{t:"You maintain a cyclic list of participants for repeated round-robin turns.",a:"linked",why:"A circular linked representation naturally expresses repeated next-node traversal."}
];let sc=0;
function showSC(){$("#structurePrompt").innerHTML=`Scenario ${sc+1}/${structureCases.length}: <strong>${structureCases[sc].t}</strong>`;$("#structureFeedback").textContent=""}
$$(".structureChoice").forEach(b=>b.onclick=()=>{const c=structureCases[sc],ok=b.dataset.choice===c.a;$("#structureFeedback").className="feedback "+(ok?"ok":"no");$("#structureFeedback").textContent=(ok?"Good choice. ":"Reconsider. ")+c.why;setTimeout(()=>{sc=(sc+1)%structureCases.length;showSC()},1200)});showSC();

$$(".qc3").forEach(b=>b.onclick=()=>{const f=b.nextElementSibling;f.textContent=b.dataset.answer;f.className="feedback ok"});

// Topic 3 quiz
const quiz3Data=[{"q": "What is the defining access feature of an array?", "opts": ["Every element contains a next pointer", "Elements are accessed through indexed logical positions", "Only the first element can be accessed", "Elements must be sorted"], "a": 1}, {"q": "What is the typical complexity of accessing a known array index?", "opts": ["O(1)", "O(log n)", "O(n)", "O(n\u00b2)"], "a": 0}, {"q": "Why can middle insertion in an array be O(n)?", "opts": ["The array must be sorted first", "Later elements may need to shift", "Every value must be doubled", "The index is unknown"], "a": 1}, {"q": "What does a singly linked node normally contain?", "opts": ["Only an index", "Data and a reference to the next node", "Two complete arrays", "A hash function"], "a": 1}, {"q": "What is the role of head in a linked list?", "opts": ["It stores list length only", "It references the first node", "It always references the last node", "It sorts the nodes"], "a": 1}, {"q": "What is the typical cost of reaching index 6 in a singly linked list?", "opts": ["O(1) direct access", "O(n) traversal in the general case", "Always O(log n)", "No traversal is possible"], "a": 1}, {"q": "If head is known, inserting a new node at the beginning requires:", "opts": ["Shifting all nodes", "A constant number of reference changes", "Sorting all values", "Copying the whole list"], "a": 1}, {"q": "Why can a linked-list insertion still be O(n) overall?", "opts": ["Links are always expensive", "Finding the target location may require traversal", "Node allocation is O(n\u00b2)", "Lists cannot insert"], "a": 1}, {"q": "What extra field does a doubly linked list normally add?", "opts": ["A previous reference", "An array index", "A hash value", "A pivot"], "a": 0}, {"q": "Which structure naturally supports repeated cyclic traversal?", "opts": ["Fixed array only", "Circular linked list", "Binary search tree only", "Hash table only"], "a": 1}, {"q": "Which is usually better when fast arbitrary indexed access dominates?", "opts": ["Array-like representation", "Singly linked list", "Circular list", "Any structure is identical"], "a": 0}, {"q": "Which statement is most accurate?", "opts": ["Linked lists are always better", "Arrays are always better", "The best representation depends on the required operations and constraints", "Big-O is irrelevant to representation"], "a": 2}];
$("#quiz3Container").innerHTML=quiz3Data.map((q,i)=>`<div class="quiz-q"><strong>${i+1}. ${q.q}</strong>${q.opts.map((o,j)=>`<label><input type="radio" name="t3q${i}" value="${j}"> ${o}</label>`).join("")}</div>`).join("");
$("#gradeQuiz3").onclick=()=>{let score=0;quiz3Data.forEach((q,i)=>{const s=document.querySelector(`input[name=t3q${i}]:checked`);if(s&&+s.value===q.a)score++});localStorage.setItem(topic3QuizKey,score);const r=$("#quiz3Result");r.className="result "+(score>=9?"good":"");r.textContent=`Score: ${score}/12. ${score>=9?"Strong understanding of arrays and linked lists.":"Review the operation animations and comparison table, then try again."}`};


// Linked-list type comparator
const listCode = {
  singly:{
    insertFront:`newNode ← Node(value)
newNode.next ← head
head ← newNode`,
    insertAfter:`newNode ← Node(value)
newNode.next ← current.next
current.next ← newNode`,
    deleteFront:`IF head = null RETURN
head ← head.next`,
    traverse:`current ← head
WHILE current ≠ null
    process current.data
    current ← current.next`
  },
  doubly:{
    insertFront:`newNode ← Node(value)
newNode.previous ← null
newNode.next ← head
IF head ≠ null
    head.previous ← newNode
head ← newNode`,
    insertAfter:`newNode ← Node(value)
newNode.previous ← current
newNode.next ← current.next
IF current.next ≠ null
    current.next.previous ← newNode
current.next ← newNode`,
    deleteFront:`IF head = null RETURN
head ← head.next
IF head ≠ null
    head.previous ← null`,
    traverse:`current ← head
WHILE current ≠ null
    process current.data
    current ← current.next

// backward:
current ← tail
WHILE current ≠ null
    process current.data
    current ← current.previous`
  },
  circular:{
    insertFront:`newNode ← Node(value)
IF head = null
    newNode.next ← newNode
    head ← newNode
    tail ← newNode
ELSE
    newNode.next ← head
    tail.next ← newNode
    head ← newNode`,
    insertAfter:`newNode ← Node(value)
newNode.next ← current.next
current.next ← newNode
IF current = tail
    tail ← newNode`,
    deleteFront:`IF head = null RETURN
IF head = tail
    head ← null
    tail ← null
ELSE
    head ← head.next
    tail.next ← head`,
    traverse:`IF head = null RETURN
current ← head
REPEAT
    process current.data
    current ← current.next
UNTIL current = head`
  }
};
const listNotes={
  singly:"One next reference per node. Operations usually terminate at null. Simpler, but no direct backward movement.",
  doubly:"Each node has previous and next. Operations must update both directions, but known-node deletion and backward traversal become easier.",
  circular:"The last node points back to head. Operations changing head/tail must preserve the cycle, and traversal must stop by detecting return to the start."
};
function renderListType(){
  const t=$("#listTypeSelect").value,op=$("#listOpSelect").value;
  const vis=$("#listTypeVisual");
  if(t==="singly")vis.innerHTML='<div class="list-node">10</div><div class="list-node">20</div><div class="list-node">30</div>';
  if(t==="doubly")vis.innerHTML='<div class="list-node">← 10 ⇄</div><div class="list-node">← 20 ⇄</div><div class="list-node">← 30 →</div>';
  if(t==="circular")vis.innerHTML='<div class="list-node">10</div><div class="list-node">20</div><div class="list-node">30 ↻ head</div>';
  $("#listTypeCode").textContent=listCode[t][op];
  $("#listTypeNote").textContent=listNotes[t];
}
$("#listTypeSelect").onchange=renderListType;$("#listOpSelect").onchange=renderListType;renderListType();

// Topic 3 presentation (23 slides)
let s3i=0;const slides3=window.IS237_TOPIC3_SLIDES||[];
function renderSlide3(){const s=slides3[s3i]||{};let visual="";
if(s.visual==="opening")visual='<div class="big-formula">Same logical collection ≠ same representation cost</div>';
if(s.visual==="array")visual='<div class="mini-flow"><span>[0] 18</span><span>[1] 24</span><span>[2] 31</span><span>[3] 42</span></div>';
if(s.visual==="index")visual='<div class="big-formula">A[3] → 42 &nbsp; | &nbsp; O(1) access intuition</div>';
if(s.visual==="linear")visual='<div class="mini-flow"><span>A[0]</span><b>→</b><span>A[1]</span><b>→</b><span>A[2]</span><b>→</b><span>…</span><b>→</b><span>A[n−1]</span></div>';
if(s.visual==="shift")visual='<div class="mini-flow"><span>10</span><span>20</span><span>30</span><span>40</span><span>50</span><b>→ shift →</b><span>10</span><span>20</span><span>25</span><span>30</span><span>40</span><span>50</span></div>';
if(s.visual==="dynamic")visual='<div class="mini-flow"><span>capacity 4</span><b>→ full →</b><span>allocate larger backing array</span><b>→</b><span>copy</span><b>→</b><span>continue</span></div>';
if(s.visual==="linked")visual='<div class="mini-flow"><span>head</span><b>→</b><span>18 | next</span><b>→</b><span>31 | next</span><b>→</b><span>56 | null</span></div>';if(s.visual==="types")visual='<div class="grid"><div class="card"><h3>Singly</h3><p>next</p></div><div class="card"><h3>Doubly</h3><p>previous + next</p></div><div class="card"><h3>Circular</h3><p>last → head</p></div></div>';if(s.visual==="singly")visual='<div class="mini-flow"><span>10</span><b>→</b><span>20</span><b>→</b><span>30</span><b>→ null</b></div>';if(s.visual==="doubly")visual='<div class="mini-flow"><span>null ← 10</span><b>⇄</b><span>20</span><b>⇄</b><span>30 → null</span></div>';if(s.visual==="circular")visual='<div class="mini-flow"><span>10</span><b>→</b><span>20</span><b>→</b><span>30</span><b>↻ back to head</b></div>';
if(s.visual==="walk")visual='<div class="mini-flow"><span>head</span><b>→ visit</b><span>node 0</span><b>→</b><span>node 1</span><b>→</b><span>node 2</span></div>';
if(s.visual==="headinsert")visual='<div class="mini-flow"><span>new 10</span><b>→ old head</b><span>20</span><b>→</b><span>30</span><b>→</b><span>40</span></div>';
if(s.visual==="delete")visual='<div class="mini-flow"><span>20</span><b>→ bypass 30 →</b><span>40</span></div>';
if(s.visual==="compare")visual='<div class="grid"><div class="card"><h3>Array</h3><p>Fast indexed access; shifting can be costly.</p></div><div class="card"><h3>Linked list</h3><p>Flexible relinking; access requires traversal.</p></div></div>';
$("#slideContent").innerHTML=`${s.kicker?`<div class="kicker">${s.kicker}</div>`:""}<h1>${s.title||""}</h1>${s.body?`<p>${s.body}</p>`:""}${s.points?`<ul>${s.points.map(x=>`<li>${x}</li>`).join("")}</ul>`:""}${visual}`;$("#slideCount").textContent=`${s3i+1} / ${slides3.length}`}
$("#present3").onclick=()=>{s3i=0;renderSlide3();$("#slideOverlay").classList.add("open");$("#prevSlide").onclick=()=>{s3i=(s3i-1+slides3.length)%slides3.length;renderSlide3()};$("#nextSlide").onclick=()=>{s3i=(s3i+1)%slides3.length;renderSlide3()}};

// ---------------- Topic 4 ----------------
const topic4CompleteKey="is237_topic4_complete",topic4AssKey="is237_assignment4_complete",topic4QuizKey="is237_topic4_quiz_score";
function syncTopic4(){const m=$("#mark4"),a=$("#markA4");if(m)m.textContent=localStorage.getItem(topic4CompleteKey)==="1"?"✓ Topic Complete":"✓ Mark Topic Complete";if(a)a.textContent=localStorage.getItem(topic4AssKey)==="1"?"✓ Task Complete":"Mark Task Complete"}
$("#mark4").onclick=()=>{localStorage.setItem(topic4CompleteKey,localStorage.getItem(topic4CompleteKey)==="1"?"0":"1");syncTopic4()};
$("#markA4").onclick=()=>{localStorage.setItem(topic4AssKey,localStorage.getItem(topic4AssKey)==="1"?"0":"1");syncTopic4()};syncTopic4();

let stackVals=[],stackSeq=[12,7,25,9,14],stackPos=0;
function drawStack(msg="Stack is empty."){$("#stackVisual").innerHTML=stackVals.length?stackVals.map((v,i)=>`<div class="stack-item ${i===stackVals.length-1?"top":""}">${v}${i===stackVals.length-1?" ← TOP":""}</div>`).join(""):'<div class="disabled-note">empty stack</div>';$("#stackTrace").innerHTML=msg}
$("#stackPush").onclick=()=>{const v=stackSeq[stackPos%stackSeq.length];stackPos++;stackVals.push(v);drawStack(`PUSH ${v}: ${v} becomes the new top.`)};
$("#stackPop").onclick=()=>{if(!stackVals.length)return drawStack("<strong>UNDERFLOW:</strong> cannot pop an empty stack.");const v=stackVals.pop();drawStack(`POP → <strong>${v}</strong>. The item below becomes top.`)};
$("#stackReset").onclick=()=>{stackVals=[];stackPos=0;drawStack()};drawStack();

function drawStackImpl(){const mode=$("#stackImpl").value;if(mode==="array"){$("#stackImplVisual").innerHTML='<div class="slot"><small>0</small>12</div><div class="slot"><small>1</small>7</div><div class="slot"><small>2</small>25 ← top</div>';$("#stackImplNote").innerHTML="<strong>Array:</strong> top = 2. push increments top; pop reads A[top] and decrements top."}else{$("#stackImplVisual").innerHTML='<div class="list-node newnode">25 ← top</div><div class="list-node">7</div><div class="list-node">12</div>';$("#stackImplNote").innerHTML="<strong>Linked:</strong> top points to the head node. push inserts at head; pop removes head."}}
$("#stackImpl").onchange=drawStackImpl;drawStackImpl();

let qVals=[],qSeq=["A","B","C","D","E"],qPos=0;
function drawQueue(msg="Queue is empty."){$("#queueVisual").innerHTML=qVals.length?qVals.map((v,i)=>`<div class="cell ${i===0?"queue-front":""} ${i===qVals.length-1?"queue-rear":""}">${v}</div>`).join(""):'<div class="disabled-note">empty queue</div>';$("#queueTrace").innerHTML=msg}
$("#queueEnq").onclick=()=>{const v=qSeq[qPos%qSeq.length];qPos++;qVals.push(v);drawQueue(`ENQUEUE ${v} at the rear.`)};
$("#queueDeq").onclick=()=>{if(!qVals.length)return drawQueue("<strong>UNDERFLOW:</strong> cannot dequeue an empty queue.");const v=qVals.shift();drawQueue(`DEQUEUE → <strong>${v}</strong> from the front.`)};
$("#queueReset").onclick=()=>{qVals=[];qPos=0;drawQueue()};drawQueue();

const CQCAP=5;let cq=Array(CQCAP).fill(null),cqFront=-1,cqRear=-1,cqCount=0,cqNext=10;
function drawCQ(msg="Circular queue empty."){$("#cqVisual").innerHTML=cq.map((v,i)=>`<div class="cell ${v===null?"empty-slot":""} ${cqCount&&i===cqFront?"queue-front":""} ${cqCount&&i===cqRear?"queue-rear":""}"><span class="cq-index">${i}</span>${v===null?"—":v}</div>`).join("");$("#cqTrace").innerHTML=`${msg}<br>front=${cqFront}, rear=${cqRear}, count=${cqCount}`}
$("#cqEnq").onclick=()=>{if(cqCount===CQCAP)return drawCQ("<strong>OVERFLOW:</strong> queue is full.");const v=cqNext;cqNext+=10;if(cqCount===0){cqFront=0;cqRear=0}else cqRear=(cqRear+1)%CQCAP;cq[cqRear]=v;cqCount++;drawCQ(`ENQUEUE ${v} at index ${cqRear}. Rear uses modulo wrap-around.`)};
$("#cqDeq").onclick=()=>{if(cqCount===0)return drawCQ("<strong>UNDERFLOW:</strong> queue is empty.");const idx=cqFront,v=cq[idx];cq[idx]=null;if(cqCount===1){cqFront=-1;cqRear=-1}else cqFront=(cqFront+1)%CQCAP;cqCount--;drawCQ(`DEQUEUE → ${v} from index ${idx}.`)};
$("#cqReset").onclick=()=>{cq=Array(CQCAP).fill(null);cqFront=-1;cqRear=-1;cqCount=0;cqNext=10;drawCQ()};drawCQ();

let dq=["B","C"],dqN=1;
function drawDeque(msg="Initial deque."){$("#dequeVisual").innerHTML=dq.length?dq.map((v,i)=>`<div class="cell ${i===0?"queue-front":""} ${i===dq.length-1?"queue-rear":""}">${v}</div>`).join(""):'<div class="disabled-note">empty deque</div>';$("#dequeTrace").innerHTML=msg}
$$(".dequeOp").forEach(b=>b.onclick=()=>{let msg="";if(b.dataset.op==="if"){const v="F"+dqN++;dq.unshift(v);msg=`insertFront(${v})`}if(b.dataset.op==="ir"){const v="R"+dqN++;dq.push(v);msg=`insertRear(${v})`}if(b.dataset.op==="df"){msg=dq.length?`deleteFront → ${dq.shift()}`:"UNDERFLOW"}if(b.dataset.op==="dr"){msg=dq.length?`deleteRear → ${dq.pop()}`:"UNDERFLOW"}drawDeque(msg)});
$("#dequeReset").onclick=()=>{dq=["B","C"];dqN=1;drawDeque()};drawDeque();

let brPos=0,brStack=[],brFailed=false;
const bracketPairs={")":"(","}":"{","]":"["};
function drawBrackets(msg="Choose an expression and step through it."){$("#bracketVisual").innerHTML=brStack.length?brStack.map((v,i)=>`<div class="stack-item ${i===brStack.length-1?"top":""}">${v}</div>`).join(""):'<div class="disabled-note">empty stack</div>';$("#bracketTrace").innerHTML=msg}
function resetBr(){brPos=0;brStack=[];brFailed=false;drawBrackets(`Expression: <code>${$("#bracketExpr").value}</code>`)}
$("#bracketExpr").onchange=resetBr;$("#bracketReset").onclick=resetBr;
$("#bracketNext").onclick=()=>{if(brFailed)return;const s=$("#bracketExpr").value;if(brPos>=s.length){drawBrackets(brStack.length?"Finished: unmatched opening bracket(s) remain → <strong>not balanced</strong>.":"Finished with empty stack → <strong>balanced</strong>.");return}const c=s[brPos++];if("({[".includes(c)){brStack.push(c);drawBrackets(`Read <strong>${c}</strong>: opening bracket → PUSH.`)}else if(")}]".includes(c)){if(!brStack.length){brFailed=true;drawBrackets(`Read <strong>${c}</strong>: no opening bracket available → <strong>not balanced</strong>.`);return}const top=brStack.pop();if(bracketPairs[c]!==top){brFailed=true;drawBrackets(`Read <strong>${c}</strong>: POP gave ${top}, which does not match → <strong>not balanced</strong>.`)}else drawBrackets(`Read <strong>${c}</strong>: POP ${top} → pair matches.`)}else drawBrackets(`Read <strong>${c}</strong>: ordinary character, stack unchanged.`)};resetBr();

const adtCases=[
{t:"Undo the most recent editing action first.",a:"stack",why:"Undo is most-recent-first, which is LIFO."},
{t:"Process print jobs in the order they arrived.",a:"queue",why:"Arrival order is FIFO."},
{t:"Maintain candidates for a sliding-window maximum, removing from either end.",a:"deque",why:"The algorithm needs controlled operations at both ends."},
{t:"Perform breadth-first search through a graph.",a:"queue",why:"Nodes are explored in discovery order by level."},
{t:"Manage nested function calls.",a:"stack",why:"The most recent active call returns first."}
];let aci=0;
function showAdtCase(){$("#adtChoicePrompt").innerHTML=`Scenario ${aci+1}/${adtCases.length}: <strong>${adtCases[aci].t}</strong>`;$("#adtChoiceFeedback").textContent=""}
$$(".adtChoice").forEach(b=>b.onclick=()=>{const c=adtCases[aci],ok=b.dataset.choice===c.a;$("#adtChoiceFeedback").className="feedback "+(ok?"ok":"no");$("#adtChoiceFeedback").textContent=(ok?"Correct. ":"Try again. ")+c.why;setTimeout(()=>{aci=(aci+1)%adtCases.length;showAdtCase()},1200)});showAdtCase();

$$(".qc4").forEach(b=>b.onclick=()=>{const f=b.nextElementSibling;f.textContent=b.dataset.answer;f.className="feedback ok"});

const quiz4Data=[{"q": "What behaviour defines a stack?", "opts": ["FIFO", "LIFO", "Random removal", "Priority only"], "a": 1}, {"q": "Which operation removes the top stack item?", "opts": ["enqueue", "dequeue", "pop", "appendRear"], "a": 2}, {"q": "What is stack underflow?", "opts": ["Pushing to a dynamic stack", "Popping an empty stack", "Reading the bottom item", "Resizing an array"], "a": 1}, {"q": "In an array stack, what commonly identifies the current top?", "opts": ["front index", "rear index", "top index", "hash code"], "a": 2}, {"q": "What behaviour defines a queue?", "opts": ["LIFO", "FIFO", "Last-to-last", "Sorted only"], "a": 1}, {"q": "Where does an ordinary queue insert a new item?", "opts": ["Front", "Rear", "Middle", "Any position"], "a": 1}, {"q": "What is the main problem of a simple linear array queue after repeated dequeues?", "opts": ["The queue becomes sorted", "False overflow can occur", "Values automatically duplicate", "The stack pointer fails"], "a": 1}, {"q": "How does a circular queue move from the last index to the first?", "opts": ["Recursion", "Modulo arithmetic", "Binary search", "Hashing"], "a": 1}, {"q": "With front/rear/count maintained, circular enqueue and dequeue are normally:", "opts": ["O(1)", "O(log n)", "O(n)", "O(n\u00b2)"], "a": 0}, {"q": "Why does a linked queue keep both front and rear?", "opts": ["To sort values", "To support O(1) insertion at rear and removal at front", "To make it circular automatically", "To avoid nodes"], "a": 1}, {"q": "What is a deque?", "opts": ["A stack with no pop", "A queue that permits operations at both ends", "A sorted array", "A tree traversal"], "a": 1}, {"q": "Which ADT is most natural for checking matched nested brackets?", "opts": ["Stack", "Queue", "Deque only", "Hash table"], "a": 0}, {"q": "Which ADT is most natural for breadth-first search?", "opts": ["Stack", "Queue", "Array only", "Heap only"], "a": 1}, {"q": "Which statement is correct?", "opts": ["A stack must be an array", "A queue must be linked", "Stack and Queue are ADTs that can have multiple implementations", "Deque is identical to Stack"], "a": 2}];
$("#quiz4Container").innerHTML=quiz4Data.map((q,i)=>`<div class="quiz-q"><strong>${i+1}. ${q.q}</strong>${q.opts.map((o,j)=>`<label><input type="radio" name="t4q${i}" value="${j}"> ${o}</label>`).join("")}</div>`).join("");
$("#gradeQuiz4").onclick=()=>{let score=0;quiz4Data.forEach((q,i)=>{const s=document.querySelector(`input[name=t4q${i}]:checked`);if(s&&+s.value===q.a)score++});localStorage.setItem(topic4QuizKey,score);const r=$("#quiz4Result");r.className="result "+(score>=10?"good":"");r.textContent=`Score: ${score}/14. ${score>=10?"Strong understanding of stacks, queues and deques.":"Review the animations and pseudocode, then try again."}`};

let s4i=0;const slides4=window.IS237_TOPIC4_SLIDES||[];
function renderSlide4(){const s=slides4[s4i]||{};let visual="";
if(s.visual==="opening")visual='<div class="big-formula">Restrict operations → create predictable behaviour</div>';
if(s.visual==="stack")visual='<div class="mini-flow"><span>A</span><b>then PUSH</b><span>B</span><b>then PUSH</b><span>C ← TOP</span><b>POP → C</b></div>';
if(s.visual==="arraystack")visual='<div class="mini-flow"><span>[0] A</span><span>[1] B</span><span>[2] C ← top</span></div>';
if(s.visual==="linkedstack")visual='<div class="mini-flow"><span>top → C</span><b>→</b><span>B</span><b>→</b><span>A</span></div>';
if(s.visual==="brackets")visual='<div class="big-formula">({[]}) → PUSH openers → POP matching closers</div>';
if(s.visual==="queue")visual='<div class="mini-flow"><span>FRONT A</span><b>→</b><span>B</span><b>→</b><span>C REAR</span></div>';
if(s.visual==="linearqueue")visual='<div class="mini-flow"><span>free</span><span>free</span><span>C ← front</span><span>D</span><span>E ← rear</span><b>| array end</b></div>';
if(s.visual==="circular")visual='<div class="big-formula">0 → 1 → 2 → 3 → 4 → 0 → …</div>';
if(s.visual==="modulo")visual='<div class="big-formula">(rear + 1) mod capacity</div>';
if(s.visual==="linkedqueue")visual='<div class="mini-flow"><span>front → A</span><b>→</b><span>B</span><b>→</b><span>C ← rear</span></div>';
if(s.visual==="deque")visual='<div class="mini-flow"><b>← front</b><span>A</span><span>B</span><span>C</span><b>rear →</b></div>';
if(s.visual==="compare")visual='<div class="grid"><div class="card"><h3>Stack</h3><p>LIFO · one end</p></div><div class="card"><h3>Queue</h3><p>FIFO · rear→front</p></div><div class="card"><h3>Deque</h3><p>both ends</p></div></div>';
if(s.visual==="implement")visual='<div class="mini-flow"><span>ADT behaviour</span><b>→</b><span>Array / Circular Array</span><b>OR</b><span>Linked Nodes</span></div>';
$("#slideContent").innerHTML=`${s.kicker?`<div class="kicker">${s.kicker}</div>`:""}<h1>${s.title||""}</h1>${s.body?`<p>${s.body}</p>`:""}${s.points?`<ul>${s.points.map(x=>`<li>${x}</li>`).join("")}</ul>`:""}${visual}`;$("#slideCount").textContent=`${s4i+1} / ${slides4.length}`}
$("#present4").onclick=()=>{s4i=0;renderSlide4();$("#slideOverlay").classList.add("open");$("#prevSlide").onclick=()=>{s4i=(s4i-1+slides4.length)%slides4.length;renderSlide4()};$("#nextSlide").onclick=()=>{s4i=(s4i+1)%slides4.length;renderSlide4()}};

// ---------------- Topic 5 ----------------
const topic5CompleteKey="is237_topic5_complete",topic5AssKey="is237_assignment5_complete",topic5QuizKey="is237_topic5_quiz_score";
function syncTopic5(){const m=$("#mark5"),a=$("#markA5");if(m)m.textContent=localStorage.getItem(topic5CompleteKey)==="1"?"✓ Topic Complete":"✓ Mark Topic Complete";if(a)a.textContent=localStorage.getItem(topic5AssKey)==="1"?"✓ Task Complete":"Mark Task Complete"}
$("#mark5").onclick=()=>{localStorage.setItem(topic5CompleteKey,localStorage.getItem(topic5CompleteKey)==="1"?"0":"1");syncTopic5()};
$("#markA5").onclick=()=>{localStorage.setItem(topic5AssKey,localStorage.getItem(topic5AssKey)==="1"?"0":"1");syncTopic5()};syncTopic5();

const factSteps=[
{frames:["factorial(4)"],msg:"Call factorial(4). It is not the base case, so it needs factorial(3)."},
{frames:["factorial(4)","factorial(3)"],msg:"Push factorial(3). It waits for factorial(2)."},
{frames:["factorial(4)","factorial(3)","factorial(2)"],msg:"Push factorial(2). It waits for factorial(1)."},
{frames:["factorial(4)","factorial(3)","factorial(2)","factorial(1)"],msg:"Push factorial(1). It waits for factorial(0)."},
{frames:["factorial(4)","factorial(3)","factorial(2)","factorial(1)","factorial(0)"],msg:"Base case reached: factorial(0) returns 1."},
{frames:["factorial(4)","factorial(3)","factorial(2)","factorial(1)"],ret:"factorial(1) = 1 × 1 = 1",msg:"Pop factorial(0). factorial(1) completes."},
{frames:["factorial(4)","factorial(3)","factorial(2)"],ret:"factorial(2) = 2 × 1 = 2",msg:"Pop factorial(1). factorial(2) completes."},
{frames:["factorial(4)","factorial(3)"],ret:"factorial(3) = 3 × 2 = 6",msg:"Pop factorial(2). factorial(3) completes."},
{frames:["factorial(4)"],ret:"factorial(4) = 4 × 6 = 24",msg:"Pop factorial(3). factorial(4) completes and returns 24."},
{frames:[],ret:"Result = 24",msg:"All frames have returned. The call stack is empty."}
];let fs=0;
function drawFact(){const s=factSteps[fs];$("#factStack").innerHTML=s.frames.length?s.frames.map((f,i)=>`<div class="frame-call ${i===s.frames.length-1?"active":""}">${f}</div>`).join(""):'<div class="disabled-note">call stack empty</div>';$("#factTrace").innerHTML=`Step ${fs+1}/${factSteps.length}: ${s.msg}${s.ret?`<br><strong>${s.ret}</strong>`:""}`}
$("#factNext").onclick=()=>{fs=Math.min(fs+1,factSteps.length-1);drawFact()};$("#factReset").onclick=()=>{fs=0;drawFact()};drawFact();

function factorial(n){let r=1;for(let i=2;i<=n;i++)r*=i;return r}
function factCompare(){const n=+$("#factNSlider").value;$("#factNVal").textContent=n;$("#factCompare").innerHTML=`<strong>Recursive:</strong> approximately ${n+1} active calls at maximum depth including factorial(0), O(n) stack space.<br><strong>Iterative:</strong> one result variable plus loop state, O(1) extra space.<br><strong>Both return:</strong> ${factorial(n)} and perform O(n) multiplication work.`}
$("#factNSlider").oninput=factCompare;factCompare();

const baseCases=[
{code:"IF n = 0 RETURN\\nRecurse(n - 1)   with n ≥ 0",a:"safe",why:"n decreases toward 0."},
{code:"IF n = 0 RETURN\\nRecurse(n + 1)   with n > 0",a:"unsafe",why:"n moves away from 0."},
{code:"IF length = 0 RETURN\\nRecurse(length - 1)",a:"safe",why:"the problem size decreases."},
{code:"IF x = 100 RETURN\\nRecurse(x - 1)   starting at x = 10",a:"unsafe",why:"x decreases away from 100."}
];let bci=0;
function showBase(){const c=baseCases[bci];$("#basePrompt").innerHTML=`<pre><code>${c.code}</code></pre>`;$("#baseFeedback").textContent=""}
$$(".baseChoice").forEach(b=>b.onclick=()=>{const c=baseCases[bci],ok=b.dataset.choice===c.a;$("#baseFeedback").className="feedback "+(ok?"ok":"no");$("#baseFeedback").textContent=(ok?"Correct. ":"Not quite. ")+c.why;setTimeout(()=>{bci=(bci+1)%baseCases.length;showBase()},1200)});showBase();

function fibCalls(n){if(n<=1)return 1;return 1+fibCalls(n-1)+fibCalls(n-2)}
function fibExplore(){const n=+$("#fibNSlider").value;$("#fibNVal").textContent=n;const calls=fibCalls(n);$("#fibOut").innerHTML=`Naive recursive Fibonacci(${n}) makes <strong>${calls}</strong> function calls in this counting model, but only <strong>${n+1}</strong> distinct subproblem values exist (0 through ${n}).<br>This gap shows repeated work. Memoisation stores those distinct results instead of recomputing them.`}
$("#fibNSlider").oninput=fibExplore;fibExplore();

const tailSnippets={normal:`factorial(n):
    IF n = 0 RETURN 1
    RETURN n × factorial(n - 1)`,tail:`factorialTail(n, acc):
    IF n = 0 RETURN acc
    RETURN factorialTail(n - 1, n × acc)`};
function tailRender(){const m=$("#tailMode").value;$("#tailCode").textContent=tailSnippets[m];$("#tailNote").innerHTML=m==="tail"?"The recursive call is the final action. An optimiser <em>may</em> reuse the current frame, depending on the language/runtime.":"Multiplication remains after the recursive call returns, so pending work must be remembered in stack frames."}
$("#tailMode").onchange=tailRender;tailRender();

const riCases=[
{t:"Traverse every node of a binary tree.",a:"recursion",why:"Each subtree is itself a tree, so recursive structure matches the problem naturally."},
{t:"Count from 1 to 1,000,000.",a:"iteration",why:"A simple loop avoids unnecessary call-stack growth."},
{t:"Binary search a sorted array.",a:"either",why:"Both recursive and iterative forms clearly express the halving process."},
{t:"Merge sort an array.",a:"recursion",why:"Divide-and-conquer naturally solves smaller subarrays recursively."},
{t:"Scan every element of an array once.",a:"iteration",why:"A loop expresses simple linear traversal directly."}
];let rii=0;
function showRI(){const c=riCases[rii];$("#riPrompt").innerHTML=`Scenario ${rii+1}/${riCases.length}: <strong>${c.t}</strong>`;$("#riFeedback").textContent=""}
$$(".riChoice").forEach(b=>b.onclick=()=>{const c=riCases[rii],ok=b.dataset.choice===c.a;$("#riFeedback").className="feedback "+(ok?"ok":"no");$("#riFeedback").textContent=(ok?"Good choice. ":"Consider another choice. ")+c.why;setTimeout(()=>{rii=(rii+1)%riCases.length;showRI()},1300)});showRI();

$$(".qc5").forEach(b=>b.onclick=()=>{const f=b.nextElementSibling;f.textContent=b.dataset.answer;f.className="feedback ok"});

const quiz5Data=[{"q": "What is recursion?", "opts": ["Using only loops", "A function solving a problem using smaller instances of itself", "Sorting data randomly", "Allocating an array"], "a": 1}, {"q": "What does a base case do?", "opts": ["Makes input larger", "Provides a stopping case that needs no further recursion", "Creates a queue", "Guarantees tail-call optimisation"], "a": 1}, {"q": "What additional condition is required for recursive termination?", "opts": ["Every call must make progress toward a base case", "Every function must call itself twice", "The input must be an array", "A loop must also be present"], "a": 0}, {"q": "What data structure manages active recursive calls?", "opts": ["Queue", "Hash table", "Call stack", "Heap only"], "a": 2}, {"q": "Ordinary recursive factorial has what extra-space complexity?", "opts": ["O(1)", "O(log n)", "O(n)", "O(n\u00b2)"], "a": 2}, {"q": "Iterative factorial normally has what extra-space complexity?", "opts": ["O(1)", "O(n)", "O(2^n)", "O(n\u00b2)"], "a": 0}, {"q": "What is direct recursion?", "opts": ["A calls itself", "A calls B and never itself", "A uses a queue", "A is iterative"], "a": 0}, {"q": "What is tail recursion?", "opts": ["Two recursive calls", "The recursive call is the final action", "Recursion without a base case", "Recursion that always uses O(1) stack"], "a": 1}, {"q": "Why is ordinary factorial non-tail recursive?", "opts": ["It has no base case", "Multiplication remains after the recursive call returns", "It uses a loop", "It calls two functions"], "a": 1}, {"q": "Why is naive recursive Fibonacci inefficient?", "opts": ["It sorts values", "It repeatedly solves the same subproblems", "It uses no recursion", "It requires a queue"], "a": 1}, {"q": "What technique stores recursive subproblem results for reuse?", "opts": ["Partitioning", "Memoisation", "Dequeuing", "Hash collision"], "a": 1}, {"q": "Recursive and iterative binary search have what time complexity?", "opts": ["O(1)", "O(log n)", "O(n)", "O(n\u00b2)"], "a": 1}, {"q": "What is a key space difference between recursive and iterative binary search?", "opts": ["Recursive uses O(log n) call stack; iterative uses O(1) extra space", "Recursive always uses less memory", "Iterative is O(n\u00b2)", "There is no difference"], "a": 0}, {"q": "Does tail recursion guarantee constant stack space in Java?", "opts": ["Yes always", "No, Java does not guarantee general tail-call optimisation", "Only for arrays", "Only for queues"], "a": 1}, {"q": "Which problem is especially natural for recursion?", "opts": ["Traversing a tree", "Incrementing a counter one million times", "Reading one array element by index", "Setting a Boolean flag"], "a": 0}, {"q": "Which statement is most accurate?", "opts": ["Recursion is always better", "Iteration is always better", "Choose based on problem structure, clarity, time and space", "They can never express the same algorithm"], "a": 2}];
$("#quiz5Container").innerHTML=quiz5Data.map((q,i)=>`<div class="quiz-q"><strong>${i+1}. ${q.q}</strong>${q.opts.map((o,j)=>`<label><input type="radio" name="t5q${i}" value="${j}"> ${o}</label>`).join("")}</div>`).join("");
$("#gradeQuiz5").onclick=()=>{let score=0;quiz5Data.forEach((q,i)=>{const s=document.querySelector(`input[name=t5q${i}]:checked`);if(s&&+s.value===q.a)score++});localStorage.setItem(topic5QuizKey,score);const r=$("#quiz5Result");r.className="result "+(score>=12?"good":"");r.textContent=`Score: ${score}/16. ${score>=12?"Strong understanding of recursion and iteration.":"Review the call-stack, base-case and recursion-pattern sections, then try again."}`};

let s5i=0;const slides5=window.IS237_TOPIC5_SLIDES||[];
function renderSlide5(){const s=slides5[s5i]||{};let visual="";
if(s.visual==="opening")visual='<div class="big-formula">Repeat by CALLING smaller problems OR by LOOPING over state</div>';
if(s.visual==="stack")visual='<div class="mini-flow"><span>call</span><b>→ PUSH frame</b><span>nested call</span><b>→ PUSH</b><span>return</span><b>→ POP</b></div>';
if(s.visual==="compare")visual='<div class="grid"><div class="card"><h3>Recursion</h3><p>self-calls + base case</p></div><div class="card"><h3>Iteration</h3><p>loop + condition</p></div></div>';
if(s.visual==="method")visual='<div class="mini-flow"><span>smaller problem</span><b>→</b><span>base case</span><b>→</b><span>progress</span><b>→</b><span>combine</span></div>';
if(s.visual==="factorial")visual='<div class="big-formula">n! = n × (n−1)! &nbsp;&nbsp; and &nbsp;&nbsp; 0! = 1</div>';
if(s.visual==="frames")visual='<div class="mini-flow"><span>factorial(4)</span><b>↓</b><span>factorial(3)</span><b>↓</b><span>factorial(2)</span><b>↓</b><span>base</span></div>';
if(s.visual==="sum")visual='<div class="big-formula">sum(n) = A[n−1] + sum(n−1)</div>';
if(s.visual==="binary")visual='<div class="mini-flow"><span>whole interval</span><b>→ half</b><span>half interval</span><b>→ half</b><span>smaller interval</span></div>';
if(s.visual==="direct")visual='<div class="big-formula">A() → A()</div>';
if(s.visual==="mutual")visual='<div class="big-formula">A() → B() → A()</div>';
if(s.visual==="tail")visual='<div class="big-formula">return recurse(smaller, updatedState)</div>';
if(s.visual==="tree")visual='<div class="mini-flow"><span>fib(5)</span><b>↙</b><span>fib(4)</span><b>+</b><span>fib(3)</span><b>↘ repeated calls</b></div>';
if(s.visual==="memo")visual='<div class="big-formula">Compute once → store → reuse</div>';
if(s.visual==="tailfact")visual='<div class="big-formula">factTail(n, acc) → factTail(n−1, n×acc)</div>';
if(s.visual==="convert")visual='<div class="mini-flow"><span>implicit call-stack state</span><b>→</b><span>explicit variables / Stack ADT</span></div>';
$("#slideContent").innerHTML=`${s.kicker?`<div class="kicker">${s.kicker}</div>`:""}<h1>${s.title||""}</h1>${s.body?`<p>${s.body}</p>`:""}${s.points?`<ul>${s.points.map(x=>`<li>${x}</li>`).join("")}</ul>`:""}${visual}`;$("#slideCount").textContent=`${s5i+1} / ${slides5.length}`}
$("#present5").onclick=()=>{s5i=0;renderSlide5();$("#slideOverlay").classList.add("open");$("#prevSlide").onclick=()=>{s5i=(s5i-1+slides5.length)%slides5.length;renderSlide5()};$("#nextSlide").onclick=()=>{s5i=(s5i+1)%slides5.length;renderSlide5()}};

// ---------------- Topic 6 ----------------
const topic6CompleteKey="is237_topic6_complete",topic6AssKey="is237_assignment6_complete",topic6QuizKey="is237_topic6_quiz_score";
function syncTopic6(){const m=$("#mark6"),a=$("#markA6");if(m)m.textContent=localStorage.getItem(topic6CompleteKey)==="1"?"✓ Topic Complete":"✓ Mark Topic Complete";if(a)a.textContent=localStorage.getItem(topic6AssKey)==="1"?"✓ Task Complete":"Mark Task Complete"}
$("#mark6").onclick=()=>{localStorage.setItem(topic6CompleteKey,localStorage.getItem(topic6CompleteKey)==="1"?"0":"1");syncTopic6()};
$("#markA6").onclick=()=>{localStorage.setItem(topic6AssKey,localStorage.getItem(topic6AssKey)==="1"?"0":"1");syncTopic6()};syncTopic6();

function renderCells(target,arr,classes={}){
  $(target).innerHTML=arr.map((v,i)=>`<div class="cell ${classes[i]||""}"><small>${i}</small>${v}</div>`).join("");
}
function renderBars(target,arr,classes={}){
  const max=Math.max(...arr,1);
  $(target).innerHTML=arr.map((v,i)=>`<div class="sort-bar ${classes[i]||""}" style="height:${55+145*v/max}px">${v}</div>`).join("");
}

// Linear search
const searchData=[4,9,13,18,27,31,44,52,63,75];let ls=0;
function drawLinear(){
  const classes={};
  searchData.forEach((v,i)=>{
    if(i<ls)classes[i]="search-checked";
    else if(i===ls)classes[i]=v===44?"search-found":"search-current";
  });
  renderCells("#linearSearchVisual",searchData,classes);
  const v=searchData[ls];
  $("#linearTrace").innerHTML=`Comparison ${ls+1}: the raised <strong>orange</strong> cell is being inspected. A[${ls}] = <strong>${v}</strong>${v===44?" → <strong>target found</strong>; the cell turns green.":" ≠ 44 → this cell becomes checked and the pointer moves right."}`;
}
$("#linearNext").onclick=()=>{if(searchData[ls]!==44&&ls<searchData.length-1)ls++;drawLinear()};
$("#linearReset").onclick=()=>{ls=0;drawLinear()};drawLinear();

// Binary search
const bsStates=[
{low:0,high:9,mid:4,msg:"mid = 4 → A[4] = 27. Target 44 is larger, so discard indexes 0–4."},
{low:5,high:9,mid:7,msg:"mid = 7 → A[7] = 52. Target 44 is smaller, so discard indexes 7–9."},
{low:5,high:6,mid:5,msg:"mid = 5 → A[5] = 31. Target 44 is larger, so discard index 5."},
{low:6,high:6,mid:6,msg:"mid = 6 → A[6] = 44. Target found."}
];let bs=0;
function drawBinary(){
  const s=bsStates[bs],classes={};
  searchData.forEach((v,i)=>{
    if(i<s.low||i>s.high)classes[i]="search-discarded";
    else if(i===s.mid)classes[i]=v===44?"search-found":"search-mid";
    else classes[i]="search-active";
  });
  renderCells("#binarySearchVisual",searchData,classes);
  $("#binaryTrace").innerHTML=`Comparison ${bs+1}: the <strong>blue</strong> cells are still possible, the raised <strong>orange</strong> cell is the midpoint, and <strong>grey</strong> cells have been discarded.<br>${s.msg}`;
}
$("#binaryNext").onclick=()=>{bs=Math.min(bs+1,bsStates.length-1);drawBinary()};
$("#binaryReset").onclick=()=>{bs=0;drawBinary()};drawBinary();

// State generators for sorting
function genBubbleStates(input){
  const a=[...input],states=[{a:[...a],c:[],msg:"Initial array."}];
  for(let pass=0;pass<a.length-1;pass++){
    let swapped=false;
    for(let j=0;j<a.length-1-pass;j++){
      states.push({a:[...a],c:[j,j+1],msg:`Compare ${a[j]} and ${a[j+1]}.`});
      if(a[j]>a[j+1]){
        [a[j],a[j+1]]=[a[j+1],a[j]];
        swapped=true;states.push({a:[...a],c:[j,j+1],msg:"They are out of order → swap."});
      }
    }
    states.push({a:[...a],c:[],sortedFrom:a.length-1-pass,msg:`Pass ${pass+1} complete.`});
    if(!swapped){states.push({a:[...a],c:[],sortedFrom:0,msg:"No swaps occurred → array already sorted."});break}
  }
  return states;
}
function genSelectionStates(input){
  const a=[...input],states=[{a:[...a],c:[],msg:"Initial array."}];
  let comparisons=0;
  for(let i=0;i<a.length-1;i++){
    let min=i;
    states.push({a:[...a],c:[i],special:min,msg:`Pass ${i+1}: current minimum candidate is ${a[min]}.`});
    for(let j=i+1;j<a.length;j++){
      comparisons++;
      states.push({a:[...a],c:[j],special:min,msg:`Compare ${a[j]} with current minimum ${a[min]}.`});
      if(a[j]<a[min]){min=j;states.push({a:[...a],c:[j],special:min,msg:`New minimum candidate = ${a[min]}.`})}
    }
    if(min!==i){[a[i],a[min]]=[a[min],a[i]];states.push({a:[...a],c:[i,min],special:i,msg:`Place minimum ${a[i]} at position ${i}.`})}
    states.push({a:[...a],c:[],sortedTo:i,msg:`Sorted prefix now ends at index ${i}.`,comparisons});
  }
  states.push({a:[...a],c:[],sortedTo:a.length-1,msg:"Selection Sort complete.",comparisons});
  return states;
}
function genInsertionStates(input){
  const a=[...input],states=[{a:[...a],c:[],sortedTo:0,msg:"Initial sorted prefix contains the first value."}];
  for(let i=1;i<a.length;i++){
    const key=a[i];let j=i-1;
    states.push({a:[...a],c:[i],special:i,sortedTo:i-1,msg:`Take key ${key}.`});
    while(j>=0&&a[j]>key){
      states.push({a:[...a],c:[j,j+1],special:i,sortedTo:i-1,msg:`${a[j]} > ${key} → shift ${a[j]} right.`});
      a[j+1]=a[j];j--;states.push({a:[...a],c:[j+1],special:i,sortedTo:i-1,msg:"Shift completed."});
    }
    a[j+1]=key;states.push({a:[...a],c:[j+1],special:j+1,sortedTo:i,msg:`Insert key ${key} at index ${j+1}.`});
  }
  return states;
}
function genQuickStates(input){
  const a=[...input],states=[{a:[...a],c:[],msg:"Initial array."}],counts={comparisons:0,partitions:0};
  function qs(low,high){
    if(low>=high)return;
    counts.partitions++;
    const pivot=a[high];let i=low-1;
    states.push({a:[...a],c:[high],pivot:high,msg:`Partition indexes ${low}–${high}; pivot = ${pivot}.`,counts:{...counts}});
    for(let j=low;j<high;j++){
      counts.comparisons++;
      states.push({a:[...a],c:[j],pivot:high,msg:`Compare ${a[j]} with pivot ${pivot}.`,counts:{...counts}});
      if(a[j]<=pivot){i++;[a[i],a[j]]=[a[j],a[i]];states.push({a:[...a],c:[i,j],pivot:high,msg:`${a[i]} belongs on the left side → swap into partition.`,counts:{...counts}})}
    }
    [a[i+1],a[high]]=[a[high],a[i+1]];
    const p=i+1;
    states.push({a:[...a],c:[p],pivot:p,msg:`Place pivot ${a[p]} at final index ${p}.`,counts:{...counts}});
    qs(low,p-1);qs(p+1,high);
  }
  qs(0,a.length-1);
  states.push({a:[...a],c:[],msg:"Quick Sort complete.",counts:{...counts}});
  return states;
}

const sortInput=[7,2,9,4,6,1];
const bubbleStates=genBubbleStates(sortInput);let bi=0;
function drawBubble(){const s=bubbleStates[bi],cl={};(s.c||[]).forEach(i=>cl[i]="compare");if(s.sortedFrom!==undefined)for(let i=s.sortedFrom;i<s.a.length;i++)cl[i]="sorted";renderBars("#bubbleVisual",s.a,cl);$("#bubbleTrace").innerHTML=`Step ${bi+1}/${bubbleStates.length}: ${s.msg}`}
$("#bubbleNext").onclick=()=>{bi=Math.min(bi+1,bubbleStates.length-1);drawBubble()};$("#bubbleReset").onclick=()=>{bi=0;drawBubble()};drawBubble();

const selectionStates=genSelectionStates(sortInput);let si6=0;
function drawSelection(){const s=selectionStates[si6],cl={};(s.c||[]).forEach(i=>cl[i]="compare");if(s.special!==undefined)cl[s.special]="special";if(s.sortedTo!==undefined)for(let i=0;i<=s.sortedTo;i++)cl[i]="sorted";renderBars("#selectionVisual",s.a,cl);$("#selectionTrace").innerHTML=`Step ${si6+1}/${selectionStates.length}: ${s.msg}${s.comparisons!==undefined?`<br>comparisons so far: ${s.comparisons}`:""}`}
$("#selectionNext").onclick=()=>{si6=Math.min(si6+1,selectionStates.length-1);drawSelection()};$("#selectionReset").onclick=()=>{si6=0;drawSelection()};drawSelection();

const insertionStates=genInsertionStates(sortInput);let ii6=0;
function drawInsertion(){const s=insertionStates[ii6],cl={};(s.c||[]).forEach(i=>cl[i]="compare");if(s.special!==undefined)cl[s.special]="special";if(s.sortedTo!==undefined)for(let i=0;i<=s.sortedTo;i++)if(!cl[i])cl[i]="sorted";renderBars("#insertionVisual",s.a,cl);$("#insertionTrace").innerHTML=`Step ${ii6+1}/${insertionStates.length}: ${s.msg}`}
$("#insertionNext").onclick=()=>{ii6=Math.min(ii6+1,insertionStates.length-1);drawInsertion()};$("#insertionReset").onclick=()=>{ii6=0;drawInsertion()};drawInsertion();

// Merge Sort staged visual
const mergeStages=[
{groups:[[8,3,6,2]],msg:"Start with the whole array."},
{groups:[[8,3],[6,2]],msg:"Divide into two halves."},
{groups:[[8],[3],[6],[2]],msg:"Divide until each group has one element."},
{groups:[[3,8],[2,6]],msg:"Merge neighbouring one-element groups in sorted order."},
{groups:[[2,3,6,8]],msg:"Merge the two sorted halves. Sorting is complete."}
];let mi6=0;
function drawMerge(){const s=mergeStages[mi6];$("#mergeVisual").innerHTML=`<div class="merge-row">${s.groups.map(g=>`<div class="merge-group">[${g.join(", ")}]</div>`).join("")}</div>`;$("#mergeTrace").innerHTML=`Stage ${mi6+1}/${mergeStages.length}: ${s.msg}`}
$("#mergeNext").onclick=()=>{mi6=Math.min(mi6+1,mergeStages.length-1);drawMerge()};$("#mergeReset").onclick=()=>{mi6=0;drawMerge()};drawMerge();

const quickStates=genQuickStates([7,2,9,4,6]);let qi6=0;
function drawQuick(){const s=quickStates[qi6],cl={};(s.c||[]).forEach(i=>cl[i]="compare");if(s.pivot!==undefined)cl[s.pivot]="pivot";renderBars("#quickVisual",s.a,cl);$("#quickTrace").innerHTML=`Step ${qi6+1}/${quickStates.length}: ${s.msg}${s.counts?`<br>comparisons: ${s.counts.comparisons}, partitions started: ${s.counts.partitions}`:""}`}
$("#quickNext").onclick=()=>{qi6=Math.min(qi6+1,quickStates.length-1);drawQuick()};$("#quickReset").onclick=()=>{qi6=0;drawQuick()};drawQuick();

// Selection vs Quick race
function selectionPassStates(input){
  const a=[...input],out=[{a:[...a],comparisons:0,msg:"start"}];let comparisons=0;
  for(let i=0;i<a.length-1;i++){let min=i;for(let j=i+1;j<a.length;j++){comparisons++;if(a[j]<a[min])min=j}if(min!==i)[a[i],a[min]]=[a[min],a[i]];out.push({a:[...a],comparisons,msg:`pass ${i+1}`})}
  return out;
}
function quickPartitionStates(input){
  const a=[...input],out=[{a:[...a],comparisons:0,msg:"start"}];let comparisons=0;
  function qs(lo,hi){if(lo>=hi)return;const pivot=a[hi];let i=lo-1;for(let j=lo;j<hi;j++){comparisons++;if(a[j]<=pivot){i++;[a[i],a[j]]=[a[j],a[i]]}}[a[i+1],a[hi]]=[a[hi],a[i+1]];const p=i+1;out.push({a:[...a],comparisons,msg:`pivot ${a[p]} fixed at ${p}`});qs(lo,p-1);qs(p+1,hi)}
  qs(0,a.length-1);return out;
}
const raceInput=[9,1,8,2,7,3,6,4,5],raceS=selectionPassStates(raceInput),raceQ=quickPartitionStates(raceInput);let raceI=0,raceTimer=null;
function drawRace(){const s=raceS[Math.min(raceI,raceS.length-1)],q=raceQ[Math.min(raceI,raceQ.length-1)];renderBars("#raceSelection",s.a,{});renderBars("#raceQuick",q.a,{});$("#raceSelectionCount").innerHTML=`${s.msg}<br><strong>${s.comparisons}</strong> comparisons`;$("#raceQuickCount").innerHTML=`${q.msg}<br><strong>${q.comparisons}</strong> comparisons`;$("#raceTrace").innerHTML=raceI>=Math.max(raceS.length,raceQ.length)-1?"Race complete. Notice that the algorithms reduce the unsorted work in fundamentally different ways.":"Each tick shows one major pass/partition, not identical low-level operations."}
$("#raceRun").onclick=()=>{if(raceTimer)clearInterval(raceTimer);raceTimer=setInterval(()=>{raceI++;drawRace();if(raceI>=Math.max(raceS.length,raceQ.length)-1){clearInterval(raceTimer);raceTimer=null}},700)};
$("#raceReset").onclick=()=>{if(raceTimer)clearInterval(raceTimer);raceTimer=null;raceI=0;drawRace()};drawRace();

// Growth explorer
function growthRender(){const n=+$("#growthN").value;$("#growthNVal").textContent=n;const vals=[["O(1)",1],["O(log n)",Math.log2(n)],["O(n)",n],["O(n log n)",n*Math.log2(n)],["O(n²)",n*n],["O(2ⁿ)",Math.pow(2,Math.min(n,30))]];$("#growthOut").innerHTML=vals.map(([k,v])=>`<div class="growth-card"><strong>${k}</strong>${v>1e9?v.toExponential(2):Math.round(v*10)/10}</div>`).join("")}
$("#growthN").oninput=growthRender;growthRender();

// Case challenge
const caseCases=[
{t:"Linear Search finds the target at index 0.",a:"best",why:"The first comparison succeeds: O(1)."},
{t:"Linear Search looks for a value that is absent.",a:"worst",why:"Every element must be checked: O(n)."},
{t:"Optimised Bubble Sort receives an already sorted array.",a:"best",why:"One pass detects no swaps and stops: O(n)."},
{t:"Insertion Sort receives values in reverse order.",a:"worst",why:"Each new key shifts across nearly the whole sorted prefix: O(n²)."},
{t:"Quick Sort repeatedly chooses a pivot that creates one empty side and one side of size n-1.",a:"worst",why:"The partition tree becomes extremely unbalanced: O(n²)."}
];let caseI=0;
function showCase(){const c=caseCases[caseI];$("#casePrompt").innerHTML=`Scenario ${caseI+1}/${caseCases.length}: <strong>${c.t}</strong>`;$("#caseFeedback").textContent=""}
$$(".caseChoice").forEach(b=>b.onclick=()=>{const c=caseCases[caseI],ok=b.dataset.choice===c.a;$("#caseFeedback").className="feedback "+(ok?"ok":"no");$("#caseFeedback").textContent=(ok?"Correct. ":"Reconsider. ")+c.why;setTimeout(()=>{caseI=(caseI+1)%caseCases.length;showCase()},1300)});showCase();

$$(".qc6").forEach(b=>b.onclick=()=>{const f=b.nextElementSibling;f.textContent=b.dataset.answer;f.className="feedback ok"});

// Topic 6 quiz
const quiz6Data=[{"q": "What does time complexity describe?", "opts": ["Exact seconds on one laptop", "How computational work grows with input size", "Only memory usage", "The number of source-code lines"], "a": 1}, {"q": "Which growth class is array access by a known index?", "opts": ["O(1)", "O(log n)", "O(n)", "O(n\u00b2)"], "a": 0}, {"q": "Which growth class describes binary search?", "opts": ["O(1)", "O(log n)", "O(n)", "O(n\u00b2)"], "a": 1}, {"q": "What precondition is required for binary search?", "opts": ["The data must be sorted", "The data must be linked", "n must be even", "The target must exist"], "a": 0}, {"q": "What is the worst-case time of linear search?", "opts": ["O(1)", "O(log n)", "O(n)", "O(n log n)"], "a": 2}, {"q": "What does stable sorting preserve?", "opts": ["Array capacity", "Relative order of equal-key records", "Only the largest value", "Pivot position"], "a": 1}, {"q": "Which algorithm repeatedly compares adjacent values?", "opts": ["Selection Sort", "Bubble Sort", "Merge Sort", "Binary Search"], "a": 1}, {"q": "Why is Selection Sort O(n\u00b2) even for sorted input?", "opts": ["It always performs nested scans of the remaining region", "It recursively splits arrays", "It uses a hash table", "It doubles the input"], "a": 0}, {"q": "Which sort is especially suitable for small or nearly sorted inputs?", "opts": ["Insertion Sort", "Selection Sort only", "Naive Fibonacci", "Binary Search"], "a": 0}, {"q": "What is the worst-case time of standard Insertion Sort?", "opts": ["O(1)", "O(log n)", "O(n log n)", "O(n\u00b2)"], "a": 3}, {"q": "What is the time complexity of Merge Sort in the worst case?", "opts": ["O(n)", "O(n log n)", "O(n\u00b2)", "O(2^n)"], "a": 1}, {"q": "What is the main extra-memory cost of standard array Merge Sort?", "opts": ["O(1)", "O(log n)", "O(n)", "O(n\u00b2)"], "a": 2}, {"q": "What does Quick Sort do before recursively sorting subarrays?", "opts": ["Merge two halves", "Partition around a pivot", "Search linearly", "Build a queue"], "a": 1}, {"q": "What is Quick Sort's average time complexity?", "opts": ["O(1)", "O(log n)", "O(n log n)", "O(n\u00b2)"], "a": 2}, {"q": "What is Quick Sort's worst-case time complexity?", "opts": ["O(n)", "O(n log n)", "O(n\u00b2)", "O(2^n)"], "a": 2}, {"q": "Which standard sort among these is stable and always O(n log n)?", "opts": ["Selection Sort", "Merge Sort", "Quick Sort", "Bubble Sort"], "a": 1}, {"q": "What does 'in-place' mean?", "opts": ["The input is already sorted", "The algorithm uses little additional memory beyond the input", "It only works on arrays", "It is always O(1) time"], "a": 1}, {"q": "Which statement is most accurate?", "opts": ["The algorithm with the smallest Big-O is always best in every context", "Algorithm choice also depends on memory, stability, input order and usage pattern", "Selection Sort is always faster than Quick Sort", "Binary Search should always replace Linear Search"], "a": 1}];
$("#quiz6Container").innerHTML=quiz6Data.map((q,i)=>`<div class="quiz-q"><strong>${i+1}. ${q.q}</strong>${q.opts.map((o,j)=>`<label><input type="radio" name="t6q${i}" value="${j}"> ${o}</label>`).join("")}</div>`).join("");
$("#gradeQuiz6").onclick=()=>{let score=0;quiz6Data.forEach((q,i)=>{const s=document.querySelector(`input[name=t6q${i}]:checked`);if(s&&+s.value===q.a)score++});localStorage.setItem(topic6QuizKey,score);const r=$("#quiz6Result");r.className="result "+(score>=13?"good":"");r.textContent=`Score: ${score}/18. ${score>=13?"Strong understanding of searching, sorting and efficiency.":"Use the animations to review how each algorithm moves through or rearranges the data, then try again."}`};

// Topic 6 presentation
let s6i=0;const slides6=window.IS237_TOPIC6_SLIDES||[];
function renderSlide6(){const s=slides6[s6i]||{};let visual="";
if(s.visual==="opening")visual='<div class="big-formula">Correct answer + scalable resource use = good algorithm design</div>';
if(s.visual==="timespace")visual='<div class="grid"><div class="card"><h3>TIME</h3><p>How does work grow?</p></div><div class="card"><h3>SPACE</h3><p>How does extra memory grow?</p></div></div>';
if(s.visual==="count")visual='<div class="big-formula">2n² + 8n + 20 → dominant term → O(n²)</div>';
if(s.visual==="bigo")visual='<div class="big-formula">Growth matters more than exact machine seconds</div>';
if(s.visual==="growth")visual='<div class="mini-flow"><span>O(1)</span><b>&lt;</b><span>O(log n)</span><b>&lt;</b><span>O(n)</span><b>&lt;</b><span>O(n log n)</span><b>&lt;</b><span>O(n²)</span></div>';
if(s.visual==="search")visual='<div class="big-formula">collection + target → found position OR NOT_FOUND</div>';
if(s.visual==="linear")visual='<div class="mini-flow"><span>4</span><b>→</b><span>9</span><b>→</b><span>13</span><b>→ … one by one</b></div>';
if(s.visual==="binary")visual='<div class="mini-flow"><span>whole sorted range</span><b>→ half</b><span>remaining half</span><b>→ half</b><span>small range</span></div>';
if(s.visual==="halves")visual='<div class="big-formula">n → n/2 → n/4 → n/8 → … → 1</div>';
if(s.visual==="searchcompare")visual='<div class="grid"><div class="card"><h3>Linear</h3><p>unsorted OK · O(n)</p></div><div class="card"><h3>Binary</h3><p>sorted · O(log n)</p></div></div>';
if(s.visual==="bubble")visual='<div class="mini-flow"><span>7</span><span>2</span><b>swap</b><span>7</span><span>2</span><b>adjacent comparisons</b></div>';
if(s.visual==="selection")visual='<div class="mini-flow"><span>unsorted region</span><b>scan for min</b><span>minimum</span><b>→ place next</b></div>';
if(s.visual==="insertion")visual='<div class="mini-flow"><span>sorted prefix</span><b>+</b><span>key</span><b>→ shift → insert</b></div>';
if(s.visual==="merge")visual='<div class="mini-flow"><span>[8,3,6,2]</span><b>split</b><span>[8,3] [6,2]</span><b>merge</b><span>[2,3,6,8]</span></div>';
if(s.visual==="nlogn")visual='<div class="big-formula">O(n) per level × O(log n) levels = O(n log n)</div>';
if(s.visual==="quick")visual='<div class="mini-flow"><span>values</span><b>partition</b><span>≤ pivot</span><span>PIVOT</span><span>&gt; pivot</span></div>';
if(s.visual==="partition")visual='<div class="big-formula">Partition finishes → pivot is in its final sorted position</div>';
if(s.visual==="race")visual='<div class="grid"><div class="card"><h3>Selection</h3><p>scan remainder every pass</p></div><div class="card"><h3>Quick</h3><p>partition into smaller problems</p></div></div>';
if(s.visual==="sortcompare")visual='<div class="mini-flow"><span>Bubble</span><span>Selection</span><span>Insertion</span><span>Merge</span><span>Quick</span></div>';
if(s.visual==="stable")visual='<div class="big-formula">Equal grades: keep their earlier registration-number order</div>';
$("#slideContent").innerHTML=`${s.kicker?`<div class="kicker">${s.kicker}</div>`:""}<h1>${s.title||""}</h1>${s.body?`<p>${s.body}</p>`:""}${s.points?`<ul>${s.points.map(x=>`<li>${x}</li>`).join("")}</ul>`:""}${visual}`;$("#slideCount").textContent=`${s6i+1} / ${slides6.length}`}
$("#present6").onclick=()=>{s6i=0;renderSlide6();$("#slideOverlay").classList.add("open");$("#prevSlide").onclick=()=>{s6i=(s6i-1+slides6.length)%slides6.length;renderSlide6()};$("#nextSlide").onclick=()=>{s6i=(s6i+1)%slides6.length;renderSlide6()}};

// ---------------- Topic 7 ----------------
const topic7CompleteKey="is237_topic7_complete",topic7AssKey="is237_assignment7_complete",topic7QuizKey="is237_topic7_quiz_score";
function syncTopic7(){const m=$("#mark7"),a=$("#markA7");if(m)m.textContent=localStorage.getItem(topic7CompleteKey)==="1"?"✓ Topic Complete":"✓ Mark Topic Complete";if(a)a.textContent=localStorage.getItem(topic7AssKey)==="1"?"✓ Task Complete":"Mark Task Complete"}
$("#mark7").onclick=()=>{localStorage.setItem(topic7CompleteKey,localStorage.getItem(topic7CompleteKey)==="1"?"0":"1");syncTopic7()};
$("#markA7").onclick=()=>{localStorage.setItem(topic7AssKey,localStorage.getItem(topic7AssKey)==="1"?"0":"1");syncTopic7()};syncTopic7();

function bstNode(key){return {key,left:null,right:null}}
function bstInsertNode(root,key){
  if(!root)return bstNode(key);
  let cur=root;
  while(true){
    if(key<cur.key){if(cur.left)cur=cur.left;else{cur.left=bstNode(key);break}}
    else if(key>cur.key){if(cur.right)cur=cur.right;else{cur.right=bstNode(key);break}}
    else break;
  }
  return root;
}
function makeBST(keys){let root=null;keys.forEach(k=>root=bstInsertNode(root,k));return root}
function treeHeight(root){if(!root)return -1;return 1+Math.max(treeHeight(root.left),treeHeight(root.right))}
function renderTree(target,root,highlight=[],found=[]){
  if(!root){$(target).innerHTML='<div class="disabled-note" style="padding:80px 20px;text-align:center">empty tree</div>';return}
  const h=treeHeight(root),H=Math.max(300,90+(h+1)*70),W=720,nodes=[],edges=[];
  function walk(n,depth,x1,x2,parent){
    if(!n)return;
    const x=(x1+x2)/2,y=48+depth*68;
    nodes.push({key:n.key,x,y});
    if(parent)edges.push({x1:parent.x,y1:parent.y,x2:x,y2:y});
    const span=(x2-x1);
    walk(n.left,depth+1,x1,x,parent?{x,y}: {x,y});
    walk(n.right,depth+1,x,x2,parent?{x,y}: {x,y});
  }
  walk(root,0,20,W-20,null);
  const hs=new Set(highlight),fs=new Set(found);
  const edgeSvg=edges.map(e=>`<line class="tree-edge" x1="${e.x1}" y1="${e.y1}" x2="${e.x2}" y2="${e.y2}"/>`).join("");
  const nodeSvg=nodes.map(n=>`<circle class="tree-node ${fs.has(n.key)?"found":hs.has(n.key)?"highlight":""}" cx="${n.x}" cy="${n.y}" r="24"/><text class="tree-label" x="${n.x}" y="${n.y+1}">${n.key}</text>`).join("");
  $(target).innerHTML=`<svg class="tree-svg" viewBox="0 0 ${W} ${H}" style="height:${H}px">${edgeSvg}${nodeSvg}</svg>`;
}

// Traversal animator
const tree7=makeBST([50,30,70,20,40,60,80]);
const traversalOrders={pre:[50,30,20,40,70,60,80],in:[20,30,40,50,60,70,80],post:[20,40,30,60,80,70,50],level:[50,30,70,20,40,60,80]};
let travI=-1,travVisited=[];
function drawTraversal(){
  const type=$("#travType").value,seq=traversalOrders[type];
  renderTree("#travTree",tree7,travI>=0&&travI<seq.length?[seq[travI]]:[],travVisited);
  $("#travTrace").innerHTML=travI<0?`Order: <strong>${type==="pre"?"Root → Left → Right":type==="in"?"Left → Root → Right":type==="post"?"Left → Right → Root":"level by level using a Queue"}</strong>`:`Visited: <strong>${travVisited.join(" → ")}</strong>`;
}
$("#travNext").onclick=()=>{const seq=traversalOrders[$("#travType").value];if(travI<seq.length-1){travI++;travVisited.push(seq[travI])}drawTraversal()};
function resetTrav(){travI=-1;travVisited=[];drawTraversal()}$("#travReset").onclick=resetTrav;$("#travType").onchange=resetTrav;resetTrav();

// BST insertion
const bstInsertSeq=[50,30,70,20,40,60,80];let bstInsI=0,bstInsRoot=null;
function drawBSTInsert(msg="Tree is empty."){
  renderTree("#bstInsertTree",bstInsRoot,bstInsI? [bstInsertSeq[bstInsI-1]]:[],[]);
  $("#bstInsertTrace").innerHTML=msg;
}
$("#bstInsertNext").onclick=()=>{if(bstInsI>=bstInsertSeq.length)return;const k=bstInsertSeq[bstInsI++];bstInsRoot=bstInsertNode(bstInsRoot,k);drawBSTInsert(`Inserted <strong>${k}</strong>. Comparisons preserve the BST left-smaller/right-larger rule.`)};
$("#bstInsertReset").onclick=()=>{bstInsI=0;bstInsRoot=null;drawBSTInsert()};drawBSTInsert();

// BST search path
const bstSearchRoot=makeBST([50,30,70,20,40,60,80]),bstSearchPath=[50,70,60];let bstSearchI=-1;
function drawBSTSearch(){
  const current=bstSearchI>=0?[bstSearchPath[bstSearchI]]:[],found=bstSearchI===bstSearchPath.length-1?[60]:[];
  renderTree("#bstSearchTree",bstSearchRoot,current,found);
  if(bstSearchI<0)$("#bstSearchTrace").innerHTML="Target = 60. Start at root.";
  else {const k=bstSearchPath[bstSearchI];$("#bstSearchTrace").innerHTML=k===60?`Compare with <strong>${k}</strong> → target found.`:`Compare with <strong>${k}</strong>. ${60<k?"60 is smaller → go left.":"60 is larger → go right."}`;}
}
$("#bstSearchNext").onclick=()=>{bstSearchI=Math.min(bstSearchI+1,bstSearchPath.length-1);drawBSTSearch()};
$("#bstSearchReset").onclick=()=>{bstSearchI=-1;drawBSTSearch()};drawBSTSearch();

// BST deletion cases
const delCases={
 leaf:[
  {keys:[50,30,70,20,40,60,80,65],hi:[20],msg:"Find target 20. It is a leaf: no children."},
  {keys:[50,30,70,40,60,80,65],hi:[],msg:"Disconnect 20 from its parent. BST property remains valid."}
 ],
 one:[
  {keys:[50,30,70,20,40,60,80,65],hi:[60],msg:"Find target 60. It has one child: 65."},
  {keys:[50,30,70,20,40,65,80],hi:[65],msg:"Bypass 60 and connect its parent 70 directly to child 65."}
 ],
 two:[
  {keys:[50,30,70,20,40,60,80,65],hi:[50],msg:"Find target 50. It has two children."},
  {keys:[50,30,70,20,40,60,80,65],hi:[60],msg:"Find inorder successor: smallest value in the right subtree = 60."},
  {keys:[60,30,70,20,40,65,80],hi:[60],msg:"Replace 50 with 60, then remove the old successor node. Ordering is preserved."}
 ]
};let delI=0;
function drawDelete(){const arr=delCases[$("#bstDeleteCase").value],s=arr[delI];renderTree("#bstDeleteTree",makeBST(s.keys),s.hi,[]);$("#bstDeleteTrace").innerHTML=`Step ${delI+1}/${arr.length}: ${s.msg}`}
$("#bstDeleteNext").onclick=()=>{const arr=delCases[$("#bstDeleteCase").value];delI=Math.min(delI+1,arr.length-1);drawDelete()};
function resetDelete(){delI=0;drawDelete()}$("#bstDeleteReset").onclick=resetDelete;$("#bstDeleteCase").onchange=resetDelete;drawDelete();

// Balanced vs skewed
function drawShape(){const mode=$("#bstShape").value,keys=mode==="balanced"?[50,30,70,20,40,60,80]:[20,30,40,50,60,70,80],r=makeBST(keys),h=treeHeight(r);renderTree("#bstShapeTree",r,[],[]);$("#bstShapeTrace").innerHTML=`<strong>${mode==="balanced"?"Balanced-style insertion":"Sorted insertion → skewed tree"}</strong><br>height = ${h}; search follows at most a root-to-leaf path.`}
$("#bstShape").onchange=drawShape;drawShape();

// Heap
let heap=[],heapSeq=[35,20,50,10,45,60,30],heapPos=0;
function heapInsertVal(v){heap.push(v);let i=heap.length-1;const swaps=[];while(i>0){const p=Math.floor((i-1)/2);if(heap[p]>=heap[i])break;[heap[p],heap[i]]=[heap[i],heap[p]];swaps.push(`${heap[i]} ↔ ${heap[p]}`);i=p}return swaps}
function heapifyDown(i){const swaps=[];while(true){let l=2*i+1,r=2*i+2,largest=i;if(l<heap.length&&heap[l]>heap[largest])largest=l;if(r<heap.length&&heap[r]>heap[largest])largest=r;if(largest===i)break;const a=heap[i],b=heap[largest];[heap[i],heap[largest]]=[heap[largest],heap[i]];swaps.push(`${a} ↔ ${b}`);i=largest}return swaps}
function heapToTree(arr){function n(i){if(i>=arr.length)return null;return {key:arr[i],left:n(2*i+1),right:n(2*i+2)}}return n(0)}
function drawHeap(msg="Heap is empty."){renderTree("#heapTree",heapToTree(heap),heap.length?[heap[0]]:[],[]);$("#heapArray").innerHTML=heap.length?heap.map((v,i)=>`<div class="cell"><small>${i}</small>${v}</div>`).join(""):'<div class="disabled-note">empty array representation</div>';$("#heapTrace").innerHTML=msg}
$("#heapInsert").onclick=()=>{if(heapPos>=heapSeq.length)return drawHeap("All demonstration values inserted.");const v=heapSeq[heapPos++],sw=heapInsertVal(v);drawHeap(`Insert <strong>${v}</strong> at the next complete-tree position.${sw.length?` Sift up: ${sw.join(", ")}.`:" Heap order already valid."}`)};
$("#heapExtract").onclick=()=>{if(!heap.length)return drawHeap("UNDERFLOW: heap is empty.");const max=heap[0],last=heap.pop();if(heap.length){heap[0]=last;const sw=heapifyDown(0);drawHeap(`ExtractMax → <strong>${max}</strong>. Move ${last} to root${sw.length?` and heapify down: ${sw.join(", ")}.`:"; no downward swap needed."}`)}else drawHeap(`ExtractMax → <strong>${max}</strong>. Heap is now empty.`)};
$("#heapReset").onclick=()=>{heap=[];heapPos=0;drawHeap()};drawHeap();

// Hash chaining
const hashKeys=[10,17,24,31,18,25];let chainBuckets=Array.from({length:7},()=>[]),chainPos=0;
function drawChain(msg="Table empty."){$("#chainTable").innerHTML=chainBuckets.map((b,i)=>`<div class="hash-row"><div class="hash-index">${i}</div><div class="hash-chain">${b.length?b.map(k=>`<span class="hash-key">${k}</span>`).join("<b>→</b>"):"<span class='disabled-note'>empty</span>"}</div></div>`).join("");$("#chainTrace").innerHTML=msg}
$("#chainInsert").onclick=()=>{if(chainPos>=hashKeys.length)return;const k=hashKeys[chainPos++],idx=k%7,collision=chainBuckets[idx].length>0;chainBuckets[idx].push(k);drawChain(`Insert ${k}: ${k} mod 7 = <strong>${idx}</strong>. ${collision?"Collision → append to the bucket chain.":"Bucket was empty."}`)};
$("#chainReset").onclick=()=>{chainBuckets=Array.from({length:7},()=>[]);chainPos=0;drawChain()};drawChain();

// Linear probing
let probe=Array(7).fill(null),probePos=0;
function drawProbe(msg="Table empty.",collisionIndex=-1){$("#probeTable").innerHTML=probe.map((v,i)=>`<div class="hash-slot ${i===collisionIndex?"collision":""} ${v==="DELETED"?"deleted":""}"><div><small>${i}</small><br>${v===null?"—":v}</div></div>`).join("");$("#probeTrace").innerHTML=msg}
$("#probeInsert").onclick=()=>{if(probePos>=hashKeys.length)return;const k=hashKeys[probePos++],start=k%7;let i=0,idx=start,collisions=[];while(probe[idx]!==null&&probe[idx]!=="DELETED"){collisions.push(idx);i++;idx=(start+i)%7;if(i>=7)return drawProbe("Table full.")}probe[idx]=k;drawProbe(`Insert ${k}: start at ${start}.${collisions.length?` Occupied ${collisions.join(" → ")}; probe to ${idx}.`:` Place directly at ${idx}.`}`,collisions.length?collisions[0]:-1)};
$("#probeDelete").onclick=()=>{const idx=probe.indexOf(24);if(idx<0)return drawProbe("24 is not currently stored.");probe[idx]="DELETED";drawProbe(`Delete 24 at index ${idx}: write <strong>DELETED</strong>, not EMPTY, so later probe chains remain searchable.`)};
$("#probeReset").onclick=()=>{probe=Array(7).fill(null);probePos=0;drawProbe()};drawProbe();

// Load factor
function loadRender(){const n=+$("#loadSlider").value,a=n/20;$("#loadVal").textContent=n;$("#loadOut").innerHTML=`α = ${n} / 20 = <strong>${a.toFixed(2)}</strong>.<br>${a<0.5?"Low load: many empty slots; collisions are generally easier to keep short.":a<0.75?"Moderate load: still practical, but collision cost is rising.":"High load: probing/chains tend to grow; resizing may be appropriate."}`}
$("#loadSlider").oninput=loadRender;loadRender();

// Choose structure
const structure7Cases=[
{t:"Maintain numeric keys in order and print them sorted.",a:"bst",why:"A BST supports ordered navigation and inorder traversal."},
{t:"Always remove the highest-priority waiting task next.",a:"heap",why:"A max-heap keeps the highest-priority item at the root."},
{t:"Map registration number directly to a student record.",a:"hash",why:"A hash table targets fast exact-key lookup."},
{t:"Repeatedly obtain the earliest scheduled event.",a:"heap",why:"A min-heap exposes the minimum priority at the root."},
{t:"Support ordered range-oriented lookup.",a:"bst",why:"BST ordering preserves relationships between neighbouring key ranges."}
];let s7c=0;
function showS7(){const c=structure7Cases[s7c];$("#structure7Prompt").innerHTML=`Scenario ${s7c+1}/${structure7Cases.length}: <strong>${c.t}</strong>`;$("#structure7Feedback").textContent=""}
$$(".structure7Choice").forEach(b=>b.onclick=()=>{const c=structure7Cases[s7c],ok=b.dataset.choice===c.a;$("#structure7Feedback").className="feedback "+(ok?"ok":"no");$("#structure7Feedback").textContent=(ok?"Good choice. ":"Reconsider. ")+c.why;setTimeout(()=>{s7c=(s7c+1)%structure7Cases.length;showS7()},1300)});showS7();

$$(".qc7").forEach(b=>b.onclick=()=>{const f=b.nextElementSibling;f.textContent=b.dataset.answer;f.className="feedback ok"});

// Quiz 7
const quiz7Data=[{"q": "What is a leaf node?", "opts": ["A node with no children", "The root only", "Any node with two children", "A node at depth 1"], "a": 0}, {"q": "Which traversal of a BST produces keys in sorted order?", "opts": ["Preorder", "Inorder", "Postorder", "Level-order"], "a": 1}, {"q": "Which ADT is used naturally for level-order traversal?", "opts": ["Stack", "Queue", "Hash table", "Heap only"], "a": 1}, {"q": "What property defines a BST?", "opts": ["Every parent is larger than both children only", "Left subtree keys are smaller and right subtree keys are larger, recursively", "The tree must be complete", "The root is always the maximum"], "a": 1}, {"q": "BST search complexity is most directly O(...)?", "opts": ["1", "h, the tree height", "n\u00b2 always", "log n always"], "a": 1}, {"q": "Why can an ordinary BST become O(n) for search?", "opts": ["Hash collisions", "It can become skewed", "Heapify fails", "Queues are used"], "a": 1}, {"q": "For a BST node with two children, a common deletion strategy uses:", "opts": ["A random leaf", "The inorder successor", "The root only", "A hash value"], "a": 1}, {"q": "What shape property must a binary heap satisfy?", "opts": ["Perfect only", "Complete binary tree", "Skewed tree", "BST ordering"], "a": 1}, {"q": "In a max-heap, which value is at the root?", "opts": ["Minimum", "Maximum", "Median", "Newest"], "a": 1}, {"q": "What is the zero-based left-child index of node i in a heap array?", "opts": ["i+1", "2i", "2i+1", "floor(i/2)"], "a": 2}, {"q": "What is max-heap insertion complexity?", "opts": ["O(1) always", "O(log n)", "O(n\u00b2)", "O(2^n)"], "a": 1}, {"q": "What is max-heap peek complexity?", "opts": ["O(1)", "O(log n)", "O(n)", "O(n log n)"], "a": 0}, {"q": "Which ADT is a heap especially suited to implement?", "opts": ["Priority queue", "FIFO queue only", "Hash map", "Linked list"], "a": 0}, {"q": "What is a hash collision?", "opts": ["The table is sorted", "Different keys map to the same initial index", "A key has no value", "A BST becomes skewed"], "a": 1}, {"q": "How does separate chaining resolve collisions?", "opts": ["Delete colliding keys", "Store multiple entries in a bucket", "Sort the whole table", "Use a heap"], "a": 1}, {"q": "What does linear probing do after a collision?", "opts": ["Recursively split the table", "Check alternative table slots in a probe sequence", "Build a BST", "Stop immediately"], "a": 1}, {"q": "Why is a DELETED marker useful in open addressing?", "opts": ["It keeps probe chains searchable", "It sorts entries", "It increases tree height", "It prevents all collisions"], "a": 0}, {"q": "What is hash-table load factor?", "opts": ["tableSize / key", "entries / slots", "height / nodes", "collisions \u00d7 keys"], "a": 1}, {"q": "What is the average lookup complexity of a well-designed hash table?", "opts": ["O(1)", "O(log n)", "O(n)", "O(n\u00b2)"], "a": 0}, {"q": "Which structure is best when sorted traversal is required?", "opts": ["Heap", "Hash table", "Balanced BST", "Unordered array only"], "a": 2}, {"q": "Which structure is best for repeatedly extracting the highest-priority item?", "opts": ["Heap", "Hash table", "BST only", "Singly linked list always"], "a": 0}, {"q": "Which statement is most accurate?", "opts": ["Heap arbitrary search is O(log n)", "BST is always balanced", "Hash O(1) is an average/expected claim", "Hash collisions are errors"], "a": 2}];
$("#quiz7Container").innerHTML=quiz7Data.map((q,i)=>`<div class="quiz-q"><strong>${i+1}. ${q.q}</strong>${q.opts.map((o,j)=>`<label><input type="radio" name="t7q${i}" value="${j}"> ${o}</label>`).join("")}</div>`).join("");
$("#gradeQuiz7").onclick=()=>{let score=0;quiz7Data.forEach((q,i)=>{const s=document.querySelector(`input[name=t7q${i}]:checked`);if(s&&+s.value===q.a)score++});localStorage.setItem(topic7QuizKey,score);const r=$("#quiz7Result");r.className="result "+(score>=16?"good":"");r.textContent=`Score: ${score}/22. ${score>=16?"Strong understanding of trees, heaps and hashing.":"Review the traversal, BST deletion, heap and collision animations, then try again."}`};

// Presentation Topic 7
let s7i=0;const slides7=window.IS237_TOPIC7_SLIDES||[];
function renderSlide7(){const s=slides7[s7i]||{};let visual="";
if(s.visual==="opening")visual='<div class="big-formula">Hierarchy → Tree &nbsp; | &nbsp; Priority → Heap &nbsp; | &nbsp; Key → Hash</div>';
if(s.visual==="tree")visual='<div class="mini-flow"><span>ROOT</span><b>↓</b><span>parent</span><b>↓</b><span>child</span><b>→ leaf</b></div>';
if(s.visual==="preorder")visual='<div class="big-formula">ROOT → LEFT → RIGHT</div>';
if(s.visual==="inorder")visual='<div class="big-formula">LEFT → ROOT → RIGHT</div>';
if(s.visual==="postorder")visual='<div class="big-formula">LEFT → RIGHT → ROOT</div>';
if(s.visual==="level")visual='<div class="mini-flow"><span>level 0</span><b>→ Queue →</b><span>level 1</span><b>→</b><span>level 2</span></div>';
if(s.visual==="bst")visual='<div class="big-formula">left subtree &lt; node &lt; right subtree</div>';
if(s.visual==="bstsearch")visual='<div class="mini-flow"><span>50</span><b>target 60 &gt;</b><span>70</span><b>target 60 &lt;</b><span>60 ✓</span></div>';
if(s.visual==="height")visual='<div class="big-formula">BST operation cost = O(h)</div>';
if(s.visual==="bstinsert")visual='<div class="mini-flow"><span>compare</span><b>→ left/right</b><span>compare</span><b>→ null slot</b><span>insert</span></div>';
if(s.visual==="deletecases")visual='<div class="grid"><div class="card"><h3>0 child</h3><p>disconnect</p></div><div class="card"><h3>1 child</h3><p>bypass</p></div><div class="card"><h3>2 children</h3><p>successor</p></div></div>';
if(s.visual==="onechild")visual='<div class="big-formula">parent → target → child &nbsp; becomes &nbsp; parent → child</div>';
if(s.visual==="twochild")visual='<div class="big-formula">replace target with smallest key in right subtree</div>';
if(s.visual==="balanced")visual='<div class="grid"><div class="card"><h3>Balanced</h3><p>h ≈ log n</p></div><div class="card"><h3>Skewed</h3><p>h ≈ n</p></div></div>';
if(s.visual==="heap")visual='<div class="big-formula">complete tree + heap-order property</div>';
if(s.visual==="minmax")visual='<div class="grid"><div class="card"><h3>Max-heap</h3><p>largest at root</p></div><div class="card"><h3>Min-heap</h3><p>smallest at root</p></div></div>';
if(s.visual==="heaparray")visual='<div class="big-formula">left=2i+1 &nbsp; right=2i+2 &nbsp; parent=⌊(i−1)/2⌋</div>';
if(s.visual==="heapinsert")visual='<div class="mini-flow"><span>append</span><b>→ compare parent</b><span>swap upward</span><b>→ valid heap</b></div>';
if(s.visual==="heappeek")visual='<div class="big-formula">H[0] → priority root → O(1)</div>';
if(s.visual==="extract")visual='<div class="mini-flow"><span>remove root</span><b>→ last to root</b><span>heapify down</span></div>';
if(s.visual==="heapify")visual='<div class="big-formula">compare children → swap with best child → repeat</div>';
if(s.visual==="heapsort")visual='<div class="mini-flow"><span>BuildHeap</span><b>→</b><span>swap root/end</span><b>→</b><span>heapify smaller heap</span></div>';
if(s.visual==="hash")visual='<div class="big-formula">key → hash(key) → table index</div>';
if(s.visual==="hashfunc")visual='<div class="big-formula">index = hash(key) mod tableSize</div>';
if(s.visual==="collision")visual='<div class="big-formula">21 mod 10 = 1 &nbsp; and &nbsp; 41 mod 10 = 1 → collision</div>';
if(s.visual==="chaining")visual='<div class="mini-flow"><span>bucket 1</span><b>→</b><span>21</span><b>→</b><span>41</span></div>';
if(s.visual==="probing")visual='<div class="mini-flow"><span>home slot occupied</span><b>→ probe</b><span>next candidate</span><b>→ place</b></div>';
if(s.visual==="linearprobe")visual='<div class="big-formula">(hash(key) + i) mod tableSize</div>';
if(s.visual==="tombstone")visual='<div class="big-formula">occupied → DELETED → occupied &nbsp; keeps probe path alive</div>';
if(s.visual==="load")visual='<div class="big-formula">α = stored entries / table slots</div>';
if(s.visual==="rehash")visual='<div class="mini-flow"><span>larger table</span><b>→ recompute indexes</b><span>reinsert entries</span></div>';
if(s.visual==="compare")visual='<div class="grid"><div class="card"><h3>BST</h3><p>ordered search</p></div><div class="card"><h3>Heap</h3><p>priority</p></div><div class="card"><h3>Hash</h3><p>exact lookup</p></div></div>';
if(s.visual==="decide")visual='<div class="big-formula">dominant operation → choose representation</div>';
$("#slideContent").innerHTML=`${s.kicker?`<div class="kicker">${s.kicker}</div>`:""}<h1>${s.title||""}</h1>${s.body?`<p>${s.body}</p>`:""}${s.points?`<ul>${s.points.map(x=>`<li>${x}</li>`).join("")}</ul>`:""}${visual}`;$("#slideCount").textContent=`${s7i+1} / ${slides7.length}`}
$("#present7").onclick=()=>{s7i=0;renderSlide7();$("#slideOverlay").classList.add("open");$("#prevSlide").onclick=()=>{s7i=(s7i-1+slides7.length)%slides7.length;renderSlide7()};$("#nextSlide").onclick=()=>{s7i=(s7i+1)%slides7.length;renderSlide7()}};

// ---------------- Topic 8 ----------------
const topic8CompleteKey="is237_topic8_complete",topic8AssKey="is237_assignment8_complete",topic8QuizKey="is237_topic8_quiz_score";
function syncTopic8(){const m=$("#mark8"),a=$("#markA8");if(m)m.textContent=localStorage.getItem(topic8CompleteKey)==="1"?"✓ Topic Complete":"✓ Mark Topic Complete";if(a)a.textContent=localStorage.getItem(topic8AssKey)==="1"?"✓ Task Complete":"Mark Task Complete"}
$("#mark8").onclick=()=>{localStorage.setItem(topic8CompleteKey,localStorage.getItem(topic8CompleteKey)==="1"?"0":"1");syncTopic8()};
$("#markA8").onclick=()=>{localStorage.setItem(topic8AssKey,localStorage.getItem(topic8AssKey)==="1"?"0":"1");syncTopic8()};syncTopic8();

const graph8Base={
 nodes:{A:[75,165],B:[220,70],C:[220,260],D:[395,40],E:[395,135],F:[395,275],G:[575,205]},
 edges:[["A","B"],["A","C"],["B","D"],["B","E"],["C","F"],["E","G"],["F","G"]]
};
const graph8Adj={A:["B","C"],B:["A","D","E"],C:["A","F"],D:["B"],E:["B","G"],F:["C","G"],G:["E","F"]};
function edgeKey8(a,b){return [a,b].sort().join("-")}
function renderGraph8(target,config=graph8Base,opts={}){
  const visited=new Set(opts.visited||[]),settled=new Set(opts.settled||[]),pathNodes=new Set(opts.pathNodes||[]),pathEdges=new Set((opts.pathEdges||[]).map(e=>edgeKey8(e[0],e[1])));
  const current=opts.current||null,W=660,H=330;
  const edgeSvg=config.edges.map(e=>{
    const [a,b,w]=e,p1=config.nodes[a],p2=config.nodes[b],k=edgeKey8(a,b),cls=pathEdges.has(k)?"path":(opts.activeEdge&&edgeKey8(...opts.activeEdge)===k?"active":"");
    const wx=(p1[0]+p2[0])/2,wy=(p1[1]+p2[1])/2-7;
    return `<line class="g8-edge ${cls}" x1="${p1[0]}" y1="${p1[1]}" x2="${p2[0]}" y2="${p2[1]}"/>${w!==undefined?`<text class="g8-weight" x="${wx}" y="${wy}">${w}</text>`:""}`;
  }).join("");
  const nodeSvg=Object.entries(config.nodes).map(([n,p])=>{
    let cls="";
    if(pathNodes.has(n))cls="path"; else if(n===current)cls="current"; else if(settled.has(n))cls="settled"; else if(visited.has(n))cls="visited";
    return `<circle class="g8-node ${cls}" cx="${p[0]}" cy="${p[1]}" r="24"/><text class="g8-label" x="${p[0]}" y="${p[1]+1}">${n}</text>`;
  }).join("");
  $(target).innerHTML=`<svg class="graph-svg8" viewBox="0 0 ${W} ${H}">${edgeSvg}${nodeSvg}</svg>`;
}
function chips8(arr){return arr.length?arr.map(x=>`<span class="frontier-chip">${x}</span>`).join(""):"<em>empty</em>"}

// 1. Representation switcher
function renderRep8(){
  renderGraph8("#graphRepVisual");
  if($("#graphRepType").value==="list"){
    $("#graphRepData").innerHTML=`<strong>Adjacency List — O(V+E) storage</strong><div class="adj-list8">${Object.keys(graph8Adj).map(v=>`<div class="adj-row8"><strong>${v}</strong> → ${graph8Adj[v].join(", ")}</div>`).join("")}</div>`;
  }else{
    const vs=Object.keys(graph8Adj);
    const rows=vs.map(r=>`<tr><th>${r}</th>${vs.map(c=>`<td>${graph8Adj[r].includes(c)?1:0}</td>`).join("")}</tr>`).join("");
    $("#graphRepData").innerHTML=`<strong>Adjacency Matrix — O(V²) storage</strong><table class="matrix8"><tr><th></th>${vs.map(v=>`<th>${v}</th>`).join("")}</tr>${rows}</table>`;
  }
}
$("#graphRepType").onchange=renderRep8;renderRep8();

// 2. BFS
const bfsStates8=[
{current:null,visited:["A"],queue:["A"],msg:"Initialise: mark A visited and enqueue A."},
{current:"A",visited:["A","B","C"],queue:["B","C"],msg:"Dequeue A. Discover B and C; enqueue both."},
{current:"B",visited:["A","B","C","D","E"],queue:["C","D","E"],msg:"Dequeue B. D and E are new; enqueue them."},
{current:"C",visited:["A","B","C","D","E","F"],queue:["D","E","F"],msg:"Dequeue C. Discover F."},
{current:"D",visited:["A","B","C","D","E","F"],queue:["E","F"],msg:"Dequeue D. Its only neighbour B is already visited."},
{current:"E",visited:["A","B","C","D","E","F","G"],queue:["F","G"],msg:"Dequeue E. Discover G."},
{current:"F",visited:["A","B","C","D","E","F","G"],queue:["G"],msg:"Dequeue F. G is already discovered."},
{current:"G",visited:["A","B","C","D","E","F","G"],queue:[],msg:"Dequeue G. Traversal is complete."}
];let bfs8i=0;
function drawBFS8(){const s=bfsStates8[bfs8i];renderGraph8("#bfsGraph",graph8Base,{visited:s.visited,current:s.current});$("#bfsQueue").innerHTML=chips8(s.queue);$("#bfsTrace").innerHTML=`Step ${bfs8i+1}/${bfsStates8.length}: ${s.msg}`}
$("#bfsNext").onclick=()=>{bfs8i=Math.min(bfs8i+1,bfsStates8.length-1);drawBFS8()};$("#bfsReset").onclick=()=>{bfs8i=0;drawBFS8()};drawBFS8();

// 3. DFS
const dfsStates8=[
{current:"A",visited:["A"],stack:["A"],msg:"Visit A."},
{current:"B",visited:["A","B"],stack:["A","B"],msg:"From A, recurse to B."},
{current:"D",visited:["A","B","D"],stack:["A","B","D"],msg:"From B, recurse to D. D has no unvisited neighbour; backtrack."},
{current:"E",visited:["A","B","D","E"],stack:["A","B","E"],msg:"Back at B, continue to E."},
{current:"G",visited:["A","B","D","E","G"],stack:["A","B","E","G"],msg:"From E, recurse to G."},
{current:"F",visited:["A","B","D","E","G","F"],stack:["A","B","E","G","F"],msg:"From G, recurse to F."},
{current:"C",visited:["A","B","D","E","G","F","C"],stack:["A","B","E","G","F","C"],msg:"From F, recurse to C. All vertices are now visited."}
];let dfs8i=0;
function drawDFS8(){const s=dfsStates8[dfs8i];renderGraph8("#dfsGraph",graph8Base,{visited:s.visited,current:s.current});$("#dfsStack").innerHTML=chips8(s.stack);$("#dfsTrace").innerHTML=`Step ${dfs8i+1}/${dfsStates8.length}: ${s.msg}`}
$("#dfsNext").onclick=()=>{dfs8i=Math.min(dfs8i+1,dfsStates8.length-1);drawDFS8()};$("#dfsReset").onclick=()=>{dfs8i=0;drawDFS8()};drawDFS8();

// 4. BFS vs DFS
const bfsOrder8=["A","B","C","D","E","F","G"],dfsOrder8=["A","B","D","E","G","F","C"];let comp8i=0;
function drawCompare8(){
  const b=bfsOrder8.slice(0,comp8i+1),d=dfsOrder8.slice(0,comp8i+1);
  renderGraph8("#bfsCompareGraph",graph8Base,{visited:b,current:b[b.length-1]});
  renderGraph8("#dfsCompareGraph",graph8Base,{visited:d,current:d[d.length-1]});
  $("#bfsCompareText").innerHTML=`Visited: <strong>${b.join(" → ")}</strong>`;
  $("#dfsCompareText").innerHTML=`Visited: <strong>${d.join(" → ")}</strong>`;
}
$("#graphCompareNext").onclick=()=>{comp8i=Math.min(comp8i+1,6);drawCompare8()};$("#graphCompareReset").onclick=()=>{comp8i=0;drawCompare8()};drawCompare8();

// 5. directed degree
const directedEdges8=[["A","B"],["A","C"],["C","B"],["B","D"],["C","D"],["D","A"]];
function drawDegree8(){const v=$("#degreeVertex").value;const out=directedEdges8.filter(e=>e[0]===v).map(e=>e[1]),inn=directedEdges8.filter(e=>e[1]===v).map(e=>e[0]);$("#degreeVisual").innerHTML=`A → B &nbsp;&nbsp; A → C<br>C → B &nbsp;&nbsp; B → D<br>C → D &nbsp;&nbsp; D → A`;$("#degreeOut").innerHTML=`Vertex <strong>${v}</strong>: indegree = <strong>${inn.length}</strong> (${inn.length?inn.join(", "):"none"} enter); outdegree = <strong>${out.length}</strong> (${out.length?out.join(", "):"none"} leave).`}
$("#degreeVertex").onchange=drawDegree8;drawDegree8();

// 6. Dijkstra
const dijkstraGraph8={
 nodes:{A:[70,165],B:[220,65],C:[220,265],D:[430,65],E:[430,265],F:[610,165]},
 edges:[["A","B",4],["A","C",2],["B","C",1],["B","D",5],["C","D",8],["C","E",10],["D","E",2],["D","F",6],["E","F",3]]
};
const INF="∞";
const dijStates8=[
{current:"A",settled:[],dist:{A:0,B:INF,C:INF,D:INF,E:INF,F:INF},msg:"Initial state: source A has distance 0; all others are ∞."},
{current:"A",settled:["A"],dist:{A:0,B:4,C:2,D:INF,E:INF,F:INF},msg:"Settle A. Relax A-B and A-C: B=4, C=2."},
{current:"C",settled:["A","C"],dist:{A:0,B:3,C:2,D:10,E:12,F:INF},msg:"C is nearest at 2. Relax C-B, C-D and C-E: B improves to 3; D=10; E=12."},
{current:"B",settled:["A","C","B"],dist:{A:0,B:3,C:2,D:8,E:12,F:INF},msg:"B is nearest at 3. B-D improves D from 10 to 8."},
{current:"D",settled:["A","C","B","D"],dist:{A:0,B:3,C:2,D:8,E:10,F:14},msg:"D is nearest at 8. Relax D-E and D-F: E improves to 10; F=14."},
{current:"E",settled:["A","C","B","D","E"],dist:{A:0,B:3,C:2,D:8,E:10,F:13},msg:"E is nearest at 10. E-F improves F from 14 to 13."},
{current:"F",settled:["A","C","B","D","E","F"],dist:{A:0,B:3,C:2,D:8,E:10,F:13},msg:"F is settled at 13. All shortest distances from A are final."}
];let dij8i=0;
function drawDijkstra8(){const s=dijStates8[dij8i];renderGraph8("#dijkstraGraph",dijkstraGraph8,{settled:s.settled,current:s.current});$("#dijkstraDistances").innerHTML=Object.entries(s.dist).map(([v,d])=>`<div class="distance-card ${v===s.current?"current":s.settled.includes(v)?"settled":""}"><strong>${v}</strong><br>${d}</div>`).join("");$("#dijkstraTrace").innerHTML=`Step ${dij8i+1}/${dijStates8.length}: ${s.msg}`}
$("#dijkstraNext").onclick=()=>{dij8i=Math.min(dij8i+1,dijStates8.length-1);drawDijkstra8()};$("#dijkstraReset").onclick=()=>{dij8i=0;drawDijkstra8()};drawDijkstra8();

// 7. shortest path reconstruction
const shortestPath8=["A","C","B","D","E","F"];let path8i=0;
function drawPath8(){const nodes=shortestPath8.slice(0,path8i+1),edges=[];for(let i=0;i<path8i;i++)edges.push([shortestPath8[i],shortestPath8[i+1]]);renderGraph8("#pathGraph",dijkstraGraph8,{pathNodes:nodes,pathEdges:edges,current:nodes[nodes.length-1]});$("#pathTrace").innerHTML=path8i===0?"Start at A. Final predecessor chain for F corresponds to A → C → B → D → E → F.":`Revealed path: <strong>${nodes.join(" → ")}</strong>${path8i===shortestPath8.length-1?" · total cost = 13.":""}`}
$("#pathNext").onclick=()=>{path8i=Math.min(path8i+1,shortestPath8.length-1);drawPath8()};$("#pathReset").onclick=()=>{path8i=0;drawPath8()};drawPath8();

// 8. density explorer
function density8(){const V=10,E=+$("#densitySlider").value,max=45,d=E/max,listUnits=V+2*E,matrixUnits=V*V;$("#densityEVal").textContent=E;$("#densityOut").innerHTML=`Density = ${E}/${max} = <strong>${d.toFixed(2)}</strong>.<br>Teaching storage approximation for an undirected graph: adjacency list ≈ V + 2E = <strong>${listUnits}</strong> units; matrix = V² = <strong>${matrixUnits}</strong> cells.<br>${d<0.4?"This is relatively sparse; an adjacency list is usually attractive.":"This is becoming relatively dense; a matrix may be reasonable when constant-time edge checks matter."}`}
$("#densitySlider").oninput=density8;density8();

// 9. components
const compGraph8={nodes:{A:[90,100],B:[210,55],C:[210,155],D:[390,100],E:[510,100],F:[390,255],G:[510,255]},edges:[["A","B"],["A","C"],["B","C"],["D","E"],["F","G"]]};
const componentSets8=[["A","B","C"],["D","E"],["F","G"]];let component8i=0;
function drawComponents8(){const visited=componentSets8.slice(0,component8i+1).flat(),currentComp=componentSets8[component8i];renderGraph8("#componentGraph",compGraph8,{visited,current:currentComp[0]});$("#componentTrace").innerHTML=`Component ${component8i+1}: <strong>{${currentComp.join(", ")}}</strong>. ${component8i<2?"After finishing it, scan for another unvisited vertex to start a new traversal.":"All vertices now belong to one of 3 connected components."}`}
$("#componentNext").onclick=()=>{component8i=Math.min(component8i+1,2);drawComponents8()};$("#componentReset").onclick=()=>{component8i=0;drawComponents8()};drawComponents8();

// 10. algorithm choice
const graphChoiceCases8=[
{t:"Find the fewest hops from one router to another when every link counts equally.",a:"bfs",why:"BFS gives shortest path by number of edges in an unweighted graph."},
{t:"Explore every branch of a dependency network deeply and backtrack.",a:"dfs",why:"DFS naturally follows one path deeply before returning."},
{t:"Find the cheapest road route when roads have different non-negative costs.",a:"dijkstra",why:"Dijkstra minimises total non-negative edge weight."},
{t:"Identify connected regions in an undirected graph.",a:"dfs",why:"DFS (or BFS) can mark one component at a time; DFS is a natural choice here."},
{t:"Find all people within two friendship links of a user.",a:"bfs",why:"BFS explores the graph by distance levels."}
];let gc8=0;
function showGraphChoice8(){const c=graphChoiceCases8[gc8];$("#graphChoicePrompt").innerHTML=`Scenario ${gc8+1}/${graphChoiceCases8.length}: <strong>${c.t}</strong>`;$("#graphChoiceFeedback").textContent=""}
$$(".graphChoice").forEach(b=>b.onclick=()=>{const c=graphChoiceCases8[gc8],ok=b.dataset.choice===c.a;$("#graphChoiceFeedback").className="feedback "+(ok?"ok":"no");$("#graphChoiceFeedback").textContent=(ok?"Good choice. ":"Reconsider. ")+c.why;setTimeout(()=>{gc8=(gc8+1)%graphChoiceCases8.length;showGraphChoice8()},1400)});showGraphChoice8();

$$(".qc8").forEach(b=>b.onclick=()=>{const f=b.nextElementSibling;f.textContent=b.dataset.answer;f.className="feedback ok"});

// Quiz 8
const quiz8Data=[{"q": "What does G=(V,E) represent?", "opts": ["Vertices and edges", "Values and equations", "Variables and errors", "Vectors and events"], "a": 0}, {"q": "What is a cycle?", "opts": ["A path returning to its start", "A vertex with no edges", "A sorted adjacency list", "A queue state"], "a": 0}, {"q": "In a directed graph, outdegree counts:", "opts": ["incoming edges", "outgoing edges", "all vertices", "cycles only"], "a": 1}, {"q": "What is adjacency-matrix space complexity?", "opts": ["O(V)", "O(E)", "O(V+E)", "O(V\u00b2)"], "a": 3}, {"q": "What is adjacency-list space complexity?", "opts": ["O(1)", "O(V+E)", "O(V\u00b2)", "O(E\u00b2)"], "a": 1}, {"q": "Which representation is usually especially suitable for sparse graphs?", "opts": ["Adjacency list", "Adjacency matrix only", "Heap", "Stack"], "a": 0}, {"q": "Which ADT controls BFS?", "opts": ["Stack", "Queue", "Heap", "Hash table"], "a": 1}, {"q": "Which ADT or mechanism controls DFS?", "opts": ["Queue only", "Stack or recursion", "Hash table only", "Priority queue only"], "a": 1}, {"q": "Why does BFS mark newly discovered vertices visited?", "opts": ["To sort them", "To avoid duplicate frontier entries and repeated work", "To compute weights", "To create a matrix"], "a": 1}, {"q": "What is adjacency-list BFS complexity?", "opts": ["O(1)", "O(log V)", "O(V+E)", "O(V\u00b2) always"], "a": 2}, {"q": "What is adjacency-list DFS complexity?", "opts": ["O(V+E)", "O(V\u00b2) always", "O(E\u00b2)", "O(log V)"], "a": 0}, {"q": "What shortest-path property does BFS provide?", "opts": ["Minimum weighted cost for arbitrary weights", "Shortest path by number of edges in an unweighted graph", "Only longest paths", "No path information"], "a": 1}, {"q": "What is a connected component?", "opts": ["A maximal set of mutually reachable vertices in an undirected graph", "A heap subtree", "One matrix cell", "A sorted path"], "a": 0}, {"q": "Why is a visited set crucial in cyclic graphs?", "opts": ["To increase degree", "To prevent repeated/infinite traversal", "To make edges weighted", "To force direction"], "a": 1}, {"q": "What problem does Dijkstra solve?", "opts": ["Sorting", "Single-source shortest paths with non-negative weights", "Hash collisions", "Tree deletion"], "a": 1}, {"q": "What is relaxation?", "opts": ["Deleting an edge", "Testing whether a route through u improves distance[v]", "Sorting vertices", "Reducing table size"], "a": 1}, {"q": "Which structure commonly implements Dijkstra's priority queue?", "opts": ["Min-heap", "FIFO queue only", "Singly linked list only", "BST traversal"], "a": 0}, {"q": "What is a common Dijkstra complexity using an adjacency list and binary heap?", "opts": ["O(1)", "O(V\u00b2E)", "O((V+E) log V)", "O(2^V)"], "a": 2}, {"q": "When should Dijkstra not be applied directly?", "opts": ["When all weights are positive", "When negative edge weights are present", "When using adjacency lists", "When the graph is sparse"], "a": 1}, {"q": "Which statement is most accurate?", "opts": ["DFS always gives shortest paths", "BFS and DFS use the same frontier discipline", "Representation and algorithm should be chosen according to graph properties and required operations", "Adjacency matrices always use less memory"], "a": 2}];
$("#quiz8Container").innerHTML=quiz8Data.map((q,i)=>`<div class="quiz-q"><strong>${i+1}. ${q.q}</strong>${q.opts.map((o,j)=>`<label><input type="radio" name="t8q${i}" value="${j}"> ${o}</label>`).join("")}</div>`).join("");
$("#gradeQuiz8").onclick=()=>{let score=0;quiz8Data.forEach((q,i)=>{const s=document.querySelector(`input[name=t8q${i}]:checked`);if(s&&+s.value===q.a)score++});localStorage.setItem(topic8QuizKey,score);const r=$("#quiz8Result");r.className="result "+(score>=15?"good":"");r.textContent=`Score: ${score}/20. ${score>=15?"Strong understanding of graphs and graph algorithms.":"Review representation, BFS/DFS and Dijkstra animations, then try again."}`};

// Presentation Topic 8
let s8i=0;const slides8=window.IS237_TOPIC8_SLIDES||[];
function renderSlide8(){const s=slides8[s8i]||{};let visual="";
if(s.visual==="opening")visual='<div class="big-formula">entities + relationships → graph → traversal / path algorithm</div>';
if(s.visual==="euler")visual='<div class="big-formula">land regions → vertices &nbsp; | &nbsp; bridges → edges</div>';
if(s.visual==="ge")visual='<div class="big-formula">G = (V, E)</div>';
if(s.visual==="direction")visual='<div class="grid"><div class="card"><h3>Undirected</h3><p>A — B</p></div><div class="card"><h3>Directed</h3><p>A → B</p></div></div>';
if(s.visual==="weight")visual='<div class="big-formula">A — 7 — B &nbsp; means edge cost/length/time = 7</div>';
if(s.visual==="represent")visual='<div class="grid"><div class="card"><h3>Matrix</h3><p>V × V</p></div><div class="card"><h3>List</h3><p>neighbours per vertex</p></div></div>';
if(s.visual==="matrix")visual='<div class="big-formula">edge(u,v) lookup → O(1) &nbsp; | &nbsp; space O(V²)</div>';
if(s.visual==="list")visual='<div class="big-formula">store existing neighbours → O(V + E) space</div>';
if(s.visual==="visited")visual='<div class="mini-flow"><span>discover</span><b>→ mark visited</b><span>frontier</span><b>→ avoid repeats</b></div>';
if(s.visual==="bfs")visual='<div class="big-formula">BFS frontier = QUEUE → level by level</div>';
if(s.visual==="queue")visual='<div class="mini-flow"><span>A</span><b>dequeue</b><span>B,C</span><b>then</b><span>C,D,E</span></div>';
if(s.visual==="complexity")visual='<div class="big-formula">adjacency list traversal = O(V + E)</div>';
if(s.visual==="shortest")visual='<div class="big-formula">unweighted shortest path → first BFS discovery level</div>';
if(s.visual==="pred")visual='<div class="mini-flow"><span>target</span><b>← predecessor</b><span>...</span><b>←</b><span>source</span></div>';
if(s.visual==="dfs")visual='<div class="big-formula">DFS frontier = STACK / recursion → deep then backtrack</div>';
if(s.visual==="recursion")visual='<div class="mini-flow"><span>A</span><b>→ call B</b><span>B</span><b>→ call D</b><span>D</span><b>→ return</b></div>';
if(s.visual==="stack")visual='<div class="big-formula">push neighbours → pop most recent → continue deeply</div>';
if(s.visual==="bfsdfs")visual='<div class="grid"><div class="card"><h3>BFS</h3><p>Queue · level</p></div><div class="card"><h3>DFS</h3><p>Stack · depth</p></div></div>';
if(s.visual==="components")visual='<div class="big-formula">finish one traversal → find unvisited vertex → new component</div>';
if(s.visual==="cycle")visual='<div class="big-formula">cycle + no visited set → repeated exploration</div>';
if(s.visual==="degree")visual='<div class="big-formula">indegree = arrows in &nbsp; | &nbsp; outdegree = arrows out</div>';
if(s.visual==="weightedpath")visual='<div class="big-formula">fewest edges ≠ always lowest total cost</div>';
if(s.visual==="dijkstra")visual='<div class="mini-flow"><span>nearest unsettled</span><b>→ settle</b><span>relax neighbours</span><b>→ repeat</b></div>';
if(s.visual==="distance")visual='<div class="big-formula">dist[source] = 0 &nbsp; | &nbsp; all others = ∞</div>';
if(s.visual==="relax")visual='<div class="big-formula">if dist[u] + w(u,v) &lt; dist[v] → update</div>';
if(s.visual==="heap")visual='<div class="big-formula">min-heap → extract smallest tentative distance efficiently</div>';
if(s.visual==="dcomplexity")visual='<div class="big-formula">O((V + E) log V) with adjacency list + binary heap</div>';
if(s.visual==="bfsdijkstra")visual='<div class="grid"><div class="card"><h3>BFS</h3><p>equal edge costs</p></div><div class="card"><h3>Dijkstra</h3><p>different non-negative costs</p></div></div>';
if(s.visual==="course")visual='<div class="mini-flow"><span>Queue</span><b>→ BFS</b><span>Stack</span><b>→ DFS</b><span>Heap</span><b>→ Dijkstra</b></div>';
if(s.visual==="final")visual='<div class="big-formula">representation ↔ algorithm ↔ efficiency</div>';
$("#slideContent").innerHTML=`${s.kicker?`<div class="kicker">${s.kicker}</div>`:""}<h1>${s.title||""}</h1>${s.body?`<p>${s.body}</p>`:""}${s.points?`<ul>${s.points.map(x=>`<li>${x}</li>`).join("")}</ul>`:""}${visual}`;$("#slideCount").textContent=`${s8i+1} / ${slides8.length}`}
$("#present8").onclick=()=>{s8i=0;renderSlide8();$("#slideOverlay").classList.add("open");$("#prevSlide").onclick=()=>{s8i=(s8i-1+slides8.length)%slides8.length;renderSlide8()};$("#nextSlide").onclick=()=>{s8i=(s8i+1)%slides8.length;renderSlide8()}};
