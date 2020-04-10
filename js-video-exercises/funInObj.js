const bicycle={
    gear:2,
    seGear:function(newGear){
        this.gear=newGear
    }
};

bicycle.seGear(5);
console.log(bicycle.gear)