/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

class Carousel {
    constructor(element){
        this.element = element;

        this.btnLeft = this.element.querySelector(".left-button");
        this.btnRight = this.element.querySelector(".right-button");

        this.images = this.element.querySelectorAll("img");
        this.currentImgId = 0;
        this.images[0].style.display = "block";

        this.btnLeft.addEventListener("mousedown", this.contLeft.bind(this));
        this.btnRight.addEventListener("mousedown", this.contRight.bind(this));
    }

    contLeft(){
        this.left();// rotate on click
        let event = setInterval(this.left.bind(this), 800); //rotate every .8s

        let stop = ()=>{ //removes our listener and the interval
            clearInterval(event)
            //we're on the 
            window.removeEventListener("mouseup", stop);
        }

        window.addEventListener("mouseup", stop); // on window so rotation stops if your mouse moves off button
    }
    
    contRight(){
        this.right();
        let event = setInterval(this.right.bind(this), 800);

        let stop = ()=>{
            clearInterval(event)
            window.removeEventListener("mouseup", stop);
        }

        window.addEventListener("mouseup", stop);
    }

    left(){
        this.images[this.currentImgId].style.display =  null; // get our original img set it to default style
        let newId = this.currentImgId - 1; // get the id of our new img
        this.currentImgId = newId < 0 ? this.images.length - 1 : newId; // make sure id falls in our array.
        this.images[this.currentImgId].style.display =  "block"; // set our new active image
    }

    right(){
        this.images[this.currentImgId].style.display =  null;
        let newId = this.currentImgId + 1;
        this.currentImgId = newId > this.images.length - 1 ? 0 : newId;
        this.images[this.currentImgId].style.display =  "block";
    }
}

let carousel = new Carousel(document.querySelector(".carousel"));