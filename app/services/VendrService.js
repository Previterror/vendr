import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

class VendrService {
    addMoney(num) {
        AppState.money += num
        // console.log('💲🔧', AppState.money);
    }

    drawMoney() {
        // console.log('beginning to draw 💲');
        const money = AppState.money
        setHTML('money-display', `$${money.toFixed(2)}`)
    }

    buySnack(snackName) {
        let snackToBuy = AppState.snacks.find(snack => snack.name == snackName)
        if (AppState.money >= snackToBuy.price) {
            // console.log('buying', AppState.money);
            AppState.money -= snackToBuy.price
            console.log('bought', snackName, 'money remaining', AppState.money);
        }
    }
}

export const vendrService = new VendrService()