(function(){


    function createElementStyle(elem) {
        elem.style.backgroundColor = "#000";
        elem.style.borderRadius    = "4px";
        elem.style.bottom          = "18px";
        elem.style.color           = "#66d9ef";
        elem.style.fontFamily      = "Helvetica, Arial, sans-serif";
        elem.style.fontSize        = "12px";
        elem.style.height          = "16px";
        elem.style.lineHeight      = "16px";
        elem.style.opacity         = "0.75";
        elem.style.padding         = "1em";
        elem.style.position        = "fixed";
        elem.style.right           = "18px";
        elem.style.textAlign       = "center";
        elem.style.width           = "96px";
        elem.style.zIndex          = "10000";
    }

    function writeWindowHeight() {
        return window.innerWidth + " x " + window.innerHeight;
    }

    var resizeHandler = function() {
        outpt.innerHTML = writeWindowHeight();
    };

    // ----------------------------------------------------------------

    var outpt = document.createElement("div");

    createElementStyle(outpt);
    outpt.innerHTML = writeWindowHeight();

    document.body.appendChild(outpt);

    window.addEventListener("resize", resizeHandler);

}());