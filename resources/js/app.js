/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');
import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';  // Assuming your Carousel component is in resources/js/components/Carousel.js

// Import slick carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Render the Carousel component
if (document.getElementById('carousel')) {
    ReactDOM.render(<Carousel />, document.getElementById('carousel'));
}