import { Helmet } from "react-helmet-async";


const HomePage = () => {
    return (
        <div className="mt-10">
            <Helmet>
                <title>Car Doctor | Home</title>
            </Helmet>

            <h1 className="text-3xl text center font-bold">Hello From Home page</h1>
        </div>
    );
};

export default HomePage;