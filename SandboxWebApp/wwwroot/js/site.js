// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function CalculateBrand() {
    var current = new Date();
    var target = new Date(2020, 2, 13, 13, 0, 0, 0);

    var diff = target - current;

    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;

    var brandString = "Fiddle off "+mm;
    $("#timer").html(brandString);
}

CalculateBrand();
setInterval(CalculateBrand, 10000);

function AnimateList($listItems, index, callback) {
    if (index >= $listItems.length) {
        callback(); 
        return;
    }

    $listItems.eq(index).animate({ left: 0, opacity: 1 }, function () {
        AnimateList($listItems, index + 1, callback);
    });
}

function FadeLists($lists, index) {
    if (index >= $lists.length) index = 0;

    var $currentList = $lists.eq(index);
    $currentList.fadeIn(()=> {
        AnimateList(
            $currentList.find("li"),
            0,
            () => {
                FadeLists($lists, index + 1);
            }
        );
    });
}

var $allLists = $("ul.animate");
FadeLists($allLists, 0);