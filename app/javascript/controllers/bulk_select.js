import CheckboxSelectAll from 'stimulus-checkbox-select-all';

export default class extends CheckboxSelectAll {
  connect() {
    super.connect();
    console.log('hello')
  }
}
