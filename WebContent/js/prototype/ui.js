function UI() {
    this.outputFirst = document.getElementById("outputFirst");
    this.outputSecond = document.getElementById("outputSecond");
    this.outputResult = document.getElementById("outputResult");
}

UI.prototype.changeUI = function (element) {
    if (element.getAttribute("id").startsWith("first"))
        this.outputFirst.innerHTML = element.value;
    else
        this.outputSecond.innerHTML = element.value;
}

UI.prototype.displayResult = function (result) {
    this.outputResult.value = result;
}