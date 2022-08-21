import { Page, Text, View, Document, StyleSheet, Image, renderToStream } from '@react-pdf/renderer';
import { LoaderFunction, useLoaderData } from "remix";
import { getCompletedForm1Data } from "~/server/services/functions/fetchCompletedForms.server";

export let loader: LoaderFunction = async ({ request, params }) => {

    const formData: any = await getCompletedForm1Data(params.formId);
    console.log(formData);

    // the styling for the PDF
    const styles = StyleSheet.create({
        headerSection: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        headerLogo: {
            height: "70px",
            width: "35px"
        },
        headerContent: {
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }
    });

    // the PDF to be rendered
    const PDFForm = () => {
        return (
            <Document title={`ADR_Form_${formData._id}`} subject="ADR Reporting Form" keywords="ADR" language="en">
                <Page size="A4" style={{ padding: "28px" }}>
                    <View style={styles.headerSection}>
                        <View style={styles.headerLogo}>
                            <Image src={'https://imgs.search.brave.com/M0QKxOfJcpjmJ_OdtSATaL6qa7_wX1uyqvXzpDC0SrA/rs:fit:84:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/U0hSVGczUlR1VUpI/bno0WDF3NFBnQUFB/QSZwaWQ9QXBp'}/>
                        </View>
                        <View style={styles.headerContent}>
                            <Text style={{ fontSize: "11px", fontWeight: "heavy", fontFamily: "Times-Roman" }}>
                                SUSPECTED ADVERSE DRUG REACTION REPORTING FORM
                            </Text>
                            <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                                For VOLUNTARY reporting of ADRs by Healthcare Professionals
                            </Text>
                            <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                                INDIAN PHARMACOPOEIA COMMISSION (National Coordination Centre-Pharmacovigilance Programme of India)
                            </Text>
                            <Text style={{ fontSize: "8px", marginTop: "3px" }}>Ministry of Health & Family Welfare, Government of India, Sector-23, Raj Nagar, Ghaziabad-201002</Text>
                            <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                                PvPI Helpline (Toll Free) :1800-180-3024 (9:00 AM to 5:30 PM, Monday-Friday)
                            </Text>
                        </View>
                    </View>
                </Page >
            </Document >
        );
    }

    // creating a stream
    let stream = await renderToStream(<PDFForm />);

    // and transform it to a Buffer to send in the Response
    let body: Buffer = await new Promise((resolve, reject) => {
        let buffers: Uint8Array[] = [];
        stream.on("data", (data) => {
            buffers.push(data);
        });
        stream.on("end", () => {
            resolve(Buffer.concat(buffers));
        });
        stream.on("error", reject);
    });

    let headers = new Headers({ "Content-Type": "application/pdf" });
    return new Response(body, { status: 200, headers: headers });
}