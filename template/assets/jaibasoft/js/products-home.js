/* Formatting function for row details - modify as you need */
function setChildProducts ( d ) {
  var childs = new Array();
  var c;

  if (d.sub_products.length>0)
  {

    for (i in d.sub_products) {

      c = $('<tr>'+
                  '<td style="padding-left:25px;">' + d.sub_products[i].brand + '</td>'+
                  '<td>' + d.sub_products[i].category + '</td>'+
                  '<td>' + d.sub_products[i].title + '</td>'+
                  '<td>' + d.sub_products[i].buy_price + '</td>'+
                  '<td>' + d.sub_products[i].sell_price + '</td>'+
                  '<td>' + d.sub_products[i].mrp + '</td>'+
                  '<td>' + d.sub_products[i].current_stock + '</td>'+
                  '<td>' + d.sub_products[i].threshold + '</td>'+
                  '<td></td>'+
              '</tr>'
          );
          c.addClass('active');
          if (i==(d.sub_products.length-1))
          {
            c.addClass('bottom_separator');
          }
       childs.push(c);
    }
  }
  return childs;
}

$(document).ready(function() {
    var table = $('#products').DataTable({
        'ajax': '../assets/jaibasoft/js/products_home.json',
        'columns': [
            {
                'data': 'brand',
                'render': function ( data, type, row, meta ) {
                    if ( row.type == 'group_product' ) {
                      return '<a href="#" class="product-group">'+data+'<span class="caret"></span></a>';
                    }
                    else {
                      return '<a href="#">' + row.brand+'</a>';
                    }
                  }
            },
            { 'data': 'category' },
            { 'data': 'title' },
            { 'data': 'buy_price' },
            { 'data': 'sell_price' },
            { 'data': 'mrp' },
            { 'data': 'current_stock' },
            { 'data': 'threshold' },
            { 'orderable': false,
              'render': function ( data, type, row, meta ) {
                return '<a class="table-icon-option" href="javascript:;"><i class="icon-edit"></i></a> <a class="table-icon-option" href="javascript:;"><i class="icon-newcheck"></i></a>';
              }
            }

        ],
        'createdRow': function( row, data, dataIndex ) {
          if ( data.type == 'group_product' ) {
              $(row).addClass( 'active' );
              $('td', row).eq(0).addClass('details-control');
          }
        },
        'order': [[1, 'asc']],
        'lengthMenu': [ 10, 25, 50, 100 ]
    } );

    $('#search_box').keyup(function(){
          table.search($(this).val()).draw() ;
    })

    // Add event listener for opening and closing details
    $('#products tbody').on('click', 'td.details-control', function(){
        var tr = $(this).closest('tr');
        var row = table.row( tr );

        if(row.child.isShown()){
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(setChildProducts(row.data())).show();
            tr.addClass('shown');
        }
    });


});
