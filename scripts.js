(function ($) {

    $(document).ready(function () {

        $(".btn").on("click", function (e) {

            e.stopPropagation();

            var ul = $("ul");
            var imie = $.trim($("#imie").val());

            if (imie.length > 0) {
                $(".text-danger").hide();

                li = $("<li></li>");
                li.text(imie);

                if (ul.length > 0) {
                    ul.append(li);

                } else {
                    ul = $("<ul></ul>")
                    $(".text").append(ul);
                    ul.append(li);
                }
            } else {
                $(".text-danger").show();
            }
        });

    });

})(jQuery);