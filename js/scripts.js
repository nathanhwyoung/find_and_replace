var findAndReplace = function(sampleInput, findString, replaceString) {
    // debugger;


};


$(document).ready(function()  {

    $("form#countupby").submit(function(event) {
        var endNumber = ($("input#endNumber").val());
        var incrementer = ($("input#incrementer").val());
        var result = countUpBy(endNumber, incrementer);

        $(".output").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
