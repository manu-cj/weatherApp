import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { searchBar } from "../components/SearchBar"; // Assure-toi que le chemin est correct

describe("searchBar", () => {
  let app;

  beforeEach(() => {
    app = document.createElement('div');
    app.setAttribute('id', 'app');
    document.body.appendChild(app);
  });

  afterEach(() => {
    document.body.innerHTML = '';  // Nettoie après chaque test
  });

  it("devrait créer un input de recherche avec les bons attributs", () => {
    searchBar();  // Appelle la fonction à tester

    const searchInput = document.querySelector('#search');
    expect(searchInput).toBeTruthy();  // Vérifie que l'élément existe
    expect(searchInput.type).toBe('text');  // Vérifie l'attribut 'type'
    expect(searchInput.placeholder).toBe('Search');  // Vérifie l'attribut 'placeholder'
    expect(searchInput.id).toBe('search');  // Vérifie l'attribut 'id'
    expect(searchInput.classList.contains('search')).toBe(true);  // Vérifie la classe
  });

  it("devrait créer un bouton de recherche avec les bons attributs et texte", () => {
    searchBar();  // Appelle la fonction à tester
  
    const searchButton = document.querySelector('#searchButton');
    expect(searchButton).toBeTruthy();  // Vérifie que l'élément existe
    expect(searchButton.type).toBe('button');  // Vérifie l'attribut 'type'
    expect(searchButton.id).toBe('searchButton');  // Vérifie l'attribut 'id'
    expect(searchButton.classList.contains('searchButton')).toBe(true);  // Vérifie la classe
  
    // Vérifie uniquement le texte du bouton
    expect(searchButton.textContent.trim()).toBe('Search');  // Vérifie que le texte est "Search"
  });

  it("devrait ajouter les éléments dans le DOM correctement", () => {
    searchBar();  // Appelle la fonction à tester

    const header = document.querySelector('header');
    const searchInput = document.querySelector('#search');
    const searchButton = document.querySelector('#searchButton');

    expect(header).toBeTruthy();  // Vérifie que l'élément 'header' existe
    expect(header.contains(searchInput)).toBe(true);  // Vérifie que l'input est dans le header
    expect(header.contains(searchButton)).toBe(true);  // Vérifie que le bouton est dans le header
    expect(app.contains(header)).toBe(true);  // Vérifie que le header est dans l'app
  });
});
