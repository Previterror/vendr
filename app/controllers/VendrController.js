import { AppState } from "../AppState.js";
import { vendrService } from "../services/VendrService.js";
import { setHTML } from "../utils/Writer.js";

export class VendrController {
    constructor() {
        // console.log('VendrController Loaded');
        AppState.on('money', this.drawMoney)
        AppState.on('money', this.toggleButtons)
        AppState.on('purchased', this.drawPurchased)
        this.drawSnacks()
    }

    drawMoney() {
        // console.log('requesting to draw 💲');
        vendrService.drawMoney()
    }

    addMoney(num) {
        vendrService.addMoney(num)
        // console.log('💲', AppState.money)
    }

    drawSnacks() {
        // console.log('attempting to draw snacks');
        const snacks = AppState.snacks
        let snackbarContent = ''
        snacks.forEach(snack => snackbarContent += snack.snackCard)
        setHTML('snackbar', snackbarContent)
        this.toggleButtons()
    }

    buySnack(snackName) {
        // console.log('attempting to buy');
        vendrService.buySnack(snackName)
        this.recordPurchases(snackName)
    }

    toggleButtons() {
        let money = AppState.money
        AppState.snacks.forEach(snack => {
            let snackButtonElm = document.getElementById(snack.name)
            if (snack.price > money) {
                snackButtonElm.classList.add('d-none')
            } else {
                snackButtonElm.classList.remove('d-none')
            }
        })
    }

    recordPurchases(snackName) {
        console.log('beginning to record', snackName);
        vendrService.recordPurchases(snackName)
    }

    drawPurchased() {
        const purchased = AppState.purchased
        let mysnackContent = ''
        purchased.forEach(snack => mysnackContent += snack.snackCard)
        setHTML('mysnacks', mysnackContent)
    }
}