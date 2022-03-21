console.log('Hello World')

class Spaceship{

    /**
     * @param {number} _hp 
     * @param {number} _firepower 
     * @param {number} _criticalstrikechance
     * @param {number} _armor
     * homework : armor
     * homework: make second ship fire back
     * homework : make github account with repo [done]
     */
    constructor(_name, _hp, _firepower,_criticalstrikechance,_armor){
        this.name = _name;
        this.power = _firepower;
        this.hp = _hp;
        this.crit = _criticalstrikechance;
        this.armor = _armor;
    }

    /**
     * 
     * @param {Spaceship} target 
     */
    fireAtTarget(target){
        console.log(this.name + " damaged " + target.name )
        let damage = this.power - target.armor;
        if( this.crit > Math.random()){
            damage = damage * 2;
            console.log("Critical HIT!!!!" )
        }
        target.hp = target.hp - damage
        console.log(this.name + " has inflicted  " + damage + " damage" )
        console.log(target.name + " has  " + target.hp + " hp left" )
        if(target.hp <= 0 || this.hp <=0) {
            console.log(target.name + " was defeated by " + this.name)
        }
    }
}

let ship1 = new Spaceship("Voyager", 1000,100, 0.3, 20);
let ship2 = new Spaceship("Enterprise", 800,50, 0, 20);

while(ship2.hp > 0){
    ship1.fireAtTarget(ship2) || ship2.fireAtTarget(ship1)
}
