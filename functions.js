function sayError(){
    alert("Some error occured!");
}
function showError(x){
    alert("Error "+x+" occured!");
}
function createHeaders(n){
    let headersHTML = '';
      for (var i = 1; i <= n; i++) {
        headersHTML += '<h2>Header'+i+'</h2>';
      }
        document.write(headersHTML);
}
function checkPass(x){
    if (x=="Step" || x=="Web" || x=="JavaScript"){
        document.write("Password is true!");
        return true;
    }
    else{
        document.write("Password is wrong!");
        return false;
    }
}
function sign(x){
    if (x<0){
        document.write("Число отрицательное!");
        return -1;
    }
    else  if (x>0){
        document.write("Число положительное!");
        return 1;
    }
    else{
        document.write("Число = 0!");
        return 0;
    }
}
function getDayName(d){
    if (d>=0 || d<=7){
        switch(d){
            case 1:
                {
                    return "Monday";
                }
                case 2:
                {
                    return "Tuesday";
                }
                case 3:
                {
                    return "Wednesday";
                }
                case 4:
                {
                    return "Thursday";
                }
                case 5:
                {
                    return "Friday";
                }
                case 6:
                {
                    return "Saturday";
                }
                case 7:
                {
                    return "Sunday";
                }
        }
    }
    else{
        document.write("Wrong input of day number!");
    }
}