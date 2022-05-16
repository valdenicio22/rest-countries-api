# Frontend Mentor - REST Countries API with color theme switcher solution

This is my solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Project highlights](#project-highlights)
  - [Project result](#project-result)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

<table>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/40251933/168500765-62690a11-bf3b-49df-870b-566b4ecee267.png">
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/40251933/168500771-c24adf85-23da-4959-9fca-4537356b5f44.png">
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/40251933/168500780-0f393fa8-6083-4ec8-8c08-07dc2d0264b4.png">
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/40251933/168500783-dace5a8e-b0a4-4942-a6ae-43cac970ac3a.png">
    </td>
  </tr>
</table>
                                                                                        
### Links

- Live Site URL: https://rest-countries-api-one-mu.vercel.app/
- Github: https://github.com/valdenicio22/rest-countries-api

## My process

### Built with

- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [Storybook](https://storybook.js.org/)

### Project highlights

- Home and CountryDetails pages are build with SSG.
- Debounce is used to delay the request triggered by input search.
- Intersection-Observer is used to enable infinite scroll.
- The Countries can be filtered by region.
- The Countries can be sorted by name, population or area
- Responsive layout, 375px for mobile and 1440px for desktop.
- Flex/Grid

### Project result
<table>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/40251933/168501445-4e1c5a49-687d-4e15-b377-7bf3c60f38c7.gif">
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/40251933/168501437-5af380f2-3aca-46f7-8643-48b6d1bd428b.gif">
    </td>
  </tr>

</table>

## Author

- My Portfolio - https://valdenicio22.vercel.app/
- Frontend Mentor - https://www.frontendmentor.io/profile/valdenicio22
- Linkedin - https://www.linkedin.com/in/valdenicioferreira/
