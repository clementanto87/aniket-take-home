// Task 3: Event Handler for Review Created

const mockEmailService = {
    send: (email, subject, body) => {
        console.log(`Sending email to ${email}: ${subject}`);
        return Promise.resolve(true);
    }
};

/**
 * Handles the 'review:created' event.
 * @param {Object} event - The event object { id, type, payload: { review } }
 */
async function handleReviewCreated(event) {
    // TODO: Implement event handling
    // 1. Validate event payload
    // 2. Transform data
    // 3. Call mockEmailService
    // 4. Ensure idempotency
}

module.exports = { handleReviewCreated };
