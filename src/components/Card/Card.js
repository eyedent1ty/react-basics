import React from 'react';

import './Card.css';

// This is a wrapper component
// React Composition - is a development pattern based on React's original component model
// where we build components from other components using explicit defined props or the implicity children prop
// React composition split complex or large components into smaller ones to become reusable and,
// avoid repeating code

function Card(props) {
  const { className, children } = props;
  return <div className={`card ${className}`}>{children}</div>;
}

export default Card;
