import { Page, Text, View, Document, StyleSheet, Image, renderToStream } from '@react-pdf/renderer';
import { LoaderFunction } from "remix";
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
            marginBottom: '7px',
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
        },
        sectionHeaders: {
            backgroundColor: "#c10100",
            border: "0.5px solid black",
            color: "white",
            fontSize: "8px",
            fontFamily: "Helvetica-Bold",
            padding: "2px"
        },
        sectionArea: {
            display: "flex",
            flexDirection: 'row',
            width: "100%",
            justifyContent: 'center',
            alignItems: "center",
            fontSize: "8px"
        },
        tableHeader: {
            border: "0.5px solid black",
            fontFamily: "Helvetica-Bold",
            padding: "2px",
            height: "30px",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1
        },
        tableCell: {
            border: "0.6px solid black",
            height: "10px",
            backgroundColor: "#ebf2ff"
        },
        sectionC: {
            display: 'flex',
            width: '100%',
        },
    });

    // meta data for section C
    const sectionCMetaData = [
        // first row
        { width: "36px" },
        { width: "100px" },
        { width: "106px" },
        { width: "88px" },
        { width: "99px" },
        { width: "33px" },
        { width: "36px" },
        { width: "55px" },
        // second row
        {width: "35px"},
        {width: "166px"},
        {width: "149px"},
        {width: "196px"}
    ]

    // the PDF to be rendered
    const PDFForm = () => {
        return (
            <Document title={`ADR_Form_${formData?._id}`} subject="ADR Reporting Form" keywords="ADR" language="en">
                <Page size="A4" style={{ padding: "28px" }}>
                    <View style={styles.headerSection}>
                        <View style={styles.headerLogo}>
                            <Image src={'https://imgs.search.brave.com/M0QKxOfJcpjmJ_OdtSATaL6qa7_wX1uyqvXzpDC0SrA/rs:fit:84:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/U0hSVGczUlR1VUpI/bno0WDF3NFBnQUFB/QSZwaWQ9QXBp'} />
                        </View>
                        <View style={styles.headerContent}>
                            <Text style={{ fontSize: "12px", fontFamily: "Times-Bold" }}>
                                SUSPECTED ADVERSE DRUG REACTION REPORTING FORM
                            </Text>
                            <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                                For <span style={{ fontFamily: "Helvetica-Bold" }}>VOLUNTARY</span> reporting of ADRs by Healthcare Professionals
                            </Text>
                            <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                                <span style={{ fontFamily: "Helvetica-Bold" }}>metaDataIAN PHARMACOPOEIA COMMISSION</span> (National Coordination Centre-Pharmacovigilance Programme of metaDataia)
                            </Text>
                            <Text style={{ fontSize: "8px", marginTop: "3px" }}>Ministry of Health & Family Welfare, Government of metaDataia, Sector-23, Raj Nagar, Ghaziabad-201002</Text>
                            <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                                <span style={{ fontFamily: "Helvetica-Bold" }}>PvPI Helpline (Toll Free) :1800-180-3024</span> (9:00 AM to 5:30 PM, Monday-Friday)
                            </Text>
                        </View>
                    </View>
                    <View style={styles.sectionC}>
                        <View style={styles.sectionHeaders}>
                            <Text>C. SUSPECTED MEDICATION(S)*</Text>
                        </View>
                        <View style={styles.sectionArea}>
                            <View style={styles.tableHeader}>
                                <Text>S. No.</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Name (Brand/Generic)</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Manufacturer (if known)</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Batch No. (Lot No.)</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Expiry Date (if known)</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Dose</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Route</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Frequency</Text>
                            </View>
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(0,8).map((metaData: any) => {
                                    return <View style={[styles.tableCell, { width: metaData.width }]}></View>
                                })
                            }
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(0,8).map((metaData: any) => {
                                    return <View style={[styles.tableCell, { width: metaData.width }]}></View>
                                })
                            }
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(0,8).map((metaData: any) => {
                                    return <View style={[styles.tableCell, { width: metaData.width }]}></View>
                                })
                            }
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(0,8).map((metaData: any) => {
                                    return <View style={[styles.tableCell, { width: metaData.width }]}></View>
                                })
                            }
                        </View>
                    </View>
                    <View style={[styles.sectionC, { marginTop: "2px" }]}>
                        <View style={styles.sectionArea}>
                            <View style={{
                                width: "35px", 
                                border: "0.5px solid black",
                                fontFamily: "Helvetica-Bold",
                                padding: "2px",
                                height: "30px",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Text>S. No.</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Therapy Dates</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Indication</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Causality Assessment</Text>
                            </View>
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(8,12).map((metaData: any) => {
                                    return <View style={[styles.tableCell, { width: metaData.width }]}></View>
                                })
                            }
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(8,12).map((metaData: any) => {
                                    return <View style={[styles.tableCell, { width: metaData.width }]}></View>
                                })
                            }
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(8,12).map((metaData: any) => {
                                    return <View style={[styles.tableCell, { width: metaData.width }]}></View>
                                })
                            }
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(8,12).map((metaData: any) => {
                                    return <View style={[styles.tableCell, { width: metaData.width }]}></View>
                                })
                            }
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