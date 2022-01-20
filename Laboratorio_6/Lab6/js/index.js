
$(".formulario").on('click','.agregar', function(e){
    //alert($(this).text())
    e.preventDefault()
    let newDiv = $("<div>")
    let newLi = $("<li>")
    let newCheck = $("<button>")
    let newDel = $("<button>")
    let newP = $("<p>")

    newP.toggleClass("itemShop")
    newLi.toggleClass("lis")
    newCheck.toggleClass("checar")
    newDel.toggleClass("del")

    newP.text($("#newText").val())
    newCheck.text("Check")
    newDel.text("Delete")

    $("#Lista").append(newLi)
    newLi.append(newDiv)
    newDiv.append(newP)
    newDiv.append(newCheck)
    newDiv.append(newDel)
    
} )

$("#Lista").on('click','.checar', function(){
    //alert($(this).text())
    if ($(this).prev().hasClass("chec")) {
        $(this).prev().removeClass('chec')
    } else {
        $(this).prev().addClass('chec')
    }
    
} )

$("#Lista").on('click','.del', function(){
  //alert($(this).text())
  $(this).parent().parent().remove()
  
} )

