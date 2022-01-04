import { Application } from '@hotwired/stimulus';
import CheckboxSelectAll from 'stimulus-checkbox-select-all';

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;
application.register('checkbox-select-all', CheckboxSelectAll);

export { application };
