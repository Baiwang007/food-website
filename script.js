document.getElementById("loadMore").addEventListener("click", function() {
    let menu = document.getElementById("menu");
    
    let newFood = document.createElement("div");
    newFood.className = "food-item";
    newFood.innerHTML = `
        <img src="images/food3.jpg" alt="美食3">
        <p>蛋糕甜点 - 价格：¥30</p>
    `;
    
    menu.appendChild(newFood);
});
