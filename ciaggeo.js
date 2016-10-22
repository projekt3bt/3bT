function ciaggeoinst(){
  document.getElementById("tresckalk").innerHTML=
"<input type=\"text\" id=\"a\" value=\"\" placeholder=\"a1\"> <input type=\"text\" id=\"n\" value=\"\" placeholder=\"n\"> <input type=\"text\" id=\"q\" value=\"\"placeholder=\"q\"> <input type=\"button\" value=\"Wynik\" onClick=\"ciagarytm()\">";
}

function ciaggeo(){
  var sn;
  a1 = document.getElementById("a").value;
  q = document.getElementById("q").value;
  n = document.getElementById("n").value;
  var an;

  an = a1 * pow(q,n-1);

  sn = (a1 * (1-pow(q,n))/(1-q));

  document.getElementById("tresckalk").innerHTML=
  "N-ty wyraz ciagu to "+ an +", a suma n-poczatkowych wyrazow ciagu to "+ sn;

}
