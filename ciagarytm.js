function ciagarytminst(){
  document.getElementById("tresckalk").innerHTML=
"<input type=\"text\" id=\"a\" value=\"\"> <input type=\"text\" id=\"n\" value=\"\"> <input type=\"text\" id=\"r\" value=\"\"> <input type=\"button\" value=\"Wynik\" onClick=\"ciagarytm()\">";
}

function ciagarytm(){
  var sn;
  a1 = document.getElementById("a").value;
  var a;
  r = document.getElementById("r").value;
  n = document.getElementById("n").value;
  var an;

  an = a1 + ((n-1)*r);

  sn = (((a1 + an)/2) * n);

  document.getElementById("tresckalk").innerHTML=
  "N-ty wyraz ciagu to "+an+", a suma n-poczatkowych wyrazow ciagu to "+sn;

}
