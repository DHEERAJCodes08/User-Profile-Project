const btns = document.querySelectorAll(".fetch-btn")
const Info = document.querySelectorAll(".Content")
const Section = document.querySelector(".sect-5")

Section.addEventListener("click",function(e){
    const id = e.target.dataset.id;
    if(id){
        //remove the Class for all the Elements
        btns.forEach(function(btn){
                btn.classList.remove("active")
            });

            e.target.classList.add("active")
            console.log(e.target.classList.contains("active"));
            
            //hide other contents
            Info.forEach(function(info){
                info.classList.remove("active")

            })
            const element = document.getElementById(id);
            element.classList.add("active")
        }

 });

