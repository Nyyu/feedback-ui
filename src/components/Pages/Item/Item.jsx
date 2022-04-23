import {
    NavLink,
    useParams,
    Routes,
    Route,
    Navigate,
    useNavigate,
} from "react-router-dom";
import Card from "../../Card";

function Item() {
    const p = useParams();
    const nav = useNavigate();
    const status = 2404;

    if (status === 404) {
        return <Navigate to={"/404"} />;
    }

    const Click = () => {
        console.log("OK!");
        nav("/Item/2/3/example");
    };
    return (
        <>
            <button
                className="btn btn-secondary"
                style={{
                    display: "block",
                    margin: "0 auto",
                }}
                onClick={Click}
            >
                Click me
            </button>
            <Card>
                <NavLink
                    to={"/"}
                    style={{
                        marginRight: 15,
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to={"/about"}
                    style={{
                        marginRight: 15,
                    }}
                >
                    About
                </NavLink>
                <NavLink
                    to={"/Item"}
                    style={{
                        marginRight: 15,
                    }}
                >
                    About
                </NavLink>
            </Card>

            <div>
                <Card>
                    <h1>Item's page</h1>
                    <p>Id: {p.id}</p>
                    <p>Specific: {p.specific}</p>
                </Card>
            </div>
            <Routes>
                <Route
                    path="/example"
                    element={
                        <p
                            style={{
                                position: "absolute",
                                left: "50%",
                                transform: "translateX(-50%)",
                                fontSize: 35,
                            }}
                        >
                            Heyo!
                        </p>
                    }
                />
            </Routes>
        </>
    );
}

export default Item;
