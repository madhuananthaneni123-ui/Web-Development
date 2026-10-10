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