function getdata() {
  var btl_num = Number(document.getElementById('btl_num').value);
  var h_num = Number(document.getElementById('h_num').value);
  var pte_btl = Number(document.getElementById('pte_btl').value);
  var cover = Number(document.getElementById('cover').value);
  var embalage = Number(document.getElementById('embalage').value);
  var elt = Number(document.getElementById('elt').value);
  var pri_sell = Number(document.getElementById('pri_sell').value);
   var mo = Number(document.getElementById('mo').value);
    var yr = Number(document.getElementById('yr').value);
  
  var output = document.getElementById('output');
  var ot = document.getElementById('ot');

 var b_h = btl_num * h_num;
  var selling = b_h * pri_sell ;
 var  kwh = (elt * h_num) * 7;
  var kwh_m = kwh * 30;
  var cost_onebtl = embalage + cover + pte_btl;
  var cost = cost_onebtl * b_h;
  var benifit = selling -( cost + kwh);
  var fardo = b_h / 6;
  var win_mo = benifit * (mo * 20);
  var win_yr = yr * ((benifit * 20) * 12);
  var er = win_yr / 140;
  var b_m = b_h * 20;
  var b_y = b_m * 12;
 var f_m = b_m / 6;
  var f_y = b_y / 6;
  ot.innerHTML = 'the benifit is: ' + benifit +'\n'+
  'win in a month: ' + win_mo +'\n'+
  'win in a year: '+ win_yr;
  output.innerHTML = 
  'cost of ' + b_h + ' is: ' + cost + '\n '+
'cost of one bottle: ' + cost_onebtl+'\n'+
'electrical paiment in hours ' + kwh+'\n'+
'electrical paiment in month ' + kwh_m+'\n'+
'selling of  ' + b_h+' is: '+selling+'\n'+
'the benifit is: ' + benifit +'\n'+
'win in month: ' + win_mo +'\n'+
'win year: ' + win_yr+'\n'+

'in brown er:  '+er+'\n'+

'bottle in, ' + h_num +' hours is: ' + b_h+ '/--/' + fardo + ' fardo'+'\n'+
'bottle in month 20j: ' + b_m+ '/--/' + f_m + ' fardo'+'\n'+
'bottle in year: ' + b_y+ '/--/' + f_y + ' fardo'



}
