// import { useSelector } from "react-redux";
// import { AddressState } from "../Redux/reducer";

// interface RootState {
//   address: AddressState;
// }
// const Address = () => {
//   const { address } = useSelector((state: RootState) => state.address);

//   return (
//     <div>
//       <div className=" d-flex gap-3 flex-column mt-4">
//         <span className="h4 fw-bold">Address</span>
//         <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
//           <div className="border border-1 border-dark rounded  d-flex flex-column gap-2 p-3 ">
//             <div className="d-flex justify-content-between">
//               <span className="h5 fw-bold">Billing Address</span>
//               <div className="edit d-flex gap-2 align-items-start">
//                 {/* <img src={edit} alt="edit" /> */}
//                 <span className="h6 text-secondary fw-bold">Edit</span>
//               </div>
//             </div>

//             <div className="d-flex flex-column">
//               <span className="h5 fw-medium">Sofia Harvertz</span>
//               <span className="h6">(+1) 234 567 890</span>
//               <span className="h6">
//                 {" "}
//                 345 Long Island, NewYork, United states
//               </span>
//             </div>
//           </div>

//           <div className="border border-1 border-dark rounded  d-flex flex-column gap-2 p-3 ">
//             <div className="d-flex justify-content-between">
//               <span className="h5 fw-bold">Shipping Address</span>
//               <div className="edit d-flex gap-2 align-items-start">
//                 {/* <img src={edit} alt="edit" /> */}
//                 <span className="h6 text-secondary fw-bold">Edit</span>
//               </div>
//             </div>
//           </div>
//           {address && (
//             <div>
//               <span className="h5 fw-medium">{address.streetAddress}</span>
//               <span className="h6">{address.city}</span>
//               <span className="h6">{address.country}</span>
//               <span className="h6">{address.state}</span>
//               <span className="h6">{address.zipCode}</span>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Address;

import { useSelector } from "react-redux";
import { AddressState } from "../Redux/reducer";
interface RootState {
  address: AddressState;
}

const Address = () => {
  const { address } = useSelector((state: RootState) => state.address);

  return (
    <div>
      <div className="d-flex gap-3 flex-column mt-4">
        <span className="h4 fw-bold">Address</span>
        <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
          <div className="border border-1 border-dark rounded d-flex flex-column gap-2 p-3">
            <div className="d-flex justify-content-between">
              <span className="h5 fw-bold">Shipping Address</span>
              <div className="edit d-flex gap-2 align-items-start">
                {/* <img src={edit} alt="edit" /> */}
                <span className="h6 text-secondary fw-bold">Edit</span>
              </div>
            </div>
            {address && (
              <div className="d-flex flex-column">
                <span className="h5 fw-medium">
                  {/* {address.firstName} {address.lastName} */}
                </span>
                <span className="h6"></span>
                <span className="h6">
                  {address.streetAddress}, {address.city}, {address.state},
                  {address.country}, {address.zipCode}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
