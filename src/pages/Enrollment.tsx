


// import React, { ChangeEvent, useState } from "react";
// import Form from "../component/Form";


// export interface Enrolldata {
//     SelectCourse: string,
//     PaidFees: string,
//     CourseFees: string,
//     balancedfees: string,
//     incomeamount: string,
//     transactionid: string,
//     userid: string,
//     revenuecategoryid: string,
// }

// const Enroll: React.FC = () => {
//     const [Enroll, SetEnroll] = useState<Enrolldata>({
//         SelectCourse: '',
//         PaidFees: '',
//         CourseFees: '',
//         balancedfees: '',
//         incomeamount: '',
//         transactionid: '',
//         userid: '',
//         revenuecategoryid: ''
//     })

//     const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//         SetEnroll({
//             ...Enroll,
//             [e.target.name]: e.target.value,
//         });
//     };

//     // const handleChangeInput=(e: { target: { value: any; }; }) => setName(e.target.value)}

//     const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         e.preventDefault();
//         alert("submit successfully..")
//     };
   

//     return (

//         <div className="container pb-5">
//             <div className="row justify-content-center mb-5 pb-5">
//                 <div className=" col-6 mb-3 pb-5" >
//                     <Form heading='Enrollment Form'
//                         button={{ type: "submit", onClick: handleSubmit, text: "submit" }}

//                         textInputs={[
//                             {
//                                 type: 'text',
//                                 value: 'Enroll.SelectCourse',
//                                 label: "Select coure",
//                                 name: "SelectCourses",
//                                 onchange: handleChangeInput,
//                                 placeholder: ""
//                             },
//                             {
//                                 type: 'number',
//                                 value: 'Enroll.PaidFees',
//                                 label: 'Paid Fees',
//                                 name: 'PaidFees',
//                                 onchange: handleChangeInput,
//                                 placeholder: ''
//                             },
//                             {
//                                 type: 'number',
//                                 value: ' Enroll.incomeamount || Enroll.PaidFees',
//                                 label: 'Income Amount',
//                                 name: 'incomeamount',
//                                 onchange: handleChangeInput,
//                                 placeholder: ''
//                             },
//                             {
//                                 type: 'text',
//                                 value: 'Enroll.userid',
//                                 label: 'User Id',
//                                 name: 'userid',
//                                 onchange: handleChangeInput,
//                                 placeholder: ''
//                             },


//                             {
//                                 type: 'number',
//                                 value: 'Enroll.CourseFees',
//                                 label: 'Course Fees',
//                                 name: 'CourseFees',
//                                 onchange: handleChangeInput,
//                                 placeholder: ''
//                             },
//                             {
//                                 type: 'number',
//                                 value: 'Enroll.balancedfees',
//                                 label: 'Balanced Fees',
//                                 name: 'balancedfees',
                               
//                                 onchange: handleChangeInput,
//                                 placeholder: ''
//                             },
//                             {
//                                 type: 'number',
//                                 value: 'Enroll.transactionid',
//                                 label: 'Transaction Id',
//                                 name: 'transactionid',
//                                 onchange: handleChangeInput,
//                                 placeholder: ''
//                             },
//                             {
//                                 type: 'text',
//                                 value: 'Enroll.revenuecategoryid',
//                                 label: 'Revenue Category Id',
//                                 name: 'revenuecategoryid',
//                                 onchange: handleChangeInput,
//                                 placeholder: ''
//                             }

//                         ]} placeholder={''} />


//                 </div>
//             </div>
//         </div>



//     )
// }

// export default Enroll;

import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from '../component/Form'
import { ICard } from '../modals/FormModal'

export interface Enrolldata {
    SelectCourse: string,
    PaidFees: string,
    CourseFees: string,
    balancedfees: string,
    incomeamount: string,
    transactionid: string,
    userid: string,
    revenuecategoryid: string,
}

const EnrollmentForm: React.FC<ICard> = (props) => {

    const [Enroll, SetEnroll] = useState<Enrolldata>({

        SelectCourse: props.title,
        PaidFees: '',
        CourseFees: "",
        balancedfees: '',
        incomeamount: '',
        transactionid: '412',
        userid: '44',
        revenuecategoryid: '987'
    });

    useEffect(() => {
        const coursefees = parseInt(Enroll.CourseFees) || 0;
        const paidfees = parseInt(Enroll.PaidFees) || 0;
        const balncefee = coursefees - paidfees;


        SetEnroll((Enroll) => ({
            ...Enroll,
            balancedfees: balncefee.toString()
        }))
    }, [Enroll.PaidFees,])

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetEnroll({
            ...Enroll,
            [e.target.name]: e.target.value,
        });
    };


    const FormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        alert("submit");
    }

    const FormReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        alert("reset");
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <>
                <button className="btn btn-primary" onClick={handleShow}>buy Now</button>
            {/* <footer className="card-footer justify-content-center">
            </footer>  */}
            
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton className='bg-dark text-light'>
                    <Modal.Title>Enrollment Form</Modal.Title>
                </Modal.Header>
                  <Modal.Body className='pt-0 bg-secondary text-light'>
                        <div className="container pb-5">
                            <div className="row justify-content-center mb-5 pb-5">
                                <div className=" col-6 mb-3 pb-5" >


                                    <Form heading={''} button={{ type: 'submit', onClick: FormSubmit, text: "Submit" }}
                                    textInputs={[
                                        {
                                            type: 'text',
                                            value: Enroll.SelectCourse,
                                            label: 'Select Course',
                                            name: 'SelectCourse',
                                            onchange: handleChangeInput,
                                            placeholder: ''
                                        },
                                        {
                                            type: 'number',
                                            value: Enroll.PaidFees,
                                            label: 'Paid Fees',
                                            name: 'PaidFees',
                                            onchange: handleChangeInput,
                                            placeholder: ''
                                        },
                                        {
                                            type: 'number',
                                            value: Enroll.incomeamount || Enroll.PaidFees,
                                            label: 'Income Amount',
                                            name: 'incomeamount',
                                            onchange: handleChangeInput,
                                            placeholder: ''
                                        },
                                        {
                                            type: 'text',
                                            value: Enroll.userid,
                                            label: 'User Id',
                                            name: 'userid',
                                            onchange: handleChangeInput,
                                            placeholder: ''
                                        }
                                    ]} placeholder={''} />
                                </div>

                                <div className='col-6 mb-4'>
                                    <Form heading={''} button={{ type: 'submit', onClick: FormReset, text: "Reset" }}
                                    textInputs={[
                                        {
                                            type: 'number',
                                            value: Enroll.CourseFees,
                                            label: 'Course Fees',
                                            name: 'CourseFees',
                                            onchange: handleChangeInput,
                                            placeholder: ''
                                        },
                                        {
                                            type: 'number',
                                            value: Enroll.balancedfees,
                                            label: 'Balanced Fees',
                                            name: 'balancedfees',
                                            onchange: handleChangeInput,
                                            placeholder: ''
                                        },
                                        {
                                            type: 'number',
                                            value: Enroll.transactionid,
                                            label: 'Transaction Id',
                                            name: 'transactionid',
                                            onchange: handleChangeInput,
                                            placeholder: ''
                                        },
                                        {
                                            type: 'text',
                                            value: Enroll.revenuecategoryid,
                                            label: 'Revenue Category Id',
                                            name: 'revenuecategoryid',
                                            onchange: handleChangeInput,
                                            placeholder: ''
                                        }
                                    ]} placeholder={''} />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                
            </Modal>       


            </>
       
    );
}

export default EnrollmentForm;

