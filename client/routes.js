import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'

import App from '../imports/ui/App'
import HomePage from '../imports/ui/containers/Home/HomePage';
import AboutPage from '../imports/ui/containers/About/About';


FlowRouter.route('/', {
    name: 'Home',
    action() {
        mount(HomePage, {
            content: <HomePage />
        })
    }
})

FlowRouter.route('/about', {
    name: 'About',
    action() {
        mount(App, { content: <AboutPage /> })
    }
})