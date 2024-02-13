console.log("It's working!");
 
$("#greetButton").click(function() {
    const name = $("#nameInput").val();
    $("#greetMessage").text("Hello there " + name + "!");
});

