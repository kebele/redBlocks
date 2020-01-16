function keyPressed(){
    
    if( keyCode === LEFT_ARROW ){
        if(block.x !=0) block.move(-kenar);
        
    }else if(keyCode === RIGHT_ARROW){
       if(block.x != width - block.blockLength) block.move(kenar);
    }else if(keyCode === UP_ARROW){
        if(block.y != 0 ) block.upDown(-kenar);
    }else if(keyCode === DOWN_ARROW){
        if(block.y != height - kenar) block.upDown(kenar);
    }else if(keyCode === 32){
        let fuze = new Fuze();
        fuze.fire();
        fuze.show()
        console.log("fuze ates")
    }
}