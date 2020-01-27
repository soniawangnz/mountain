function myFunction() {
    alert("I am an alert box!");
    console.log(myFunction);
  }

var project = {
    title: "One Tree Hill",
    class: "imageClass",
    description: "I had to run up this hill like four times in high school with a map and a compass for orienteering in gym class. <br><br>It's called One Tree Hill because it only had one tree next to the monument but some drunk guy cut it down one night when I was 14.<br><br><br><br><br>",
    image:
      "./assets/Screen Shot 2020-01-26 at 11.55.03 AM.png"
  };

//   function displayTitle() {
//     // var x = document.getElementById("myDIV");
//     // if (x.style.display === "none") {
//     //   x.style.display = "block";
//     // } else {
//     //   x.style.display = "none";
//     // }
//   }

  function displayTitle() {
    var container = document.querySelector("#container");
    var title = document.createElement("h3");
    var rockImage = document.createElement("img");
    var description = document.createElement("p");
    var icon = document.createElement("svg")

    // var x = document.getElementById("myDIV");
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  
    description.innerHTML = project.description;
    rockImage.src = project.image;
    title.innerHTML = project.title;
  
    title.className = "titleClass";
    description.className = "descriptionClass";
    rockImage.className = "imageClass";
  
    container.appendChild(rockImage);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(description);
  }

  var project1 = {
    title: "Mt. Wellington",
    class: "imageClass",
    description: "I would pass this mountain on the way to school and netball practice and games on the weekends and on the way to Gina's house. It has easily one of the craziest roundabouts I have ever driven on.<br><br><br><br><br>",
    image: "./assets/Screen Shot 2020-01-26 at 12.15.19 PM.png"
    
  };


  function displayTitle1() {
    var container1 = document.querySelector("#container");
    var title = document.createElement("h3");
    var rockImage = document.createElement("img");
    var description = document.createElement("p");
  
    description.innerHTML = project1.description;
    rockImage.src = project1.image;
    title.innerHTML = project1.title;
  
    title.className = "titleClass";
    description.className = "descriptionClass";
    rockImage.className = "imageClass";
  
    container1.appendChild(rockImage);
    container1.appendChild(title);
    container1.appendChild(description);
  }


  var project2 = {
    title: "Mt. Eden",
    class: "imageClass",
    description: "There was a really good Chinese restaurant in this area, I went with my sisters once and we got noodles and dumplings. Sometimes I would drive here during free periods to eat lunch.<br><br><br><br><br>",
    image: "./assets/Screen Shot 2020-01-26 at 12.25.46 PM.png"
  };


  function displayTitle2() {
    var container2 = document.querySelector("#container");
    var title = document.createElement("h3");
    var rockImage = document.createElement("img");
    var description = document.createElement("p");
  
    description.innerHTML = project2.description;
    rockImage.src = project2.image;
    title.innerHTML = project2.title;
  
    title.className = "titleClass";
    description.className = "descriptionClass";
    rockImage.className = "imageClass";
  
    container2.appendChild(rockImage);
    container2.appendChild(title);
    container2.appendChild(description);
  }

  var project3 = {
    title: "Mt. Victoria",
    class: "imageClass",
    description: "I sat here on New Years Eve in 2017 and I watched the fireworks go off in Auckland City on top of the skytower with Rebecca. It was freezing cold and we probably should have brought blankets.<br><br><br><br><br>",
    image:"./assets/Screen Shot 2020-01-26 at 2.14.30 PM.png"
  };



  function displayTitle3() {
    var container3 = document.querySelector("#container");
    var title = document.createElement("h3");
    var rockImage = document.createElement("img");
    var description = document.createElement("p");
  
    description.innerHTML = project3.description;
    rockImage.src = project3.image;
    title.innerHTML = project3.title;
  
    title.className = "titleClass";
    description.className = "descriptionClass";
    rockImage.className = "imageClass";
  
    container3.appendChild(rockImage);
    container3.appendChild(title);
    container3.appendChild(description);
  }


  var project4 = {
    title: "Mt. St John",
    class: "imageClass",
    description: "This mountain was the closest one to my high school. It was surrounded by trees and houses so you never saw the top but I bumped into some sheep while I was up there once.<br><br><br><br><br>",
    image:"./assets/Screen Shot 2020-01-26 at 2.27.25 PM.png"
  };



  function displayTitle4() {
    var container4 = document.querySelector("#container");
    var title = document.createElement("h3");
    var rockImage = document.createElement("img");
    var description = document.createElement("p");
  
    description.innerHTML = project4.description;
    rockImage.src = project4.image;
    title.innerHTML = project4.title;
  
    title.className = "titleClass";
    description.className = "descriptionClass";
    rockImage.className = "imageClass";
  
    container4.appendChild(rockImage);
    container4.appendChild(title);
    container4.appendChild(description);
  }