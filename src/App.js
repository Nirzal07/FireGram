import React, { useState } from 'react';
import Title from './comps/Title';
import { ImageForm } from './comps/ImageForm' 
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImage] = useState(null)
  return (
    <div className="App">
      <Title/>
      < ImageForm />
      < ImageGrid setSelectedImage= {setSelectedImage} />
     { selectedImg && < Modal selectedImg = {selectedImg} setSelectedImage= {setSelectedImage} /> }
    </div>
  );
}

export default App;
