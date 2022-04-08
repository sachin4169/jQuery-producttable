$(".success").hide();
$(".error").hide();
$("#update_product").hide();
var product = [];
$("#add_product").click(()=>{
    var P_skn = $("#product_sku").val();
    var P_name = $("#product_name").val();
    var P_price = $("#product_price").val();
    var P_quantity =$("#product_quantity").val();

    if(P_skn == "" ){
        $("#product_sku").css({"border": "1px solid red"});
        // setTimeout(()=>{},6000) $(".error").append("fill Product SKU field").show();
    }else if(P_name == ""){
        $("#product_sku").css({"border": "1px solid black"});
        $("#product_name").css({"border": "1px solid red"});
    } else if(P_price == ""){
        $("#product_sku").css({"border": "1px solid black"});
        $("#product_name").css({"border": "1px solid black"});
        $("#product_price").css({"border": "1px solid red"});
    } else if (P_quantity == ""){
        $("#product_sku").css({"border": "1px solid black"});
        $("#product_price").css({"border": "1px solid black"});
        $("#product_name").css({"border": "1px solid black"});
        $("#product_quantity").css({"border": "1px solid red"});
    } else{
        $("#product_quantity").css({"border": "1px solid black"});
        var data = {
        "sn":P_skn,
        "name":P_name,
        "price":P_price,
        "quantity":P_quantity,
        }
        product.push(data);
        console.log(product)
        $(".success").append("your product is added successfuly").show();
        setTimeout(()=>{$(".success").hide();},6000)
        $("#product_sku").val("");
        $("#product_name").val("");
        $("#product_price").val("");
        $("#product_quantity").val("");
        display();
    }
    
});
var table = `	<table>
<tr>
    <th>SKU</th>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Action</th>
</tr>`


function display(){
    var row = ""
    product.forEach((e,i) => {
        // console.log(element);
        row += `<tr>
        <td>${e.sn}</td>
        <td>${e.name}</td>
        <td>${e.price}</td>
        <td>${e.quantity}</td>
        <td><a href="#" id="${i}" class="edit">Edit</a><a href="#"  class="delete">Delete</a></td>
        </tr>`
    });
    $("#product_list").empty();
    $("#product_list").append(table+row+"</table>");
}

$(document).on('click','.delete',function(){
    console.log("working")
    console.log(this.id)
    $(this).parent('td').parent("tr").remove();
})

$(document).on("click", '.edit', function(){
    console.log("working")
    console.log(this.id)
    var i = this.id;
    $(this).parent('td').parent("tr").css({"color": "red"});
    var info = product[i];
    console.log(info.sn);
    $("#id").val(`${i}`);
    $("#product_sku").val(`${info.sn}`);
    $("#product_name").val(`${info.name}`);
    $("#product_price").val(`${info.price}`);
    $("#product_quantity").val(`${info.quantity}`);
    $("#update_product").show();
    $("#add_product").hide();
});

$("#update_product").click(()=>{
    var id = $("#id").val();
    console.log(id);
    var product_info = product[id];
    product_info.sn = $("#product_sku").val();
    product_info.name = $("#product_name").val();
    product_info.price = $("#product_price").val();
    product_info.quantity = $("#product_quantity").val();

    display()
    $("#product_sku").val("");
    $("#product_name").val("");
    $("#product_price").val("");
    $("#product_quantity").val("");
    $("#update_product").hide();
    $("#add_product").show();
    console.log(product)
});

