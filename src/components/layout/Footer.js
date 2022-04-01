import React from 'react';

const e = React.createElement;

export default function Footer() {
  return(
    e('footer', {
      style: { 
        color: '#777777' },
        onClick: function() { alert("Howdy, we're glad you're here!"); }
    }, "Here is my reusable component built without JSX")
  )
}