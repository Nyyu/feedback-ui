import React from "react";
import Card from "../../Card";
import { Link } from "react-router-dom";

function About() {
    return (
        <Card>
            <div className="about">
                <h1>About page</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi ad reprehenderit delectus sit, quibusdam iure libero
                    quis odio maiores dolorum cum ex fugiat quaerat. Neque, id
                    suscipit. At, architecto dolor!
                </p>
                <Link
                    to={{
                        pathname: "/",
                        search: "?yourmom",
                    }}
                >
                    {" "}
                    &larr;
                </Link>
            </div>
        </Card>
    );
}

export default About;
