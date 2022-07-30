import { useState } from "react";
import {Button, Modal, ModalHeader, ModalBody, FormGroup, Label} from 'reactstrap';
import {Formik, Field, Form, ErrorMessage } from 'formik';
import { validateCommentForm } from "../../utils/validateCommentForm";

const CommentForm = ({ campsiteId }) => {
    const [modalOpen, setModalOpen] = useState(false);
     const HandleSubmit = (values) => {
        const comment =  {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText
        };
        setModalOpen(false);
     };

    return (
        <>
            <Button onClick={() => setModalOpen(true)}>
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add Comment
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues = {{
                        rating: 'undefined', 
                        author: 'handleSubmit', 
                        commentText: ''
                        }}
                        
                        onSubmit = {HandleSubmit} >
                    
                    </Formik>
                        <FormGroup>
                            <Label htmlFor="rating">
                                Rating
                            </Label>
                            <Field
                                name='rating'
                                as='select'
                                className='form-control'
                            >
                                <option>Select...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Field>
                        </FormGroup>
                        <FormGroup htmlFor="author">
                            <Label>
                                Your Name
                            </Label>
                            <Field
                                name='author'
                                placeholder='Your Name'
                                className='form-control'
                            />
                        </FormGroup>
                        
                        <FormGroup htmlFor="commentText">
                            <Label>
                                Comment
                            </Label>
                            <Field
                                name='commentText'
                                as='textarea'
                                rows='12'
                                className='form-control'
                            />
                        </FormGroup>
                        <Field
                                name='commentText'
                                as='textarea'
                                rows='12'
                                className='form-control'
                        />
                </ModalBody>

            </Modal>
        
        </>

    )
};

export default CommentForm;
