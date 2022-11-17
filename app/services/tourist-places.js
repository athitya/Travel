import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { places } from '../data/touristPlaces';

export default class TouristPlacesService extends Service {
  @tracked travelPlaces = places;
}
