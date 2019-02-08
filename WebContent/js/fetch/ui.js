class UI {
    constructor() {
        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
    }

    changeUI(element) {
        if (element.getAttribute("id").startsWith("first"))
            this.outputFirst.innerHTML = element.value;
        else
            this.outputSecond.innerHTML = element.value;
    }

    displayResult(result) {
        this.outputResult.value = result;
    }
}