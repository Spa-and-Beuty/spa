import React from "react";
import { services } from "../../../../constants";
import Services from "@/components/admin/Services";

const Home = () => {
  return (
    // <div className="container mx-auto p-6">
    //   <h2 className="text-2xl font-semibold text-gray-700 mb-4">
    //     Beauty Spa Services
    //   </h2>
    //   <div className="overflow-x-auto">
    //     <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
    //       <thead>
    //         <tr>
    //           <th className="py-3 px-5 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
    //             Image
    //           </th>
    //           <th className="py-3 px-5 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
    //             Title
    //           </th>
    //           <th className="py-3 px-5 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
    //             Created Date
    //           </th>
    //           <th className="py-3 px-5 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
    //             Created By
    //           </th>
    //           <th className="py-3 px-5 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
    //             ID
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {services.map((service) => (
    //           <tr key={service.id} className="hover:bg-gray-100">
    //             <td className="py-2 px-5 border-b border-gray-200">
    //               <img
    //                 src={service.image_url}
    //                 alt={service.title}
    //                 className="w-16 h-16 rounded-full object-cover"
    //               />
    //             </td>
    //             <td className="py-2 px-5 border-b border-gray-200 text-gray-700">
    //               {service.title}
    //             </td>
    //             <td className="py-2 px-5 border-b border-gray-200 text-gray-700">
    //               2024-01-10
    //             </td>
    //             <td className="py-2 px-5 border-b border-gray-200 text-gray-700">
    //               ADMIN
    //             </td>
    //             <td className="py-2 px-5 border-b border-gray-200 text-gray-700">
    //               {service.id}
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <Services />
  );
};

export default Home;
