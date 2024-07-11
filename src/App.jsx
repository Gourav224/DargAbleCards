import BackGround from "./components/BackGround";
import Forground from "./components/Forground";

const App = () => {
    return (
        <div className="relative w-full h-screen bg-zinc-800">
            <BackGround />
            <Forground/>
        </div>
    );
};

export default App;
