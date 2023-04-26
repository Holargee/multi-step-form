setInterval(test,10);
function test() {
var tot = document.getElementById("tot").value;
var val = document.getElementById("tz").value;
var a = document.getElementById("os");
var b = document.getElementById("ad");
var c = document.getElementById("pro");
var name = document.getElementById("name");
var email = document.getElementById("email");
var number = document.getElementById("number");
var cb = document.getElementById("cb");
var mo = document.getElementById("mo");
var yr = document.getElementById("yr");
var am = document.getElementById("am");
var et = document.getElementById("et");
var ct = document.getElementById("ct");
var ams = document.getElementById("ams").style;
var ets = document.getElementById("ets").style;
var cts = document.getElementById("cts").style;
var amb = document.getElementById("amb").style;
var etb = document.getElementById("etb").style;
var ctb = document.getElementById("ctb").style;
var a1 = document.getElementById("box1").style;
var a2 = document.getElementById("box2").style;
var a3 = document.getElementById("box3").style;
var plan = document.getElementById("plan");
var lef = document.getElementById("lef");
name.addEventListener("keypress", function(event){
if (event.key = "enter"){
    event.preventDefault();
    email.focus();
}});
email.addEventListener("keypress", function (event){
    if(event.key = "enter"){
        event.preventDefault();
        number.focus();
}})
if(am.checked == true){amb.borderColor="#5c40ff";ams.display="block";}
else{amb.borderColor="black";ams.display="none"}
if(et.checked == true){etb.borderColor="#5c40ff";ets.display="block"}
else{etb.borderColor="black";ets.display="none"}
if(ct.checked == true){ctb.borderColor="#5c40ff";cts.display="block"}
else{ctb.borderColor="black";cts.display="none"}
if(a.checked == true){a1.borderColor="#5c40ff";plan.innerText="Arcade";lef.innerText="$9/mo";tot=9;}
else{a1.borderColor="black"}

if(b.checked == true){a2.borderColor="#5c40ff";plan.innerText="Advanced";lef.innerText="$12/mo";tot=12}
else{a2.borderColor="black"}

if(c.checked == true){a3.borderColor="#5c40ff";plan.innerText="Pro";lef.innerText="$15/mo";tot=15;}
else{a3.borderColor="black"}
if(am.checked == true){tot = tot - -1}
if(et.checked == true){tot = tot - -2}
if(ct.checked == true){tot = tot - -2}
if(cb.checked == true)
{mo.className="tx";yr.className="tm"}
else{mo.className="tm";yr.className="tx"};
document.getElementById("tot").value=tot;
document.getElementById("total").innerText=tot;
}
function ns(){
var one = document.getElementById("one").style;
var go = document.getElementById("go").style;
var but = document.getElementById("but");
 var a = document.getElementById("name");
 var b = document.getElementById("email");
 var c = document.getElementById("number");
 var top1 = document.getElementById("top1").style;
 var top2 = document.getElementById("top2").style;
 var top3 = document.getElementById("top3").style;
 var top4 = document.getElementById("top4").style;
 var two = document.getElementById("two").style;
 var tre = document.getElementById("tre").style;
 var four = document.getElementById("four").style;
var val = document.getElementById("tz").value;
var am = document.getElementById("am");
var et = document.getElementById("et");
var ct = document.getElementById("ct");
if(am.checked == false && et.checked == false && ct.checked == false && val == 3){alert("Pick your add ons")}
else if((am.checked == true || et.checked == true || ct.checked == true)&& val == 3){val = val- -1;top3.display="none";top4.display="block";go.display="block";tre.color="white";tre.backgroundColor="#5c40ff";four.color="black";four.backgroundColor="#95ccff";but.innerText="Submit"}
 if(a.value.length < 3 && val==1){a.style.borderColor="red";alert("Fill your name")}
 else{a.style.borderColor="black"}
 if(b.value.length < 12 && val==1){b.style.borderColor="red";alert("Fill your E-mail correctly")}
 else{b.style.borderColor="black"}
 if(c.value.length < 11 && val==1){c.style.borderColor="red";alert("Fill your number correctly")}
 else{c.style.borderColor="black"}
 if(a.value.length >= 3 && b.value.length >= 12 && c.value.length >= 11 && val==1){top1.display="none";top2.display="block";val = val- -1;go.display="block";}
if(two.color=="black" && val==2){top2.display="none";top3.display="block";go.display="block";two.color="white";two.backgroundColor="#5c40ff";tre.color="black";tre.backgroundColor="#95ccff";val= val- -1;}
document.getElementById("tz").value=val;
if (top2.display=="block"){one.color="white";one.backgroundColor="#5c40ff";two.color="black";two.backgroundColor="#95ccff"}
}
function gb(){
    var top1 = document.getElementById("top1").style;
 var top2 = document.getElementById("top2").style;
 var top3 = document.getElementById("top3").style;
 var top4 = document.getElementById("top4").style;
 var one = document.getElementById("one").style;
 var two = document.getElementById("two").style;
 var tre = document.getElementById("tre").style;
 var four = document.getElementById("four").style;
 var val = document.getElementById("tz").value;
 var go = document.getElementById("go").style;
 var but = document.getElementById("but");
 if(val==2){
    top1.display="block";top2.display="none";
go.display="none";two.color="white";two.backgroundColor="#5c40ff";one.color="black";one.backgroundColor="#95ccff";val = val - 1;
 }
else if(val==3){
    top2.display="block";top3.display="none";
go.display="block";tre.color="white";tre.backgroundColor="#5c40ff";two.color="black";two.backgroundColor="#95ccff";val = val - 1;
 }
else if(val==4){
    top3.display="block";top4.display="none";
go.display="block";four.color="white";four.backgroundColor="#5c40ff";tre.color="black";tre.backgroundColor="#95ccff";val = val - 1;but.innerText="Next Step";
 }
 document.getElementById("tz").value = val;
}
