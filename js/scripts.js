var countUpBy = function(endNumber, incrementer) {
    // debugger;

    var endInt = parseInt(endNumber);
    var incrementInt = parseInt(incrementer);
    var array = [];

    for (var i = 0; i <= endInt; i += incrementInt) {
        // returnString += i.toString() + ", ";
        array.push(i);
    }
    var returnString = array.join(', ');
    return returnString;
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
