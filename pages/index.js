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
  console.log('..regenrating')
  const fs = require('fs/promises'); // LOOK THIS
  const filePath = path.join(process.cwd(), 'data', 'DummyBackend.json');
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData);

  if(!data) {
    return {
      redirect : {
        destination : '/'
      }
    }
  }
  return { props :{
     products: data.products,
     
  },
  //isr revalidate 
  revalidate : 12
};
}

export default HomePage;
