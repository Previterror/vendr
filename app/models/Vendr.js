export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgURL = data.imgURL
    }


    get snackCard() {
        return `
    <div class="bg-success card container text-center snack-card p-2">
        <img src="${this.imgURL}" alt=""
            class="img-fluid border border-3 rounded p-5">
        <div class="card-body">
                <h3 class="card-title">${this.name}</h3>
                <hr />
            <div class="card-footer">
                <span class="card-text text-center">
                    <p>$${this.price.toFixed(2)}</p>
                    <button id="${this.name}" class="btn btn-primary" onClick="app.VendrController.buySnack('${this.name}')">Buy</button>
                </span>
            </div>
        </div>
    </div>`
    }
}