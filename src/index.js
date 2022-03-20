console.log('Hello World')

class Spaceship{

    /**
     * @param {number} _hp 
     * @param {number} _firepower 
     * @param {number} _criticalstrikechance
     * @param {number} _armor
     * homework : armor [done?]
     * homework: make second ship fire back[done]
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
        let damage = this.power;
        if( this.crit > Math.random()){
            damage = damage * 2;
            console.log("Critical HIT!!!!" )
        }
        target.hp = (target.hp - damage)/(target.armor/100);
        console.log(this.name + " has inflicted  " + damage + " damage" )
        console.log(target.name + " has  " + target.hp + " hp left" )

        if(target.hp <= 0) {
            console.log(target.name + " can no longer fight because it's HP is 0")
        }
    }
}

let ship1 = new Spaceship("Voyager", 1000,100, 0.3, 100);
let ship2 = new Spaceship("Enterprise", 800,50, 0, 100);

while(ship2.hp > 0){
    ship1.fireAtTarget(ship2)
}
while(ship1.hp > 0) {
    ship2.fireAtTarget(ship1)
}