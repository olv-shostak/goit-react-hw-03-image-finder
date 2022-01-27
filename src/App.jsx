import React from 'react';
import './App.css';
import Searchbar from "./components/Searchbar/Searcbar";
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends React.Component {
  state = {};

  render() {
    return (
      <div class="App">
        <Searchbar></Searchbar>
        <ImageGallery>
          <ImageGalleryItem></ImageGalleryItem>
        </ImageGallery>
        <Button></Button>
        <Modal></Modal>
      </div>
    );
  }
}

export default App;
