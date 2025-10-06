
function maskCPF(v){return v.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{2})$/,'$1-$2').slice(0,14)}
function maskPhone(v){return v.replace(/\D/g,'').replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d)/,'$1-$2').slice(0,15)}
function maskCEP(v){return v.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2').slice(0,9)}
document.addEventListener('input', e=>{
  const t=e.target;
  if(t.name==='cpf') t.value=maskCPF(t.value);
  if(t.name==='telefone') t.value=maskPhone(t.value);
  if(t.name==='cep') t.value=maskCEP(t.value);
});
function attachValidation(form){
  form.addEventListener('submit', (e)=>{
    if(!form.checkValidity()){ e.preventDefault(); form.reportValidity(); }
  });
}
['formVoluntario','formInscricaoProjeto','formContato','formNewsletter','formDoacao']
  .map(id=>document.getElementById(id)).filter(Boolean).forEach(attachValidation);
