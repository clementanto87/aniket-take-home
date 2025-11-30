// Task 3: Event Handler for Review Created

interface ReviewEvent {
    id: string;
    type: string;
    payload: {
        review: {
            id: string;
            productId: string;
            [key: string]: any;
        };
    };
}

const mockEmailService = {
    send: (email: string, subject: string, body: string): Promise<boolean> => {
        console.log(`Sending email to ${email}: ${subject}`);
        return Promise.resolve(true);
    }
};

/**
 * Handles the 'review:created' event.
 * @param {ReviewEvent} event - The event object
 */
export async function handleReviewCreated(event: ReviewEvent): Promise<void> {
    // TODO: Implement event handling
    // 1. Validate event payload
    // 2. Transform data
    // 3. Call mockEmailService
    // 4. Ensure idempotency
}
