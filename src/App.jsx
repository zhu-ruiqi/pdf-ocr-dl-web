// function App() {
//   return (
//     <div className="bg-yellow-100 min-h-screen flex items-center justify-center">
//       <h1 className="text-4xl font-bold text-blue-700">
//         Tailwind is working on Windows!
//       </h1>
//     </div>
//   );
// }

// export default App;

import PDFUploader from "./components/PDFUploader";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <PDFUploader />
    </div>
  );
}

export default App;

