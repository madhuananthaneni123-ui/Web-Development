var user=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"Images/john.png"
    },
    {
        "name":"Jane Smith",
        "gender":"Female",
        "image":"Images/jane.png"
    }
]

var index = 0;

function toggle() {
    console.log("hi from js :Toggle")
    if(index==0){
        index=1;
    }
    else{
        index=0;
    }
    document.getElementById("user-name").innerText=user[index].name;
    document.getElementById("user-gender").innerText=user[index].gender;
    document.getElementById("user-image").src=user[index].image;
}
function randomUser() {
    fetch('https://randomuser.me/api/')
        .then(function(rawData){
            return rawData.json();
        })
        .then(function(jsonData){
            var user=jsonData.results[0];
            var gender=user.gender;
            var fullname=user.name.title+" "+user.name.first+" "+user.name.last;
            var image=user.picture.medium;
            document.getElementById("user-gender").innerText=gender;
            document.getElementById("user-name").innerText=fullname;
            document.getElementById("user-image").src=image;
        })

    
}