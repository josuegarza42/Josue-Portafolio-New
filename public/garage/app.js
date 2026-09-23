'use strict';

const vehicles = {
 corolla: {
  name: 'Toyota Corolla', description: 'Ya comprado. Establece una revisión de referencia y reúne el historial de mantenimiento.',
  checks: [
   {id:'cold',title:'Arranque completamente en frío',category:'mechanical',meta:'Punto específico · referencia Toyota',priority:true,detail:'Escuchar el primer arranque tras varias horas apagado. Si aparece un traqueteo breve, registrar duración y condiciones y pedir diagnóstico de distribución/VVT-i, aceite, marcha y accesorios.',evidence:'Toyota T-SB-0087-09 Rev1: ciertos Corolla 2009–2010 con 2ZR, mercado estadounidense. No acredita falla ni cobertura de nuestra unidad.'},
   {id:'cooling',title:'Bomba de agua y enfriamiento',category:'mechanical',meta:'Edad y uso · inspección física',detail:'Revisar niveles en frío, fugas activas, bomba, mangueras, radiador y ruido de rodamientos. Comprobar temperatura estable y ventiladores. Los residuos secos requieren interpretación; no son por sí solos una fuga activa.',evidence:'No abrir el circuito caliente. La fuente GMB describe desgaste general; no demuestra un defecto en todos los Corolla.'},
   {id:'transmission',title:'Automática en frío y caliente',category:'mechanical',meta:'Caja convencional · referencia de 4 velocidades',priority:true,detail:'Comprobar D/R, cambios bajo carga, retrasos, golpes fuertes y patinamiento. Revisar fugas, códigos e historial del fluido correcto para la caja exacta.',evidence:'Una prueba estacionaria o aceite nuevo no certifican el estado de la transmisión.'},
   {id:'suspension',title:'Suspensión y dirección',category:'mechanical',meta:'Bases de amortiguador y desgaste general',detail:'Localizar golpes y revisar bases, amortiguadores, bujes, rótulas, bieletas, terminales y rodamientos. Comprobar asistencia de dirección constante y desgaste de llantas.',evidence:'Las bases se mencionan en reportes de la generación. No reemplazar componentes sólo por el año del auto.'},
   {id:'windows',title:'Elevadores y quemacocos',category:'mechanical',meta:'Equipo del XLE · funcionamiento y humedad',detail:'Probar todas las ventanas y revisar cristales flojos, inclinación o golpes. Abrir y cerrar el quemacocos sin forzarlo. Buscar humedad en cielo, postes, tapetes y cajuela.',evidence:'Revisar drenajes con el procedimiento correcto. El quemacocos se comprueba por equipo y edad, sin afirmar un defecto del modelo.'},
   {id:'service',title:'Servicios, niveles y diagnóstico',category:'mechanical',meta:'Establecer el punto de partida',detail:'Reunir facturas de aceite, filtros, bujías, refrigerante y transmisión. Escanear módulos y diagnosticar cualquier fallo de arranque, ralentí o EVAP antes de cambiar piezas. Registrar el odómetro actual y cualquier reposición de aceite.',evidence:'Josue reporta 290,000 km actuales el 21 de septiembre de 2026. Fotografía e historial pendientes; los 185,200 km del anuncio histórico quedan por conciliar.'},
   {id:'safety',title:'Frenos, llantas y bolsas de aire',category:'safety',meta:'Primero la seguridad',priority:true,detail:'Comprobar frenos, llantas, cinturones y autocomprobación de testigos SRS/ABS con escáner. Consultar campañas pendientes y realizadas con Toyota México usando el NIV.',evidence:'La presencia de un aviso general de Takata no confirma elegibilidad. Falta incorporar el NIV al expediente.'},
   {id:'documents',title:'Factura, baja, alta y seguro',category:'documents',meta:'Completar archivo de la compra',priority:true,detail:'Archivar contrato y pago de $125,500. Validar factura Dalton y cadena previa si es refactura, cotejar NIV y baja. Documentar REPUVE, adeudos, alta, placas y seguro que se hayan realizado.',evidence:'Una casilla marcada es tu seguimiento personal; no sustituye los comprobantes ni modifica la ficha histórica.'}
  ]
 },
 fit: {
  name: 'Honda Fit', description: 'Antes de comprar: resuelve el ruido delantero, prueba la automática y valida los documentos.',
  checks: [
   {id:'front',title:'Diagnosticar el ruido delantero',category:'mechanical',meta:'Falla reconocida por el vendedor',priority:true,detail:'Localizar el ruido y revisar bieletas, bujes, rótulas, bases, amortiguadores y dirección. Incluir semiejes, rodamientos o soportes si los síntomas lo justifican. Obtener causa, cotización y criterio de seguridad por escrito.',evidence:'No asumir que sólo necesita amortiguadores ni que será una reparación económica.'},
   {id:'plugs',title:'Bujías, bobinas y roscas',category:'mechanical',meta:'Problema reportado · generación 2009–2013',detail:'Observar temblor, fallos al acelerar y testigo de motor. Preguntar por bujías flojas o expulsadas y reparaciones de roscas. Que el mecánico determine la inspección necesaria y el apriete especificado.',evidence:'Un código de fallo de encendido no prueba que haya una bujía floja. Si el testigo parpadea, suspender la prueba y diagnosticar.'},
   {id:'valves',title:'Historial de holgura de válvulas',category:'mechanical',meta:'Mantenimiento programado',detail:'Buscar constancia de inspección y ajustes cuando hayan sido necesarios. Observar arranque en frío, ralentí y pérdida de potencia; diagnosticar antes de atribuir síntomas a válvulas.',evidence:'Referencia: manual Honda Fit 2009 estadounidense de la misma generación. El silencio del motor no acredita una holgura correcta.'},
   {id:'transmission',title:'Automática en frío y caliente',category:'mechanical',meta:'Caja convencional · referencia de 5 velocidades',priority:true,detail:'Probar acoplamiento D/R, cambios bajo carga, golpes, vibraciones y revoluciones que suben sin avance proporcional. Revisar códigos, fugas e historial del fluido correcto. Cotejar la caja exacta.',evidence:'Organizar una prueba legal y segura por la baja de placas. Estacionado no puede comprobarse todo el funcionamiento.'},
   {id:'axles',title:'Semiejes y juntas homocinéticas',category:'mechanical',meta:'Corrosión, guardapolvos y vibraciones',detail:'Inspeccionar ejes, corrosión alrededor de la goma amortiguadora cuando exista, guardapolvos y grasa. Escuchar chasquidos al girar y comprobar vibración al acelerar.',evidence:'Reportes estadounidenses orientan esta inspección. No confirman un llamado a revisión aplicable a este Fit.'},
   {id:'closures',title:'Cajuela, tapa de gasolina y funciones',category:'mechanical',meta:'Puntos reportados y equipo general',detail:'Abrir y cerrar cajuela y tapa de combustible varias veces sin forzar. Comprobar regreso de manija, seguros y soportes. Revisar A/C, elevadores, asientos abatibles y humedad.',evidence:'Los soportes, A/C y humedad se revisan por edad y uso; no todos son defectos distintivos de la generación.'},
   {id:'safety',title:'Frenos, llantas, enfriamiento y SRS',category:'safety',meta:'Revisión antes de la prueba de manejo',priority:true,detail:'Inspeccionar frenos, llantas, temperatura, fugas, cinturones y testigos SRS/ABS. Escanear módulos. Consultar campañas e historial de reparaciones con Honda México por NIV.',evidence:'El portal Honda limita su consulta a llamados anunciados en los últimos 15 años; confirmar también con la agencia.'},
   {id:'documents',title:'Factura, pagos de 2026 y baja de SLP',category:'documents',meta:'Declaraciones aún por comprobar',priority:true,detail:'Validar factura y cadena de propiedad, identidad del vendedor, NIV, comprobante de baja, REPUVE y adeudos. Confirmar alta en SLP y presupuesto de trámites, seguro y traslado.',evidence:'“Pagado al 26” y “factura original” son declaraciones del vendedor. No se ha confirmado compra ni pago.'}
  ]
 }
};
const documentNames = [['readme','Datos y antecedentes'],['assessment','Evaluación y fuentes'],['checklist','Lista completa del mecánico'],['maintenance','Bitácora de servicios y gastos']];
const storageKey='garage.josue.2010.v1';
const amountKeys=['inspection','service','paperwork','insurance'];
const costLabels={inspection:'Inspección y reparaciones',service:'Mantenimiento inicial',paperwork:'Trámites y traslado',insurance:'Seguro'};
const G=window.Garage,t=G.t;
const defaultBudget=price=>({purchase:String(price),inspection:'',service:'',paperwork:'',insurance:''});
let state={checks:{corolla:{},fit:{}},budget:{corolla:defaultBudget(125500),fit:defaultBudget(105000)}};
let storageAvailable=true;
try{
 const saved=JSON.parse(localStorage.getItem(storageKey)||'null');
 if(saved && typeof saved==='object')for(const car of ['corolla','fit']){
  for(const check of vehicles[car].checks){const value=saved.checks?.[car]?.[check.id];if(typeof value==='string' && !Number.isNaN(Date.parse(value)))state.checks[car][check.id]=value;}
  for(const field of ['purchase',...amountKeys]){const value=saved.budget?.[car]?.[field];if(typeof value==='string' && value.length<24)state.budget[car][field]=value;}
 }
 state.budget.corolla.purchase='125500';
}catch{storageAvailable=false;}
let inspectCar='corolla',budgetCar='corolla',filter='all';
const $=selector=>document.querySelector(selector);
const $$=selector=>Array.from(document.querySelectorAll(selector));
const icon=name=>`<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
function carCopy(id){const car=vehicles[id];return {...car,description:t(car.description),checks:car.checks.map(check=>({...check,...(G.prefs.language==='en'?window.GARAGE_CHECKS_EN[id][check.id]:{})}))};}
function save(){try{localStorage.setItem(storageKey,JSON.stringify(state));}catch{storageAvailable=false;}updateStorageMessage();}
function updateStorageMessage(){ $('#storage-status').textContent=t(storageAvailable?'Marca sólo lo que ya se revisó. Tu avance queda guardado en este navegador.':'El navegador no permite guardar el avance. Exporta tu revisión antes de cerrar.'); }
function setSelected(attribute,value){$$(`[${attribute}]`).forEach(button=>{const selected=button.getAttribute(attribute)===value;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected));});}
function updateProgress(){
 const total=vehicles[inspectCar].checks.length,done=vehicles[inspectCar].checks.filter(check=>state.checks[inspectCar][check.id]).length;
 $('#progress-text').textContent=t('{done} de {total}',{done,total});$('#progress-fill').style.width=`${done/total*100}%`;
 $('.progress-track').setAttribute('aria-valuenow',String(Math.round(done/total*100)));$('.progress-track').setAttribute('aria-valuetext',t('{done} de {total} revisiones marcadas',{done,total}));
}
function renderChecklist(){
 const open=new Set($$('#checklist details[open]').map(el=>el.dataset.check));
 const car=carCopy(inspectCar);$('#inspect-name').textContent=car.name;$('#inspect-description').textContent=car.description;
 const visible=car.checks.filter(check=>(filter==='all'||check.category===filter)&&(!$('#pending-only').checked||!state.checks[inspectCar][check.id]));
 $('#checklist').innerHTML=visible.length?visible.map(check=>{
  const done=Boolean(state.checks[inspectCar][check.id]);
  return `<div class="check-item${done?' done':''}"><input class="check-control" type="checkbox" data-check-id="${check.id}" aria-label="${t('Marcar como revisado: {title}',{title:check.title})}" ${done?'checked':''}><details data-check="${check.id}" ${open.has(check.id)?'open':''}><summary><span class="check-title"><span>${check.title}</span><span class="check-meta">${check.meta}</span></span>${check.priority?`<span class="priority-label">${t('Prioritario')}</span>`:''}${icon('plus')}</summary><div class="check-detail"><p>${check.detail}</p><p class="check-evidence">${check.evidence}</p></div></details></div>`;
 }).join(''):`<div class="empty-state">${t('No quedan puntos pendientes en este filtro. Puedes consultar las demás categorías o desactivar «Sólo pendientes».')}</div>`;
 updateProgress();updateStorageMessage();
}
$('#checklist').addEventListener('change',event=>{
 const input=event.target.closest('[data-check-id]');if(!input)return;
 if(input.checked)state.checks[inspectCar][input.dataset.checkId]=new Date().toISOString();else delete state.checks[inspectCar][input.dataset.checkId];
 input.closest('.check-item').classList.toggle('done',input.checked);save();updateProgress();
 if($('#pending-only').checked){renderChecklist();$('#pending-only').focus();}
});
$$('[data-inspect]').forEach(button=>button.addEventListener('click',()=>{inspectCar=button.dataset.inspect;setSelected('data-inspect',inspectCar);$('#checklist').innerHTML='';renderChecklist();}));
$$('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;setSelected('data-filter',filter);renderChecklist();}));
$('#pending-only').addEventListener('change',renderChecklist);
function download(name,text,type='text/plain;charset=utf-8'){
 const url=URL.createObjectURL(new Blob([text],{type}));const anchor=document.createElement('a');anchor.href=url;anchor.download=name;document.body.append(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);showToast(t('Archivo preparado para descargar.'));
}
function dateStamp(){return new Date().toISOString().slice(0,10);}
$('#export-review').addEventListener('click',()=>{
 const car=carCopy(inspectCar);let lines=['# '+t('Mi revisión — {car} 2010',{car:car.name}),'',t('Exportada: {date}',{date:new Date().toLocaleString(G.locale())}),'',t('Seguimiento personal marcado en la página. No acredita un dictamen ni modifica los expedientes originales.'),''];
 for(const check of car.checks){const done=state.checks[inspectCar][check.id];lines.push(`- [${done?'x':' '}] ${check.title}`,`  ${check.detail}`,'  '+t('Alcance: {text}',{text:check.evidence}));if(done)lines.push('  '+t('Marcado como revisado: {date}',{date:new Date(done).toLocaleString(G.locale())}));lines.push('');}
 download(`inspection-${inspectCar}-${G.prefs.language}-${dateStamp()}.md`,lines.join('\n'),'text/markdown;charset=utf-8');
});
$('#full-checklist').addEventListener('click',()=>openDocument(`${inspectCar}-checklist`));
function parseAmount(value){if(value.trim()==='')return{value:null,valid:true};const number=Number(value);return {value:number,valid:Number.isFinite(number)&&number>=0&&number<=9999999};}
function budgetResult(){const entries=['purchase',...amountKeys].map(key=>({key,...parseAmount(state.budget[budgetCar][key])}));return {total:entries.reduce((sum,item)=>sum+(item.valid&&item.value!==null?item.value:0),0),missing:entries.filter(item=>item.value===null).length,invalid:entries.some(item=>!item.valid)};}
function updateBudgetTotal(){
 const result=budgetResult();$('#budget-total').textContent=result.invalid?t('Revisa importes'):G.money(result.total);
 $('#budget-missing').textContent=result.invalid?t('Usa importes de 0 a {max}; no se admiten negativos.',{max:G.money(9999999,true)}):result.missing?(result.missing===1?t('Falta 1 partida por capturar. Este subtotal no es el costo final.'):t('Faltan {count} partidas por capturar. Este subtotal no es el costo final.',{count:result.missing})):t('Todas las partidas tienen importe. Es un escenario; comprueba cotizaciones y evita duplicar gastos.');
}
function displayInput(value){if(value==='')return '';const n=Number(value);return Number.isFinite(n)?String(Number(G.displayAmount(n).toFixed(2))):value;}
function savedInput(input){return input.value===''?'':String(Math.round(G.toMXN(Number(input.value))*100)/100);}
function renderBudget(){
 const budget=state.budget[budgetCar];$('#budget-name').textContent=vehicles[budgetCar].name;$('#purchase-label').textContent=t(budgetCar==='corolla'?'Precio pagado':'Precio de compra a simular');
 $('#purchase-price').readOnly=budgetCar==='corolla';$('#purchase-price').value=displayInput(budget.purchase);
 $$('.money-field input').forEach(input=>input.max=String(Math.floor(G.displayAmount(9999999)*100)/100));
 $$('[data-cost]').forEach(input=>{input.value=displayInput(budget[input.dataset.cost]);});updateBudgetTotal();
}
$$('[data-budget]').forEach(button=>button.addEventListener('click',()=>{budgetCar=button.dataset.budget;setSelected('data-budget',budgetCar);renderBudget();}));
$('#purchase-price').addEventListener('input',event=>{if(budgetCar!=='fit')return;state.budget.fit.purchase=savedInput(event.target);save();updateBudgetTotal();});
$$('[data-cost]').forEach(input=>input.addEventListener('input',()=>{state.budget[budgetCar][input.dataset.cost]=savedInput(input);save();updateBudgetTotal();}));
$('#export-budget').addEventListener('click',()=>{
 const result=budgetResult();if(result.invalid){showToast(t('Corrige los importes antes de exportar.'));return;}
 const budget=state.budget[budgetCar];let lines=[t('ESCENARIO DE GASTOS — {car} 2010',{car:vehicles[budgetCar].name}),t('Fecha: {date}',{date:new Date().toLocaleString(G.locale())}),'',t('Importes personales; no acreditan pagos ni cotizaciones verificadas.'),t('Importes originales y guardados en MXN.')];
 if(G.prefs.currency==='USD')lines.push(t('Conversión de referencia: 1 USD = {rate} MXN. No es cotización en vivo.',{rate:G.prefs.rate}));
 for(const key of ['purchase',...amountKeys]){const parsed=parseAmount(budget[key]);const label=key==='purchase'?(budgetCar==='corolla'?'Precio pagado':'Precio de compra simulado'):costLabels[key];lines.push(`${t(label)}: ${parsed.value===null?t('PENDIENTE'):G.money(parsed.value,true)+(G.prefs.currency==='USD'?` (${parsed.value} MXN)`:'')}`);}
 lines.push('',t('Subtotal capturado: {amount}',{amount:G.money(result.total,true)}),result.missing?t('Faltan {count} partidas; no es el costo final.',{count:result.missing}):t('Comprueba cotizaciones y evita duplicar gastos.'));download(`budget-${budgetCar}-${G.prefs.currency}-${G.prefs.language}-${dateStamp()}.txt`,lines.join('\n'));
});
$('#reset-budget').addEventListener('click',()=>{state.budget[budgetCar]=defaultBudget(budgetCar==='corolla'?125500:105000);save();renderBudget();showToast(t('Escenario restablecido para {car}.',{car:vehicles[budgetCar].name}));});
function renderArchive(){for(const car of ['corolla','fit']){const documents=car==='fit'?[...documentNames,['messages','Mensajes del vendedor']]:documentNames;$(`#${car}-documents`).innerHTML=documents.map(([key,label])=>`<button class="document-link" data-document="${car}-${key}">${icon('file')}<span>${t(label)}</span>${icon('up')}</button>`).join('');}}
const dialog=$('#document-dialog');let documentOpener=null,currentDocument=null,showOriginal=false;
function openDocument(key,original=false){
 const source=window.GARAGE_DOCUMENTS?.[key];if(!source){showToast(t('No se encontró el documento. Revisa que content.js esté junto a la página.'));return;}
 const english=G.prefs.language==='en'&&!original;const doc=english?window.GARAGE_DOCUMENTS_EN?.[key]||source:source;
 currentDocument=key;showOriginal=original;if(!dialog.open)documentOpener=document.activeElement;
 $('#dialog-title').textContent=doc.title;$('#dialog-eyebrow').textContent=t(source.car==='fit'?'CASO 02 · HONDA FIT':source.car==='corolla'?'CASO 01 · TOYOTA COROLLA':'EL GARAGE · ARCHIVO');
 $('#dialog-body').toggleAttribute('data-original-document',!english);$('#dialog-body').lang=english?'en':'es-MX';
 $('#dialog-body').innerHTML=(G.prefs.language==='en'?`<div class="document-language-note">${original?'Original Spanish case file. Monetary figures remain in MXN.':'English reading guide. The complete original case file and supporting evidence are preserved in Spanish; amounts in this record remain in MXN.'} <button class="text-button" data-document-version="${original?'guide':'original'}">${t(original?'Volver a la guía en inglés':'Ver expediente original en español')}</button></div>`:'')+doc.html;
 $('#document-download').href=source.download;$('#document-download').download=source.download.split('/').pop();$('#document-download').innerHTML=t(G.prefs.language==='en'?'Descargar original en español':'Descargar documento')+' '+icon('download');
 if(!dialog.open)dialog.showModal();document.body.classList.add('modal-open');$('#dialog-body').scrollTop=0;
}
document.addEventListener('click',event=>{
 const version=event.target.closest('[data-document-version]');if(version){openDocument(currentDocument,version.dataset.documentVersion==='original');return;}
 const button=event.target.closest('[data-document],[data-case]');if(!button)return;event.preventDefault();openDocument(button.dataset.document||`${button.dataset.case}-readme`);
});
$('#close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(documentOpener?.isConnected)documentOpener.focus();});dialog.addEventListener('click',event=>{const box=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom))dialog.close();});
let toastTimer;function showToast(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3500);}
$$('.print-button').forEach(button=>button.addEventListener('click',()=>window.print()));
const navLinks=$$('nav a');const sections=navLinks.map(link=>$(link.getAttribute('href')));let scrollQueued=false;
function updateNavigation(){let current=sections[0];for(const section of sections){if(section.getBoundingClientRect().top<200)current=section;}for(const link of navLinks){const active=link.getAttribute('href')===`#${current.id}`;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');}scrollQueued=false;}
window.addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateNavigation);}},{passive:true});
document.addEventListener('garage:preferences',()=>{renderChecklist();renderBudget();renderArchive();if(dialog.open)openDocument(currentDocument,showOriginal);});
renderChecklist();renderBudget();renderArchive();updateNavigation();G.translate();
