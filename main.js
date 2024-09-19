const sections = document.querySelectorAll("section")

sections.forEach((section) => {
    
    window.addEventListener("load", eventListener); 
    window.addEventListener("scroll", eventListener);

    function eventListener(){
        let windowHeight = window.innerHeight;
        let sectionRectTop = section.getBoundingClientRect().top;

        console.log("Window Height: " + windowHeight);
        console.log("Section RectTop: " + sectionRectTop);

        if(sectionRectTop < windowHeight){
            section.classList.add("active");
        }
    }

    window.addEventListener("scroll", () => {
        let reveals = section.querySelectorAll(".reveal");

      reveals.forEach((reveal, index) => {
        if(section.classList.contains("active")){
            const delay = 600;

            setTimeout(() => {
                reveal.classList.add("active");
            }, index * delay);           
           }
        });
    });
    window.addEventListener("load", () => {
        let reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            let windowHeight = window.innerHeight;
            let revealRectTop = reveal.getBoundingClientRect().top;

            if(revealRectTop < windowHeight){
                const delay = 600;

                setTimeout(() => {
                    reveal.classList.add("active");
            }, index * delay);
        }
     });
   });
});