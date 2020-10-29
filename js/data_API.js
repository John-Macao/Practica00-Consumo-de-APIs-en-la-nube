var data = null;
var details = "";

var minCalories="50";
var maxCalories="800";
var minCarbs="10";
var maxCarbs="100";    
var minProtein="10";
var maxProtein="100";
var pass = "&apiKey=f0980158d8a14db6bc9522018bdc42ae";
var url = "https://api.spoonacular.com/recipes/complexSearch?query="; 



var state = {
    'querySet': null,
    'page': 1,
    'rows': 3,
    'window': 5,
}


function busquedaAPI() {
    
    var nameFood = document.getElementById("search").value;
    
    if (nameFood == "") {

        var notFound = "Sin resultado";
        document.getElementById("show").innerHTML = notFound;

    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                data = JSON.parse(this.responseText);
                state.querySet = data.results;

                construyeTabla();

                //load_data(data.results);
                
            }
        };
        xmlhttp.open("GET", url +nameFood + "&minCalories=" +minCalories+ "&maxCalories="+maxCalories + "&minCarbs="+  minCarbs + 
        "&maxCarbs="+ maxCarbs + "&minProtein=" + minProtein+ "&maxProtein=" + maxProtein + pass, true);
        xmlhttp.send();
    }
    return false;
}



/*
function load_data( res ) {

    console.log("llega 1")
    var detalles = "";

    detalles = "<th>Codigo </th>" + "<th>Bebida </th>" + "<th>Categoria </th>" + "<th>Nombre </th>" +
    "<th>Ingrediente1 </th>" + "<th>Ingrediente2</th>" + "<th>Ingrediente3 </th>" + "<th>Imagen </th>";


    for(var i of res){
        console.log("llega 2")

        var nueva = i.nutrition.nutrients;
        //console.log(nueva[1].title);

        var amount1 = nueva[0].amount;
        var amount2 = nueva[1].amount;
        var amount3 = nueva[2].amount;
        var unit1 = nueva[0].unit;
        var unit2 = nueva[1].unit;
        var unit3 = nueva[2].unit;

        detalles += "<tr>" +
            "<td>" + i.id + "</td>" + 
            "<td>" + i.title + "</td>" +
            
            "<td>" + amount1 +"   " +unit1 + "</td>" +
            "<td>" + amount2 + "   " + unit2 + "</td>" +
            "<td>" + amount3 + "   " + unit3+ "</td>" +
            "<td>" + "<img src='" + i.image +  "'" + "style= width:70px; height:70px;"+   "/>" + "</td>" +
            "</tr>";
    }

    document.getElementById("verTabla").innerHTML = detalles;
}

*/




function construyeTabla() {
    console.log("llega 1")
    var table = $("#detailsTable") 
    var dataa = pagination(state.querySet, state.page, state.rows)
    var myList = dataa.querySet

    for (var i = 0 in myList) {
        
        console.log(myList)

        var nueva = myList[i].nutrition.nutrients;
        var amount1 = nueva[0].amount;
        var amount2 = nueva[1].amount;
        var amount3 = nueva[2].amount;
        var unit1 = nueva[0].unit;
        var unit2 = nueva[1].unit;
        var unit3 = nueva[2].unit;

       console.log("llega 2")
        var row = `<tr>
                  <td>${myList[i].id}</td>
                  <td>${myList[i].title}</td>
                  <td>${amount1 + "     " +unit1}</td>
                  <td>${amount2 + "     " +unit2}</td>
                  <td>${amount3 + "     " +unit3}</td>
                  <td class=\"tg-0pky\"> <img src=${myList[i].image} width=\"70\" height=\"70\"> </td>
                  `
        table.append(row)
    }

    pageButtons(dataa.pages)
}


function pagination(querySet, page, rows) {

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows
    //console.log(querySet.length);
    var trimmedData = querySet.slice(trimStart, trimEnd)

    var pages = Math.round(querySet.length / rows);

    return {
        'querySet': trimmedData,
        'pages': pages,
    }
}



function pageButtons(pages) {
    var wrapper = document.getElementById('pagination-wrapper')

    wrapper.innerHTML = ``
    var maxLeft = (state.page - Math.floor(state.window / 2))
    var maxRight = (state.page + Math.floor(state.window / 2))

    if (maxLeft < 1) {
        maxLeft = 1
        maxRight = state.window
    }

    if (maxRight > pages) {
        maxLeft = pages - (state.window - 1)
        
        if (maxLeft < 1){
        	maxLeft = 1
        }
        maxRight = pages
    }
    
    for (var page = maxLeft; page <= maxRight; page++) {
    	wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
    }

    if (state.page != 1) {
        wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; Primero</button>` + wrapper.innerHTML
    }

    if (state.page != pages) {
        wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info"> Ultimo &#187;</button>`
    }

    $('.page').on('click', function() {
        $('#detailsTable').empty()

        state.page = Number($(this).val())

        construyeTabla()
    })

}


