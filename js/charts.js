
function pizza(id, valores=[40,30,20,10]){
  const c=document.getElementById(id); if(!c) return;
  const x=c.getContext('2d'); const tot=valores.reduce((a,b)=>a+b,0);
  let ang=-Math.PI/2; valores.forEach((v,i)=>{const s=v/tot*2*Math.PI;
    x.beginPath(); x.moveTo(c.width/2,c.height/2);
    x.arc(c.width/2,c.height/2,Math.min(c.width,c.height)/2-10,ang,ang+s);
    x.closePath(); x.fillStyle=`hsl(${(i*80)%360} 60% 50%)`; x.fill(); ang+=s; });
}
function linha(id,d=[5,7,9,6,12,15,9,18]){
  const c=document.getElementById(id); if(!c) return;
  const x=c.getContext('2d'); const w=c.width,h=c.height,p=20,m=Math.max(...d);
  x.clearRect(0,0,w,h); x.beginPath(); x.moveTo(p,h-p-(d[0]/m)*(h-2*p));
  for(let i=1;i<d.length;i++){ const X=p+i*((w-2*p)/(d.length-1));
    const Y=h-p-(d[i]/m)*(h-2*p); x.lineTo(X,Y); } x.lineWidth=2; x.stroke();
}
function barras(id,d=[12,7,9,4,6,10]){
  const c=document.getElementById(id); if(!c) return;
  const x=c.getContext('2d'); const w=c.width,h=c.height,p=20,m=Math.max(...d); const bw=(w-2*p)/d.length*.6;
  x.clearRect(0,0,w,h); d.forEach((v,i)=>{ const X=p+i*((w-2*p)/d.length)+((w-2*p)/d.length-bw)/2;
    const bh=(v/m)*(h-2*p); x.fillRect(X,h-p-bh,bw,bh); });
}
window.addEventListener('DOMContentLoaded', ()=>{ pizza('graficoPizza'); linha('graficoLinha'); barras('graficoBarras'); });
