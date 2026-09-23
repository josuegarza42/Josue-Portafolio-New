'use strict';
(() => {
 const key = 'garage.preferences.v1';
 const prefs = { language: 'es', theme: 'day', currency: 'MXN', rate: 20 };
 try {
  const saved = JSON.parse(localStorage.getItem(key) || 'null');
  if (saved) {
   if (['es','en'].includes(saved.language)) prefs.language=saved.language;
   if (['day','night'].includes(saved.theme)) prefs.theme=saved.theme;
   if (['MXN','USD'].includes(saved.currency)) prefs.currency=saved.currency;
   if (Number.isFinite(saved.rate)&&saved.rate>=.01&&saved.rate<=1000) prefs.rate=saved.rate;
  }
  const sharedLanguage=localStorage.getItem('josue.language');
  if(['es','en'].includes(sharedLanguage)) prefs.language=sharedLanguage;
 } catch { /* Local preferences are optional. */ }
 const english=window.GARAGE_EN||{};
 const spanish=Object.fromEntries(Object.entries(english).map(([es,en])=>[en,es]));
 function t(text,values={}) {
  const result=prefs.language==='en'?(english[text]||text):text;
  return result.replace(/\{(\w+)\}/g,(match,key)=>Object.hasOwn(values,key)?String(values[key]):match);
 }
 function translate(root=document.body) {
  const dictionary=prefs.language==='en'?english:spanish;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  let node;
  while ((node=walker.nextNode())) {
   if (node.parentElement?.closest('script,style,code,[data-original-document]')) continue;
   const value=node.textContent.trim();
   if(dictionary[value]) node.textContent=node.textContent.replace(value,dictionary[value]);
  }
  for(const element of root.querySelectorAll('[aria-label],[title],[alt],[placeholder]')) {
   if(element.closest('[data-original-document]')) continue;
   for(const attr of ['aria-label','title','alt','placeholder']) {
    const value=element.getAttribute(attr);
    if(value&&dictionary[value]) element.setAttribute(attr,dictionary[value]);
   }
  }
 }
 const locale=()=>prefs.language==='en'?'en-US':'es-MX';
 const displayAmount=mxn=>prefs.currency==='USD'?mxn/prefs.rate:mxn;
 function money(mxn,withCode=false) {
  const result=new Intl.NumberFormat(locale(),{style:'currency',currency:prefs.currency,currencyDisplay:'narrowSymbol',maximumFractionDigits:2,minimumFractionDigits:0}).format(displayAmount(mxn));
  return result+(withCode?' '+prefs.currency:'');
 }
 function renderPreferences() {
  document.documentElement.lang=prefs.language==='en'?'en':'es-MX';
  document.documentElement.dataset.theme=prefs.theme;
  document.documentElement.dataset.currency=prefs.currency;
  document.querySelector('meta[name="theme-color"]').content=prefs.theme==='night'?'#131e2b':'#f7f5ef';
  document.title=t('El Garage · Corolla & Fit');
  document.querySelector('#garage-language').value=prefs.language;
  document.querySelector('#garage-currency').value=prefs.currency;
  document.querySelector('#garage-theme').setAttribute('aria-pressed',String(prefs.theme==='night'));
  document.querySelector('#garage-theme').setAttribute('aria-label',t(prefs.theme==='night'?'Activar modo día':'Activar modo noche'));
  document.querySelector('#theme-label').textContent=t(prefs.theme==='night'?'Día':'Noche');
  document.querySelector('#exchange-settings').hidden=prefs.currency!=='USD';
  document.querySelector('#exchange-rate').value=prefs.rate;
  document.querySelector('#exchange-error').textContent='';
  document.querySelectorAll('[data-money]').forEach(element=>{element.innerHTML=money(Number(element.dataset.money))+'<span> '+prefs.currency+'</span>';});
  document.querySelector('#fit-price-context').textContent=t('Los {price} no demuestran una ganga. Primero, inspección independiente, prueba de la automática y documentos en orden.',{price:money(105000,true)});
  document.querySelectorAll('.budget-currency,.budget-card-top .small-label').forEach(element=>element.textContent=prefs.currency);
 }
 function apply() {
  renderPreferences();
  document.dispatchEvent(new CustomEvent('garage:preferences'));
  translate();
  try { localStorage.setItem(key,JSON.stringify(prefs));localStorage.setItem('josue.language',prefs.language); } catch { /* Functional without storage. */ }
 }
 window.Garage={prefs,t,translate,money,locale,displayAmount,toMXN:amount=>prefs.currency==='USD'?amount*prefs.rate:amount};
 document.querySelector('#garage-language').addEventListener('change',event=>{prefs.language=event.target.value;apply();});
 document.querySelector('#garage-currency').addEventListener('change',event=>{prefs.currency=event.target.value;apply();});
 document.querySelector('#garage-theme').addEventListener('click',()=>{prefs.theme=prefs.theme==='day'?'night':'day';apply();});
 document.querySelector('#exchange-rate').addEventListener('change',event=>{
  const value=Number(event.target.value);
  if(!Number.isFinite(value)||value<.01||value>1000||!event.target.validity.valid){
   document.querySelector('#exchange-error').textContent=t('Introduce un tipo de cambio entre 0.01 y 1,000 MXN por USD, con hasta dos decimales.');
   event.target.setAttribute('aria-invalid','true');
   return;
  }
  event.target.removeAttribute('aria-invalid');prefs.rate=value;apply();
 });
 renderPreferences();translate();
})();
