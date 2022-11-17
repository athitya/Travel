import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class PlaceRoute extends Route {
  @service('tourist-places') touristService;

  model(params) {
    let { place_id } = params;
    let place = this.touristService.travelPlaces.find((place)=>{
        return place.id==place_id;
    });

    console.log(place);

    return place;
  }
}
