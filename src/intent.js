export default class Intent {
  name = '';

  constructor(name/* : ?string*/) {
    this.name = name || '[Unnamed-Intent]';
  }
}
