function up_tank(){
    let up_tank = parseInt(document.getElementById("tank").style["top"]);
    document.getElementById("tank").style["top"] = up_tank - 19 + 'px';
}

function down_tank(){
    let down_tank = parseInt(document.getElementById("tank").style["top"]);
    document.getElementById("tank").style["top"] = down_tank + 19 + 'px';
}

function left_tank(){
    let left_tank = parseInt(document.getElementById("tank").style["left"]);
    document.getElementById("tank").style["left"] = left_tank - 19 + 'px';
}

function right_tank(){
    let right_tank = parseInt(document.getElementById("tank").style["left"]);
    document.getElementById("tank").style["left"] = right_tank + 19 + 'px';
}