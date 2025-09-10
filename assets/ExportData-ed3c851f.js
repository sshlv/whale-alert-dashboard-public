import{c,u as y,j as e,b as x}from"./index-a99ea3d1.js";/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=c("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=c("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=c("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),j=()=>{const{alerts:t,stats:n}=y(),g=()=>{if(t.length===0){alert("Aucune donnée à exporter");return}const i=[["Type","Valeur USD","Valeur Crypto","Hash","Bloc","Timestamp","De","Vers"].join(","),...t.map(a=>[a.type,a.value_usd||0,a.value_eth||a.value_btc||a.value_sol||a.value_rndr||0,a.hash,a.block,a.timestamp,a.from||"",a.to||""].join(","))].join(`
`),r=new Blob([i],{type:"text/csv;charset=utf-8;"}),l=document.createElement("a"),s=URL.createObjectURL(r);l.setAttribute("href",s),l.setAttribute("download",`whale-alerts-${new Date().toISOString().split("T")[0]}.csv`),l.style.visibility="hidden",document.body.appendChild(l),l.click(),document.body.removeChild(l)},m=()=>{if(t.length===0){alert("Aucune donnée à exporter");return}const o={metadata:{exportDate:new Date().toISOString(),totalAlerts:t.length,totalValue:n.totalValue,averageValue:n.averageValue},alerts:t,stats:n},i=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),r=document.createElement("a"),l=URL.createObjectURL(i);r.setAttribute("href",l),r.setAttribute("download",`whale-data-${new Date().toISOString().split("T")[0]}.json`),r.style.visibility="hidden",document.body.appendChild(r),r.click(),document.body.removeChild(r)},p=()=>{if(t.length===0){alert("Aucune donnée pour générer un rapport");return}const o=`
# 🐋 Rapport de Surveillance des Baleines Crypto

**Date de génération:** ${new Date().toLocaleDateString("fr-FR")}
**Période:** ${t.length>0?new Date(t[t.length-1].timestamp).toLocaleDateString("fr-FR"):"N/A"} - ${t.length>0?new Date(t[0].timestamp).toLocaleDateString("fr-FR"):"N/A"}

## 📊 Résumé Exécutif

- **Total d'alertes:** ${n.totalAlerts}
- **Valeur totale surveillée:** $${n.totalValue.toLocaleString("fr-FR")}
- **Valeur moyenne par alerte:** $${n.averageValue.toLocaleString("fr-FR")}

## 🔗 Répartition par Chaîne

${Object.entries(n.chainStats).map(([s,a])=>`
### ${s}
- Alertes: ${a.alerts}
- Volume: $${a.volume.toLocaleString("fr-FR")}
`).join("")}

## 🚨 Top 10 des Plus Grosses Transactions

${t.slice(0,10).map((s,a)=>{var d;return`
${a+1}. **${s.type}** - $${(d=s.value_usd)==null?void 0:d.toLocaleString("fr-FR")}
   - Hash: \`${s.hash}\`
   - Bloc: ${s.block}
   - Date: ${new Date(s.timestamp).toLocaleString("fr-FR")}
`}).join("")}

## 📈 Analyse des Tendances

- **Plus grosse transaction:** $${Math.max(...t.map(s=>s.value_usd||0)).toLocaleString("fr-FR")}
- **Transaction moyenne:** $${n.averageValue.toLocaleString("fr-FR")}
- **Activité totale:** ${t.length} transactions surveillées

---
*Rapport généré automatiquement par Whale Alert Dashboard*
    `.trim(),i=new Blob([o],{type:"text/markdown"}),r=document.createElement("a"),l=URL.createObjectURL(i);r.setAttribute("href",l),r.setAttribute("download",`whale-report-${new Date().toISOString().split("T")[0]}.md`),r.style.visibility="hidden",document.body.appendChild(r),r.click(),document.body.removeChild(r)},h=()=>{if(t.length===0){alert("Aucune donnée à partager");return}const o=`🐋 Whale Alert Dashboard - ${n.totalAlerts} alertes détectées pour un total de $${n.totalValue.toLocaleString("fr-FR")}`;navigator.share?navigator.share({title:"Whale Alert Dashboard",text:o,url:window.location.href}):(navigator.clipboard.writeText(o),alert("Texte copié dans le presse-papiers !"))};return e.jsxs("div",{className:"card p-6",children:[e.jsxs("div",{className:"flex items-center space-x-3 mb-6",children:[e.jsx("div",{className:"p-2 bg-blue-100 dark:bg-blue-900 rounded-lg",children:e.jsx(b,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Export des Données"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("button",{onClick:g,className:"flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200",children:[e.jsx(u,{className:"h-6 w-6 text-green-600"}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"Export CSV"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Données tabulaires pour Excel"})]})]}),e.jsxs("button",{onClick:m,className:"flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200",children:[e.jsx(x,{className:"h-6 w-6 text-blue-600"}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"Export JSON"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Données complètes avec métadonnées"})]})]}),e.jsxs("button",{onClick:p,className:"flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200",children:[e.jsx(u,{className:"h-6 w-6 text-purple-600"}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"Rapport Markdown"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Rapport détaillé formaté"})]})]}),e.jsxs("button",{onClick:h,className:"flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200",children:[e.jsx(v,{className:"h-6 w-6 text-orange-600"}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"Partager"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Résumé pour réseaux sociaux"})]})]})]}),e.jsx("div",{className:"mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:e.jsxs("div",{className:"flex items-center space-x-2 text-sm text-blue-700 dark:text-blue-300",children:[e.jsx(x,{className:"h-4 w-4"}),e.jsxs("span",{children:[t.length," alertes disponibles pour l'export"]})]})})]})};export{j as default};
