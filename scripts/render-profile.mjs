import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
function render(cfg,data,selected){
const themes={circuit:["Circuit Fabric","#0e1710","#19271b","#354b32","#c1f45f","#a5bea5"],garage:["Engineering Garage","#191714","#26221c","#574736","#efb566","#c1af92"],terminal:["Developer OS","#0b141a","#14232b","#30474d","#65e5bd","#9fb8c0"],city:["Contribution City","#111524","#1c2239","#41496a","#b7acff","#abb4d4"],universe:["Repository Universe","#0b1020","#161f36","#344d6a","#87d8ff","#a1b2ce"]};
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const text=(x,y,s,size=14,fill="#f3f5f7",weight=400,anchor="start",mono=false)=>`<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${weight}" text-anchor="${anchor}" font-family="${mono?"monospace":"system-ui,sans-serif"}">${esc(s)}</text>`;
const rect=(x,y,w,h,fill,stroke="none",rx=5)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" rx="${rx}"/>`;
const path=(d,stroke,w=1,opacity=1)=>`<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${w}" opacity="${opacity}"/>`;
const circle=(x,y,r,fill)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
const pulse=(d,fill,dur=4)=>`<circle class="motion" r="2.6" fill="${fill}"><animateMotion path="${d}" dur="${dur}s" repeatCount="indefinite"/></circle>`;
if(!Array.isArray(cfg.themes)||!cfg.themes.length||new Set(cfg.themes).size!==cfg.themes.length||cfg.themes.some(t=>!themes[t])||!Number.isFinite(cfg.seconds_per_scene)||cfg.seconds_per_scene<4||cfg.seconds_per_scene>120)throw Error("Invalid theme configuration");
if(!Array.isArray(data.weeks)||!data.weeks.length||data.weeks.length>54||data.weeks.some(w=>w.length!==7||w.some(v=>v!==null&&(!Number.isInteger(v)||v<0||v>4))))throw Error("Invalid contribution snapshot");
for(const k of ["contributions","repos","stars"])if(data[k]!==null&&(!Number.isInteger(data[k])||data[k]<0))throw Error("Invalid metric "+k);
function scene(t,i){
const [name,bg,panel,border,a,m]=themes[t],out=[rect(1,1,898,558,bg,border,15),text(25,31,`${String(i+1).padStart(2,"0")} / ${name.toUpperCase()}`,13,a,700,"start",true),text(875,31,"PUNE · INDIA",12,m,400,"end",true),path("M25 44H875",border),text(25,85,"Jayant Singh Bhadauria",33,"#f3f5f7",750),text(25,113,"Java Backend Engineer · Full-Stack Developer",16,m,500),text(25,135,"Competitive Programmer · Distributed Systems · Payments",14,a,500)];
if(t==="circuit"){for(let j=0;j<6;j++){let y=58+j*14,d=`M875 ${y} H${820-j*7} l-12 12 H730`;out.push(path(d,border,2),pulse(d,a,2.5+j*.4));}out.push(rect(700,65,55,58,panel,a,4),text(727,100,"JAVA",13,a,700,"middle",true));}
if(t==="garage"){for(let j=0;j<27;j++){const q=(145+j*10)*Math.PI/180;out.push(path(`M${(778+58*Math.cos(q)).toFixed(1)} ${(102+58*Math.sin(q)).toFixed(1)}L${(778+48*Math.cos(q)).toFixed(1)} ${(102+48*Math.sin(q)).toFixed(1)}`,j<18?a:border,2));}out.push(`<g transform="translate(778 102)"><g><path d="M0 0V-42" stroke="${a}" stroke-width="3"/><animateTransform class="motion" attributeName="transform" type="rotate" values="-90;65;20;65;-90" dur="8s" repeatCount="indefinite"/></g></g>`,circle(778,102,4,a),text(778,125,"ENGINEERING",10,m,400,"middle",true));}
if(t==="terminal")out.push(rect(680,55,195,89,panel,border),text(692,75,"$ whoami",12,a,400,"start",true),text(692,94,"> backend engineer",11,"#f3f5f7",400,"start",true),text(692,113,"> java / spring",11,"#f3f5f7",400,"start",true),text(692,132,"$ git log _",12,a,400,"start",true));
if(t==="city"){for(let j=0;j<12;j++){const x=690+j*15,h=14+(j*17)%59;out.push(rect(x,137-h,12,h,panel,j%3===0?a:border,0),path(`M${x+3} ${142-h}h6`,a));}}
if(t==="universe"){out.push(circle(780,95,12,a));[28,48,70,90].forEach((r,j)=>{let ry=r*.42,d=`M${780+r} 95 A${r} ${ry} 0 1 0 ${780-r} 95 A${r} ${ry} 0 1 0 ${780+r} 95`;out.push(`<ellipse cx="780" cy="95" rx="${r}" ry="${ry}" fill="none" stroke="${border}"/>`,pulse(d,a,5+j*2));});}
[["100M+","ICICI live token base"],["100K+/h","Multi-node acceptance test"],["13M+","Wallet rollout coverage"]].forEach(([v,d],j)=>{const x=25+j*287;out.push(rect(x,157,276,73,panel,border),text(x+12,188,v,24,a,700,"start",true),text(x+12,211,d,12,m));});
out.push(text(25,255,"GITHUB / CONTRIBUTION CALENDAR",12,a,700,"start",true),text(875,255,"THROUGH "+data.through,11,m,400,"end",true),rect(25,263,850,120,panel,border));
const n=data.weeks.length,dx=820/n,active=[];
for(let c=0;c<n;c++){
const w=data.weeks[c];if(t==="garage"){const v=w.reduce((s,v)=>s+(v??0),0),h=Math.max(2,v/28*85);out.push(rect(38+c*dx,369-h,Math.max(2,dx-3),h,v?a:border,"none",1));continue;}
for(let r=0;r<7;r++){const v=w[r];if(v===null)continue;const x=38+c*dx,y=271+r*14.8,fill=v?a:border,op=.25+v*.18;if(v)active.push([x+4,y+4]);
if(t==="city"){const xx=38+c*790/n+r*2.2,yy=351+r*3.4,h=2+v*13;out.push(`<path d="M${xx.toFixed(2)} ${yy.toFixed(2)}v${-h}l5 -2 5 2v${h}l-5 2z" fill="${fill}" opacity="${op}" stroke="${bg}" stroke-width=".4"/>`);}
else if(t==="universe")out.push(`<circle cx="${x+4}" cy="${y+4}" r="${1+v*.65}" fill="${fill}" opacity="${op}"/>`);
else out.push(`<rect x="${x}" y="${y}" width="${Math.min(11,dx-2)}" height="11" rx="2" fill="${fill}" opacity="${op}"/>`);
}}
if(t==="garage")out.push(text(40,283,"Weekly sum of daily intensity levels",10,m,400,"start",true));
if(t==="terminal")out.push(`<rect class="motion" x="38" y="269" width="2" height="105" fill="${a}" opacity=".65"><animate attributeName="x" values="38;850;38" dur="10s" repeatCount="indefinite"/></rect>`);
if(t==="city")out.push(path("M38 374L850 333",a,1,.3),pulse("M38 374L850 333",a,8));
if(t==="circuit"||t==="universe")for(let j=1;j<active.length;j++){const [x,y]=active[j-1],[xx,yy]=active[j],d=t==="circuit"?`M${x} ${y}H${xx}V${yy}`:`M${x} ${y}L${xx} ${yy}`;out.push(path(d,a,1,.3));if(j%8===1)out.push(pulse(d,a,3+j%4));}
[["CONTRIBUTIONS",data.contributions],["PUBLIC REPOS",data.repos],["REPO STARS",data.stars]].forEach(([k,v],j)=>out.push(text(25+j*287,403,k,11,m,400,"start",true),text(25+j*287,427,v===null?"—":v.toLocaleString("en-US"),20,a,700,"start",true)));
out.push(path("M25 437H875",border),text(25,458,"SELECTED ENGINEERING",11,a,700,"start",true));
[["Sentinel-Ledger","Retry-safe double-entry payments"],["RegisterRover","Camera-based attendance tracking"]].forEach(([n,d],j)=>{const x=25+j*430;out.push(rect(x,466,420,49,panel,border),text(x+10,486,n,15,"#f3f5f7",700),text(x+10,503,d,12,m));const meta=data.featured.find(v=>v.name===n);if(meta)out.push(text(x+409,486,"★ "+meta.stars,12,a,400,"end"));});
out.push(text(25,540,"JAVA · SPRING · REDIS · KAFKA · POSTGRESQL",11,m,400,"start",true),text(875,540,"LIFT / RUN / TREK / RIDE",11,a,400,"end",true));return out.join("");
}
const root='<svg xmlns="http://www.w3.org/2000/svg" width="900" height="560" viewBox="0 0 900 560" role="img" aria-labelledby="title desc"><title id="title">Jayant Singh Bhadauria — developer profile</title><desc id="desc">Five visual treatments of the same profile and contribution calendar. Native README contains complete details.</desc>';
if(selected)return root+'<style>@media(prefers-reduced-motion:reduce){.motion{display:none}}</style>'+scene(selected,cfg.themes.indexOf(selected))+"</svg>\n";
let css="",groups="";const n=cfg.themes.length;cfg.themes.forEach((t,i)=>{const start=i*100/n,end=(i+1)*100/n;const frames=n===1?"0%,100%{opacity:1}":i===0?`0%{opacity:1}${end}%,100%{opacity:0}`:i===n-1?`0%{opacity:0}${start}%,100%{opacity:1}`:`0%{opacity:0}${start}%{opacity:1}${end}%,100%{opacity:0}`;css+=`@keyframes scene${i}{${frames}}.scene${i}{animation:scene${i} ${n*cfg.seconds_per_scene}s steps(1,end) infinite}`;groups+=`<g class="scene scene${i}" opacity="${i===0?1:0}">${scene(t,i)}</g>`;});
return root+"<style>"+css+"@media(prefers-reduced-motion:reduce){.scene{animation:none!important;opacity:0}.scene0{opacity:1}.motion{display:none}}</style>"+groups+"</svg>\n";
}
async function refresh(cfg){
const token=process.env.GITHUB_TOKEN;if(!token)throw Error("GITHUB_TOKEN is required");
const query=`query($login:String!,$cursor:String){user(login:$login){contributionsCollection{contributionCalendar{totalContributions weeks{contributionDays{date contributionLevel}}}} repositories(first:100,after:$cursor,privacy:PUBLIC,ownerAffiliations:OWNER){totalCount pageInfo{hasNextPage endCursor} nodes{name stargazerCount pushedAt}}}}`;
let cursor=null,nodes=[],calendar,total;do{const res=await fetch("https://api.github.com/graphql",{method:"POST",headers:{Authorization:"Bearer "+token,"Content-Type":"application/json","User-Agent":"profile-cycle-generator"},body:JSON.stringify({query,variables:{login:cfg.username,cursor}}),signal:AbortSignal.timeout(30000)});const json=await res.json();if(!res.ok||json.errors||!json.data?.user)throw Error("GitHub GraphQL refresh failed; previous snapshot retained");const u=json.data.user;calendar??=u.contributionsCollection.contributionCalendar;const r=u.repositories;nodes.push(...r.nodes);total=r.totalCount;cursor=r.pageInfo.hasNextPage?r.pageInfo.endCursor:null;}while(cursor);
const levels={NONE:0,FIRST_QUARTILE:1,SECOND_QUARTILE:2,THIRD_QUARTILE:3,FOURTH_QUARTILE:4},dates=[];
const weeks=calendar.weeks.map(w=>{const row=Array(7).fill(null);for(const d of w.contributionDays){dates.push(d.date);row[new Date(d.date+"T00:00:00Z").getUTCDay()]=levels[d.contributionLevel];}return row;});
return {through:dates.sort().at(-1),source:"GitHub contribution calendar visible to workflow token; public owned repositories",weeks,contributions:calendar.totalContributions,repos:total,stars:nodes.reduce((s,r)=>s+r.stargazerCount,0),featured:nodes.filter(r=>cfg.featured.includes(r.name)).map(r=>({name:r.name,stars:r.stargazerCount,pushed:r.pushedAt?.slice(0,10)}))};
}
const config=JSON.parse(await fs.readFile(path.join(root,'config/profile-cycle.json'),'utf8'));
const dataPath=path.join(root,'config/profile-data.json');
const live=process.argv.includes('--refresh');
const data=live?await refresh(config):JSON.parse(await fs.readFile(dataPath,'utf8'));
const files={'cycle.svg':render(config,data)};for(const t of config.themes)files[t+'.svg']=render(config,data,t);
for(const [name,svg] of Object.entries(files)){assert(svg.startsWith('<svg '));assert(svg.trim().endsWith('</svg>'));assert(!svg.includes('<script'));assert(!svg.includes('NaN'));}
assert.equal((files['cycle.svg'].match(/class="scene scene/g)||[]).length,config.themes.length);
const out=path.join(root,'assets/profile-cycle');await fs.mkdir(out,{recursive:true});
if(process.argv.includes('--check')){for(const [name,svg] of Object.entries(files))assert.equal(await fs.readFile(path.join(out,name),'utf8'),svg,name+' differs');console.log('All generated assets match configuration and snapshot');}else{for(const [name,svg] of Object.entries(files))await fs.writeFile(path.join(out,name),svg);if(live)await fs.writeFile(dataPath,JSON.stringify(data,null,2)+'\n');console.log('Rendered '+Object.keys(files).length+' SVG assets');}
