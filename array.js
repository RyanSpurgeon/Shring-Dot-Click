class DOT {
    // Properties (State)
    constructor() {
        this.x = random(150, width - 150)
        this.y = random(150, height - 150)
        this.size = random(150, 255)
        this.r = 0
        this.g = this.size
        this.opacity = random(100, 255)
        this.score = this.g
        this.i = 0

        //        var distance = dist(mouseX, mouseY, this.x, this.y)
    }

    // Methods (Behaviour)
    move(change) {
        
        this.g = this.g - change;
        this.r = this.r + change;
        this.size = this.size - change;
        if (this.size <= 0) {
            this.i ++;
            this.size = 0
            this.x = -200
            if (this.i == 1){
            lifes --;
        }
    }}
// ADD SOME CUT OFF POINT

    show() {
        noStroke()
        fill(this.r, this.g, 0, this.opacity)
        ellipse(this.x, this.y, this.size, this.size)
    }

    clicked() {
       
        let distance = dist(mouseX, mouseY, this.x, this.y)
        if (distance < this.size / 2) {
            score = score + floor(this.score)
            return true;
             
        } else {
            return false;
        }
    }
}
