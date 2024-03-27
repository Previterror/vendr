import { VendrController } from "./controllers/VendrController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    view: /*html*/`
    <div class="bg-dark p-3">
      <div class="card-body">
        
      </div>
    </div>
    `
  },
  {
    path: '#/vendr',
    controllers: [VendrController],
    view: 'app/views/VendrView.html'
  }
])