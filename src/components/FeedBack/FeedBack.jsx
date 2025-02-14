// const FeedBack = ({ feedBackData }) => {
//   //   console.log(feedBackData);
// //   const { name, image, feedback, rating } = feedBackData;
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//       {feedBackData.map((feed) => (
//         <div
//           key={feed.id}
//           className="card bg-base-100 shadow-xl p-6 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
//         >
//           {/* User Info */}
//           <div className="flex items-center gap-4">
//             <img
//               src={feed.image}
//               alt=""
//               className="w-16 h-16 rounded-full border-2 border-primary"
//             />
//             <div>
//               <h3 className="text-lg font-bold text-gray-800">{feed.name}</h3>
//               <p className="text-sm text-gray-500">Client</p>
//             </div>
//           </div>

//           {/* Review Text */}
//           <p className="text-gray-700 mt-4 italic">"{feed.feedback}"</p>

//           {/* Rating */}
//           <div className="mt-4 flex items-center gap-1 text-yellow-400">
//             {"★".repeat(feed.rating)}
//             {"☆".repeat(5 - feed.rating)}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FeedBack;




import { motion } from "framer-motion";

const FeedBack = ({ feedBackData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {feedBackData.map((feed, index) => (
        <motion.div
          key={feed.id}
          initial={{ y: index === 1 ? 20 : 50, opacity: 0.8, scale: index === 1 ? 1.1 : 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: index === 1 ? 1.2 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`card bg-base-100 shadow-xl p-6 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300 ${
            index === 1 ? "z-10" : "z-0"
          }`}
        >
          {/* User Info */}
          <div className="flex items-center gap-4">
            <img
              src={feed.image}
              alt=""
              className="w-16 h-16 rounded-full border-2 border-primary"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-800">{feed.name}</h3>
              <p className="text-sm text-gray-500">Client</p>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-gray-700 mt-4 italic">"{feed.feedback}"</p>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-1 text-yellow-400">
            {"★".repeat(feed.rating)}
            {"☆".repeat(5 - feed.rating)}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeedBack;

