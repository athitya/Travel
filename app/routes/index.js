import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service('tourist-places') touristService;
  isDetail=false;

  model() {
    let travel = this.touristService.travelPlaces;
    console.log(travel);
    return travel;
  }
  // setupController(controller,model){
  //     super.setupController(controller,model);
  //     console.log(model)
  //     controller.set('touristSpots',model)
  // }
}
