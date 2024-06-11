// Hooks
import { Navigate, Route, Routes, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import { Home } from "@views/Home"

// Helpers
// import { getCookie } from "../helpers/getCookie.js"

// Views

// Components


export const MainRouter = () => {
//   const userSlice = useSelector((state) => state.user)
//   const { type: userType, userId } = userSlice;
//   const { openModal, modalIds } = useModal()


//   const cookieConsent = getCookie('CookieConsent')
  
//   const closeCookies = () => {
//     (!stopIntro && !introShown) && openModal(modalIds.Intro)
//   }

  return (
    <>
        <Routes>
            <Route index element={<Home />} />

            {/* <Route path="/simular" element={<Simular />} />
            <Route path="/descobrir" element={<Descobrir />} />
            <Route path="/enxarxar" element={<Enxarxar />} /> */}


          {/* <Route path="/registre/:type" element={<RegistreWrapper />} /> */}
          {/* <Route path="/registre/activacio/:idUser/:emailUser" element={<ActivationView />} /> */}
          {/* <Route path="/contact/:type/:id/" element={<FormContactAgents />} /> */}

            {/* <Route path="/cards" element={<Cards />}>
                <Route path="/" element={<CardList />} />
                <Route path="/:id" element={<CardDetails />} />
            </Route> */}

          
        </Routes>
    </>
  )
}
