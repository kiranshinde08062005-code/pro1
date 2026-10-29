function press(value) {
    document.getElementById('inte').value += value;
}

function calculate() {

    let num = document.getElementById("inte").value;

    let op = "";

    if (num.includes("+")) {
        op = "+";
    }
    else if (num.includes("-")) {
        op = "-";
    }
    else if (num.includes("*")) {
        op = "*";
    }
    else if (num.includes("/")) {
        op = "/";
    }

    let parts = num.split(op);

    let a = Number(parts[0]);
    let b = Number(parts[1]);

    if (op == "+") {
        document.getElementById("inte").value = a + b;
    }
    else if (op == "-") {
        document.getElementById("inte").value = a - b;
    }
    else if (op == "*") {
        document.getElementById("inte").value = a * b;
    }
    else if (op == "/") {
        document.getElementById("inte").value = a / b;
    }
}

function Clear() {
    document.getElementById('inte').value = "";
}
function square() {
    let num = Number(document.getElementById("inte").value);

    document.getElementById("inte").value = num * num;
}

