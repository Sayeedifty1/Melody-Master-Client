import Container from "../Shared/Container";


const Offer = () => {
    return (
        <Container>
            <div className="bg-yellow-300 p-12 text-center space-y-6 rounded-lg">
                <h2 className="text-3xl font-bold text-red-800">Opening Offer</h2>
                <h1 className="text-6xl font-bold text-slate-50">SURPRISE GIFT AFTER FIRST ENROLLMENT</h1>
                <p className="text-xl text-blue-950">Bring your children to a trial lesson to find out how much they enjoy doing music or singing</p>
                <div>
                <button className="btn btn-outline btn-success mr-6">Success</button>
                <button className="btn btn-outline btn-warning">Warning</button>
                </div>
            </div>
        </Container>
    );
};

export default Offer;