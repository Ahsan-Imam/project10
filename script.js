function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewstat
  // Finish this function
  if (views>=1000000) {
     viewstat = (views / 1000000) +"M";
  } else if (views >= 1000) {
     viewstat = (views / 1000) + "K";
  } else {
     viewstat = views;
  }

  let html = `<div class="container">
        <div class="card">
            <img src=${thumbnail}
                alt="" class="image"></img>
            <div class="text">
                <H1 class="main">${title}</H1>
                <p>${cName}.${viewstat}.${monthsOld}months ago</p>
            </div>
            <div class="capsule">${duration}</div>
            

        </div>

    </div>`;
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    
}
let html1=`<div class="card">
            <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
                alt="" class="image">
            <div class="text">
                <H1 class="main">Code with harry</H1>
                <p>code with harry.177k.2months ago</p>
            </div>
            <div class="capsule">11:40</div>
        </div>`     
let join=document.querySelector(".button");
join.addEventListener("click", ()=>{
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html1
})


createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
