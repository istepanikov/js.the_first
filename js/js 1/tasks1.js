let a, b, c;

a = 1;
b = -2;
c = 3;


if (a < 0, b < 0, c < 0) {
  alert(a+b+c);
} else if (a < 0, b < 0, c > 0) {
  alert(a+b);
} else if (a < 0, b > 0, c < 0) {
    alert(a+c); 
} else if (a > 0, b < 0, c < 0) {
    alert(b+c); 
}