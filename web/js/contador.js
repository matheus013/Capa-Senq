var YY = 2014;
var MM = 08;
var DD = 18;
var HH = 08;
var MI = 00;
var SS = 00; 

function atualizaContador() {
  // hoje = Data atual
  // futuro = Data até onde o contador vai rodar
  var hoje = new Date();
  var futuro = new Date(YY,MM-1,DD,HH,MI,SS); 

  // Ajustando variáveis de acordo com a difereça entra datas que é dada em milisegundos
  var ss = parseInt((futuro - hoje) / 1000);
  var mm = parseInt(ss / 60);
  var hh = parseInt(mm / 60);
  var dd = parseInt(hh / 24); 

  // Ajustando para que a diferença entre datas seja exibida na forma correta
  ss = ss - (mm * 60);
  mm = mm - (hh * 60);
  hh = hh - (dd * 24); 

  // Texto a ser impresso
  var faltam = '';
 
    faltam += dd + ' : ';
    if(hh < 10)
      faltam +=   "0" + hh + ' : ';
    else faltam += hh + ' : ';

    if(mm < 10)
      faltam += "0" + mm + ' : ';
    else
      faltam += mm + ' : ';
    
    if(ss < 10)
      faltam += "0" + ss;
   else
       faltam += ss;
  

  if (dd+hh+mm+ss > 0) {
    document.getElementById('contador').innerHTML = faltam;
    setTimeout(atualizaContador,1000);
  } else {
    document.getElementById('contador').innerHTML = 'CHEGOU!!!!';
    setTimeout(atualizaContador,1000);
  }
}
