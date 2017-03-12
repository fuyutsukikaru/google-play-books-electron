import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const webview = React.createElement(
    'webview',
    {
        src: 'https://play.google.com/books',
        className: 'webview-element'
    }
)

ReactDOM.render(
    webview,
    document.getElementById('container')
);