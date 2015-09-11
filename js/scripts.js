var findAndReplace = function(sampleInput, findString, replaceString) {
    // debugger;
    return sampleInput.replace(new RegExp('\\b'+findString+'\\b', 'gi'),replaceString);
};


$(document).ready(function()  {

    $("form#findandreplace").submit(function(event) {
        var sampleInput = ($("input#sampleInput").val());
        var findString = ($("input#findString").val());
        var replaceString = ($("input#replaceString").val());

        var result = findAndReplace(sampleInput, findString, replaceString);

        $(".output").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
