var result = "";
var text = "text";
var scamperText = " ملخص عناصر التفكير الإبداعي عبر سكامبر : " + '\r\n';
var trizText = " ملخص استراتيجيات حل المشكلات الإبداعي عبر تريز : " + '\r\n';
var influenceText = " بنود طريقة بريس للإقناع : " + '\r\n';
function save(a,b,c){
    for(i=a ; i<= b ; i++){
        var x = text + i ;
        var y = document.getElementById(x).value ;
        y += '\r\n';
        switch (a) {
            case 1:
                scamperText += y ;break;
            case 10:
                trizText += y ;break;
            case 40:
                influenceText += y ;break;
          }
    }
    result = scamperText + '\r\n' + '\r\n' + trizText + '\r\n' + '\r\n' + influenceText + '\r\n' + '\r\n';
    result = result.replace(/\r?\n/g, '<br />');
    document.getElementById("resultsText").innerHTML = result ;
    $(c).modal('hide');

}
