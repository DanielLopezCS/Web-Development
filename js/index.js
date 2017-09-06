//https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json

  
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
  var callBack = "&format=json&callback=?";
function getWikiResults(input)
{
 
  var jsonCall = url + input + callBack;
  
  $.getJSON(jsonCall, function(data){
         		$("#output").html();
        		for(var i=0;i<data[1].length;i++){
        			$("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2 class = 'blackTextMe blackBorderMe'>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
        		}
        		
  
});
  
}

$(".input1").on('keydown', function (e) {
 
    $("#output").fadeOut(500);

    if (e.keyCode == 13) {
    $("#output").fadeIn(1000);
      getWikiResults(document.getElementById("Search").value);
      document.getElementById("Search").value = "";
     
   
      $("h1").fadeOut(1000);
         
   
      
  
    }
});

  
function randomWikiClick(){
  window.open("https://en.wikipedia.org/wiki/Special:Random"); 
}