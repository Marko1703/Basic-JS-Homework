console.log("It's working!");

$("#generateButton").click(function() {
    const text = $("#textInput").val();
    const color = $("#colorInput").val();

    if (!text) {
        $("message").text("Please enter header text");
        return;
    }

    if (!isVaildColor(color)) {
        $("message").text("Please enter a vaild color");
        return;
    }

    $("#message").text("");

    const h3 = $("<h3>");
    h3.text(text);
    h3.css("color", color);

    $("#headers").append(h3);

});

function isVaildColor(color) {
    if(!color || color === "#000000") {
        return false;
    }
    return true;
}