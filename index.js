for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        var Htmlbutton = this.innerHTML;
        makeSound(Htmlbutton);
        buttonAnimation(Htmlbutton);
    });
}
document.addEventListener("keypress" , function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){

    switch (key) {
        case "A":
            var aawaz__a = new Audio("sound/a.mp3");
            aawaz__a.play();
            break;
        case "B":
            var aawaz_b = new Audio("sound/b.mp3");
            aawaz_b.play();
            break;
        case "C":
            var aawaz_c = new Audio("sound/c.mp3");
            aawaz_c.play();
            break;
        case "D":
            var aawaz_d = new Audio("sound/d.mp3");
            aawaz_d.play();
            break;
        case "E":
            var aawaz_e = new Audio("sound/e.mp3");
            aawaz_e.play();
            break;
        case "F":
            var aawaz_f = new Audio("sound/f.mp3");
            aawaz_f.play();
            break;
        case "G":
            var aawaz_g = new Audio("sound/g.mp3");
            aawaz_g.play();
            break;
        case "H":
            var aawaz_h = new Audio("sound/h.mp3");
            aawaz_h.play();
            break;
        case "I":
            var aawaz_i = new Audio("sound/i.mp3");
            aawaz_i.play();
            break;
        case "J":
            var aawaz_j = new Audio("sound/j.mp3");
            aawaz_j.play();
            break;
        case "K":
            var aawaz_k = new Audio("sound/k.mp3");
            aawaz_k.play();
            break;
        case "L":
            var aawaz_l = new Audio("sound/l.mp3");
            aawaz_l.play();
            break;
        case "M":
            var aawaz_m = new Audio("sound/m.mp3");
            aawaz_m.play();
            break;
        case "N":
            var aawaz_n = new Audio("sound/n.mp3");
            aawaz_n.play();
            break;
        case "O":
            var aawaz_o = new Audio("sound/o.mp3");
            aawaz_o.play();
            break;
        case "P":
            var aawaz_p = new Audio("sound/p.mp3");
            aawaz_p.play();
            break;
        case "Q":
            var aawaz_q = new Audio("sound/q.mp3");
            aawaz_q.play();
            break;
        case "R":
            var aawaz_r = new Audio("sound/r.mp3");
            aawaz_r.play();
            break;
        case "S":
            var aawaz_s = new Audio("sound/s.mp3");
            aawaz_s.play();
            break;
        case "T":
            var aawaz_t = new Audio("sound/t.mp3");
            aawaz_t.play();
            break;
        case "U":
            var aawaz_u = new Audio("sound/u.mp3");
            aawaz_u.play();
            break;
        case "V":
            var aawaz_v = new Audio("sound/v.mp3");
            aawaz_v.play();
            break;
        case "W":
            var aawaz_w = new Audio("sound/w.mp3");
            aawaz_w.play();
            break;
        case "X":
            var aawaz_x = new Audio("sound/x.mp3");
            aawaz_x.play();
            break;
        case "Y":
            var aawaz_y = new Audio("sound/y.mp3");
            aawaz_y.play();
            break;
        case "Z ":
            var aawaz_z = new Audio("sound/z.mp3");
            aawaz_z.play();
            break;
        default: console.log(Htmlbutton)

    }

}
function buttonAnimation(currentKey){
 var activeButton = document.querySelector("." + currentKey);
 activeButton.classList.add("clicked");
}













