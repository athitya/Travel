import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TravelComponent extends Component {
  @tracked isDetail=true;

  @action
  log() {
    const { isDetail } = this.args;
    console.log(isDetail);
  }
}
