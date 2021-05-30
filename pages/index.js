import path from 'path';

function HomePage(props) {
  
  const {products} = props;
  return (
    <ul>
     {products.map((product) => ( <li key={product.id}>
       {product.title}
     </li>))}
    </ul>
  );
}

export async function getStaticProps(){
  const fs = require('fs/promises'); // LOOK THIS
  const filePath = path.join(process.cwd(), 'data', 'DummyBackend.json');
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData);
  return { props :{
     products: data.products,
     
  },
};
}

export default HomePage;
