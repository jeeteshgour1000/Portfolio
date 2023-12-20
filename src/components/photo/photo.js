import React from "react";

import { SocialIcons } from "../Header/HeaderStyles";



const photo = () => {

// Create logo container
const logoContainer = document.createElement('div');
logoContainer.id = 'logo-container';

// Create logo image element
const logoImage = document.createElement('img');
logoImage.src = './public/images/z.png'; // Replace with the actual path to your logo image
logoImage.alt = 'Logo';

// Append the logo image to the logo container
logoContainer.appendChild(logoImage);

// Create name container
const nameContainer = document.createElement('div');
nameContainer.id = 'name-container';

// Create name header element
const nameHeader = document.createElement('h1');
nameHeader.textContent = 'Jeetesh Gour';

// Append the name header to the name container
nameContainer.appendChild(nameHeader);

// Get the header container and append the logo and name containers to it
const headerContainer = document.getElementById('header-container');
headerContainer.appendChild(logoContainer);
headerContainer.appendChild(nameContainer);



}
  
  export default photo;
