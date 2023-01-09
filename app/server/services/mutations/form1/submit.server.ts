import Forms1Model from "~/models/form1.model"

const submitAction = async (user: string, formID: string) => {
    const form1Pointer = await Forms1Model.findOne({ user: user, _id: formID })
    if (!form1Pointer) {
        throw new Error("Form not found")
    }
    const Form1Page1 = form1Pointer.form1Page1?.isComplete;
    const Form1Page2 = form1Pointer.form1Page2?.isComplete;
    const Form1Page3 = form1Pointer.form1Page3;
    const form1page3a = Form1Page3?.Form1Page3a?.isComplete;
    const form1page3b2 = Form1Page3?.Form1Page3b?.form1page3b2?.isComplete;
    const form1page3b3 = Form1Page3?.Form1Page3b?.form1page3b3?.isComplete;
    const form1page3d = Form1Page3?.Form1Page3d?.isComplete;
    const form1page3e = Form1Page3?.Form1Page3e?.isComplete;
    const Form1Page4 = form1Pointer.form1Page4?.isComplete;
    if (Form1Page1 && Form1Page2 && form1page3a && form1page3d && form1page3e && Form1Page4 && form1page3b3 && form1page3b2) {
        form1Pointer.isComplete = true;
        await form1Pointer.save();
        return {
            status: "success",
            message: "Form submitted successfully"
        }
    } else {
        return {
            status: "error",
            message: "Form not complete"
        }
    }
}

const completedForms = async (user: string, formID: string) => {
    const form1Pointer = await Forms1Model.findOne({ user: user, _id: formID })
    if (!form1Pointer) {
        throw new Error("Form not found")
    }
    const Form1Page1 = form1Pointer.form1Page1?.isComplete;
    const Form1Page2 = form1Pointer.form1Page2?.isComplete;
    const Form1Page3 = form1Pointer.form1Page3;
    const form1page3a = Form1Page3?.Form1Page3a?.isComplete;
    const form1page3b2 = Form1Page3?.Form1Page3b?.form1page3b2?.isComplete;
    const form1page3b3 = Form1Page3?.Form1Page3b?.form1page3b3?.isComplete;
    const form1page3d = Form1Page3?.Form1Page3d?.isComplete;
    const form1page3e = Form1Page3?.Form1Page3e?.isComplete;
    const Form1Page4 = form1Pointer.form1Page4?.isComplete;

    return {
        Form1Page1: Form1Page1 !== undefined ? Form1Page1 : false,
        Form1Page2: Form1Page2 !== undefined ? Form1Page2 : false,
        form1page3a: form1page3a !== undefined ? form1page3a : false,
        form1page3b2: form1page3b2 !== undefined ? form1page3b2 : false,
        form1page3b3: form1page3b3 !== undefined ? form1page3b3 : false,
        form1page3d: form1page3d !== undefined ? form1page3d : false,
        form1page3e: form1page3e !== undefined ? form1page3e : false,
        Form1Page4: Form1Page4 !== undefined ? Form1Page4 : false
    }
}

export { submitAction, completedForms }