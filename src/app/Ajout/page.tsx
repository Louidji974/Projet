import axios from "axios";
import { Form, Formik, Field } from "formik";

// JE ME SUIS ARRËTE ICI

const Ajout = () => {
    const handleSubmit = async (values, { resetForm }) => {
        try {
            await axios.post("http://localhost:3000/api/todos", {
                description: values.description,
                isDone: values.isDone,
            });

            resetForm();
        } catch (error) {
            console.error("Erreur lors de l'envoi de la requête :", error);
        }
    };

    return (
        <Formik
            initialValues={{ numero: undefined, rue: undefined, ville: undefined, lieu_dit: undefined , pays: undefined, type_lieu: undefined}}
            onSubmit={handleSubmit}
        >
            <form>
                <Field type="number" id="numero" name="numero" />
                <Field type="text" id="rue" name="rue" />
                <Field type="text" id="ville" name="ville" />
                <Field type="text" id="lieu_dit" name="lieu_dit" />
                <Field type="text" id="pays" name="pays" />
                <Field as="select" id="type_lieu" name="type_lieu">
                    <option value="maison">Maison</option>
                    <option value="appartement">Appartement</option>
                    <option value="autre">Autre</option>
                </Field>
                <button type="submit">Nouvelle Adresse</button>
            </form>
        </Formik>
    );
};

export default Ajout;
