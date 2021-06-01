import './App.css';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItem from './components/CardItem'
import { useEffect, useState } from 'react';
import axios from 'axios'


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    let url = 'https://5fe21e077a94870017682132.mockapi.io/api/testtask/doctors'
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.get(
          url,
          {},
          { headers: new Headers({ 'Content-Type': 'application/json' }) }
        )
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
      .then((response) => {
        if (response.data) {
          setData(response.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }





  return (
    <div>
      <Container>
        <h3 style={{ fontWeight: 'bold' }} className='mt-4 mb-5 mainColor'>Наши специалисты</h3>
        <p className='mainColor'>Высококвалифицированные врачи-стоматологи AstraDent регулярно посещают профессиональные
        мастер-классы и стажируются в Украине и за рубежом, чтобы быть в курсе всех современных тенденций
        дентальной медицины. Наши специалисты оснащены современной техникой мировых лидеров
        производства стоматологического оборудования и используют только высококачественные
        сертифицированные материалы от ведущих компаний.</p>
        <Row>

          {data.length > 0 ? (
            <>
              <CardItem data={data} />


            </>
          ) : (
              <h4>No data</h4>
            )}
        </Row>
      </Container>
    </div>
  );
}

export default App;
