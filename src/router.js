import {Route,Routes,BrowserRouter} from 'react-router-dom';
import React from 'react';
import App from './App';
import Gallery from './pages/gallery';
import Footer from "./components/footer";
import Navbar from "./components/navbar";


function Router(){
    const galleryPhotos = [
        {
                img: "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/9.jpg?alt=media&token=efd59494-5399-4de6-ba24-9b596a687479",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/7.jpg?alt=media&token=52fdbc31-a058-4c6f-9ef0-9a27c099cd9c",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/8.jpg?alt=media&token=51d61461-8783-4b2a-8cba-dbf85615a676",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/3.jpg?alt=media&token=7891dc47-60ac-46b8-85da-2a7cf73799ac",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/4.jpg?alt=media&token=e0c811c0-9588-49f0-bf34-a08c2c9b3500",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/5.jpg?alt=media&token=8613cec0-9009-43ad-b74d-d8d9e38727cc",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/6.jpg?alt=media&token=107886cd-c393-4ed4-90d3-6b009a30e3b1",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/11.jpg?alt=media&token=1a9ff9d3-7ee5-4da9-b882-4d4f1966591b",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/2.jpg?alt=media&token=36df9d3a-1d53-4078-93d9-224c1b6ad46c",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(35).jpg?alt=media&token=cc3fee46-6462-448d-aa42-8f75077788ff",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(36).jpg?alt=media&token=32ec5ac1-055b-4896-a854-16f4c4f2cdb2",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(4).jpg?alt=media&token=c664006a-a504-4745-b655-6d83102068c6",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(5).jpg?alt=media&token=ff06b5ed-4ab6-4906-98cf-175830a796dd",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(6).jpg?alt=media&token=40dce6d8-0fba-4869-ad71-552c4c707160",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(7).jpg?alt=media&token=3288c1dc-24bd-4623-98fa-8552dcf4857d",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(8).jpg?alt=media&token=444cdd7f-938c-4da1-9f0a-121e7cb23abe",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(9).jpg?alt=media&token=db93c16c-811a-49ec-baa3-1a902c5c64d8",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/10.jpg?alt=media&token=d3c16ec6-7ba9-433d-a236-89eb50e39a8d",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(34).jpg?alt=media&token=51c01f2c-4e79-465d-9744-f807e39dfde2",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(33).jpg?alt=media&token=cc359d7d-0b40-4529-b1f6-6f242f549276",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(32).jpg?alt=media&token=7ec56aff-28ca-4dbd-b9f8-3a77e3e0a9cd",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(22).jpg?alt=media&token=a19fe9c6-9826-48ce-b018-fa4e7487b744",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(23).jpg?alt=media&token=f8b99eb9-2c35-4e72-ad24-f6c795e73576",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(24).jpg?alt=media&token=2a1a7255-6b12-4bdb-b51e-c83772971a30",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(25).jpg?alt=media&token=7b4ff995-7dd7-4a48-9060-e8b10c2caf7b",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(26).jpg?alt=media&token=875b231f-6bc9-4805-9915-70ffc9499a33",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(27).jpg?alt=media&token=1d448fc5-aae9-4097-b9d4-7b9b7578bc7a",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(28).jpg?alt=media&token=a0b232c1-a54c-49aa-a118-1028a501791d",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(29).jpg?alt=media&token=be18a77c-5a6a-4eff-adc3-8cc16eff1d3a",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(3).jpg?alt=media&token=c9c6396b-1ee5-410c-b218-ea22baf78ab9",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(31).jpg?alt=media&token=2bde8f0b-aa54-4b3e-927a-64b11d859083",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(1).jpg?alt=media&token=ffaa69fd-de46-43eb-80f4-2e309e73fb0c",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(10).jpg?alt=media&token=5f5da358-a90a-4d43-abd8-aa45c65df1e8",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(11).jpg?alt=media&token=8c2188f4-f054-48b9-9bfd-0c4facbd7a91",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(12).jpg?alt=media&token=f77c86fe-421e-4216-992e-08b1315e1447",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(13).jpg?alt=media&token=b72b9ce9-0a93-499c-8067-3b6b669d3113",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(14).jpg?alt=media&token=16edb01b-e8ea-47ba-817c-61e3a67c1070",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(16).jpg?alt=media&token=88a8d2dd-69d9-4c06-a2a9-10657186a0a0",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(16).jpg?alt=media&token=88a8d2dd-69d9-4c06-a2a9-10657186a0a0",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(17).jpg?alt=media&token=9a4a8e88-7187-4029-bf31-35e6dfa24763",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(18).jpg?alt=media&token=f188c89b-c3ff-4d83-a6dd-0f20ed6742b1",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(19).jpg?alt=media&token=9e8bc0f6-af59-4542-a098-addd1e41d690",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(2).jpg?alt=media&token=34cd206f-f5d5-4e63-80ae-733b0175d6e7",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(20).jpg?alt=media&token=05e0cee8-5d4d-4c2c-baa9-fcad1c7be6c1",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/01%20(21).jpg?alt=media&token=7b544aaa-5d6b-4340-b98a-0a69696aff29",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/8.jpg?alt=media&token=51d61461-8783-4b2a-8cba-dbf85615a676",
        },
        {
                img:
                        "https://firebasestorage.googleapis.com/v0/b/drdps-d314a.appspot.com/o/9.jpg?alt=media&token=efd59494-5399-4de6-ba24-9b596a687479",
        },
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