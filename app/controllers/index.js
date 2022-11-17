import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  constructor(...args) {
    super(...args);
    // console.log(this.model)
  }
  @tracked touristSpots = this.model;
}
