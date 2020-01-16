function Block(){
    this.blockLength = kenar * 4;
    this.x = (width - this.blockLength)/2;
    //tam ortada olsun block, canvasın iki kenarına da eşit uzaklıkta olsun
    this.y = height - kenar//canvasın bir üstünde olsun
    //this.xSpeed = 3.5;
    //x ekseninde hızı, kutuların düşüş hızından (ySpeed) yüksek olsun ki yetişebilsin

    //bloga hareket kazandıralım
    //sağ yada sol tuşa başmamızla hareketlenecek
    this.move = function(xSpeed){
        this.x += xSpeed;
        //x koordinatını xSpeed kadar arttıracak
    }

    this.upDown = function(upDown){
        this.y += upDown;
    }

    this.show = function(){
        //ekranda görünmesi için
        fill(0,255,0);//yeşil
        rect(this.x, this.y, this.blockLength, kenar);
    }    
}