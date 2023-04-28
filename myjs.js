function removenav(){
    $("nav").hide()
}

// document.ready(
//     function(){
//         $(".beforebtn").style.backgroundColor = colorindex[getrandom()];
//     }
// );


let max = 6;
let min = 1;
function getrandom(){
    let index = Math.floor(Math.random()*(max - min + 1) + min);
    console.log(colorindex[index])
    return index

}


const colorindex = {
    1: "black",
    2: "green",
    3: "violet",
    4: "yellow",
    5: "orange",
    6: "red"
}

function displaywow(id){
    // removenav();

    document.getElementById(id).style.backgroundColor = colorindex[getrandom()];;
    
    
    // for (let ele of mycollection){
    //     console.log(ele)
    // }
    // console.log(mycollection)

}
// 

