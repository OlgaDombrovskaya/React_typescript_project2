import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";

//Pages
import Home from "./pages/Home/Home";
import Clients from "pages/Clients/Clients";
import Netflix from "pages/Clients/Netflix/Netflix";
import Zara from "pages/Clients/Zara/Zara";
import LePetitChef from "pages/Clients/LePetitChef/LePetitChef";
import ContactUs from "pages/ContactUs/ContactUs";
import LogIn from "pages/LogIn/LogIn";
import About from "pages/About/About";

//Components
import Layout from "components/Layout/Layout";

//Consultation
// import Consultation_03 from "consultations/Consultation_03/Consultation_03";
// import Consultation_05 from "consultations/Consultation_05/Consultation_05";
// import RundomDog from "consultations/Consultation_05/RundomDog";
// import Consultation_06 from "consultations/Consultation_06/toodo";

//Homeworks
// import Homework_06 from "./homeworks/Homework_06/Homework_06";
// import Homework_06 from "lessons/Lesson_07/Homework_06/Homework_06";
// import Homework_07 from "homeworks/Homework_07/Homework_07";
// import Homework_07 from "lessons/Lesson_08/Homework_07/Homework_07";
// import Homework_08 from "homeworks/Homework_08/Homework_08";
// import Homework_08 from "lessons/Lesson_09/Homework_08/Homework_08";
// import Homework_09 from "homeworks/Homework_09/Homework_09";
// import Homework_09 from "lessons/Lesson_10/Homework_09/Homework_09";
import Homework_11 from "homeworks/Homework_11/Homework_11";

// Lessons
// import Lesson_06 from "lessons/Lesson_06/Lesson_06"
// import Lesson_07 from "lessons/Lesson_07/Lesson_07";
// import Lesson_08 from "lessons/Lesson_08/Lesson_08";
// import Lesson_09 from "lessons/Lesson_09/Lesson_09/Lesson_09";
// import Lesson_10 from "lessons/Lesson_10/Lesson_10";
// import Lesson_10_Project from "lessons/Lesson_10/Lesson_10_Project/Lesson_10";
import Lesson_11 from "lessons/Lesson_11/Lesson_11/Lesson_11";

function App() {
  return (
    // React Fragment остается как обертка
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/netflix" element={<Netflix />} />
          <Route path="/clients/zara" element={<Zara />} />
          <Route path="/clients/le_petit_chef" element={<LePetitChef />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
      {/* Consultations */}
      {/* <Consultation_03 /> */}
      {/* <Consultation_04 /> */}
      {/* <Consultation_05 /> */}
      {/* <RundomDog/> */}
       {/* <Consultation_06 /> */}

      {/* Homeworks */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_08 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_11 /> */}

      {/* Lessons */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Lesson_10 /> */}
      <Lesson_11 />
    </BrowserRouter>
  );
}

export default App;
