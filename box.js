
function Box(){
    // this.x = 0;
    //kutuların x kordinatı bilgisini tutacak, bunlar şu anda sabit koordinatlar, ancak bize rasgele koordinat lazım
    this.x = floor(random(0, kenar)) * kenar;
    //random rastgele float değer üsretiyor, ama bize tam sayı değerler lazım, floor da bu rasgele değeri en yakın integer, tam sayıya yuvarlıyor, bizim üretmek istediğimiz sayılar, 0 dan kenar uzunluğuna kadar sayılar,
    //ayrıca oluşturduğumuz kutular canvasın dışına çıkması diye, kenar ile çarpıyoruz
    // this.y = 0;
    //kutuların y kordinatı bilgisini tutacak, bunlar şu anda sabit koordinatlar, ancak bize rasgele koordinat lazım
    this.y = floor(random(-kenar,0)) * kenar;
    this.ySpeed = 2.5; //kutular yukarıdan aşağıya düşeceği için bir düşme hızı olacak
    //bir düşme olacağı için bunun için bir method yapacağız, fall() methodu
    this.fall = function(){
        //bu mehod her çalıştığında y koordinatını ySped kadar arttır
        this.y += this.ySpeed;
        //yukarıda rastgele 20 kutu çizdirdik ve bunlar düşüyor ancak 20 kutu düştükten sonmra yeniden yukarıdan düşmeye devam etmiyor, bunu yapmak için bir sorgu yapacağız
        if(this.y > height){
            //burada height p5.js in içindedir ve canvas ın yüksekliğini belirtir, yani y koordinatı 500 ü geçmişse kutu camvasın yüksekliğini aşmış demek, o zaman yukarıdaki koordinatlama işlemi tekrar yapıulmalı
            this.x = floor(random(0,kenar))*kenar;
            this.y = floor(random(-kenar,0))*kenar;
            //şu anda kutular sürekli düşer hale geldi
            //artık yatay bloğumuzu oluşturabiliriz
            //kutunun koordinatı canvası geçtiğinde score olsun ve artsın
            score++;
        }
    }
    //kutuyu ekranda göstermek içinde show() methodu
    this.show = function(){
        fill(255,0,0);//kırmızı
        rect(this.x, this.y, kenar, kenar);
    }
}