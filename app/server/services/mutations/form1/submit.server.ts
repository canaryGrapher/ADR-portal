const modelValues = [
    {
        name: "Form1Page1",
        subForms: []
    },
    {
        name: "Form1Page2",
        subForms: []
    },
    {
        name: "Form1Page3",
        subForms: [
            {
                name: "Form1Page3a",
                subForms: []
            },
            {
                name: "Form1Page3b",
                subForms: [
                    {
                        name: "form1page3b1",
                        subForms: []
                    },
                    {
                        name: "form1page3b2",
                        subForms: []
                    },
                    {
                        name: "form1page3b3",
                        subForms: []
                    },
                    {
                        name: "form1page3b4",
                        subForms: []
                    },
                    {
                        name: "form1page3b5",
                        subForms: []
                    }
                ]
            },
            {
                name: "Form1Page3c",
                subForms: []
            },
            {
                name: "Form1Page3d",
                subForms: []
            },
            {
                name: "Form1Page3e",
                subForms: []
            },
            {
                name: "Form1Page3f",
                subForms: []
            },
        ]
    },
    {
        name: "Form1Page4",
        subForms: []
    }
]

const submitAction = async () => {

}


// loop through each item in the array and 
// if the subform array is not empty, go to the that model
// check each model for isComplete and if all are true, only then run the 
// submit function
const loopThrough = async (modelsArr: any[]) => {
    // if ()
}

export { modelValues }