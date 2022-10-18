import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditForm from "../components/ui/editForm";

const EditQualityPage = () => {
    const [quality, setQuality] = useState(null);

    const id = useParams().id;
    const qualityEndPoint = `http://localhost:4000/api/v1/quality/${id}`;

    const handleSubmit = async (data) => {
        try {
            await axios
                .put(qualityEndPoint + "asd", data)
                .then(res => console.log(res.data.content));
        } catch (error) {
            const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;
            if (!expectedErrors) {
                console.log("Unexpected Error");
            } else {
                console.log("Expected Error")
            }
        }
    };

    useEffect(async () => {
        const { data } = await axios.get(qualityEndPoint);
        setQuality(data.content);
    }, []);

    return (
        <>
            <h1>Edit Quality Page</h1>{" "}
            {quality !== null ? <EditForm data={quality} onSubmit={handleSubmit} /> : "Loading..."}
        </>
    );
};

export default EditQualityPage;
