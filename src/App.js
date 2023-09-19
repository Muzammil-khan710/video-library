import { Homepage, LoginPage, SignupPage, HistoryPage, LikedPage, WatchLaterPage, PlaylistPage, PlayerPage } from "./Pages/index";
import { Routes, Route } from  "react-router-dom"
import { Authroute } from './Components/Authroute';
import { Privateroute } from './Components/Privateroute';

const App = () =>  {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>

      <Route element={<Authroute/>}>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>}/>
      </Route>

      <Route element={<Privateroute/>}>
      <Route path="/history" element={<HistoryPage/>}/>
      <Route path="/liked" element={<LikedPage/>}/>
      <Route path="/watchlater" element={<WatchLaterPage/>}/>
      <Route path="/playlist" element={<PlaylistPage/>}/>
      </Route>
      <Route path="/player/:videoid" element={<PlayerPage/>}/>
    </Routes>
    </>
  );
}

export { App }
