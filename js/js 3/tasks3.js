function f() {
  let x = prompt('ВВЕДИТЕ x:','');
  let y = prompt('ВВЕДИТЕ y:','');
  if(x == 0 || y == 0)
      alert((x == 0 && y == 0) ? 'Центр координат' : 'ось ' + ((x == 0 ? 'Y' : 'X')));
  else{
      let horizontal = (x > 0 ? [1,2] : [3,4]);
      let vertical = (y > 0 ? [1,4] : [2,3]);
      horizontal.forEach(el => {if(vertical.includes(el)) alert(el + ' четверть')});
  }
}
f();