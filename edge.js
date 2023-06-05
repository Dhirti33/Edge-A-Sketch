const number = document.querySelector("#number");
const color = document.querySelector("#color");
const clear = document.querySelector(".clear");
const grid = document.querySelector(".grid");
const cells = document.querySelectorAll(".cell");

// ======== Grid Layout ======
number.addEventListener("change",(e)=>{
    grid.textContent = ""
    let gridLayout = e.target.value
    if(gridLayout > 64){
        alert("Number too huge")
        window.location.reload()
    }else if(gridLayout < 8){
        alert("Number too small")
        window.location.reload()
    }else{
        for(let i = 0; i < gridLayout; i++){
            grid.style.cssText =  "grid-template-columns: repeat(" +`${gridLayout}`+",1fr);"
            for(let x = 0; x < gridLayout; x++){
                const cell = document.createElement('div')
                cell.setAttribute("class","cell")
                grid.append(cell)
                
    
                cell.addEventListener('mouseover',()=>{
                    cell.style.background = gridColor
                })

                clear.addEventListener('click',()=>{
                    cell.style.background = "none"
                })
            }
            
        }
    }
    
})
// =======================================

// ======== Grid background Color =====
let gridColor = 'rgba(0,0,0,0.7)'
color.addEventListener("change",(e)=>{
    gridColor = e.target.value; 
    
})

cells.forEach((cell) =>{
    cell.addEventListener('mouseover',()=>{
        cell.style.background = gridColor
    })
})
// =========================================

// ======== Clear board =======
clear.addEventListener('click',() =>{
    cells.forEach((cell) =>{
            cell.style.background = "none"
    })
})
