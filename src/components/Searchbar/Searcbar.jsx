const Searchbar = () => {
  return (
    <header class="Searchbar">
      <form class="SearchForm">
        <button type="submit" class="SearchForm-button">
          <span class="SearchForm-button-label">Search</span>
        </button>

        <input
          class="SearchForm-input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
