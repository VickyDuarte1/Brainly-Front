
import React from "react";

import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      <h1>Bienvenido a Brainly</h1>

<Link to='/home' id='click'>
<button>Home</button>
</Link>

    </div>
  );
}

