function solution(bandage, health, attacks) {
    const arrLength = attacks.length -1
    const [maxTime, _] = attacks.at(-1)
    let heal = 1
    let life = health

    for(let i = 1; i <= maxTime; i++){
        let damage = 0;
        for(let j= 0 ; j <= arrLength ; j++){
            const [attackTime, attackDamege] = attacks[j];
            if(i === attackTime ){
                damage = attackDamege
            }
        }
        if(damage > 0){
            life -= damage
            if(life <= 0){
                return -1
            }
            damage = 0
            heal = 1 
        }else if(damage === 0 && health > life ){
            if(heal % bandage[0] === 0  ){
                life += bandage[1]
                life +=  bandage[2]
                if(life > health){
                    life = health
                     heal = 1
                }
                heal = 1
            }else{
                life += bandage[1]
                if(life > health){
                    life = health
                    heal =1
                }else{
                    heal += 1
                    
                }
            }
            
        }
    }    
    var answer = life;
    return answer;
}