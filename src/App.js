import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/Help/Faq";
import Contact, { contactAction } from "./Pages/Help/Contact";
import Notfound from "./Pages/Notfound";
import Error from "./Pages/Error/Error";
// Layouts
import Layout from "./layout/RootLayout";
import Helplayout from "./layout/HelpLayouts";
import CareersLayout, { careersLoader } from "./layout/CareersLayout";
import Careers from "./Pages/Careers/Careers";
import CareerDetails from "./Pages/Careers/CareerDetails";
import careerDetailsLoader from "./Pages/Careers/CareerDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<Helplayout />} errorElement={<Error />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction}/>
      </Route>

      <Route path="career" element={<CareersLayout />} errorElement={<Error />}>
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<Notfound />} />
    </Route>
  )
);





function App() {
  return <RouterProvider router={router} />;
}

export default App;
