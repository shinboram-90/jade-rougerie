// import { paintingData } from '../data/paintingData';
// import { useNavigate } from 'react-router-dom';
// import '../styles/App.css';

// function ListPaintings() {
//   const navigate = useNavigate();
//   // const paintings = paintingData.map((painting) => {
//   //   return <Card key={painting.id} item={painting} />;
//   // });

//   return (
//     <section className="listOfProducts">
//       <div className="productsList">
//         {paintingData.map((painting) => {
//           return (
//             <div
//               key={painting.id}
//               className="productDisplay"
//               onClick={() => {
//                 navigate(`/paintings/${painting.id}`);
//               }}
//             >
//               {console.log(painting)}
//               <h1>{painting.name}</h1>
//               <p>{painting.price}</p>
//               <img
//                 alt="test"
//                 src={require(`../assets/mini/${painting.cover}`)}
//               />

//               {/* src={`../images/${props.painting.img}`} */}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default ListPaintings;
