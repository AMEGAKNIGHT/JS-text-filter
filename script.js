function myFunction() {
    var input, filter, ul, li, a, i; 
    input = document.getElementById("myInput"); //придает знание input и получает элемент по индитификатору
    filter = input.value.toUpperCase();  // подучает значение из input
    ul = document.getElementById("myUL"); // получает элементы по индитификатору
    li = ul.getElementsByTagName('li'); //получение элементов по тегу

        for (i=0; i<li.length; i++) { 
            a =li[i].getElementsByTagName("a")[0]; //получает по тегу ссылку, начиная со значения [0]
            if (a.innerHTML.toUpperCase() .indexOf(filter) > -1) {
                li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}
