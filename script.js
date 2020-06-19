$(function () {
    $(':radio').click(function () {
        if (this.checked) {
            $('#shoes').attr('src', this.value);
        }
    });
});

$(function () {
    $('.drow__size').click(function () {
        $('#size').slideToggle(500);
        $('#size li').click(function () {
            $('#front-size').text(this.innerHTML);
        });
    });
    $('.drow__qty').click(function () {
        $('#qty').slideToggle(500);
        $('#qty li').click(function () {
            $('#front-qty').text(this.innerHTML);
        });
    });
});