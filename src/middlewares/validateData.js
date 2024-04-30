export const validateTaskData = (taskData) => {
    // Check if title is not empty string
    if (!taskData.title) {
        throw new Error('Title is required');
    }

    // Check if Description is not empty string
    if (!taskData.description) {
        throw new Error('Description is required');
    }

    // Check if creationDate is a valid date
    if (taskData.creationDate && isNaN(Date.parse(taskData.creationDate))) {
        throw new Error('Invalid creation date');
    }

    // Check if status is one of the allowed values
    const allowedStatus = ['pending', 'in progress', 'completed'];
    if (!allowedStatus.includes(taskData.status)) {
        throw new Error('Invalid status');
    }
};