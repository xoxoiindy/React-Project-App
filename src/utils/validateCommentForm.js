

export const validateCommentForm = (values) => {
    const errors = {}

    if (!values.rating) {
        errors.rating = 'Required';
    }

    if (!values.author.length) {
        errors.author = 'Must be at least 2 characters.';
    } else if (values.values.author.length > 15) {
        errors.authors = 'Must be 15 characters or less';
    }
    return errors;
};