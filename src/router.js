import {Route,Routes,BrowserRouter} from 'react-router-dom';
import React from 'react';
import App from './App';
import Gallery from './pages/gallery';
import Footer from "./components/footer";
import Navbar from "./components/navbar";


function Router(){
    const galleryPhotos = [
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(18).jpg?alt=media&token=07cc4971-185b-4417-ac9e-8e01a2a2201c" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(19).jpg?alt=media&token=474e9cfa-f711-426a-b4ec-f3d405b96769" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(2).jpg?alt=media&token=95e33646-3e02-45d1-9c9f-b4b101bd7de8" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(20).jpg?alt=media&token=0887c143-a047-43ac-8363-a47a5ab38623" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(21).jpg?alt=media&token=a533f34f-cb0d-42fc-9ffa-27cc1252d060" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(22).jpg?alt=media&token=d63d2cc5-322d-4a7e-b896-778f11afa32d" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(23).jpg?alt=media&token=1bb2de35-957b-47ed-a803-819f712ca4ff" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(24).jpg?alt=media&token=b2519eab-60d1-40ec-8838-468f4477911f" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(25).jpg?alt=media&token=f1e30b28-7490-4c67-8e7f-1c1b568a448a" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(26).jpg?alt=media&token=809a5117-6147-43de-994a-4f060a5c23ee" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(27).jpg?alt=media&token=3fecaee4-c449-4682-9fd6-4c4cac0b59cd" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(28).jpg?alt=media&token=f9e09957-b3b0-4882-a40f-028d3c481c01" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(29).jpg?alt=media&token=65e65cc2-55c4-478a-bd9d-2922fb324aa1" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(3).jpg?alt=media&token=bf33d3f3-34c6-4b7d-bef6-16141775b832" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(30).jpg?alt=media&token=e75b52ab-5720-43f2-a037-26bf5e0fa99b" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(31).jpg?alt=media&token=f22e144b-6cb7-4c83-87db-200bed71d17f" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(32).jpg?alt=media&token=48c89bd1-5f99-4809-befb-4a5224773040" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(33).jpg?alt=media&token=fe66f6be-da6e-4e3c-921a-621010381e1a" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(34).jpg?alt=media&token=41eb4665-2aad-4b92-a153-272711f000f1" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(35).jpg?alt=media&token=b4e588de-330e-4836-a627-b1bd8895b336" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(36).jpg?alt=media&token=3769cba0-eb0f-4f1d-97b2-caf909ac9c52" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(4).jpg?alt=media&token=38cb23d0-bb32-4173-9ee0-5e8bd49114fb" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(5).jpg?alt=media&token=5408b551-f1d6-4701-8360-7749311cf7be" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(6).jpg?alt=media&token=a383895f-4353-4de4-9d35-269ebc49a0f5" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(7).jpg?alt=media&token=26b06f67-1ee6-4e84-b59e-e9db2b03b59c" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(8).jpg?alt=media&token=94083505-a6cb-474d-8748-80e8a1ceb42f" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(9).jpg?alt=media&token=d5964cd4-c8c9-47ed-ad4a-680eb298e28f" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/10.jpg?alt=media&token=6f69c3cf-3161-4234-b4ba-7f753dd5c563" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/11.jpg?alt=media&token=887d0561-298c-492f-b9ad-99073cf1ece3" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/2.jpg?alt=media&token=3d59e802-af9f-44f4-a3d8-ddec240141d7" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/3.jpg?alt=media&token=b7936c90-db48-4953-aabd-f0a523896a53" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/4.jpg?alt=media&token=aacf717a-8e2f-4f8e-ac46-6fee90b9bfc5" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/5.jpg?alt=media&token=e2009d31-7589-4d6e-ad28-0c18b71fb265" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/6.jpg?alt=media&token=128f864e-8b84-4379-a889-b9ae62df81b0" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/7.jpg?alt=media&token=723f5afb-6aab-4776-b986-9abe562ea09a" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/8.jpg?alt=media&token=23458999-cf79-414d-a755-3cdeb07753db" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/9.jpg?alt=media&token=a5f8f18a-9c22-4082-9de5-9d7ff3bec469" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(17).jpg?alt=media&token=125f74fe-1b56-417b-8dd0-e8f45174212b" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(15).jpg?alt=media&token=5d9b77dc-8318-4fa1-bd42-29a29e6e2a44" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(16).jpg?alt=media&token=4625708a-21db-4f7c-b225-beb8fdc7d3e5" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(10).jpg?alt=media&token=446a7eec-7c8a-4dd5-aa7c-75233af27721" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(11).jpg?alt=media&token=72783698-744f-486e-ac35-59f56a8096c5" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(12).jpg?alt=media&token=d0337f91-8053-48e1-b050-85412972ea03" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(13).jpg?alt=media&token=b787162d-5e76-478d-b6c9-18352f2bde56" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(14).jpg?alt=media&token=78421409-ab06-416b-af9d-9247c790fa29" },
            { img: "https://firebasestorage.googleapis.com/v0/b/testapp-44d85.appspot.com/o/01%20(1).jpg?alt=media&token=00bc9371-e606-4b05-8163-de875b9277ba" },

];
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/gallery' element={<Gallery galleryPhotos={galleryPhotos}/>}/>
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Router;