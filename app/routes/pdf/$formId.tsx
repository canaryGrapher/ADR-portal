import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function FormPDF() {
    const params = useParams();
    // const [formData, setFormData] = useState<any>();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setFormData(await fetch(`/api/forms/form-data-for-pdf?formId=${params.formId}`).then((res) => res.json()))
    //         console.log(formData)
    //     }
    //     fetchData();
    // }, [params.formId])

    return (
        <p>Render form {params.formId} here :P</p>
    )
}