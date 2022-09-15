// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="gallery" element={<Gallery />} />
//         <Route path=":categoryName" element={<Category />}>
//           <Route path=":recipeName/:id" element={<Recipe />}>
//             <Route path="" element={<Navigate to="instructions" />} />
//             <Route path="instructions" element={<RecipeInstructions />} />
//             <Route path="ingredients" element={<RecipeIngredients />} />
//             <Route path="youtube" element={<RecipeYoutubePlayer />} />
//           </Route>
//         </Route>
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );