import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
  renderToStream,
} from "@react-pdf/renderer";
import { LoaderFunction } from "remix";
import { getCompletedForm1Data } from "~/server/services/functions/fetchCompletedForms.server";

export let loader: LoaderFunction = async ({ request, params }) => {
  // fetch form data
  const formData: any = await getCompletedForm1Data(params.formId);

  // assign form data
  const patientDetails = formData.form1Page1;
  const drugInfo = formData.form1Page2;
  const medicationDetails = formData.form1Page3.Form1Page3a.drugDetails;
  const concommitantDetails = formData.form1Page3.Form1Page3d.drugDetails;
  const amcInfo = formData.form1Page3.Form1Page3e;
  const reporterDetails = formData.form1Page4;

  // the styling for the PDF
  const styles = StyleSheet.create({
    headerSection: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: "7px",
    },
    headerSectionStatic: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: "7px",
    },
    StaticContent: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: "7px",
    },

    headerLogo: {
      height: "70px",
      width: "35px",
    },
    headerContent: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    headerContentStatic: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
    },
    sectionHeaders: {
      backgroundColor: "#c10100",
      border: "0.5px solid black",
      color: "white",
      fontSize: "8px",
      fontFamily: "Helvetica-Bold",
      padding: "2px",
    },
    sectionArea: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "8px",
    },
    tableHeader: {
      border: "0.5px solid black",
      fontFamily: "Helvetica-Bold",
      padding: "2px",
      height: "30px",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
    },
    tableCell: {
      border: "0.6px solid black",
      height: "10px",
      backgroundColor: "#ebf2ff",
      textAlign: "center",
    },
    sectionA: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    sectionACell: {
      padding: "2px",
      border: "0.6px solid black",
      textAlign: "left",
      fontSize: "9px",
    },
    halfWidth: {
      width: "50%",
    },
    sectionC: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    additionalInfo: {
      height: "110px",
      width: "50%",
      border: "0.5px solid black",
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
    { width: "35px" },
    { width: "83px" },
    { width: "83px" },
    { width: "149px" },
    { width: "196px" },
    // third row
    { width: "68px" },
    { width: "73px" },
    { width: "70px" },
    { width: "64px" },
    { width: "82px" },
    { width: "19px" },
    { width: "16px" },
    { width: "65px" },
    { width: "92px" },
    // fourth row
    { width: "117px" },
    { width: "99px" },
    // fifth row
    { width: "38px" },
    { width: "100px" },
    { width: "36px" },
    { width: "39px" },
    { width: "109px" },
    { width: "82px" },
    { width: "81px" },
    { width: "54px" },
  ];

  // the PDF to be rendered
  const PDFForm = () => {
    return (
      <Document
        title={`ADR_Form_${formData?._id}`}
        subject="ADR Reporting Form"
        keywords="ADR"
        language="en"
      >
        <Page size="A4" style={{ padding: "28px" }}>
          <View style={styles.headerSection}>
            <View style={styles.headerLogo}>
              <Image
                src={
                  "https://imgs.search.brave.com/M0QKxOfJcpjmJ_OdtSATaL6qa7_wX1uyqvXzpDC0SrA/rs:fit:84:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/U0hSVGczUlR1VUpI/bno0WDF3NFBnQUFB/QSZwaWQ9QXBp"
                }
              />
            </View>
            <View style={styles.headerContent}>
              <Text style={{ fontSize: "12px", fontFamily: "Times-Bold" }}>
                SUSPECTED ADVERSE DRUG REACTION REPORTING FORM
              </Text>
              <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                For{" "}
                <span style={{ fontFamily: "Helvetica-Bold" }}>VOLUNTARY</span>{" "}
                reporting of ADRs by Healthcare Professionals
              </Text>
              <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                <span style={{ fontFamily: "Helvetica-Bold" }}>
                  INDIAN PHARMACOPOEIA COMMISSION
                </span>{" "}
                (National Coordination Centre-Pharmacovigilance Programme of
                India)
              </Text>
              <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                Ministry of Health & Family Welfare, Government of India,
                Sector-23, Raj Nagar, Ghaziabad-201002
              </Text>
              <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                <span style={{ fontFamily: "Helvetica-Bold" }}>
                  PvPI Helpline (Toll Free) :1800-180-3024
                </span>{" "}
                (9:00 AM to 5:30 PM, Monday-Friday)
              </Text>
            </View>
          </View>

          <View style={styles.sectionA}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={styles.halfWidth}>
                <View style={styles.sectionHeaders}>
                  <Text>A. PATIENT INFORMATION*</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View style={[styles.sectionACell, { width: "50%" }]}>
                    <Text>1. Patient Initials: {patientDetails?.patientInitials}</Text>
                  </View>
                  <View style={[styles.sectionACell, { width: "50%" }]}>
                    <Text>2. Age or Date of Birth: {new Date(patientDetails?.DateOfBirth).toDateString()}</Text>
                  </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View style={[styles.sectionACell, { width: "50%" }]}>
                    <Text>3. Gender: {patientDetails?.gender === "male" ? "M" : "F"}</Text>
                  </View>
                  <View style={[styles.sectionACell, { width: "50%" }]}>
                    <Text>4. Weight (in kg): {patientDetails?.weight?.toString()}</Text>
                  </View>
                </View>
                <View style={styles.sectionHeaders}>
                  <Text>B. SUSPECTED ADVERSE REACTION*</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "0.6px solid black",
                  }}
                >
                  <Text style={{ fontSize: "9px", padding: "2px" }}>
                    5. Event / Reaction start date (dd/mm/yyyy)
                  </Text>
                  <Text
                    style={{
                      fontSize: "9px",
                      flexGrow: 1,
                      backgroundColor: "#ebf2ff",
                      padding: "2px",
                    }}
                  >
                    {new Date(drugInfo?.dateOfReactionStarted).toDateString()}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "0.6px solid black",
                  }}
                >
                  <Text style={{ fontSize: "9px", padding: "2px" }}>
                    6. Event / Reaction stop date (dd/mm/yyyy)
                  </Text>
                  <Text
                    style={{
                      fontSize: "9px",
                      flexGrow: 1,
                      backgroundColor: "#ebf2ff",
                      padding: "2px",
                    }}
                  >
                    {new Date(drugInfo?.dateOfRecovery).toDateString()}
                  </Text>
                </View>
                <View style={[styles.sectionACell, { fontSize: "9px" }]}>
                  <Text>
                    7. Describe Event/Reaction management with details , if
                    any
                  </Text>
                </View>
                <View
                  style={{
                    border: "0.6px solid black",
                    maxHeight: "100%",
                    backgroundColor: "#ebf2ff",
                    textAlign: "left",
                    fontSize: "9px",
                    padding: "2px",
                  }}
                >
                  <Text>{drugInfo?.reactionDescription}</Text>
                </View>
              </View>
              <View style={styles.halfWidth}>
                <View
                  style={{
                    backgroundColor: "#400000",
                    border: "0.5px solid black",
                    color: "white",
                    fontSize: "8px",
                    fontFamily: "Helvetica-Bold",
                    padding: "2px",
                  }}
                >
                  <Text style={{ textAlign: "center" }}>FOR AMC/NCC USE</Text>
                </View>
                <View style={styles.sectionACell}>
                  <Text>
                    Reg. No. / IPD No. / OPD No. / CR No. : fiurcibwrf
                  </Text>
                </View>
                <View style={styles.sectionACell}>
                  <Text>AMC Report No. : {amcInfo?.amcReportNumber}</Text>
                </View>
                <View style={styles.sectionACell}>
                  <Text>Worldwide Unique No.: {amcInfo?.worldwideUniqueNumber}</Text>
                </View>
                <View style={[styles.sectionACell, { fontSize: "9px" }]}>
                  <Text>12. Relevant investigations with dates :</Text>
                </View>
                <View
                  style={{
                    border: "0.6px solid black",
                    minHeight: "80px",
                    backgroundColor: "#ebf2ff",
                    textAlign: "left",
                    fontSize: "9px",
                    padding: "2px"
                  }}
                >
                  <Text>
                    {amcInfo?.relevantTests}
                  </Text>
                </View>
                <View style={[styles.sectionACell, { fontSize: "9px" }]}>
                  <Text>
                    13. Relevant medical / medication history (e.g. allergies,
                    pregnancy, addiction, hepatic, renal dysfunction etc.)
                  </Text>
                </View>
                <View
                  style={{
                    border: "0.6px solid black",
                    minHeight: "80px",
                    backgroundColor: "#ebf2ff",
                    textAlign: "left",
                    fontSize: "9px",
                    padding: "2px"
                  }}
                >
                  <Text>{amcInfo?.relevantMedicalHistory}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.sectionC}>
            <View style={styles.sectionHeaders}>
              <Text>C. SUSPECTED MEDICATION(S)*</Text>
            </View>
            {/* first row */}
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
            {medicationDetails?.map((medication: any) => {
              return (
                <View style={styles.sectionArea}>
                  <Text
                    style={[
                      styles.tableCell,
                      { width: sectionCMetaData[0].width },
                    ]}
                  >
                    {medication?.identifier + 1}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { width: sectionCMetaData[1].width },
                    ]}
                  >
                    {medication?.nameOfDrug.trim()}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { width: sectionCMetaData[2].width },
                    ]}
                  >
                    {medication?.manufacturer.trim()}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { width: sectionCMetaData[3].width },
                    ]}
                  >
                    {medication?.BatchNo_LotNo.trim()}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { width: sectionCMetaData[4].width },
                    ]}
                  >
                    {new Date(medication?.expDate).toDateString()}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { width: sectionCMetaData[5].width },
                    ]}
                  >
                    {medication?.doseUsed}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { width: sectionCMetaData[6].width },
                    ]}
                  >
                    {medication?.routeUsed.trim()}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { width: sectionCMetaData[7].width },
                    ]}
                  >
                    {medication?.frequency.trim()}
                  </Text>
                </View>
              );
            })}
          </View>
          {/* second row */}
          <View style={[styles.sectionC, { marginTop: "2px" }]}>
            <View style={styles.sectionArea}>
              <View
                style={{
                  width: "35px",
                  border: "0.5px solid black",
                  fontFamily: "Helvetica-Bold",
                  padding: "2px",
                  height: "30px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>S. No.</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "0.5px solid black",
                  fontFamily: "Helvetica-Bold",
                  padding: "1px",
                  height: "30px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: "15px",
                    width: "160px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>Therapy Dates</Text>
                </View>
                <View
                  style={{
                    height: "15px",
                    width: "161px",
                    display: "flex",
                    flexDirection: "row",
                    borderTop: "0.5px solid black",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "83px",
                      borderRight: "0.5px solid black",
                    }}
                  >
                    <Text>Date started</Text>
                  </View>
                  <View
                    style={{
                      height: "15px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "83px",
                    }}
                  >
                    <Text>Date stopped</Text>
                  </View>
                </View>
              </View>
              <View style={styles.tableHeader}>
                <Text>Indication</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text>Causality Assessment</Text>
              </View>
            </View>
            {medicationDetails?.map((medication: any) => {
              return (
                <View style={styles.sectionArea}>
                  <Text
                    style={[
                      styles.tableCell,
                      { width: sectionCMetaData[8].width },
                    ]}
                  >
                    {medication?.identifier + 1}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { width: sectionCMetaData[9].width },
                    ]}
                  >
                    {new Date(medication?.dateStarted).toDateString()}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { width: sectionCMetaData[10].width },
                    ]}
                  >
                    {new Date(medication?.dateStopped).toDateString()}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { width: sectionCMetaData[11].width },
                    ]}
                  >
                    {medication?.indication?.trim()}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { width: sectionCMetaData[12].width },
                    ]}
                  >
                    {""}
                  </Text>
                </View>
              );
            })}
          </View>
          {/* third row */}
          <View style={[styles.sectionArea, { marginTop: "2px" }]}>
            <View
              style={[
                styles.tableHeader,
                { width: "65%", fontFamily: "Helvetica" },
              ]}
            >
              <Text>Action taken after reaction (Please tick) </Text>
            </View>
            <View
              style={[
                styles.tableHeader,
                { width: "35%", fontFamily: "Helvetica" },
              ]}
            >
              <Text>
                Reaction reappeared after reintroduction of suspected medication
                (Please tick)
              </Text>
            </View>
          </View>
          <View style={styles.sectionArea}>
            <View
              style={{ width: "65%", display: "flex", flexDirection: "row" }}
            >
              <View style={styles.tableHeader}>
                <Text>S. No. as per C</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text>Drug Withdrawn</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text>Dose increased</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text>Dose reduced</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text>Dose not changed</Text>
              </View>
            </View>
            <View
              style={{ width: "35%", display: "flex", flexDirection: "row" }}
            >
              <View style={styles.tableHeader}>
                <Text>Yes</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text>No</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text>Effect unknown</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text>Dose (if re-introduced)</Text>
              </View>
            </View>
          </View>
          <View style={styles.sectionArea}>
            {sectionCMetaData.slice(13, 22).map((metaData: any) => {
              return (
                <Text
                  style={[styles.tableCell, { width: metaData.width }]}
                ></Text>
              );
            })}
          </View>
          <View style={styles.sectionArea}>
            {sectionCMetaData.slice(13, 22).map((metaData: any) => {
              return (
                <Text
                  style={[styles.tableCell, { width: metaData.width }]}
                ></Text>
              );
            })}
          </View>
          <View style={styles.sectionArea}>
            {sectionCMetaData.slice(13, 22).map((metaData: any) => {
              return (
                <Text
                  style={[styles.tableCell, { width: metaData.width }]}
                ></Text>
              );
            })}
          </View>
          <View style={styles.sectionArea}>
            {sectionCMetaData.slice(13, 22).map((metaData: any) => {
              return (
                <Text
                  style={[styles.tableCell, { width: metaData.width }]}
                ></Text>
              );
            })}
          </View>
          {/* fourth row */}
          <View
            style={[
              styles.sectionArea,
              { marginTop: "2px", justifyContent: "flex-start" },
            ]}
          >
            <View
              style={{ width: "40%", display: "flex", flexDirection: "row" }}
            >
              <View style={styles.tableHeader}>
                <Text>Not applicable</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text>Unknown</Text>
              </View>
            </View>
          </View>
          <View style={[styles.sectionArea, { justifyContent: "flex-start" }]}>
            {sectionCMetaData.slice(22, 24).map((metaData: any) => {
              return (
                <Text
                  style={[styles.tableCell, { width: metaData.width }]}
                ></Text>
              );
            })}
          </View>
          <View style={[styles.sectionArea, { justifyContent: "flex-start" }]}>
            {sectionCMetaData.slice(22, 24).map((metaData: any) => {
              return (
                <Text
                  style={[styles.tableCell, { width: metaData.width }]}
                ></Text>
              );
            })}
          </View>
          <View style={[styles.sectionArea, { justifyContent: "flex-start" }]}>
            {sectionCMetaData.slice(22, 24).map((metaData: any) => {
              return (
                <Text
                  style={[styles.tableCell, { width: metaData.width }]}
                ></Text>
              );
            })}
          </View>
          <View style={[styles.sectionArea, { justifyContent: "flex-start" }]}>
            {sectionCMetaData.slice(22, 24).map((metaData: any) => {
              return (
                <Text
                  style={[styles.tableCell, { width: metaData.width }]}
                ></Text>
              );
            })}
          </View>
          <View style={[styles.sectionArea, { marginTop: "2px" }]}>
            <View
              style={[
                styles.tableHeader,
                { width: "100%", fontFamily: "Helvetica" },
              ]}
            >
              <Text>
                Concomitant medical product including self-medication add herbal
                remedies with therapy dates (Exclude those used to treat
                reaction)
              </Text>
            </View>
          </View>
          <View style={styles.sectionArea}>
            <View style={styles.tableHeader}>
              <Text>S. No.</Text>
            </View>
            <View style={styles.tableHeader}>
              <Text>Name (Brand/Generic)</Text>
            </View>
            <View style={styles.tableHeader}>
              <Text>Dose</Text>
            </View>
            <View style={styles.tableHeader}>
              <Text>Route</Text>
            </View>
            <View style={styles.tableHeader}>
              <Text>Frequency (OD, BD, etc.)</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                border: "0.5px solid black",
                fontFamily: "Helvetica-Bold",
                padding: "1px",
                height: "30px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  height: "15px",
                  width: "160px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Therapy Dates</Text>
              </View>
              <View
                style={{
                  height: "15px",
                  width: "161px",
                  display: "flex",
                  flexDirection: "row",
                  borderTop: "0.5px solid black",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "83px",
                    borderRight: "0.5px solid black",
                  }}
                >
                  <Text>Date started</Text>
                </View>
                <View
                  style={{
                    height: "15px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "83px",
                  }}
                >
                  <Text>Date stopped</Text>
                </View>
              </View>
            </View>
            <View style={styles.tableHeader}>
              <Text>Indication</Text>
            </View>
          </View>
          {concommitantDetails?.map((concom: any, ind: number) => {
            return (
              <View
                style={[styles.sectionArea, { justifyContent: "flex-start" }]}
              >
                <Text
                  style={[
                    styles.tableCell,
                    { width: sectionCMetaData[24].width },
                  ]}
                >
                  {ind + 1}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    { width: sectionCMetaData[25].width },
                  ]}
                >
                  {concom?.name.trim()}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    { width: sectionCMetaData[26].width },
                  ]}
                >
                  {concom?.dose}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    { width: sectionCMetaData[27].width },
                  ]}
                >
                  {concom?.routeUsed.trim()}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    { width: sectionCMetaData[28].width },
                  ]}
                >
                  {concom?.frequency}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    { width: sectionCMetaData[29].width },
                  ]}
                >
                  {new Date(concom?.startDate).toDateString()}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    { width: sectionCMetaData[30].width },
                  ]}
                >
                  {new Date(concom?.stopDate).toDateString()}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    { width: sectionCMetaData[31].width },
                  ]}
                >
                  {concom?.indication}
                </Text>
              </View>
            );
          })}
          <View style={[styles.sectionArea, { marginTop: "2px" }]}>
            <View style={styles.additionalInfo}>
              <View style={[styles.tableHeader, { height: "20px" }]}>
                <Text>Additional Information</Text>
              </View>
              <View style={[styles.tableCell, { height: "90px" }]}></View>
            </View>
            <View style={styles.additionalInfo}>
              <View style={styles.sectionHeaders}>
                <Text>D. REPORTER DETAILS*</Text>
              </View>
              <View style={{ height: "90px", padding: "2px" }}>
                <Text style={{ fontSize: "8px", fontFamily: "Helvetica-Bold" }}>
                  Name and Address
                </Text>
                <Text style={{ fontSize: "8px", fontFamily: "Helvetica" }}>
                  {reporterDetails?.name +
                    " " +
                    (reporterDetails?.profAddress != null
                      ? reporterDetails?.profAddress
                      : "")}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "2px",
                  }}
                >
                  <Text
                    style={{ fontSize: "8px", fontFamily: "Helvetica-Bold" }}
                  >
                    Pin
                  </Text>
                  <Text
                    style={{
                      fontSize: "8px",
                      fontFamily: "Helvetica",
                      marginLeft: "2px",
                    }}
                  >
                    {reporterDetails?.pin}
                  </Text>
                  <Text
                    style={{
                      fontSize: "8px",
                      fontFamily: "Helvetica-Bold",
                      marginLeft: "4px",
                    }}
                  >
                    Email
                  </Text>
                  <Text
                    style={{
                      fontSize: "8px",
                      fontFamily: "Helvetica",
                      marginLeft: "2px",
                    }}
                  >
                    {reporterDetails?.email}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "2px",
                  }}
                >
                  <Text
                    style={{ fontSize: "8px", fontFamily: "Helvetica-Bold" }}
                  >
                    Contact No.
                  </Text>
                  <Text
                    style={{
                      fontSize: "8px",
                      fontFamily: "Helvetica",
                      marginLeft: "2px",
                    }}
                  >
                    {reporterDetails?.telephoneNumber}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "2px",
                  }}
                >
                  <Text
                    style={{ fontSize: "8px", fontFamily: "Helvetica-Bold" }}
                  >
                    Occupation
                  </Text>
                  <Text
                    style={{
                      fontSize: "8px",
                      fontFamily: "Helvetica",
                      marginLeft: "2px",
                    }}
                  >
                    {reporterDetails?.occupation}
                  </Text>
                  <Text
                    style={{
                      fontSize: "8px",
                      fontFamily: "Helvetica-Bold",
                      marginLeft: "4px",
                    }}
                  >
                    Signature
                  </Text>
                  <Text
                    style={{
                      fontSize: "8px",
                      fontFamily: "Helvetica",
                      marginLeft: "2px",
                    }}
                  ></Text>
                </View>
                <View style={{ height: "10px", marginTop: "auto" }}>
                  <Text style={{ fontFamily: "Helvetica-Bold" }}>
                    Date of this report (dd/mm/yyyy):{" "}
                    {new Date(reporterDetails?.dateOfThisReport).toDateString()}{" "}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.sectionArea,
              {
                justifyContent: "flex-start",
                marginTop: "2px",
                width: "100%",
                border: "0.5px solid black",
                padding: "2px",
              },
            ]}
          >
            <Text>Signature and name of receving personnel: </Text>
          </View>
          <View
            style={[
              styles.sectionHeaders,
              { justifyContent: "flex-start", width: "100%", padding: "2px" },
            ]}
          >
            <Text>
              Confidentiality : The patient’s identity is held in strict
              confidence and protected to the fullest extent. Submission of a
              report does not constitute an admission that medical personnel or
              manufacturer or the product caused or contributed to the reaction.
              Submiss ion of an ADR report does not have any legal implication
              on the reporter.
            </Text>
          </View>
        </Page>
        {/* static page -anirudh */}
        <Page size="A4" style={{ padding: "28px" }}>
          <View
            style={{ backgroundColor: "#ebf2ff", border: "0.5px solid black" }}
          >
            <View style={styles.headerContentStatic}>
              <Text
                style={{
                  fontSize: "12px",
                  fontFamily: "Times-Bold",
                  color: "#00008B",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                }}
              >
                ADVICE ABOUT REPORTING
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "9px",
                  fontFamily: "Helvetica-Bold",
                  paddingLeft: "5px",
                }}
              >
                A. What to report?
              </Text>
            </View>
            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "9px",
                  fontFamily: "Helvetica-Bold",
                  justifyContent: "flex-start",
                  paddingLeft: "15px",
                }}
              >
                All adverse events should be reported
              </Text>
            </View>
            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                  paddingLeft: "15px",
                }}
              >
                Report non-serious, known or unknown, frequent or rare adverse
                drug reactions due to Medicines, Vaccines & Herbal Products.
              </Text>
            </View>
            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                  paddingLeft: "15px",
                }}
              >
                Report every serious adverse drug reactions. A reaction is
                serious when the patient outcome is :
              </Text>
            </View>
            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "10px",
                }}
              >
                •
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                Death
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "10px",
                }}
              >
                •
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                Life-threatening
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "10px",
                }}
              >
                •
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                Hospitalization (initial or prolonged)
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "10px",
                }}
              >
                •
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                Disability (significant, persistent or permanent)
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "10px",
                }}
              >
                •
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                Congenital anomaly
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "10px",
                }}
              >
                •
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                Report intervention to prevent permanent impairment or damage
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "9px",
                  fontFamily: "Helvetica-Bold",
                  justifyContent: "flex-start",
                  paddingLeft: "15px",
                }}
              >
                NOTE : Serious/Adverse Event following immunization can also be
                reported in Serious AEFI case Notification

              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "9px",
                  fontFamily: "Helvetica-Bold",
                  justifyContent: "flex-start",
                  paddingLeft: "50px",
                }}
              >

                Form available on {" "}<Link src={"http://www.ipc.gov.in"}>http://www.ipc.gov.in</Link>
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "9px",
                  fontFamily: "Helvetica-Bold",
                  paddingLeft: "5px",
                }}
              >
                B. Who can report?
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                  paddingLeft: "15px",
                }}
              >
                All healthcare professionals (Clinicians, Dentists, Pharmacists
                and Nurse etc.) can report adverse drug reactions
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "9px",
                  fontFamily: "Helvetica-Bold",
                  paddingLeft: "5px",
                }}
              >
                C. Where to report?
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                  paddingLeft: "15px",
                }}
              >
                Duly filled in Suspected Adverse Drug Reaction Reporting Form
                can be sent to the nearest Adverse Drug Reaction Monitoring
                Centre (AMC) or
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                  paddingLeft: "15px",
                }}
              >
                directly to the National Coordination Centre
                (NCC) for PvPI.
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                  paddingLeft: "15px",
                }}
              >

                <Text style={{ fontFamily: "Helvetica-Bold" }}>
                  Call on Helpline (Toll Free) 1800 180 3024
                </Text>{" "}
                to report ADRs or directly mail this filled form to
                {" "}<Link src={"pvpi.ipc@gov.in"}>pvpi.ipc@gov.in</Link>
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                  paddingLeft: "15px",
                }}
              >
                A list of nationwide AMCs is available at :
                http://www.ipc.gov.in, http://www.ipc.gov.in/PvPI/pv_home.html
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "9px",
                  fontFamily: "Helvetica-Bold",
                  paddingLeft: "5px",
                }}
              >
                D. What happens to the submitted information?
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "8px",
                }}
              >
                •
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                Information provided in this form is handled in strict
                confidence. The causality assessment is carried out at AMCs by
                using WHO-UMC scale.
              </Text>
            </View>



            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "10px",
                }}
              >

              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                The analyzed forms are forwarded to the
                NCC-PvPI through ADR database. Finally the data is analyzed and
                forwarded to the Global
              </Text>
            </View>





            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "10px",
                }}
              >

              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                Pharmacovigilance Database managed by
                WHO Uppsala Monitoring Centre in Sweden.
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "8px",
                }}
              >
                •
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                The reports are periodically reviewed by the NCC-PvPI. The information generated on the basis of these reports helps in continuous
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "12px",
                }}
              >

              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                assessment of the benefit-risk ratio of medicines.
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "8px",
                }}
              >
                •
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                The Signal Review Panel of PvPI reviews the data and suggests any interventions that may be required.
              </Text>
            </View>


            <View style={styles.StaticContent}>
              <Text
                style={{
                  fontSize: "9px",
                  fontFamily: "Helvetica-Bold",
                  paddingLeft: "5px",
                }}
              >
                E. Mandatory fields for suspected ADR Reporting Form (*)
              </Text>
            </View>

            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "10px",
                }}
              >
                •
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                Patient initials, age at onset of reaction, reaction term(s), date of onset of reaction, suspected medication(s) & reporter information.
              </Text>
            </View>


          </View>
          <View style={{ border: "0.5px solid black" }}>
            <View>
              <Text
                style={{
                  fontSize: "10px",
                  fontFamily: "Times-Bold",
                  color: "#00008B",
                  paddingBottom: "5px",
                  paddingLeft: "100px",

                }}
              >
                For Adverse Drug Reaction Reporting Tools
              </Text>

            </View>


            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "100px",
                }}
              >
                •
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica-Bold",
                  justifyContent: "flex-start",
                }}
              >
                E-mail :{" "}<Link src={"pvpi.ipc@gov.in"}>pvpi.ipc@gov.in</Link>
              </Text>
            </View>



            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "100px",
                }}
              >
                •
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica-Bold",
                  justifyContent: "flex-start",
                }}
              >
                PvPI Helpline (Toll Free) : 1800 180 3024
              </Text>

              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica",
                  justifyContent: "flex-start",
                }}
              >
                (9:00 AM to 5:30 PM, Monday-Friday)
              </Text>
            </View>



            <View style={styles.StaticContent}>
              <Text
                style={{
                  marginHorizontal: 8,
                  fontSize: "10px",
                  justifyContent: "flex-start",
                  paddingLeft: "100px",
                }}
              >
                •
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Helvetica-Bold",
                  justifyContent: "flex-start",
                }}
              >
                ADR Mobile App : “ADRPvPI”
              </Text>
            </View>

          </View>
        </Page>
      </Document>
    );
  };

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
};
