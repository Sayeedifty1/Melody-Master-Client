import Container from "../Shared/Container";
import Title from "../Title/Title";


const PopularClass = () => {
    return (
        <Container>
            <Title subHeading="Our Classes" heading="Most Popular Classes"></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default PopularClass;