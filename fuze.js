function Fuze(){
    this.x = floor(random(0, kenar)) * kenar;
    this.y = floor(random(-kenar,0)) * kenar;
    this.ySpeed = 2.5; 
    this.fire = function(){
        
        this.y += this.ySpeed;
        
        // if(this.y > height){
        if(this.y < 0){
            
            this.x = floor(random(kenar,0))*kenar;
            this.y = floor(random(0,kenar))*kenar;   
            // score++;
        }
    }
    //kutuyu ekranda göstermek içinde show() methodu
    this.show = function(){
        fill(255,0,0);//kırmızı
        rect(this.x, this.y, kenar, kenar);
    }
}