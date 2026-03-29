import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../Data/data';

function Menu() {
  return (
    <div className="container mt-4 bg-black text-white" id = "menu">
      <h1 className='text-center p-6 m-6'>Your MENU</h1>
      <div className="row">
        {data.map((item) => (
          
          <div className="col-12 col-sm-6 col-md-3 mb-3" key={item.id}>
            
            <Card className="border-0 shadow h-100 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
              <Card.Img variant="top" src={item.img} />

              <Card.Body className="bg-black text-white">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="text-secondary small">
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>

          </div>

        ))}
      </div>
    </div>
  );
}

export default Menu;