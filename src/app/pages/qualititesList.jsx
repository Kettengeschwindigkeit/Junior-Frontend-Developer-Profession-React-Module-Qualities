import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import QualitiesTable from "../components/ui/qualitiesTable";
import qualityService from "../services/quality.service";

const QualitiesListPage = () => {
    const [qualities, setQualities] = useState([]);
    const history = useHistory();

    const handleEdit = (param) => {
        console.log(param);
        history.push(`/edit/${param}`);
    };

    const handleDelete = (param) => {
        console.log(param);
    };

    useEffect(async () => {
        qualityService.fetchAll().then((data) => setQualities(data.content));
    }, []);

    return (
        <>
            <h1>Qualitites List Page</h1>
            <QualitiesTable
                onDelete={handleDelete}
                onEdit={handleEdit}
                data={qualities}
            />
        </>
    );
};

export default QualitiesListPage;
