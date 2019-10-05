function getdata() {
   var name = localStorage.getItem("name");
   var bottle_price = localStorage.getItem("bottle_price");
   var fardo_number = localStorage.getItem("fardo_number");
   document.getElementById('output').innerHTML = 'name: ' + name + ' bottle price: ' +
   + bottle_price + ' DA ' + 'fardo number: ' + fardo_number + ' DA' ;
}
