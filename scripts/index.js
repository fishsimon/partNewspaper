/**
 * Created by lenovo on 2017/4/14.
 */
function getUnits() {
    var url = "http://localhost:8005/getUnits";
    var xhr = new XMLHttpRequest();
    xhr.open("get",url);
    xhr.onload = function () {
        var result = xhr.responseText;
        // console.log(result);
        var navigtor =document.querySelector("nav .inner");
        var htmlResult = "";
        var data = JSON.parse(result);
        for(var i=0;i<data.length;i++){
            var selected = "";
            if(i==0){
                selected = "selected";
            }
            htmlResult += "<div class='item " + selected + "'>" +  data[i].name + "</div>";
            }
            // html += "<div class='item'>" + data[i]. +"</div>";

        navigtor.innerHTML += htmlResult;
        navWidth();
        changSelected();
        console.log(htmlResult);
    };
       xhr.send();
    }
getUnits();
function getArtical() {
    var url = "http://localhost:8005/findDocument";
    var xhr = new XMLHttpRequest();
    xhr.open("get",url);
    xhr.onload = function () {
        var result = xhr.responseText;
        var articalTitle = document.querySelector(".news-items");
        var htmlResult = "";
        var data = JSON.parse(result);
        for(var i=0;i<data.contents.length;i++){
            htmlResult += "<div class='item'>"+
                "<div class='cover'>"+
                "<img src='../images/1.jpg' height='100' width='100'/>"+
                "</div>"+
                "<div class='content'>"+
                "<h2>"+data.contents[i].title+"</h2>"+
                "<p>"+
                "<span>解放军报</span>"+
                "<span>2017-03-31</span>"+
                "</p>"+
                "</div>"+
                "</div>"
        }
        articalTitle.innerHTML = htmlResult;
        console.log(htmlResult);
    };
    xhr.send();
}
getArtical();
function navWidth() {
    var navInner = document.querySelector(".inner");
    var totalWidth = 0;
   var navItems = document.querySelectorAll("nav .inner .item");
   for(var i=0;i<navItems.length;i++){
        totalWidth += navItems[i].offsetWidth;
   }
    navInner.style.width = totalWidth + "px";
}
function changSelected() {
    $("nav .item").click(function () {
        $("nav .item.selected").removeClass("selected");
        $(this).addClass("selected");
    });
    // var innerClick = document.querySelectorAll("nav .item");
    // for(var j=1;j<innerClick.length;j++){
    //     innerClick[j].onclick = function (e) {
    //
    //     }
    // }

}