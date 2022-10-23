import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import qualityService from "../services/quality.service";

const QualitiesContext = React.createContext();
const qualities = [{ _id: 123132, name: "asdasd" }];

export const useQualities = () => {
    return useContext(QualitiesContext);
};

export const QualitiesProvider = ({ children }) => {
    const [qualities, setQualities] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const prevState = useRef();

    const addQuality = async (data) => {
        try {
            const { content } = await qualityService.create(data);
            setQualities((prevState) => [...prevState, content]);
            return content;
        } catch (error) {
            const { message } = error.response.data;
            setError(message);
        };
    };

    const deleteQuality = async (id) => {
        prevState.current = qualities;

        setQualities(prevState => {
            return prevState.filter(item => item._id !== id)
        })
        try {
            await qualityService.delete(id)
        } catch (error) {
            const { message } = error.response.data;
            toast("Object not deleted");
            setError(message);
            setQualities(prevState.current);
        }
    };

    const getQuality = (id) => {
        return qualities.find((q) => q._id === id)
    }

    const updateQuality = async ({ _id: id, ...data }) => {
        try {
            const { content } = await qualityService.update(id, data);
            setQualities((prevState) => prevState.map((item) => {
                if (item._id === content._id) {
                    return content
                }
                return item
            }))
            return content;
        } catch (error) {
            const { message } = error.response.data;
            setError(message);
        };
    }

    useEffect(() => {
        const getQualities = async () => {
            try {
                const { content } = await qualityService.fetchAll();
                setQualities(content);
                setLoading(false);
            } catch (error) {
                const { message } = error.response.data;
                setError(message);
            }
        };
        getQualities();
    }, []);

    return (
        <QualitiesContext.Provider value={{ qualities, getQuality, updateQuality, addQuality, deleteQuality }}>
            {!isLoading ? children : "<h1>Qualities Loading ....</h1>"}
        </QualitiesContext.Provider>
    );
};
