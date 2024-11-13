// // import React from 'react';
// // import { useEffect, useState } from 'react'
// // import { useParams ,useNavigate} from "react-router-dom";
// // import axios from 'axios'
// // import { Button, InputGroup} from '@blueprintjs/core';

// // function Update (){
// //     const {id} = useParams()
// //     const [name, setName] = useState("")
// //     const [quantity, setQTY] = useState("")
// //     const [price, setPrice] = useState("")
// //     const navigate = useNavigate()
 
 
// //     useEffect(()=>{
// //         axios.get('http://localhost:3001/getproducts/'+id)
// //         .then(products=>console.log(products))
// //         .catch(err=> console.log(err))
// //     })

// //     return(
// // <div className="App">
// //     <table className='bp4-html-table modifier'>
// //       {/* <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
// //       <div className="w-50">
// //        <table className='table'> */}
// //          <thead>
// //           <tr>
// //             <td></td>
// //             <td> <InputGroup
// //               placeholder='Enter Product Name...'
// //             />
// //             </td>
// //             <td> <InputGroup
// //               placeholder='Enter Prodcut qty...'
// //             />
// //             </td>
// //             <td> <InputGroup
// //               placeholder='Enter Product Price...'
// //             />
// //             </td>
// //             <td>
// //               <Button intent='success' onClick={Submit}>Add User</Button>
// //             </td>
// //           </tr>
// //         </thead>
       

// //        </table>
// // </div>
// //     )
// // }

// // export default Update;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Button, InputGroup } from '@blueprintjs/core';

// function Update() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState({ name, quantity, price});

//   useEffect(() => {
//     axios.get(`http://localhost:3001/getproduct/${id}`)
//       .then(response => setProduct(response.data))
//       .catch(error => console.log(error));
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct(prevProduct => ({
//       ...prevProduct,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:3001/updateProduct/${id}`, product)
//       .then(response => {
//         console.log(response);
//         navigate('/');
//       })
//       .catch(error => console.log(error));
//   };

//   return (
//     <div className="App">
//       <h2>Update Product</h2>
//       <form onSubmit={handleSubmit}>
//         <table className='bp4-html-table modifier'>
//           <thead>
//             <tr>
//               <td>Product Name:</td>
//               <td>
//                 <InputGroup
//                   name="name"
//                   value={product.name}
//                   onChange={handleChange}
//                   placeholder='Enter Product Name...'
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Quantity:</td>
//               <td>
//                 <InputGroup
//                   name="quantity"
//                   value={product.quantity}
//                   onChange={handleChange}
//                   placeholder='Enter Product Quantity...'
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Price:</td>
//               <td>
//                 <InputGroup
//                   name="price"
//                   value={product.price}
//                   onChange={handleChange}
//                   placeholder='Enter Product Price...'
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td colSpan="2">
//                 <Button intent='success' type="submit">Update Product</Button>
//               </td>
//             </tr>
//           </thead>
//         </table>
//       </form>
//     </div>
//   );
// }

// export default Update;
