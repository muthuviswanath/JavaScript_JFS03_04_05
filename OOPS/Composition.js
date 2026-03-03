// ATM Machine dispense cash

// ATM Machine
// Input: Card, pin, amount
// Output: Cash

class ATM{
    dispense(card, pin, amount){
        let c = new Cash()
        return c
    }
}
class Cash{}
class Card{}

let card = new Card()
let atm = new ATM()
let money = atm.dispense(card, 8767, 10000)
console.log(money)