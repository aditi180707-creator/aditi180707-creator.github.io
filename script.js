(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};

/* projects */
var A=[
 {n:'Sales',t:'AI Sales Agent',tag:'Building first',d:'The first agent to ship. It handles the sales workflow so a small team can follow up faster and lose fewer leads.'},
 {n:'Support',t:'Support Agent',tag:'Planned',d:'Answers customers and routes the hard cases to a human, with the business context already attached.'},
 {n:'Analytics',t:'Analytics Agent',tag:'Planned',d:'Turns business data into plain-language answers and next steps.'},
 {n:'Research',t:'Research Agent',tag:'Planned',d:'Market, competitor and lead research on demand, summarised for decisions.'},
 {n:'Ops',t:'Ops Agent',tag:'Planned',d:'Takes repeat operational tasks off the founder\'s plate.'},
 {n:'Founder',t:'Founder Agent',tag:'Planned',d:'A single view across every agent, built for the person running the company.'}
];
var P=[
 {id:'bizos',cat:'ai web',name:'BizOS',sub:'Agentic AI · Full-stack SaaS',year:'2026',status:'In progress',
  title:'A business run by AI agents',
  lead:'An agentic AI operating system for startups and small businesses. One multi-tenant platform where specialised agents take over the sales, support, research and ops work that small teams never have hands for.',
  pts:['Starts with an AI Sales Agent, with Support, Analytics, Research, Ops and Founder agents planned on the same core.','Multi-tenant from the first commit, so every business gets its own isolated workspace.','Production-minded stack: React, TypeScript and Tailwind on the front, FastAPI and PostgreSQL behind it, deployed on Vercel and Railway.'],
  tags:['React','TypeScript','Tailwind','FastAPI','PostgreSQL','Multi-tenant','Vercel + Railway'],impact:[['6 agents','Sales first, five more planned'],['Multi-tenant','built in from day one']],agents:1},
 {id:'authenticity',cat:'ai',name:'AI Image Authenticity Detector',sub:'Python · ML · Web app',year:'2026',
  title:'Real or AI-generated?',
  lead:'A classifier that tells real photographs from AI-generated images, built end to end: preprocessing, model, inference and a deployed web interface.',
  pts:['Upload an image and get a probability-based authenticity report in real time instead of a bare yes or no.','Preprocessing pipeline with normalisation and artifact detection, so predictions hold up across images from very different sources.','Owned the full path from raw data to a usable product, including the interface non-technical users actually touch.'],
  tags:['Python','Machine Learning','Image preprocessing','Web app'],impact:[['Real-time','analysis on upload'],['End to end','data → model → deploy']]},
 {id:'cargo',cat:'ai',name:'Smart Cargo Scanning',sub:'Python · Computer vision',year:'2026',
  title:'Inspection that flags itself',
  lead:'An automated cargo inspection pipeline that reads scanned images, detects the items inside and points inspectors to what needs a human look.',
  pts:['Image processing plus object detection to identify items within scanned cargo.','Designed as a complete workflow, from scan in to flagged items out, to cut manual review effort.','Built around the inspector: the system narrows attention instead of replacing judgment.'],
  tags:['Python','Computer vision','Object detection','Web app'],impact:[['Auto-flagging','of items for review'],['Less manual','review per scan']]},
 {id:'prithvinet',cat:'web',name:'PrithviNet',sub:'Web · Data viz · Environment',year:'2026',
  title:'Pollution, made readable',
  lead:'A real-time environmental monitoring platform tracking air, water and noise pollution, designed for scale with government monitoring use cases in mind.',
  pts:['Interactive dashboards for AQI trends and regulatory compliance, built for stakeholders who do not read raw data.','Automated threshold-based alerts and predictive insights so teams can act before limits are crossed.','Architected for scalability from the start rather than patched for it later.'],
  tags:['JavaScript','Data visualisation','Dashboards','Alerts'],impact:[['3 streams','air · water · noise'],['Proactive','alerts + predictions']]},
 {id:'kairos',cat:'creative',name:'Kairos',sub:'Web app · Creative UI',year:'2025',
  title:'A photobooth that feels like one',
  lead:'A browser-based photobooth with live filters, capture effects and instant download and share. The idea is simple. The craft is in how good it feels to use.',
  pts:['Live filters and capture effects running in the browser.','Instant download and share, so the photo leaves the app in one tap.','Playful, responsive UI/UX that turns a technically small idea into something people open twice.'],
  tags:['JavaScript','Canvas','UI / UX','Responsive'],impact:[['Live','filters in browser'],['1 tap','to save or share']]},
 {id:'studystash',cat:'web',name:'StudyStash',sub:'Web application',year:'2025',
  title:'One home for study material',
  lead:'A centralised platform to organise and manage study resources, with structured storage and fast retrieval, so notes stop living in six different places.',
  pts:['Structured organisation of resources by subject and type.','Built for quick retrieval, because a resource you cannot find in ten seconds is a resource you will not use.'],
  tags:['Web app','Data structures','Storage & search'],impact:[['Structured','storage'],['Fast','retrieval']]}
];
var files=$('#files'),detail=$('#detail'),cur='bizos';
function folder(){return '<svg><use href="#folder"/></svg>'}
function renderList(){
  files.innerHTML=P.map(function(p){return '<button class="file" role="option" data-id="'+p.id+'" data-cat="'+p.cat+'" aria-selected="'+(p.id===cur)+'">'+folder()+'<span>'+p.name+'<small>'+p.sub+' · '+p.year+'</small></span></button>'}).join('');
}
function show(id){
  cur=id;var p=P.filter(function(x){return x.id===id})[0];
  $$('.file').forEach(function(b){b.setAttribute('aria-selected',b.dataset.id===id)});
  detail.innerHTML='<div class="bar"><b>'+p.name.toLowerCase().replace(/ /g,'_')+'.app</b><i></i><i></i></div><div class="win-body"><div class="tag"><span class="status'+(p.status?' live':'')+'">'+(p.status?p.status:p.year+' · shipped')+'</span></div><h3 class="disp">'+p.title+'</h3><p style="font-size:1.1rem;max-width:36em">'+p.lead+'</p><ul>'+p.pts.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><div class="chips">'+p.tags.map(function(t){return '<span class="chip">'+t+'</span>'}).join('')+'</div>'+(p.agents?'<div class="agents"><p class="mono">Agents · tap one</p><div class="chips">'+A.map(function(a,i){return '<button class="chip ag" data-i="'+i+'" aria-pressed="'+(i===0)+'">'+a.n+'</button>'}).join('')+'</div><div class="agent-info" id="agentInfo"></div></div>':'')+'<div class="impact">'+p.impact.map(function(i){return '<div><b>'+i[0]+'</b><span>'+i[1]+'</span></div>'}).join('')+'</div></div>';
}
function agent(i){var a=A[i];$$('.ag').forEach(function(n){n.setAttribute('aria-pressed',+n.dataset.i===i)});var el=$('#agentInfo');if(el)el.innerHTML='<p class="mono">'+a.tag+'</p><h4>'+a.t+'</h4><p>'+a.d+'</p>'}
detail.addEventListener('click',function(e){var n=e.target.closest('.ag');if(n)agent(+n.dataset.i)});
renderList();show(cur);agent(0);
files.addEventListener('click',function(e){var b=e.target.closest('.file');if(b){show(b.dataset.id);agent(0)}});
$$('.filters button').forEach(function(b){b.addEventListener('click',function(){
  $$('.filters button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
  var f=b.dataset.f,first=null;
  $$('.file').forEach(function(x){var ok=f==='all'||x.dataset.cat.split(' ').indexOf(f)>-1;x.hidden=!ok;if(ok&&!first)first=x});
  if(first){show(first.dataset.id);agent(0)}
})});

/* reel */
var v=$('#reel'),pb=$('#playBtn');v.play&&v.play().catch(function(){pb.textContent='▶ Play'});
pb.onclick=function(){if(v.paused){v.play().catch(function(){});pb.textContent='❚❚ Pause'}else{v.pause();pb.textContent='▶ Play'}};

/* start menu */
var sb=$('#startBtn'),sm=$('#startMenu');
sb.onclick=function(e){e.stopPropagation();sm.hidden=!sm.hidden;sb.setAttribute('aria-expanded',!sm.hidden)};
document.addEventListener('click',function(e){if(!sm.hidden&&!sm.contains(e.target)){sm.hidden=true;sb.setAttribute('aria-expanded','false')}});
sm.addEventListener('click',function(){sm.hidden=true});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){sm.hidden=true}});

/* theme */
var root=document.documentElement;
$('#themeBtn').onclick=function(){var dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;root.dataset.theme=dark?'light':'dark'};

/* clock */
function tick(){var d=new Date();$('#clock').textContent=d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}
tick();setInterval(tick,30000);

/* active nav */
var links=$$('.tasklinks a');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
['work','about','skills','design','contact'].forEach(function(id){var el=document.getElementById(id);if(el)io.observe(el)});

/* copy */
var toast=$('#toast');
function say(m){toast.textContent=m;toast.classList.add('on');setTimeout(function(){toast.classList.remove('on')},1800)}
$('#copyMail').onclick=function(){var t=$('#mail').textContent;
  var fb=function(){var r=document.createRange();r.selectNodeContents($('#mail'));var s=getSelection();s.removeAllRanges();s.addRange(r);say('Selected, press copy')};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){say('Email copied')},fb)}else fb()};

/* draggable stickers */
$$('[data-drag]').forEach(function(el){var sx,sy,ox,oy,on=0;
  el.addEventListener('pointerdown',function(e){on=1;el.setPointerCapture(e.pointerId);sx=e.clientX;sy=e.clientY;ox=el.offsetLeft;oy=el.offsetTop;el.style.right='auto';el.style.bottom='auto';el.style.left=ox+'px';el.style.top=oy+'px'});
  el.addEventListener('pointermove',function(e){if(!on)return;el.style.left=(ox+e.clientX-sx)+'px';el.style.top=(oy+e.clientY-sy)+'px'});
  el.addEventListener('pointerup',function(){on=0})});

/* sparkle trail (fine pointers only) */
if(matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
  var last=0,cols=['#DF4C74','#FC8A2D','#FCE9AB','#C42B34'];
  document.addEventListener('pointermove',function(e){var n=Date.now();if(n-last<55)return;last=n;
    var s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('class','spark');s.setAttribute('viewBox','0 0 40 40');s.style.left=(e.clientX+6)+'px';s.style.top=(e.clientY+6)+'px';s.style.color=cols[Math.floor(Math.random()*4)];
    s.innerHTML='<use href="#star4"/>';document.body.appendChild(s);setTimeout(function(){s.remove()},700)})}
})();
