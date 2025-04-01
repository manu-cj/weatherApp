import {   Search } from 'lucide-static';

export const searchBar = () => {
    const app = document.querySelector('#app');
    const header = document.createElement('header');

    const search = document.createElement('input');
    search.setAttribute('type', 'text');
    search.setAttribute('placeholder', 'Search');
    search.setAttribute('id', 'search');
    search.setAttribute('class', 'search');

    const searchButton = document.createElement('button');
    searchButton.setAttribute('type', 'button');
    searchButton.setAttribute('id', 'searchButton');
    searchButton.setAttribute('class', 'searchButton');
    searchButton.innerHTML = Search + " Search";


    app.appendChild(header);
    header.appendChild(search);
    header.appendChild(searchButton);
}