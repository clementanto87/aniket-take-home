# Node.js Coding Challenge

Welcome to the coding challenge! This repository contains a basic Node.js/Express setup. Your task is to implement several features as described below.

## Setup

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the server:
    ```bash
    npm start
    ```
    Or for development with auto-restart:
    ```bash
    npm run dev
    ```
3.  Run tests:
    ```bash
    npm test
    ```

## Tasks

### Task 1: Implement Reviews API
**File:** `src/routes/reviews.ts`

Implement the following endpoints:
1.  `POST /reviews`: Create a new review.
    *   **Payload:** `{ productId: string, rating: number (1-5), comment: string }`
    *   **Validation:** `productId` is required, `rating` must be an integer between 1 and 5, `comment` is optional but if present must not exceed 500 characters.
    *   **Storage:** Store reviews in an in-memory data structure (e.g., an array).
    *   **Response:** Return the created review object with a generated `id` and timestamp.
2.  `GET /reviews`: Retrieve reviews.
    *   **Query Params:** `productId` (optional). If provided, return only reviews for that product.
    *   **Response:** Array of review objects.

### Task 2: Review Statistics Aggregator
**File:** `src/services/statsService.ts`

Implement the `getReviewSummary(productId)` function.
*   Calculate the average rating, total number of reviews, and highest rating for a given `productId`.
*   Handle the case where there are no reviews (return 0 for counts/averages).
*   Ensure the function is clean and testable.

### Task 3: Event Handler for Review Created
**File:** `src/events/reviewHandler.ts`

Implement `handleReviewCreated(event)`.
*   Simulate an event-driven architecture where this function is called when a review is created.
*   **Steps:**
    1.  Validate the event payload.
    2.  Transform the data if necessary.
    3.  Call the mock email service (provided in the file) to simulate sending a notification.
*   Ensure the logic is idempotent (processing the same event ID twice should not send two emails).

### Task 4: Input Validation & Error Handling
**File:** `src/utils/validation.ts` & `src/utils/errors.ts`

*   Implement reusable validation functions (e.g., `validateEmail`, `validateRequired`).
*   Create structured error classes (e.g., `ValidationError`, `NotFoundError`).
*   Integrate this validation into your API endpoints from Task 1.

### Task 5: Pagination Logic
**File:** `src/routes/reviews.ts`

Update `GET /reviews` to support pagination.
*   **Query Params:** `page` (default 1), `pageSize` (default 10).
*   Implement slicing logic to return the correct subset of reviews.
*   Validate `page` and `pageSize` to ensure they are positive integers.

## Testing

*   Unit tests are set up in the `tests` directory.
*   Please add/update tests for your implementations to ensure they work as expected.
