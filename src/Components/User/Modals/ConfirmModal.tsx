// import React from "react";

// interface ChildProps {
//   setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
//   textContent: string;
//   onConfirm: () => void; // Callback function for confirmation
// }

// const ConfirmModal: React.FC<ChildProps> = ({
//   setShowModal,
//   textContent,
//   onConfirm,
// }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full border border-gray-300 text-center">
//         <p className="bg-purple-50 text-black text-sm p-3">{textContent}</p>

//         {/* Buttons Section */}
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={onConfirm}
//             className="px-4 py-2 bg-purple-800 text-white rounded-lg font-medium border border-gray-300 hover:bg-purple-700 transition-colors"
//           >
//             Yes
//           </button>
//           <button
//             onClick={() => setShowModal(false)}
//             className="px-4 py-2 text-gray-600 rounded-lg font-medium border border-gray-300 hover:bg-gray-100 transition-colors"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmModal;
