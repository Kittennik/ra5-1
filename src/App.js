import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <Card
        title="Написать заголовок"
        text="Здесь нужно было что-то написать, но я забыла...">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap">
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="37%" y="50%" fill="#dee2e6" dy=".3em">Картинка!!!</text>
        </svg>
      </Card>
      <Card
        title="И здесь нужен заголовок"
        text="И... опять забыла..."
      />
    </div>
  );
}

export default App;
