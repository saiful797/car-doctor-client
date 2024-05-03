import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Table from "./Table/Table";
import About from "./About/About";


const HomePage = () => {
    return (
        <div className="mt-10">
            <Helmet>
                <title>Car Doctor | Home</title>
            </Helmet>
            <div>
                <Banner />
            </div>
            
            <div>
                <About />
            </div>
            <div className="mt-10">
                <Table/>
            </div>
        </div>
    );
};

export default HomePage;