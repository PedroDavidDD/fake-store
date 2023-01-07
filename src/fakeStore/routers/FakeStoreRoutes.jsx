import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { Clothes } from "../pages/Clothes"
import { ClothesHead } from "../pages/ClothesHead"
import { Pantalones } from "../pages/Pantalones"
import { SearchPage } from "../pages/SearchPage"

export const FakeStoreRoutes = () => {

  return (
    <>

      <Navbar />

      <div className="container">
        <Routes>
          <Route path="clothes" element={<Clothes />} />
          <Route path="pantalones" element={<Pantalones />} />
          <Route path="clothesHead" element={<ClothesHead />} />

          <Route path="search" element={<SearchPage />} />
        
          <Route path="/" element={<Navigate to="/clothes" />} />
        </Routes>
      </div>
    </>
  )
}
