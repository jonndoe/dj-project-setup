import { Application } from 'stimulus'
import StimulusReflex from 'stimulus_reflex'
import WebsocketConsumer from 'sockpuppet-js'
import Count_ReflexController from './controllers/count_reflex_controller'

const application = Application.start()
const consumer = new WebsocketConsumer(`ws://${window.location.host}/ws/sockpuppet-sync`)

console.log('Entered count_reflex.js file');

application.register("count_reflex", Count_ReflexController)
StimulusReflex.initialize(application, { consumer })
