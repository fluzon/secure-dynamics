/* functions for all product related pages */


/* add Producto Item to a Group*/
var ProductItem = function () {
    var auto_increment = 1;
    return {
        add: function(id_row_header){
          var id_row = "product-item" + (auto_increment + 1);
          $(id_row_header).append("<div class=\"row margin-top10\" id=\"" + id_row + "\"> \
            <div class=\"col-md-2\"><input type=\"text\" class=\"form-control\" style=\"max-width:100px;\"></div> \
            <div class=\"col-md-3\"><input type=\"text\" class=\"form-control\" style=\"max-width:220px;\"></div> \
            <div class=\"col-md-2\"><input type=\"text\" class=\"form-control\" style=\"max-width:100px;\"></div> \
            <div class=\"col-md-2\"><input type=\"text\" class=\"form-control\" style=\"max-width:100px;\"></div> \
            <div class=\"col-md-2\"><input type=\"text\" class=\"form-control\" style=\"max-width:100px;\"></div> \
            <div class=\"col-md-1\"><a href=\"javascript:;\" class=\"btn minus-button\" onclick=\"ProductItem.removeItem('#" + id_row + "')\">&nbsp;</a></div> \
          </div>");
          auto_increment = auto_increment + 1;
        },
        removeItem: function(id_row){
          $(id_row).remove();
        },
        init: function (id_button, id_row_header) {
          $(id_button).on('click',function(){ProductItem.add(id_row_header);});
        },
    };

}();

jQuery(document).ready(function() {

   ProductItem.init('#add-item-button','#product-items');

});
